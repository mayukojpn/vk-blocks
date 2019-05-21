import React from 'react';
const {InnerBlocks} = wp.editor;

/**
 * Returns the layouts configuration for a given number of columns.
 *
 * @param {number} columns Number of columns.
 *
 * @return {Object[]} Columns layout configuration.
 */
// export const getColumnsTemplate = memoize( ( columns ) => {
//     return times( columns, () => [ 'core/column' ] );
// } );

export default class Component extends React.Component {

    render() {

        const {
            colNum,
            className
        } = this.props.attributes;
        let for_ = this.props.for_;
        let content;

        //エディタとビューの切り替え
        if(for_ === 'edit'){
            content = <InnerBlocks/>;
        }else if('save'){
            content = <InnerBlocks.Content/>;
        }
        return (
            <div className={`${className} vk_column`}>
                This is component to repeat! It's repeated ${colNum} times!
            </div>
        );
    }
}
