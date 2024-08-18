import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

//dotenv config
import config from "../ENV/env.utils.js";

cloudinary.config({
    cloud_name: config.cloudinary_cloud_name,
    api_key: config.cloudinary_api_key,
    api_secret: config.cloudinary_api_secret
});

export const imageUpload = async (localFilePath, folderName) => {
    try {
        if (!localFilePath) {
            console.log("No local file path provided");
            return null;
        }
        
        const response = await cloudinary.uploader.upload(localFilePath, {
            folder: folderName,
            resource_type: "auto",
            unique_filename: true
        });

        // Clean up the local file after successful upload
        fs.unlinkSync(localFilePath);

        return response;
    } catch (error) {
        console.error("Error uploading to Cloudinary:", error);
        
        // Clean up the local file if it exists
        if (fs.existsSync(localFilePath)) {
            fs.unlinkSync(localFilePath);
        }

        throw new Error("Failed to upload image to Cloudinary");
    }
};

export const deleteImage = async(public_id)=>{
    try{
        const response = await cloudinary.uploader.destroy(public_id);
        return response;
    }catch(error){
        throw new Error("Failed to delete image from Cloudinary");
    }
}
