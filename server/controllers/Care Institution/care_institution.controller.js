import User from "../../models/User/user.models.js";
import CareInstitution from "../../models/Care Institution/careInstitution.models.js";
import InstitutionMember from "../../models/Care Institution/Member Details/institutionMember.models.js";
import CareInstitutionCities from '../../models/Care Institution/Filter Options/careInstitutionCities.models.js';
import OrganizationType from '../../models/Care Institution/Filter Options/organizationType.models.js';
import KarunaiCategory from '../../models/Care Institution/Filter Options/karunaiCategory.models.js';

//cloudinary
import { imageUpload } from "../../utils/cloudinary/imageHandler.utils.js";
import { deleteImage } from "../../utils/cloudinary/imageHandler.utils.js";
//file system
import fs from "fs";
//utils
import config from "../../utils/ENV/env.utils.js";
import { detectDelimiter } from "../../utils/Store CSV Data/detectDelimiter.js";

import csv from "csvtojson";

//Get complete Care Institution Details
export const getCareInstituteData = async(request, response)=>{
    try{
        const loggedIn = request.loggedIn;
        const userId = request.params.id;
        const user = await User.findById(userId);
        if (!user) {
            return response.status(404).json({ msg: "User not found" });
        }
        const email = user.email;
        const careInstitution = await CareInstitution.findOne({ user: userId });
        if (!careInstitution) {
            return response.status(404).json({ msg: "Care institution details not found" });
        }
        const careInstitutionData = {
            ...careInstitution.toObject(),
            phoneNumber: loggedIn ? careInstitution.phoneNumber : "", 
            email: loggedIn ? email : "", 
        };

        return response.status(200).json(careInstitutionData);
    }catch(error){
        return response.status(500).json({error: error.message, msg: "Could not get Care Institution"});
    }
}

//update care institution document
export const updateData = async(request, response)=>{
    try{
        const userId = request.user._id;
        const careInstitution = await CareInstitution.findById(request.params.id);
        if (!careInstitution) {
            return response.status(404).json({ msg: "Care Institution not found" });
        }
    
        if (!careInstitution.user.equals(userId)) {
            return response.status(403).json({ msg: "Not authorized" });
        }

        let updates = request.body;
        let files = request.files || {};

        if (updates.city) {
            const cityExists = await CareInstitutionCities.findOne({ name: updates.city });
            if (!cityExists) {
                await CareInstitutionCities.create({ name: updates.city });
            }
        }

        if (updates.organizationType) {
            const organizationType = updates.organizationType.trim();
            if (['Orphanage', 'Old Age Home', 'Rehabilitation Center'].includes(organizationType)) {
                const orgTypeExists = await OrganizationType.findOne({ name: organizationType });
                if (!orgTypeExists) {
                    await OrganizationType.create({ name: organizationType });
                }
            } else{
                return response.status(400).json({
                    msg: "Invalid organization type provided. Valid options are 'Orphanage', 'Old Age Home', or 'Rehabilitation Center'."
                });
            }
        }

        if (updates.karunaiNeeded) {
            const karunaiCategories = Array.isArray(updates.karunaiNeeded) ? updates.karunaiNeeded : [updates.karunaiNeeded];
            await Promise.all(
                karunaiCategories.map(async category => {
                    const karunaiCategoryExists = await KarunaiCategory.findOne({ name: category });
                    if (!karunaiCategoryExists) {
                        await KarunaiCategory.create({ name: category });
                    }
                })
            );
        }

        if(files.logoImage){
            //store logo image to cloudinary and store link in DB
            const logoImageLocalPath = request.files?.logoImage[0]?.path;
            const logoImage = await imageUpload(logoImageLocalPath, "logo_Images");
            updates = {
                ...updates,
                logoImage: {
                    url: logoImage?.url || "",
                    public_id: logoImage?.public_id || ""
                }
            };
        }

        if(files.coverImage){
            //store cover image to cloudinary and store link in DB
            const coverImageLocalPath = request.files?.coverImage[0]?.path;
            const coverImage = await imageUpload(coverImageLocalPath, "cover_images");
            updates = {
                ...updates,
                coverImage: {
                    url: coverImage?.url || "",
                    public_id: coverImage?.public_id || ""
                }
            };
        }

        if (files.careInstituteImages) {
            const careInstituteImageFiles = files.careInstituteImages;
            const careInstitution = await CareInstitution.findById(request.params.id);

            const currentImages = careInstitution.careInstituteImages || [];
            const totalImages = currentImages.length + careInstituteImageFiles.length;

            if (totalImages > 5) {
                careInstituteImageFiles.forEach(file => {
                    if (fs.existsSync(file.path)) {
                        fs.unlinkSync(file.path);
                    }
                });
                return response.status(400).json({ msg: `Cannot upload more than ${5 - currentImages.length} images` });
            }

            const uploadedCareInstituteImages = [];

            try {
                const careInstituteImageUrls = await Promise.all(
                    careInstituteImageFiles.map(async (file) => {
                        const localImagePath = file.path;
                        const careInstituteImage = await imageUpload(localImagePath, "care_institute_images");
                        uploadedCareInstituteImages.push(careInstituteImage);
                        return {
                            url: careInstituteImage.url || "",
                            public_id: careInstituteImage.public_id || ""
                        };
                    })
                );
                updates.careInstituteImages = [...currentImages, ...careInstituteImageUrls];
            } catch (error) {
                // Clean up successfully uploaded images if an error occurs
                await Promise.all(uploadedCareInstituteImages.map(img => deleteImage(img.public_id)));
                return response.status(500).json({ error: error.message, msg: "Could not upload care institute images. All successfully uploaded images have been deleted." });
            }
        }
        

        const updatedCareInstitution = await CareInstitution.findByIdAndUpdate(request.params.id, updates, { new: true, runValidators: true });

        if (!updatedCareInstitution) {
            return response.status(400).json({msg: "Care Institution not found"});
        }

        return response.status(200).json(updatedCareInstitution);
    }catch(error){
        return response.status(500).json({error:error.message, msg:"Could not update care Institution data"});
    }
}

