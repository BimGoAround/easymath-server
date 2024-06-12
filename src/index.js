import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import swaggerUi from 'swagger-ui-express';

import { PORT } from './configs/config.js';
import { routes } from './routes.js';
import { readFileSync } from 'fs';

const swaggerDocument = JSON.parse(readFileSync('./swagger.json'));

const app = express();

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin) return callback(null, true);
      if (
        [
          'http://localhost:5173',
          `http://localhost:${PORT}`,
          'https://easymath-client.vercel.app',
        ].indexOf(origin) === -1
      ) {
        const msg =
          'The CORS policy for this site does not ' +
          'allow access from the specified Origin.';
        return callback(new Error(msg), false);
      }
      return callback(null, true);
    },
  }),
);
app.use(bodyParser.json());

// SWAGGER
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

routes(app);

app.listen(PORT, () => {
  console.log(
    `Server is running on: http://localhost:${PORT}, the documentation is on: http://localhost:${PORT}/api-docs`,
  );
});
