import express from "express";

//controllers
import { deleteCareInstitutionImages, getCareInstituteData, updateData, getAllCareInstitutions, searchCareInstitutions, filterCareInstitutions, addInstituteMemberData, getCareInstitutionMemberDetails, getCareInstitutionFilterOptions } from "../../controllers/Care Institution/care_institution.controller.js";
//jwt
import { verifyJwtToken } from "../../middlewares/jwtAuth.js";
//multer
import { upload } from "../../middlewares/multer.middleware.js";
import { multerErrorHandling } from "../../middlewares/multerErrorHandler.middleware.js";

import userLoggedInStatus from "../../middlewares/loggedInStatus.middleware.js";

const careInstituteRoute = express.Router();

//get care institute data
careInstituteRoute.get('/getCareInstituteData/:id', userLoggedInStatus, getCareInstituteData);

//update care institute data by patching changes
careInstituteRoute.patch('/update/:id', verifyJwtToken, multerErrorHandling(upload.fields([
    {
        name: "logoImage",
        maxCount:1
    },
    {
        name: "coverImage",
        maxCount:1
    },
    {
        name: "careInstituteImages",
        maxCount:5
    },
])), updateData);

//Remove an image from db and cloudinary -> Single image removal
careInstituteRoute.patch('/update/:id/delete-image', verifyJwtToken, deleteCareInstitutionImages);

careInstituteRoute.get('/getAll', userLoggedInStatus,  getAllCareInstitutions);

careInstituteRoute.get('/search', userLoggedInStatus, searchCareInstitutions);

careInstituteRoute.get('/filter', userLoggedInStatus, filterCareInstitutions);

careInstituteRoute.post('/addInstituteMemberData/:id', verifyJwtToken, multerErrorHandling(upload.fields([
    {
        name: "memberDetailsCSVFile",
        maxCount:1
    }
])), addInstituteMemberData);
careInstituteRoute.get('/getCareInstituteMemberDetails/:id', getCareInstitutionMemberDetails);

careInstituteRoute.get('/filterOptions', getCareInstitutionFilterOptions);

export default careInstituteRoute;