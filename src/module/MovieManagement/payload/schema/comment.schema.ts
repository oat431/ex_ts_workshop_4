export default {
    type: 'object',
    properties: {
        id: {
            type: 'integer',
            example: 1,
        },
        content: {
            type: 'string',
            example: 'some content',
        },
        rate: {
            type: 'number',
            example: 5,
        },
        createdAt: {
            type: 'date',
            example: '2021-02-08T00:00:00.000Z',
        },
        updatedAt: {
            type: 'date',
            example: '2021-02-08T00:00:00.000Z',
        },
    },
};
