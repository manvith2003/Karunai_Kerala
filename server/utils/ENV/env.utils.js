import dotenv from "dotenv";
dotenv.config();

const config = {
    port: process.env.PORT,
    db:{
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD
    },
    cloudinary_cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    cloudinary_api_key: process.env.CLOUDINARY_API_KEY,
    cloudinary_api_secret: process.env.CLOUDINARY_API_SECRET,
    email:{
        user: process.env.EMAIL_USER,
        password: process.env.EMAIL_PASSWORD
    }
}

export default config;