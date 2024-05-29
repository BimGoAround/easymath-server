import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import swaggerUi from 'swagger-ui-express';

import { PORT } from './configs/config.js';
import { routes } from './routes.js';
import swaggerDocument from './swagger.json' assert { type: 'json' };

const app = express();

app.use(
  cors({
    credentials: true,
    origin: ['*'],
  }),
);
app.use(bodyParser.json());

// SWAGGER
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

routes(app);

app.listen(PORT, () => {
  console.log(`Server is running on: http://localhost:${PORT}`);
});