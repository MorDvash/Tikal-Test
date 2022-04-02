import express from 'express';
import { json } from 'body-parser';
import { routes } from './routes';
import helmet from 'helmet';
import { errorHandler } from './middleware/error_handler';

const app = express();

app.use(helmet());
app.use(json());
app.use(routes);
app.use(errorHandler);

export { app };
