//model
import User from "../../models/User/user.models.js";
import Provider from "../../models/Provider/provider.models.js";

//cloudinary
import { imageUpload } from "../../utils/cloudinary/imageHandler.utils.js";
import { deleteImage } from "../../utils/cloudinary/imageHandler.utils.js";
//file system
import fs from "fs";


//Get complete Provider Details
export const getProviderData = async(request, response)=>{
    try{
        const loggedIn = request.loggedIn;
        const userId = request.params.id;
        const user = await User.findById(userId);
        if (!user) {
            return response.status(404).json({ error: "User not found" });
        }
        const email = user.email;
        const provider = await Provider.findOne({ user: userId });
        if (!provider) {
            return response.status(404).json({ error: "Provider details not found" });
        }
        const providerData = {
            ...provider.toObject(),
            phoneNumber: loggedIn ? provider.phoneNumber : "", 
            email: loggedIn ? email : "", 
        };

        return response.status(200).json(providerData);
    }catch(error){
        return response.status(500).json({error: error.message, msg: "Could not get Provider"});
    }
}

//update provider document
export const updateProviderData = async(request, response)=>{
    try{
        const userId = request.user.id;
        const provider = await Provider.findById(request.params.id);
        if (!provider) {
            return response.status(400).json({ msg: "Provider not found" });
        }

        const providersUserId = provider.user;
        if(providersUserId != userId){
            return response.status(400).json({msg: "Not authorized"});
        }

        let updates = request.body;
        let files = request.files || {};

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

        if (files.providerImages) {
            const providerImageFiles = files.providerImages;

            if (!provider) {
                return response.status(400).json({ msg: "Provider not found" });
            }

            const currentImages = provider.providerImages || [];
            const totalImages = currentImages.length + providerImageFiles.length;

            if (totalImages > 5) {
                providerImageFiles.forEach(file => {
                    if (fs.existsSync(file.path)) {
                        fs.unlinkSync(file.path);
                    }
                });
                return response.status(400).json({ msg: `Cannot upload more than ${5 - currentImages.length} images` });
            }

            const uploadedProviderImages = [];

            try {
                const providerImageUrls = await Promise.all(
                    providerImageFiles.map(async (file) => {
                        const localImagePath = file.path;
                        const providerImage = await imageUpload(localImagePath, "provider_images");
                        uploadedProviderImages.push(providerImage);
                        return {
                            url: providerImage.url || "",
                            public_id: providerImage.public_id || ""
                        };
                    })
                );
                updates.providerImages = [...currentImages, ...providerImageUrls];
            } catch (error) {
                // Clean up successfully uploaded images if an error occurs
                await Promise.all(uploadedProviderImages.map(img => deleteImage(img.public_id)));
                return response.status(500).json({ error: error.message, msg: "Could not upload provider images. All successfully uploaded images have been deleted." });
            }
        }
        

        const updatedProvider = await Provider.findByIdAndUpdate(request.params.id, updates, { new: true, runValidators: true });

        if (!updatedProvider) {
            return response.status(400).json({msg: "Provider not found"});
        }

        return response.status(200).json(updatedProvider);
    }catch(error){
        return response.status(500).json({error:error.message, msg:"Could not update provider data"});
    }
}
export const deleteProviderImages = async(request, response)=>{
    try{
        const userId = request.user.id;
        const provider = await Provider.findById(request.params.id);
        if (!provider) {
            return response.status(400).json({ msg: "Provider not found" });
        }

        const providersUserId = provider.user;
        if(providersUserId != userId){
            return response.status(400).json({msg: "Not authorized"});
        }
        
        const {public_id} = request.body;
        const {imageType} = request.query;
        const providerId = request.params.id;
        const providerData = await Provider.findById(providerId);
        if (!providerData) {
            return response.status(400).json({msg: "Provider not found"});
        }
        let updates = {};
        if(imageType=="logoImage"){
            if(public_id===providerData.logoImage.public_id){
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
            if(public_id===providerData.coverImage.public_id){
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
        else if(imageType=="providerImages"){
            const providerImages = providerData.providerImages.filter(
                (providerImage) => providerImage.public_id !== public_id
            );

            const imageToDelete = providerData.providerImages.find(
                (providerImage) => providerImage.public_id === public_id
            );

            if (imageToDelete) {
                await deleteImage(public_id);
                updates = { providerImages };
            } else {
                return response.status(400).json({ error: error.message, msg: "Image not found" });
            }
        }
        else{
            return response.status(400).json({ error: error.message, msg: "Image type is not valid"});
        }

        const updatedProvider = await Provider.findByIdAndUpdate(request.params.id, updates, { new: true, runValidators: true });
        if (!updatedProvider) {
            return response.status(400).json({msg: "Provider not found"});
        }

        return response.status(200).json(updates);
    }catch(error){
        return response.status(500).json({error:error.message, msg:"Could not delete provider images"});
    }
}