export const schema = {
    content: {
        type: 'string',
        source: 'text',
        selector: 'th',
    },
    textOverflow: {
        type: 'Boolean',
        default: false,
    }
};
