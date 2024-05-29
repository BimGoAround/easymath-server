import express from 'express';

import { helloWorld } from '../controllers/test.controller.js';
import { logMiddleware } from '../middlewares/log.middleware.js';

const testRouter = express.Router();

testRouter.get('/', logMiddleware, helloWorld);

export default testRouter;
