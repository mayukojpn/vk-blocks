import React from 'react';
const {InnerBlocks} = wp.editor;

export default class Component extends React.Component {

    render() {

        const {
            colNum,
            className
        } = this.props.attributes;
        let for_ = this.props.for_;
        let content;

        /**
         * add column indicated by RangeControl Number.
         * @param colNum
         * @returns {Array}
         */
        const addColumn = (colNum) => {

            let returnElm = [];
            for (let i = 0; i < colNum; i++) {
                returnElm.push(content);
            }
            return returnElm;
        };

        //エディタとビューの切り替え
        if(for_ === 'edit'){
            content = <InnerBlocks/>;
        }else if('save'){
            content = <InnerBlocks.Content/>;
        }

        return (
            <div className={`${className} vk_column`}>
                {
                    addColumn(colNum)
                }
            </div>
        );
    }
}
