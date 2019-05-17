import React from 'react';
import {times} from 'lodash';

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

        const ALLOWED_BLOCKS = ['core/column'];

        const getColumnsTemplate = (columns) => {
            return times(columns, () => ['core/column']);
        };

        /**
         * add column indicated by RangeControl Number.
         * @param colNum
         * @returns {Array}
         */
        const addColumn = (colNum) => {

            let returnElm = '';
            for (let i = 0; i < colNum; i++) {

                returnElm = <InnerBlocks
                    template={getColumnsTemplate(colNum)}
                    templateLock="all"
                    allowedBlocks={ALLOWED_BLOCKS}
                />;
            }
            console.log(returnElm);
            return returnElm;
        };

        return (
            <div className={`${className} vk_column`}>
                <div>hello</div>
                {
                    addColumn(colNum)
                }
            </div>
        );
    }
}
