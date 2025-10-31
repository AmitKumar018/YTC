import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,  // check this key name
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadToCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) throw new Error("File path is required");

    // Upload file to Cloudinary
    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });

    console.log(" File uploaded successfully:", response.secure_url);

    // Remove local temp file after successful upload
    fs.unlinkSync(localFilePath);

    return response;
  } catch (error) {
    console.error("Cloudinary upload failed:", error.message);

    // Only try to delete if file exists
    if (fs.existsSync(localFilePath)) {
      fs.unlinkSync(localFilePath);
    }

    throw new Error("Cloudinary upload failed");
  }
};

export { uploadToCloudinary };
