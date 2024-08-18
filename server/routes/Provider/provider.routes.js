import express from "express";
import { verifyJwtToken } from "../../middlewares/jwtAuth.js";

//controllers
import { deleteProviderImages, getProviderData, updateProviderData } from "../../controllers/Provider/provider.controller.js";

//multer
import { upload } from "../../middlewares/multer.middleware.js";
import { multerErrorHandling } from "../../middlewares/multerErrorHandler.middleware.js";

import userLoggedInStatus from "../../middlewares/loggedInStatus.middleware.js";

const providerRoute = express.Router();

providerRoute.get("/getProviderData/:id", userLoggedInStatus, getProviderData);
providerRoute.patch('/update/:id', verifyJwtToken, multerErrorHandling(upload.fields([
    {
        name: "logoImage",
        maxCount:1
    },
    {
        name: "coverImage",
        maxCount:1
    },
    {
        name: "providerImages",
        maxCount:5
    },
])), updateProviderData);
providerRoute.patch('/update/:id/delete-image', verifyJwtToken, deleteProviderImages);

export default providerRoute;