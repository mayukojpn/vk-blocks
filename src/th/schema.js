export const schema = {
    content: {
        type: 'string',
        source: 'html',
        selector: 'th',
    },
    textOverflow: {
        type: 'Boolean',
        default: false,
    }
};