export const deleteCareInstitutionImages = async(request, response)=>{
    try{
        const userId = request.user._id;
        const careInstitution = await CareInstitution.findById(request.params.id);
        if (!careInstitution) {
            return response.status(404).json({ msg: "Care Institution not found" });
        }
    
        if (!careInstitution.user.equals(userId)) {
            return response.status(403).json({ msg: "Not authorized" });
        }

        const {public_id} = request.body;
        const {imageType} = request.query;
        const careId = request.params.id;
        const careInstitutionData = await CareInstitution.findById(careId);
        if (!careInstitutionData) {
            return response.status(400).json({msg: "Care Institution not found"});
        }
        let updates = {};
        if(imageType=="logoImage"){
            if(public_id===careInstitutionData.logoImage.public_id){
                await deleteImage(public_id);
                updates = {
                    logoImage: {
                        url: "",
                        public_id: ""
                    }
                };
            }else{
                return response.status(400).json({error: error.message, msg: "Image not found"});
            }
        }
        else if(imageType=="coverImage"){
            if(public_id===careInstitutionData.coverImage.public_id){
                await deleteImage(public_id);
                updates = {
                    coverImage: {
                        url: "",
                        public_id: ""
                    }
                };
            }else{
                return response.status(400).json({error: error.message, msg: "Image not found"});
            }
        }
        else if(imageType=="careInstituteImages"){
            const careInstituteImages = careInstitutionData.careInstituteImages.filter(
                (careImage) => careImage.public_id !== public_id
            );

            const imageToDelete = careInstitutionData.careInstituteImages.find(
                (careImage) => careImage.public_id === public_id
            );

            if (imageToDelete) {
                await deleteImage(public_id);
                updates = { careInstituteImages };
            } else {
                return response.status(400).json({ error: error.message, msg: "Image not found" });
            }
        }
        else{
            return response.status(400).json({ error: error.message, msg: "Image type is not valid"});
        }

        const updatedCareInstitution = await CareInstitution.findByIdAndUpdate(request.params.id, updates, { new: true, runValidators: true });
        if (!updatedCareInstitution) {
            return response.status(400).json({msg: "Care Institution not found"});
        }

        return response.status(200).json(updates);
    }catch(error){
        return response.status(500).json({error:error.message, msg:"Could not delete care institute images"});
    }
}

