import { ResposneDto } from '../../../shared/ResponseDto.js';
import { HealthCheck } from '../domain/entity/HealthCheck.js';
import { HealthCheckDto } from '../payload/HealthCheckDto.js';

export class HealthCheckMapper {
    public static toHealthCheckDtoResponse(healthCheck: HealthCheck): ResposneDto<HealthCheckDto> {
        const response: ResposneDto<HealthCheckDto> = {
            data: this.toHealthCheckDto(healthCheck),
        };
        return response;
    }

    private static toHealthCheckDto(healthCheck: HealthCheck): HealthCheckDto {
        return {
            status: healthCheck.getStatus() ? 200 : 500,
            message: healthCheck.getMessage(),
        };
    }
}
