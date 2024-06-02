import express from 'express';

import { solveMath } from '../controllers/math.controller.js';
import { logMiddleware } from '../middlewares/log.middleware.js';

const mathRouter = express.Router();

mathRouter.post('/', logMiddleware, solveMath);

export default mathRouter;
