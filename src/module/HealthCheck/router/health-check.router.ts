import { Router } from 'express';
import { HealthCheckController } from '../controller/health-check.controller.js';

const healthCheckRouter = Router();
const healthCheckController = new HealthCheckController();

/**
 * @swagger
 * /api/v1/health-check:
 *   get:
 *     summary: Health check API
 *     operationId: healthCheck
 *     description: Health check API!
 *     tags:
 *      - HealthCheck API
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ResposneDtoHealthCheckDto'
 */
healthCheckRouter.get('/health-check', healthCheckController.healthCheck);

export default healthCheckRouter;
