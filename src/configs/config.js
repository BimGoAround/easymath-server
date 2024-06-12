/* eslint-disable */
import 'dotenv/config';

export const PORT = process.env.PORT || 8000;
export const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
export const CLOUDINARY_CLOUD_NAME = process.env.CLOUDINARY_CLOUD_NAME;
export const CLOUDINARY_API_KEY = process.env.CLOUDINARY_API_KEY;
export const CLOUDINARY_API_SECRET = process.env.CLOUDINARY_API_SECRET;
export const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
