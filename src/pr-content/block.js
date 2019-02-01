/**
 * Pr-Content block type
 *
 */

import React from "react";
import {schema} from './schema.js';
import {Component} from "./component.js";

const {__} = wp.i18n; // Import __() from wp.i18n
const {registerBlockType} = wp.blocks; // Import registerBlockType() from wp.blocks
const {RangeControl, RadioControl, PanelBody, Button, BaseControl, CheckboxControl, TextControl} = wp.components;
const {Fragment} = wp.element;
const {RichText, InspectorControls, MediaUpload, ColorPalette} = wp.editor;
const BlockIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" width="576" height="512" viewBox="0 0 576 512">
		<g>
			<path d="M291.7,133.3l0,245.3l-273.1,0l0-245.3L291.7,133.3 M307.2,117.8l-304.2,0l0,276.4l304.2,0L307.2,117.8L307.2,117.8z"/>
			<path d="M560.7,218.8l-213.1,0c-6.1,0-11.1-5-11.1-11.1s5-11.1,11.1-11.1l213.1,0c6.1,0,11.1,5,11.1,11.1
				C571.8,213.8,566.8,218.8,560.7,218.8z"/>
			<path d="M560.7,265.4l-213.1,0c-6.1,0-11.1-5-11.1-11.1c0-6.1,5-11.1,11.1-11.1l213.1,0c6.1,0,11.1,5,11.1,11.1
				C571.8,260.5,566.8,265.4,560.7,265.4z"/>
			<path d="M560.7,312.1l-213.1,0c-6.1,0-11.1-5-11.1-11.1c0-6.1,5-11.1,11.1-11.1l213.1,0c6.1,0,11.1,5,11.1,11.1
				C571.8,307.1,566.8,312.1,560.7,312.1z"/>
			<polygon points="278.4,365.4 31.9,365.4 31.9,287.4 113,182.2 184.4,264.4 229.9,226.5 278.4,290.6 	"/>
			<path d="M360.6,133.3c4.8,0,8.7,3.9,8.7,8.7c0,4.8-3.9,8.7-8.7,8.7c-4.8,0-8.7-3.9-8.7-8.7C351.9,137.2,355.8,133.3,360.6,133.3
				 M360.6,117.8c-13.4,0-24.2,10.9-24.2,24.2c0,13.4,10.9,24.2,24.2,24.2c13.4,0,24.2-10.9,24.2-24.2
				C384.9,128.7,374,117.8,360.6,117.8L360.6,117.8z"/>
			<path d="M423.3,133.3c4.8,0,8.7,3.9,8.7,8.7c0,4.8-3.9,8.7-8.7,8.7c-4.8,0-8.7-3.9-8.7-8.7C414.6,137.2,418.5,133.3,423.3,133.3
				 M423.3,117.8c-13.4,0-24.2,10.9-24.2,24.2c0,13.4,10.9,24.2,24.2,24.2s24.2-10.9,24.2-24.2C447.6,128.7,436.7,117.8,423.3,117.8
				L423.3,117.8z"/>
			<path d="M486,133.3c4.8,0,8.7,3.9,8.7,8.7c0,4.8-3.9,8.7-8.7,8.7c-4.8,0-8.7-3.9-8.7-8.7C477.3,137.2,481.2,133.3,486,133.3
				 M486,117.8c-13.4,0-24.2,10.9-24.2,24.2c0,13.4,10.9,24.2,24.2,24.2c13.4,0,24.2-10.9,24.2-24.2
				C510.2,128.7,499.4,117.8,486,117.8L486,117.8z"/>
			<path d="M548.7,133.3c4.8,0,8.7,3.9,8.7,8.7c0,4.8-3.9,8.7-8.7,8.7s-8.7-3.9-8.7-8.7C540,137.2,543.9,133.3,548.7,133.3
				 M548.7,117.8c-13.4,0-24.2,10.9-24.2,24.2c0,13.4,10.9,24.2,24.2,24.2c13.4,0,24.2-10.9,24.2-24.2
				C572.9,128.7,562.1,117.8,548.7,117.8L548.7,117.8z"/>
			<path d="M566.3,347.6l-224.3,0c-3.1,0-5.6,2.5-5.6,5.6l0,35.5c0,3.1,2.5,5.6,5.6,5.6l224.3,0c3.1,0,5.6-2.5,5.6-5.6v-35.5
				C571.8,350.1,569.3,347.6,566.3,347.6z M547.1,379.2v-16.6l9.8,8.3L547.1,379.2z"/>
		</g>
    </svg>
);
/**
 * Register: aa Gutenberg Block.
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
registerBlockType('vk-blocks/pr-content', {
    // Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
    title: __('PR Content', 'vk-blocks'), // Block title.
    icon: BlockIcon, // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
    category: 'vk-blocks-cat', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
    attributes: schema,

    /**
     * The edit function describes the structure of your block in the context of the editor.
     * This represents what the editor will render when the block is used.
     *
     * The "edit" property must be a valid function.
     *
     * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
     */
    edit: function ({attributes, className, setAttributes}) {
        const {
            titleColor,
            contentColor,
            url,
            buttonType,
            buttonColor,
            buttonText,
            urlType,
            ImageBorderColor,
            layout,
            fontAwesomeIconBefore,
            fontAwesomeIconAfter
        } = attributes;
        return (
            <Fragment>
                <InspectorControls>
                    <PanelBody title={__('Color Setting', 'vk-blocks')}>
                        <BaseControl label={__('Title Color', 'vk-blocks')}>
                            <ColorPalette
                                value={titleColor}
                                onChange={(value) => setAttributes({titleColor: value})}
                            />
                        </BaseControl>
                        <BaseControl label={__('Content Color', 'vk-blocks')}>
                            <ColorPalette
                                value={contentColor}
                                onChange={(value) => setAttributes({contentColor: value})}
                            />
                        </BaseControl>
                        <BaseControl label={__('Button Color', 'vk-blocks')}>
                            <ColorPalette
                                value={buttonColor}
                                onChange={(value) => setAttributes({buttonColor: value})}
                            />
                        </BaseControl>
                        <BaseControl
                            label={__('Image Border Color', 'vk-blocks')}
                        >
                            <ColorPalette
                                value={ImageBorderColor}
                                onChange={(value) => setAttributes({ImageBorderColor: value})}
                            />
                        </BaseControl>
                    </PanelBody>
                    <PanelBody title={__('Button Setting', 'vk-blocks')}>
                        <BaseControl
                            label={__('Button Text', 'vk-blocks')}
                        >
                            <TextControl
                                value={buttonText}
                                onChange={(value) => setAttributes({buttonText: value})}
                                placeholder={'Input button text.'}
                            />
                        </BaseControl>
                        <BaseControl
                            label={__('Link URL', 'vk-blocks')}
                        >
                            <TextControl
                                value={url}
                                onChange={(value) => setAttributes({url: value})}
                                placeholder={'https://vektor-inc.co.jp/'}
                            />
                        </BaseControl>
                        <BaseControl label={__('Link target', 'vk-blocks')}>
                            <RadioControl
                                selected={urlType}
                                options={[
                                    {label: __('Open url in new window', 'vk-blocks'), value: '_blank'},
                                    {label: __('Open url in current window', 'vk-blocks'), value: '_self'}
                                ]}
                                onChange={(value) => setAttributes({urlType: value})}
                            />
                        </BaseControl>
                        <BaseControl label={__('Button Type', 'vk-blocks')}>
                            <RadioControl
                                selected={buttonType}
                                options={[
                                    {label: __('Solid', 'vk-blocks'), value: '1'},
                                    {label: __('Ghost', 'vk-blocks'), value: '0'}
                                ]}
                                onChange={(value) => setAttributes({buttonType: value})}
                            />
                        </BaseControl>
                        <BaseControl
                            label={__('Font Awesome:', 'vk-blocks')}
                        >
                            <TextControl
                                label={__('Before text', 'vk-blocks')}
                                help={__('Enter Font Awesome Class.This icon will appear before text. Ex) fas fa-arrow-circle-right', 'vk-blocks')}
                                value={fontAwesomeIconBefore}
                                onChange={(value) => setAttributes({fontAwesomeIconBefore: value})}
                                placeholder={'fas fa-arrow-circle-right'}
                            />
                            <TextControl
                                label={__('After text', 'vk-blocks')}
                                help={__('Enter Font Awesome Class.This icon will appear after text. Ex) fas fa-external-link-alt', 'vk-blocks')}
                                value={fontAwesomeIconAfter}
                                onChange={(value) => setAttributes({fontAwesomeIconAfter: value})}
                                placeholder={'fas fa-external-link-alt'}
                            />
                        </BaseControl>
                        </PanelBody>
                    <PanelBody title={__('Layout Setting', 'vk-blocks')}>
                            <RadioControl
                                label={__('Layout Type', 'vk-blocks')}
                                selected={layout}
                                options={[
                                    {label: __('Right', 'vk-blocks'), value: 'right'},
                                    {label: __('Left', 'vk-blocks'), value: 'left'}
                                ]}
                                onChange={(value) => setAttributes({layout: value})}
                            />
                    </PanelBody>
                </InspectorControls>
                <Component
                    attributes={attributes}
                    setAttributes={setAttributes}
                    for_={'edit'}
                />
            </Fragment>
        );
    },


    /**
     * The save function defin className }> which the different attributes should be combined
     * into the final markup, which is then serialized by Gutenberg into post_content.
     *
     * The " save" property must be specified and must be a valid function.
     *
     * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
     */
    save({attributes, className}) {

        return (
            <Component
                attributes={attributes}
                for_={'save'}
            />
        );
    },
});