export const getAllCareInstitutions = async (request, response) => {
    try {
        const loggedIn = request.loggedIn;

        const careInstitutions = await CareInstitution.find().populate('user', 'email');

        const data = careInstitutions.map(institute => ({
            organizationId: institute.organizationId,
            organizationName: institute.organizationName,
            organizationType: institute.organizationType,
            karunaiNeeded: institute.karunaiNeeded,
            address: `${institute.address}, ${institute.city}, ${institute.state}, ${institute.country}, ${institute.pincode}`,
            contactInfo: loggedIn ? { phoneNumber: institute.phoneNumber, email: institute.user.email } : { phoneNumber: "", email: "" },
            coverImage: institute.coverImage || ""
        }));

        return response.status(200).json(data);
    } catch (error) {
        return response.status(500).json({ error: error.message, msg: "Could not get Care Institutions" });
    }
};

export const searchCareInstitutions = async (request, response) => {
    try {
        const loggedIn = request.loggedIn;

        const { name, city, address } = request.query;
        const query = {};
        
        if (name) query.organizationName = { $regex: name, $options: 'i' };
        if (city) query.city = { $regex: city, $options: 'i' };
        if (address) query.address = { $regex: address, $options: 'i' };
        
        const careInstitutions = await CareInstitution.find(query).populate('user', 'email');
        
        const data = careInstitutions.map(institute => ({
            organizationId: institute.organizationId,
            organizationName: institute.organizationName,
            organizationType: institute.organizationType,
            karunaiNeeded: institute.karunaiNeeded,
            address: `${institute.address}, ${institute.city}, ${institute.state}, ${institute.country}, ${institute.pincode}`,
            contactInfo: loggedIn ? { phoneNumber: institute.phoneNumber, email: institute.user.email } : { phoneNumber: "", email: "" },
            coverImage: institute.coverImage || ""
        }));
        
        return response.status(200).json(data);
    } catch (error) {
        return response.status(500).json({ error: error.message, msg: "Could not search care institutions" });
    }
};

export const filterCareInstitutions = async (request, response) => {
    try {
        const loggedIn = request.loggedIn;

        const { city, organizationType, karunaiCategory } = request.query;
        const query = {};

        if (city) query.city = { $regex: city, $options: 'i' };
        if (organizationType) query.organizationType = organizationType;
        if (karunaiCategory) query.karunaiNeeded = { $in: [karunaiCategory] };

        const careInstitutions = await CareInstitution.find(query).populate('user', 'email');

        const data = careInstitutions.map(institute => ({
            organizationId: institute.organizationId,
            organizationName: institute.organizationName,
            organizationType: institute.organizationType,
            karunaiNeeded: institute.karunaiNeeded,
            address: `${institute.address}, ${institute.city}, ${institute.state}, ${institute.country}, ${institute.pincode}`,
            contactInfo: loggedIn ? { phoneNumber: institute.phoneNumber, email: institute.user.email } : { phoneNumber: "", email: "" },
            coverImage: institute.coverImage || ""
        }));

        return response.status(200).json(data);
    } catch (error) {
        return response.status(500).json({ error: error.message, msg: "Could not filter care institutions" });
    }
};

const normalizeKey = (key) => key.trim().toLowerCase().replace(/\s+/g, '');

const createHeaderMapping = (keys) => {
    const mapping = {
        'memberid': 'memberId',
        'firstname': 'firstName',
        'lastname': 'lastName',
        'gender': 'gender',
        'admissiondate': 'admissionDate',
        'healthstatus': 'healthStatus',
        'need': 'need',
        'dateofbirth': 'dateOfBirth',
        'educationlevel': 'educationLevel',
        'notes': 'notes'
    };

    return keys.reduce((acc, key) => {
        const normalizedKey = normalizeKey(key);
        if (mapping[normalizedKey]) {
            acc[key] = mapping[normalizedKey];
        }
        return acc;
    }, {});
};

const validateCSVData = (filePath, delimiter) => {
    const data = fs.readFileSync(filePath, 'utf8');
    const lines = data.split('\n').map(line => line.trim()).filter(line => line.length > 0);

    if (lines.length > 0) {
        const firstLine = lines[0];
        const keys = firstLine.split(delimiter).map(key => normalizeKey(key));
        const requiredKeys = ['memberid', 'firstname', 'lastname', 'gender', 'admissiondate', 'healthstatus', 'need'];
        const optionalKeys = ['dateofbirth', 'educationlevel', 'notes'];

        const allRequiredKeysPresent = requiredKeys.every(key => keys.includes(key));
        const allKeysValid = keys.every(key => requiredKeys.includes(key) || optionalKeys.includes(key));

        return allRequiredKeysPresent && allKeysValid;
    }
    return false;
};

