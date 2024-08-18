import multer from "multer";

export const multerErrorHandling = (multerMiddleware) => (request, response, next) => {
    multerMiddleware(request, response, (error) => {
        if (error instanceof multer.MulterError) {
            return response.status(400).json({ error: error.message, msg: "Something went wrong" });
        } else if (error) {
            return response.status(500).json({ error: error.message, msg:"An error occurred while uploading the files." });
        }
        next();
    });
};
