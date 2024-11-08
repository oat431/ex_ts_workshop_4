import swaggerJsDoc from 'swagger-jsdoc';
import MovieDto from '../module/MovieManagement/payload/schema/movie.schema.js';
import CommentDto from '../module/MovieManagement/payload/schema/comment.schema.js';
import ResponseDtoMovieDto from '../module/MovieManagement/payload/schema/response.movie.schema.js';
import ResponseDtoListMovieDto from '../module/MovieManagement/payload/schema/response.list.movie.schema.js';
import CommentRequest from '../module/MovieManagement/payload/schema/request.comment.schema.js';

const PORT = process.env.PORT || 8080;

const swaggerOptions = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            title: 'Movie Management API',
            version: '1.0.0',
            description: 'Movie Management API Documentation',
        },
        tags: [
            {
                name: 'HealthCheck API',
                description: 'Endpoints for health-check operations',
            },
            {
                name: 'Movie API',
                description: 'Endpoints for movie operations',
            },
        ],
        components: {
            schemas: {
                HealthCheckDto: {
                    type: 'object',
                    properties: {
                        status: {
                            type: 'integer',
                            example: 200,
                        },
                        message: {
                            type: 'string',
                            example: 'API is running',
                        },
                    },
                },
                ResposneDtoHealthCheckDto: {
                    type: 'object',
                    properties: {
                        data: {
                            $ref: '#/components/schemas/HealthCheckDto',
                        },
                    },
                },
                MovieDto: MovieDto,
                CommentDto: CommentDto,
                ResponseDtoMovieDto: ResponseDtoMovieDto,
                ResponseDtoListMovieDto: ResponseDtoListMovieDto,
                CommentRequest: CommentRequest,
            },
        },
        servers: [
            {
                url: `http://localhost:${PORT}`,
            },
        ],
    },
    apis: ['./src/module/HealthCheck/router/*.ts', './src/module/MovieManagement/router/*.ts'], // files containing annotations as above
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
export default swaggerDocs;
