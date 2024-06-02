import express from 'express';
import multer from 'multer';

import { createPresignedUrl } from '../controllers/file.controller.js';
import { logMiddleware } from '../middlewares/log.middleware.js';

const upload = multer({ dest: 'src/uploads/' });

const fileRouter = express.Router();

fileRouter.post(
  '/upload',
  upload.single('file'),
  logMiddleware,
  createPresignedUrl,
);

export default fileRouter;