const normalizeCSVData = (data, headerMapping) => {
    return data.map(row => {
        const normalizedRow = {};
        Object.keys(row).forEach(key => {
            const normalizedKey = headerMapping[key];
            if (normalizedKey) {
                normalizedRow[normalizedKey] = row[key];
            }
        });
        return normalizedRow;
    });
};

export const addInstituteMemberData = async (request, response) => {
    let filePath = "";
    try {
        if (!request.files || !request.files.memberDetailsCSVFile) {
            return response.status(400).json({ msg: "No file uploaded" });
        }

        const memberCsvFileLocalPath = request.files.memberDetailsCSVFile[0].path;
        filePath = memberCsvFileLocalPath;
        const delimiter = detectDelimiter(memberCsvFileLocalPath);

        //user verification
        const userId = request.user._id;
        const careInstitution = await CareInstitution.findById(request.params.id);
        if (!careInstitution) {
            fs.unlinkSync(memberCsvFileLocalPath);
            return response.status(404).json({ msg: "Care Institution not found" });
        }

        if (!careInstitution.user.equals(userId)) {
            fs.unlinkSync(memberCsvFileLocalPath);
            return response.status(403).json({ msg: "Not authorized" });
        }

        const validDataFormat = validateCSVData(memberCsvFileLocalPath, delimiter);
        if (!validDataFormat) {
            fs.unlinkSync(memberCsvFileLocalPath);
            return response.status(400).json({ msg: "Data format not valid" });
        }

        const jsonArray = await csv({ delimiter: delimiter }).fromFile(memberCsvFileLocalPath);
        const headerMapping = createHeaderMapping(Object.keys(jsonArray[0]));
        const normalizedData = normalizeCSVData(jsonArray, headerMapping);

        const membersData = normalizedData.map(member => ({
            careInstitution: request.params.id,
            ...member
        }));

        const result = await InstitutionMember.insertMany(membersData);
        if (!result) {
            fs.unlinkSync(memberCsvFileLocalPath);
            return response.status(500).json({ error: error.message, msg: "Error while inserting members" });
        }

        fs.unlinkSync(memberCsvFileLocalPath);

        return response.status(200).json({ members: membersData, msg: "Institution member details added successfully" });
    }catch (error) {
        if(filePath!==""){
            fs.unlinkSync(filePath);
        }
        return response.status(500).json({ error: error.message, msg: "Could not add institution member details" });
    }
};

export const getCareInstitutionMemberDetails = async(request, response)=>{
    try{
        const page = request.query.page || 1;
        const membersPerPage = 25;

        const careId = request.params.id;
        
        let members = await InstitutionMember.find({careInstitution: careId}).skip(membersPerPage*(page-1)).limit(membersPerPage);
        
        if(!members){
            return response.status(400).json({msg: `Members details not found on page ${page}`})
        }
        
        return response.status(200).json(members);
    }catch(error){
        return response.status(500).json({ error: error.message, msg: "Could not fetch member details" });
    }
}

export const getCareInstitutionFilterOptions = async (request, response) => {
    try {
        const { type, search } = request.query;

        if (!type || !['city', 'organizationType', 'karunaiCategory'].includes(type)) {
            return response.status(400).json({
                msg: "Filter type (city, organizationType, or karunaiCategory) must be specified."
            });
        }

        let distinctValues = [];
        const query = search ? { name: { $regex: search, $options: 'i' } } : {};

        if (type === 'city') {
            distinctValues = await CareInstitutionCities.find(query).select('name -_id');
        } else if (type === 'organizationType') {
            distinctValues = await OrganizationType.find(query).select('name -_id');
        } else if (type === 'karunaiCategory') {
            distinctValues = await KarunaiCategory.find(query).select('name -_id');
        }

        const values = distinctValues.map(item => item.name);

        return response.status(200).json(values);
    } catch (error) {
        return response.status(500).json({ error: error.message, msg: "Could not fetch filter options" });
    }
};
