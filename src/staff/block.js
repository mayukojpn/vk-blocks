/**
 * staff block type
 *
 */
import React from "react";
import {NewComponent} from "./component";
import {schema} from './schema';

const {__} = wp.i18n; // Import __() from wp.i18n
const {registerBlockType} = wp.blocks; // Import registerBlockType() from wp.blocks
const {TextControl, PanelBody, BaseControl, SelectControl} = wp.components;
const {Fragment} = wp.element;
const {InspectorControls, ColorPalette} = wp.editor;
const BlockIcon = (
	<svg xmlns="http://www.w3.org/2000/svg" width="576" height="512" viewBox="0 0 576 512">
	<path d="M528,34H48C21.5,34,0,55.5,0,82v352c0,26.5,21.5,48,48,48h480c26.5,0,48-21.5,48-48V82C576,55.5,554.5,34,528,34z M528,434
		H48V82h480V434z"/>
	<path d="M407.6,241.9c30.9,0,55.9-25.1,55.9-55.9S438.5,130,407.6,130s-55.9,25.1-55.9,55.9S376.8,241.9,407.6,241.9z"/>
	<path d="M329.3,353.8h156.6c10.8,0,19.6-7.5,19.6-16.8v-16.8c0-27.8-26.3-50.3-58.7-50.3c-9.4,0-16.3,7-39.2,7
		c-23.5,0-29.2-7-39.2-7c-32.4,0-58.7,22.6-58.7,50.3V337C309.7,346.2,318.5,353.8,329.3,353.8z"/>
	<path d="M96.2,395h161.1c4,0,7.2-3.3,7.2-7.2v-14.4c0-4-3.3-7.2-7.2-7.2H96.2c-4,0-7.2,3.3-7.2,7.2v14.4C89,391.7,92.3,395,96.2,395
		z"/>
	<path d="M96.2,339.2h161.1c4,0,7.2-3.3,7.2-7.2v-14.4c0-4-3.3-7.2-7.2-7.2H96.2c-4,0-7.2,3.3-7.2,7.2V332
		C89,336,92.3,339.2,96.2,339.2z"/>
	<path d="M96.2,283.4h161.1c4,0,7.2-3.3,7.2-7.2v-14.4c0-4-3.3-7.2-7.2-7.2H96.2c-4,0-7.2,3.3-7.2,7.2v14.4
		C89,280.2,92.3,283.4,96.2,283.4z"/>
	<path d="M92.9,219.1h166.3c2.1,0,3.9-1.8,3.9-3.9v-7.8c0-2.1-1.8-3.9-3.9-3.9H92.9c-2.1,0-3.9,1.8-3.9,3.9v7.8
		C89,217.4,90.8,219.1,92.9,219.1z"/>
	<path d="M99.7,177.6h22.4c5.9,0,10.7-4.8,10.7-10.7v-21.4c0-5.9-4.8-10.7-10.7-10.7H99.7c-5.9,0-10.7,4.8-10.7,10.7v21.4
		C89,172.8,93.8,177.6,99.7,177.6z"/>
	<path d="M157,177.6h22.4c5.9,0,10.7-4.8,10.7-10.7v-21.4c0-5.9-4.8-10.7-10.7-10.7H157c-5.9,0-10.7,4.8-10.7,10.7v21.4
		C146.3,172.8,151.1,177.6,157,177.6z"/>
	<path d="M214.2,177.6h22.4c5.9,0,10.7-4.8,10.7-10.7v-21.4c0-5.9-4.8-10.7-10.7-10.7h-22.4c-5.9,0-10.7,4.8-10.7,10.7v21.4
		C203.5,172.8,208.4,177.6,214.2,177.6z"/>
	<path d="M271.5,177.6h22.4c5.9,0,10.7-4.8,10.7-10.7v-21.4c0-5.9-4.8-10.7-10.7-10.7h-22.4c-5.9,0-10.7,4.8-10.7,10.7v21.4
		C260.8,172.8,265.6,177.6,271.5,177.6z"/>
	</svg>
);
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
registerBlockType('vk-blocks/staff', {
    // Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
    title: __('Staff', 'vk-blocks'), // Block title.
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
    edit({attributes, setAttributes, className}) {
        const {
            vk_staff_photo_image_alt,
            vk_staff_layout,
            vk_staff_nameColor,
            vk_staff_captionColor,
            vk_staff_positionColor,
            vk_staff_profileTitleColor,
            vk_staff_profileTextColor
        } = attributes;

        return (
            <Fragment>
                <InspectorControls>
                    <PanelBody title={__('Layout', 'vk-blocks')}>
                            <SelectControl
                                value={vk_staff_layout}
                                onChange={(value) => setAttributes({vk_staff_layout: value})}
                                options={[
                                    {
                                        value: 'default',
                                        label: __('Default', 'vk-blocks'),
                                    },
                                    {
                                        value: 'reverse',
                                        label: __('Reverse', 'vk-blocks'),
                                    },
                                ]}
                            />
                    </PanelBody>
                    <PanelBody title={__('Color', 'vk-blocks')}>
                        <BaseControl
                            label={__('Name', 'vk-blocks')}
                        >
                            <ColorPalette
                                value={vk_staff_nameColor}
                                onChange={(value) => setAttributes({vk_staff_nameColor: value})}
                            />
                        </BaseControl>
                        <BaseControl
                            label={__('Caption', 'vk-blocks')}
                        >
                            <ColorPalette
                                value={vk_staff_captionColor}
                                onChange={(value) => setAttributes({vk_staff_captionColor: value})}
                            />
                        </BaseControl>
                        <BaseControl
                            label={__('Position', 'vk-blocks')}
                        >
                            <ColorPalette
                                value={vk_staff_positionColor}
                                onChange={(value) => setAttributes({vk_staff_positionColor: value})}
                            />
                        </BaseControl>
                        <BaseControl
                            label={__('Profile Title', 'vk-blocks')}
                        >
                            <ColorPalette
                                value={vk_staff_profileTitleColor}
                                onChange={(value) => setAttributes({vk_staff_profileTitleColor: value})}
                            />
                        </BaseControl>
                        <BaseControl
                            label={__('Profile Text', 'vk-blocks')}
                        >
                            <ColorPalette
                                value={vk_staff_profileTextColor}
                                onChange={(value) => setAttributes({vk_staff_profileTextColor: value})}
                            />
                        </BaseControl>
                    </PanelBody>
                    <PanelBody title={__('Alt text', 'vk-blocks')}>
                        <BaseControl
                            help={__('Set the alt text for profile image', 'vk-blocks')}
                        >
                            <TextControl
                                value={vk_staff_photo_image_alt}
                                onChange={(value) => setAttributes({vk_staff_photo_image_alt: value})}
                            />
                        </BaseControl>
                    </PanelBody>
                </InspectorControls>
                    <NewComponent
                        attributes={attributes}
                        setAttributes={setAttributes}
                        className={className}
                        for_={'edit'}
                    />
            </Fragment>
        );
    },

    /**
     * The save function defin className }> which the different attributes should be combined
     * into the final markup, which is then serialized by Gutenberg into post_content.
     *
     * The "save" property must be specified and must be a valid function.
     *
     * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
     */
    save({attributes}) {
        return (
            <NewComponent
                attributes={attributes}
                setAttributes={''}
                className={''}
                for_={'save'}
            />
        );
    }
});
