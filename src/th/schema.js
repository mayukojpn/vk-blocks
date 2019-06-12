export const schema = {
    content: {
        type: 'string',
        source: 'text',
        selector: '.test',
    },
    textOverflow: {
        type: 'Boolean',
        default: false,
    }
};
