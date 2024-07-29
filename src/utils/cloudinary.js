import {v2 as cloudinary} from "cloudinary"
import fs from "fs"



    cloudinary.config({ 
        cloud_name: process.env.CLOUDINARY_CLOuD_NAME, 
        api_key: process.env.CLOUDINARY_API_KEY, 
        api_secret: process.env.CLOUDINARY_API_SECRET
    });
    
  const uploadOnCloudinary = async (localFilePath) =>{
    try {
        if(!localFilePath) return null
        //upload a file on cloudinary
        const response=await cloudinary.uploader.upload(localFilePath, {
            resource_type:"auto"
        })
        //file has been uploaded successfully
        console.log("file is uploaded in cloudinary", response.url)
        return response;
    }catch(err){
        fs.unlinkSync(localFilePath) //removes the locally saved temporary file as upload operation failed
        return null;
    }
  }

  export {uploadOnCloudinary}