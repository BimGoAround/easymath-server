import { v2 as cloudinary } from 'cloudinary';
import { APP_RESPONSE } from '../utils/response.util.js';
import {
  CLOUDINARY_API_KEY,
  CLOUDINARY_API_SECRET,
  CLOUDINARY_CLOUD_NAME,
  MAX_FILE_SIZE,
} from '../configs/config.js';

cloudinary.config({
  cloud_name: CLOUDINARY_CLOUD_NAME,
  api_key: CLOUDINARY_API_KEY,
  api_secret: CLOUDINARY_API_SECRET,
});

export const createPresignedUrl = async (req, res) => {
  try {
    if (!req.file) {
      throw new Error('File is required');
    }

    // Check if file size is more than MAX_FILE_SIZE
    if (req.file.size > MAX_FILE_SIZE) {
      throw new Error('File size is too large');
    }

    // Upload the file to Cloudinary
    const result = await cloudinary.uploader.upload(req.file.path, {
      transformation: [
        { width: 500, height: 500, crop: 'limit' },
        { quality: 'auto' },
        { fetch_format: 'auto' },
      ],
    });

    // Create a response
    const response = {
      url: result.secure_url,
      public_id: result.public_id,
    };

    return APP_RESPONSE.success(res, response);
  } catch (err) {
    return APP_RESPONSE.badRequest(res, err.message);
  }
};
