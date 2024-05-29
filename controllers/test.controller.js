import { APP_RESPONSE } from '../utils/response.util.js';

export const helloWorld = (req, res) => {
  return APP_RESPONSE.success(res, 'Hello World');
};
