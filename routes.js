import testRouter from './routes/test.route.js';

export const routes = (router) => {
  router.use('/test', testRouter);
};
