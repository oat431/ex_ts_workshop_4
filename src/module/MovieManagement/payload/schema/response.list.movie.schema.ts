export default {
    type: 'object',
    properties: {
        data: {
            type: 'array',
            items: {
                $ref: '#/components/schemas/MovieDto',
            },
        },
    },
};
