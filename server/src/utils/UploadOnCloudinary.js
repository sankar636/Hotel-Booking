import { v2 as cloudinary } from 'cloudinary'
import fs from 'fs'

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
})

const uploadOnCloudinary = async (localFilePath) => {
    try {
        const response = cloudinary.uploader.upload(localFilePath, {resource_type: 'auto', folder: 'Hotle-Booking'})       
        
        if(fs.existsSync(localFilePath)){
            fs.unlinkSync(localFilePath);
        }
    } catch (error) {
        console.log("Error in Uploading the file", error);
        if(fs.existsSync(localFilePath)){
            fs.unlinkSync(localFilePath);
        }
    }
}

export default uploadOnCloudinary;