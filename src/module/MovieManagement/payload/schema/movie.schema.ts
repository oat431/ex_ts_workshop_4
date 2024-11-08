export default {
    type: 'object',
    properties: {
        id: {
            type: 'integer',
            example: 1,
        },
        title: {
            type: 'string',
            example: 'The Shawshank Redemption',
        },
        release: {
            type: 'string',
            example: '20/5/1994',
        },
        comments: {
            type: 'array',
            items: {
                $ref: '#/components/schemas/CommentDto',
            },
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
