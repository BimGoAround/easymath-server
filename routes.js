import testRouter from './routes/test.route.js';
import mathRouter from './routes/math.route.js';
import fileRouter from './routes/file.route.js';

export const routes = (router) => {
  router.use('/test', testRouter);
  router.use('/math', mathRouter);
  router.use('/file', fileRouter);
};
