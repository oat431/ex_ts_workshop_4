import express, { urlencoded, json } from 'express';
import swaggerUI from 'swagger-ui-express';
import apiDocs from './config/swagger.config.js';
import morgan from 'morgan';

import healthCheckRouter from './module/HealthCheck/router/health-check.router.js';
import movieRouter from './module/MovieManagement/router/movie.router.js';

const PORT = process.env.PORT || 8080;
const app = express();

app.use(json());
app.use(urlencoded({ extended: true }));
app.use(morgan(':date[iso] | :method | :url | :status | :res[content-length] - :response-time ms'));

// feature
app.use('/api/v1', healthCheckRouter);
app.use('/api/v1', movieRouter);

// default route
app.get('/', (req, res) => {
    res.send('Hello World');
});

// swagger setup
app.use('/swagger', swaggerUI.serve, swaggerUI.setup(apiDocs));

app.get('/api-docs', (req, res) => {
    res.json(apiDocs);
});
// end swagger setup

app.listen(PORT, () => {
    console.info(`Server is running on : http://localhost:${PORT}`);
});
