/**
 * Flow block type
 *
 */
const {__} = wp.i18n; // Import __() from wp.i18n
const {registerBlockType} = wp.blocks; // Import registerBlockType() from wp.blocks
const {RangeControl, RadioControl, PanelBody, Button, PanelColor} = wp.components;
const {Fragment} = wp.element;
const {RichText, InspectorControls, MediaUpload, ColorPalette} = wp.editor;
const BlockIcon = 'arrow-down';

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
registerBlockType('vk-blocks/flow', {
    // Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
    title: __('Flow', 'vk-blocks'), // Block title.
    icon: BlockIcon, // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
    category: 'vk-blocks-cat', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
    attributes: {
        heading: {
            type: 'string',
            source: 'html',
            selector: 'dt',
        },
        content: {
            type: 'string',
            source: 'html',
            selector: 'dd',
        },
        arrowFlag: {
            type: 'string',
            default: 'vk_flow-arrow-on',
        },
				insertImage: {
					type: 'string',
					default: null, // no image by default!
				}
    },

    /**
     * The edit function describes the structure of your block in the context of the editor.
     * This represents what the editor will render when the block is used.
     *
     * The "edit" property must be a valid function.
     *
     * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
     */
    edit({attributes, setAttributes}) {
        const {
            heading,
            content,
            insertImage,
            arrowFlag,
        } = attributes;

        return [
            <Fragment>
                <InspectorControls>
                    <PanelBody title="矢印設定">
                        <RadioControl
                            selected={arrowFlag}
                            options={[
                                {label: '表示', value: 'vk_flow-arrow-on'},
                                {label: '非表示', value: 'vk_flow-arrow-off'},
                            ]}
                            onChange={(value) => setAttributes({arrowFlag: value})}
                        />
                    </PanelBody>
                </InspectorControls>

                <div className={`${ arrowFlag } vk_flow`}>
									<div className={ 'vk_flow_frame' } >
                    <dl className={ 'vk_flow_frame_text' }>
                        <RichText
                            tagName="dt"
                            className={ 'vk_flow_frame_text_title' }
                            onChange={(value) => setAttributes({heading: value})}
                            value={heading}
                            placeholder="タイトルを入れて下さい"
                        />
                        <RichText
                            tagName="dd"
														className={ 'vk_flow_frame_text_content' }
                            onChange={(value) => setAttributes({content: value})}
                            value={content}
                            placeholder="本文を入力してください"
                        />
                    </dl>
										<div className={'vk_flow_frame_image'}>
												<MediaUpload
														onSelect={(value) => setAttributes({insertImage: value.url})}
														type="image"
														className={ 'vk_flow_frame_image' }
														value={insertImage}
														render={({open}) => (
																<Button
																		onClick={open}
																		className={insertImage ? 'image-button' : 'button button-large'}
																>
																		{!insertImage ? '画像選択' :
																				<img className={'icon-image'} src={insertImage} alt={'画像アップロード'}/>}
																</Button>
														)}
												/>
										</div>
									</div>
                </div>
            </Fragment>
        ];
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
        const {
            heading,
            content,
            insertImage,
            arrowFlag,
        } = attributes;

        return (
            <div className={`${ arrowFlag } vk_flow`}>
							<div className={ 'vk_flow_frame' }>
                <dl className={ 'vk_flow_frame_text' }>
                    <RichText.Content
                        tagName="dt"
                        className={ 'vk_flow_frame_text_title' }
                        value={heading}
                    />
                    <RichText.Content
                        tagName="dd"
												className={ 'vk_flow_frame_text_content' }
                        value={content}
                    />
                </dl>
								{ insertImage ?
									<div className={ 'vk_flow_frame_image' }>
										<img
												src={ insertImage }
												alt=''
										/></div> : '' }
							</div>
            </div>
        );
    },
});
