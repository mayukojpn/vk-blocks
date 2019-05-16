import React from 'react';

export default class NewComponent extends React.Component {

    render() {

        const {
            className,
            heading,
            content,
            insertImage,
            arrowFlag,
        } = this.props.attributes;
        const for_ = this.props.for_;

        return (
            <div className={`${className} vk_your-block-slug`}>
                <div>Editor</div>
            </div>
        );
    }
}
