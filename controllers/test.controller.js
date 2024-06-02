import { APP_RESPONSE } from '../utils/response.util.js';

const TEMP_DATA = [];

export const helloWorld = (req, res) => {
  return APP_RESPONSE.success(res, 'Hello World, temp data: ', TEMP_DATA);
};

export const createTest = (req, res) => {
  const { name } = req.body;
  const id = TEMP_DATA.length + 1; // generate an id for the new test
  const newTest = { id, name }; // create a new test object
  TEMP_DATA.push(newTest); // push the new test object into the TEMP_DATA array
  return APP_RESPONSE.success(res, 'Test created successfully', newTest); // return the new test object
};
