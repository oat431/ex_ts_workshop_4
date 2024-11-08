import { Request, Response } from 'express';
import { HealthCheck } from '../domain/entity/HealthCheck.js';
import { ResposneDto } from '../../../shared/ResponseDto.js';
import { HealthCheckMapper } from '../utils/HealthCheckMapper.js';
import { HealthCheckDto } from '../payload/HealthCheckDto.js';

export class HealthCheckController {
    public healthCheck(req: Request, res: Response): void {
        const healthCheck = new HealthCheck(true, 'API is running');
        const responseDto: ResposneDto<HealthCheckDto> = HealthCheckMapper.toHealthCheckDtoResponse(healthCheck);
        res.status(responseDto.data.status).json(responseDto);
    }
}
