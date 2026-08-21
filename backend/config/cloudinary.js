import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';
dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

const uploadOnCloudinary = async (filePath) => {
  try {
    if (!filePath) return null;

    // Convert to absolute path (very important on Windows)
    const absolutePath = path.resolve(filePath);
    console.log("Absolute path:", absolutePath);

    // Check if file really exists
    if (!fs.existsSync(absolutePath)) {
      console.error("File does not exist:", absolutePath);
      return null;
    }

    const uploadResult = await cloudinary.uploader.upload(absolutePath, {
      resource_type: "auto",
      folder: "chat-app",          // optional but recommended
    });

    // Delete local file after successful upload
    fs.unlinkSync(absolutePath);

    console.log("Upload success →", uploadResult.secure_url);
    return uploadResult.secure_url;
  } catch (error) {
    console.error("Full Cloudinary error:", error);

    // Try to clean up
    try {
      const absolutePath = path.resolve(filePath);
      if (fs.existsSync(absolutePath)) {
        fs.unlinkSync(absolutePath);
      }
    } catch (e) {}

    return null;
  }
};

export default uploadOnCloudinary;