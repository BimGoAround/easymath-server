import express from 'express';

import { helloWorld, createTest } from '../controllers/test.controller.js';
import { logMiddleware } from '../middlewares/log.middleware.js';

const testRouter = express.Router();

testRouter.get('/', logMiddleware, helloWorld);
testRouter.post('/', logMiddleware, createTest);

export default testRouter;
