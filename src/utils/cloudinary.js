import { v2 as cloudinary } from "cloudinary";

import fs from "fs";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadToCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) throw new Error("File path is required");
    // upload file on cloudinary
    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });

    // file has been uploaded, now we can remove from local server

    console.log("file uploade successfully", response.url);
    return response;
    
  } catch {
    fs.unlinkSync(localFilePath);  //remove the locally saved temp file as upload operation got failed
    throw new Error("Cloudinary upload failed");
  }
};

export { uploadToCloudinary };
