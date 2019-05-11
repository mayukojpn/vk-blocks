/**
 * latest-posts block type
 *
 */
import React from "react";
import {schema} from './schema.js';

const {__} = wp.i18n; // Import __() from wp.i18n
const {registerBlockType} = wp.blocks; // Import registerBlockType() from wp.blocks
const {RangeControl, PanelBody, BaseControl, SelectControl, CheckboxControl} = wp.components;
const {Fragment} = wp.element;
const {RichText, InspectorControls, MediaUpload, ColorPalette} = wp.editor;
const BlockIcon = 'arrow-down';
const {withSelect} = wp.data;
const {ServerSideRender} = wp.components;


/**
 * Register: a Gutenberg Block.
 *
 * Registers a new block provided a unique name and an object defining its
 * behavior. Once registered, the block is made editor as an option to any
 * editor interface where blocks are implemented.
 *
 * @link https://wordpress.org/gutenberg/handbook/block-api/
 * @param  {string}   name     Block name.
 * @param  {Object}   settings Block settings.
 * @return {?WPBlock}          The block, if it has been successfully
 *                             registered; otherwise `undefined`.
 */

registerBlockType('vk-blocks/latest-posts', {
    // Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
    title: __('Latest Posts', 'vk-blocks'), // Block title.
    icon: BlockIcon, // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
    category: 'vk-blocks-cat', // Block category —s Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
    attributes: schema,

    /**
     * The edit function describes the structure of your block in the context of the editor.
     * This represents what the editor will render when the block is used.
     *
     * The "edit" property must be a valid function.
     *
     * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
     */

    edit: withSelect((select) => {
        return {
            postTypes: select('core').getPostTypes()
        };
    })(({postTypes, className, attributes, setAttributes}) => {

        const {
            numberPosts,
            layout,
            isChecked
        } = attributes;

        let parseIsChecked = JSON.parse(isChecked);
        console.log(parseIsChecked);

        const addPostTypeCheckBox = (postTypes) => {

            if (!postTypes) {return false}

            let checkBoxes = [];

            for(let i in postTypes){

                checkBoxes.push(
                    <CheckboxControl
                        label={postTypes[i].slug}
                        checked={parseIsChecked[i]}
                        onChange={
                            (value) => {
                                parseIsChecked[i] = value;
                                setAttributes({isChecked: JSON.stringify(parseIsChecked)});
                                {
                                    // console.log(attributes)
                                }
                            }
                        }
                    />);
            }
            return(
                <ul>
                    {checkBoxes}
                </ul>
            );
        };

        return (
            <Fragment>
                <InspectorControls>
                    <PanelBody title={__('Latest Posts Setting', 'vk-blocks')}>
                        <BaseControl>
                            <SelectControl
                                label={__('Layout', 'vk-blocks')}
                                value={layout}
                                onChange={(value) => setAttributes({layout: value})}
                                options={[
                                    {
                                        value: 'vert_large_image_3',
                                        label: __( 'Vertical card large image 3 column', 'vk-blocks' ),
                                    },
                                    {
                                        value: 'image_2st',
                                        label: __('image_2st', 'vk-blocks'),
                                    },
                                ]}
                            />
                            <RangeControl
                                label={__('Number of Posts', 'vk-blocks')}
                                value={numberPosts}
                                onChange={(value) => setAttributes({numberPosts: value})}
                                min="1"
                                max="10"
                            />
                            {
                                addPostTypeCheckBox(postTypes)
                            }
                        </BaseControl>
                    </PanelBody>
                </InspectorControls>
                <div>
                    Hi
                    {/*{console.log(attributes)}*/}
                </div>
            </Fragment>
        )
    }),
    // edit({attributes, setAttributes}) {
    //
    //
    //
    //     // let checkBox = (array) =>{
    //     //
    //     //     let checkBoxElms = [];
    //     //     array.forEach(
    //     //
    //     //         checkBoxElms.push(<CheckboxControl
    //     //             heading="User"
    //     //             label="Is author"
    //     //             help="Is the user a author or not?"
    //     //             checked={ isChecked }
    //     //             onChange={ ( isChecked ) => { setState( { isChecked } ) } }
    //     //         />)
    //     //     );
    //     //     return checkBoxElms;
    //     // };
    //
    //     // function MyAuthorsListBase( { authors } ) {
    //     //     return (
    //     //         <ul>
    //     //             { authors.map( ( author ) => (
    //     //                 <li key={ author.id }>{ author.name }</li>
    //     //             ) ) }
    //     //         </ul>
    //     //     );
    //     // }
    //
    //     function PriceDisplay( { postTypes } ) {
    //         return postTypes;
    //     }
    //
    //     const HammerPriceDisplay = withSelect( ( select ) => {
    //         const { test } = select('core').getPostTypes();
    //
    //         return {
    //             posttype: test,
    //         };
    //     } )( PriceDisplay );
    //
    //     return (
    //         <Fragment>
    //             <InspectorControls>
    //                 <PanelBody title={__('Latest Posts Setting', 'vk-blocks')}>
    //                     <BaseControl>
    //                         <SelectControl
    //                             label={ __( 'Layout', 'vk-blocks' ) }
    //                             value={ layout }
    //                             onChange={ ( value ) => setAttributes( { layout: value } ) }
    //                             options={ [
    //                                 {
    //                                     value: 'image_1st',
    //                                     label: __( 'image_1st', 'vk-blocks' ),
    //                                 },
    //                                 {
    //                                     value: 'image_2st',
    //                                     label: __( 'image_2st', 'vk-blocks' ),
    //                                 },
    //                             ] }
    //                         />
    //                         <RangeControl
    //                             label={ __( 'Number of Posts', 'vk-blocks' ) }
    //                             value={ numberPosts }
    //                             onChange={ ( value ) => setAttributes( { numberPosts: value } ) }
    //                             min="1"
    //                             max="10"
    //                         />
    //                     </BaseControl>
    //                 </PanelBody>
    //             </InspectorControls>
    //             <HammerPriceDisplay />
    //         </Fragment>
    //     );
    // },

    /**
     * The save function defin className }> which the different attributes should be combined
     * into the final markup, which is then serialized by Gutenberg into post_content.
     *
     * The "save" property must be specified and must be a valid function.
     *
     * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
     */
    save() {
        return null;
    },
});
