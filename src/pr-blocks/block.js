/**
 * Flow block type
 *
 */
const {__} = wp.i18n; // Import __() from wp.i18n
const {registerBlockType} = wp.blocks; // Import registerBlockType() from wp.blocks
const {RangeControl, RadioControl, PanelBody, Button, BaseControl, CheckboxControl, TextControl} = wp.components;
const {Fragment} = wp.element;
const {RichText, InspectorControls, MediaUpload, ColorPalette} = wp.editor;
const BlockIcon = (
	<svg xmlns="http://www.w3.org/2000/svg" width="576" height="512" viewBox="0 0 576 512">
	<g>
		<g>
			<circle cx="288" cy="186.2" r="60"/>
			<rect x="213.5" y="278.8" width="149" height="107"/>
		</g>
		<g>
			<circle cx="74.5" cy="186.2" r="60"/>
			<rect y="278.8" width="149" height="107"/>
		</g>
		<g>
			<circle cx="501.5" cy="186.2" r="60"/>
			<rect x="427" y="278.8" width="149" height="107"/>
		</g>
	</g>
	</svg>
);

function set_attirbuite(number) {

    var attributes = {};

    for (var i = 0; i <= number; i++) {

        attributes['heading' + i] = {
            type: 'string',
            source: 'html',
            selector: 'h1',
        };
        attributes['content' + i] = {
            type: 'string',
                source: 'html',
                selector: 'p',
        };
        attributes['url' + i] = {
            type: 'string',
            default: null,
        };
        attributes['urlOpenType' + i] = {
            type: 'Boolean',
            default: false,
        };
        attributes['icon' + i] = {
            type: 'string',
            default: 'fa-file',
        };
        attributes['color' + i] = {
            type: 'string',
            default: '#0693e3',
        };
        attributes['bgType' + i] = {
            type: 'string',
            default: '0',
        };
        attributes['insertImage' + i] = {
            type: 'string',
            default: null,
        };
    }

    return attributes;
}



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
registerBlockType('vk-blocks/pr-blocks', {
    // Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
    title: __('PR Block', 'vk-blocks'), // Block title.
    icon: BlockIcon, // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
    category: 'vk-blocks-cat', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
    attributes: set_attirbuite(3),

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
            heading0,
            heading1,
            heading2,
            content0,
            content1,
            content2,
            url0,
            url1,
            url2,
            urlOpenType0,
            urlOpenType1,
            urlOpenType2,
            icon0,
            icon1,
            icon2,
            color0,
            color1,
            color2,
            bgType0,
            bgType1,
            bgType2,
            insertImage0,
            insertImage1,
            insertImage2
        } = attributes;

        return [
            <Fragment>
                <InspectorControls>
                    <PanelBody title={__('PR Block1 Setting', 'vk-blocks')}>
                        <BaseControl
                            label={__('Link URL:', 'vk-blocks')}
                        >
                            <TextControl
                                value={url0}
                                onChange={(value) => setAttributes({url0: value})}
                            />
                            <CheckboxControl
                                label={__('Open link new tab.', 'vk-blocks')}
                                checked={urlOpenType0}
                                onChange={(checked) => setAttributes({urlOpenType0: checked})}
                            />
                        </BaseControl>
                        <BaseControl
                            label={__('Icon 1', 'vk-blocks')}
                        >
                            <TextControl
                                label={__('Class name of the icon font you want to use:', 'vk-blocks')}
                                value={icon0}
                                onChange={(value) => setAttributes({icon0: value})}
                                placeholder={__('fa-file', 'vk-blocks')}
                            />
                            <ColorPalette
                                value={color0}
                                onChange={(value) => setAttributes({color0: value})}
                            />
                            <RadioControl
                                label={__('Icon Background:', 'vk-blocks')}
                                selected={bgType0}
                                options={[
                                    {label: __('Solid color', 'vk-blocks'), value: '0'},
                                    {label: __('No background', 'vk-blocks'), value: '1'},
                                ]}
                                onChange={(value) => setAttributes({bgType0: value})}
                            />
                        </BaseControl>
                        <BaseControl
                            label={__('PR Image 1', 'vk-blocks')}
                            help={__('When you have an image. Image is displayed with priority', 'vk-blocks')}
                        >
                            <MediaUpload
                                onSelect={(value) => setAttributes({insertImage0: value.url})}
                                type="image"
                                value={insertImage0}
                                render={({open}) => (
                                    <Button
                                        onClick={open}
                                        className={insertImage0 ? 'image-button' : 'button button-large'}
                                    >
                                        {!insertImage0 ? __('Select image', 'vk-blocks') :
                                            <img className={'icon-image'} src={insertImage0}
                                                 alt={__('Upload image', 'vk-blocks')}/>}
                                    </Button>
                                )}
                            />
                        </BaseControl>
                    </PanelBody>
                    <PanelBody title={__('PR Block2 Setting', 'vk-blocks')}>
                        <BaseControl
                            label={__('Link URL:', 'vk-blocks')}
                        >
                            <TextControl
                                value={url1}
                                onChange={(value) => setAttributes({url1: value})}
                            />
                            <CheckboxControl
                                label={__('Open link new tab.', 'vk-blocks')}
                                checked={urlOpenType1}
                                onChange={(checked) => setAttributes({urlOpenType1: checked})}
                            />
                        </BaseControl>
                        <BaseControl
                            label={__('Icon 2', 'vk-blocks')}
                        >
                            <TextControl
                                label={__('Class name of the icon font you want to use:', 'vk-blocks')}
                                value={icon1}
                                onChange={(value) => setAttributes({icon1: value})}
                                placeholder={__('fa-file', 'vk-blocks')}
                            />
                            <ColorPalette
                                value={color1}
                                onChange={(value) => setAttributes({color1: value})}
                            />
                            <RadioControl
                                label={__('Icon Background:', 'vk-blocks')}
                                selected={bgType1}
                                options={[
                                    {label: __('Solid color', 'vk-blocks'), value: '0'},
                                    {label: __('No background', 'vk-blocks'), value: '1'},
                                ]}
                                onChange={(value) => setAttributes({bgType1: value})}
                            />
                        </BaseControl>
                        <BaseControl
                            label={__('PR Image 2', 'vk-blocks')}
                            help={__('When you have an image. Image is displayed with priority', 'vk-blocks')}
                        >
                            <MediaUpload
                                onSelect={(value) => setAttributes({insertImage1: value.url})}
                                type="image"
                                value={insertImage1}
                                render={({open}) => (
                                    <Button
                                        onClick={open}
                                        className={insertImage1 ? 'image-button' : 'button button-large'}
                                    >
                                        {!insertImage1 ? __('Select image', 'vk-blocks') :
                                            <img className={'icon-image'} src={insertImage1}
                                                 alt={__('Upload image', 'vk-blocks')}/>}
                                    </Button>
                                )}
                            />
                        </BaseControl>
                    </PanelBody>
                    <PanelBody title={__('PR Block3 Setting', 'vk-blocks')}>
                        <BaseControl
                            label={__('Link URL:', 'vk-blocks')}
                        >
                            <TextControl
                                value={url2}
                                onChange={(value) => setAttributes({url2: value})}
                            />
                            <CheckboxControl
                                label={__('Open link new tab.', 'vk-blocks')}
                                checked={urlOpenType2}
                                onChange={(checked) => setAttributes({urlOpenType2: checked})}
                            />
                        </BaseControl>
                        <BaseControl
                            label={__('Icon 3', 'vk-blocks')}
                        >
                            <TextControl
                                label={__('Class name of the icon font you want to use:', 'vk-blocks')}
                                value={icon2}
                                onChange={(value) => setAttributes({icon2: value})}
                                placeholder={__('fa-file', 'vk-blocks')}
                            />
                            <ColorPalette
                                value={color2}
                                onChange={(value) => setAttributes({color2: value})}
                            />
                            <RadioControl
                                label={__('Icon Background:', 'vk-blocks')}
                                selected={bgType2}
                                options={[
                                    {label: __('Solid color', 'vk-blocks'), value: '0'},
                                    {label: __('No background', 'vk-blocks'), value: '1'},
                                ]}
                                onChange={(value) => setAttributes({bgType2: value})}
                            />
                        </BaseControl>
                        <BaseControl
                            label={__('PR Image 3', 'vk-blocks')}
                            help={__('When you have an image. Image is displayed with priority', 'vk-blocks')}
                        >
                            <MediaUpload
                                onSelect={(value) => setAttributes({insertImage2: value.url})}
                                type="image"
                                value={insertImage2}
                                render={({open}) => (
                                    <Button
                                        onClick={open}
                                        className={insertImage2 ? 'image-button' : 'button button-large'}
                                    >
                                        {!insertImage2 ? __('Select image', 'vk-blocks') :
                                            <img className={'icon-image'} src={insertImage2}
                                                 alt={__('Upload image', 'vk-blocks')}/>}
                                    </Button>
                                )}
                            />
                        </BaseControl>
                    </PanelBody>
                </InspectorControls>
                <article className="vk_prBlocks row">
                    <div className="vk_prBlocks_item col-sm-4">
                        {(() => {

                            if (insertImage0) {

                                return <div className="vk_prBlocks_item_image"
                                            style={{
                                                backgroundImage: 'url(' + insertImage0 + ')',
                                                backgroundRepeat: 'no-repeat 50% center',
                                                backgroundSize: 'cover'
                                            }}
                                >
                                    <img
                                        src={insertImage0}
                                        alt=''
                                    />
                                </div>

                            } else {

                                if (bgType0 === '0') {
                                    return <div
                                        className="vk_prBlocks_item_icon_outer"
                                        style={{
                                            backgroundColor: color0,
                                            border: `1px solid ${color0}`
                                        }}
                                    ><i className={`fa fas fab far ${icon0} font_icon vk_prBlocks_item_icon`}
                                        style={{color: '#fff'}}>
                                    </i>
                                    </div>
                                } else {
                                    return <div
                                        className="vk_prBlocks_item_icon_outer"
                                        style={{backgroundColor: 'transparent', border: '1px solid' + color0}}
                                    ><i className={`fa fas fab far ${icon0} font_icon vk_prBlocks_item_icon`}
                                        style={{color: color0}}>
                                    </i>
                                    </div>
                                }
                            }
                        })()}
                        <RichText
                            className="vk_prBlocks_item_title"
                            tagName="h1"
                            onChange={(value) => setAttributes({heading0: value})}
                            value={heading0}
                            placeholder={__('Input title', 'vk-blocks')}
                        />
                        <RichText
                            className="vk_prBlocks_item_summary"
                            tagName="p"
                            onChange={(value) => setAttributes({content0: value})}
                            value={content0}
                            placeholder={__('Input content', 'vk-blocks')}
                        />
                    </div>
                    <div className="vk_prBlocks_item col-sm-4">
                        {(() => {

                            if (insertImage1) {

                                return <div className="vk_prBlocks_item_image"
                                            style={{
                                                backgroundImage: 'url(' + insertImage1 + ')',
                                                backgroundRepeat: 'no-repeat 50% center',
                                                backgroundSize: 'cover'
                                            }}
                                >
                                    <img
                                        src={insertImage1}
                                        alt=''
                                    />
                                </div>

                            } else {

                                if (bgType1 === '0') {
                                    return <div
                                        className="vk_prBlocks_item_icon_outer"
                                        style={{
                                            backgroundColor: color1,
                                            border: `1px solid ${color1}`
                                        }}
                                    ><i className={`fa fas fab far ${icon1} font_icon vk_prBlocks_item_icon`}
                                        style={{color: '#fff'}}>
                                    </i>
                                    </div>
                                } else {
                                    return <div
                                        className="vk_prBlocks_item_icon_outer"
                                        style={{backgroundColor: 'transparent', border: '1px solid' + color1}}
                                    ><i className={`fa fas fab far ${icon1} font_icon vk_prBlocks_item_icon`}
                                        style={{color: color1}}>
                                    </i>
                                    </div>
                                }
                            }
                        })()}
                        <RichText
                            className="vk_prBlocks_item_title"
                            tagName="h1"
                            onChange={(value) => setAttributes({heading1: value})}
                            value={heading1}
                            placeholder={__('Input title', 'vk-blocks')}
                        />
                        <RichText
                            className="vk_prBlocks_item_summary"
                            tagName="p"
                            onChange={(value) => setAttributes({content1: value})}
                            value={content1}
                            placeholder={__('Input content', 'vk-blocks')}
                        />
                    </div>
                    <div className="vk_prBlocks_item col-sm-4">
                        {(() => {

                            if (insertImage2) {

                                return <div className="vk_prBlocks_item_image"
                                            style={{
                                                backgroundImage: 'url(' + insertImage2 + ')',
                                                backgroundRepeat: 'no-repeat 50% center',
                                                backgroundSize: 'cover'
                                            }}
                                >
                                    <img
                                        src={insertImage2}
                                        alt=''
                                    />
                                </div>

                            } else {

                                if (bgType2 === '0') {
                                    return <div
                                        className="vk_prBlocks_item_icon_outer"
                                        style={{
                                            backgroundColor: color2,
                                            border: `1px solid ${color2}`
                                        }}
                                    ><i className={`fa fas fab far ${icon2} font_icon vk_prBlocks_item_icon`}
                                        style={{color: '#fff'}}>
                                    </i>
                                    </div>
                                } else {
                                    return <div
                                        className="vk_prBlocks_item_icon_outer"
                                        style={{backgroundColor: 'transparent', border: '1px solid' + color2}}
                                    ><i className={`fa fas fab far ${icon2} font_icon vk_prBlocks_item_icon`}
                                        style={{color: color2}}>
                                    </i>
                                    </div>
                                }
                            }
                        })()}
                        <RichText
                            className="vk_prBlocks_item_title"
                            tagName="h1"
                            onChange={(value) => setAttributes({heading2: value})}
                            value={heading2}
                            placeholder={__('Input title', 'vk-blocks')}
                        />
                        <RichText
                            className="vk_prBlocks_item_summary"
                            tagName="p"
                            onChange={(value) => setAttributes({content2: value})}
                            value={content2}
                            placeholder={__('Input content', 'vk-blocks')}
                        />
                    </div>
                </article>
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
            heading0,
            heading1,
            heading2,
            content0,
            content1,
            content2,
            url0,
            url1,
            url2,
            urlOpenType0,
            urlOpenType1,
            urlOpenType2,
            icon0,
            icon1,
            icon2,
            color0,
            color1,
            color2,
            bgType0,
            bgType1,
            bgType2,
            insertImage0,
            insertImage1,
            insertImage2
        } = attributes;

        return (
            <article className="vk_prBlocks row">
                <div className="vk_prBlocks_item col-sm-4">
                    <a
                        href={url0}
                        target={urlOpenType0? '_blank':'_self'}
                        className="vk_prBlocks_item_link"
                    >
                        {(() => {

                            if (insertImage0) {

                                return <div className="vk_prBlocks_item_image"
                                            style={{
                                                backgroundImage: 'url(' + insertImage0 + ')',
                                                backgroundRepeat: 'no-repeat 50% center',
                                                backgroundSize: 'cover'
                                            }}
                                >
                                    <img
                                        src={insertImage0}
                                        alt=''
                                    />
                                </div>

                            } else {

                                if (bgType0 === '0') {
                                    return <div
                                        className="vk_prBlocks_item_icon_outer"
                                        style={{
                                            backgroundColor: color0,
                                            border: `1px solid ${color0}`
                                        }}
                                    ><i className={`fa fas fab far ${icon0} font_icon vk_prBlocks_item_icon`}
                                        style={{color: '#fff'}}>
                                    </i>
                                    </div>
                                } else {
                                    return <div
                                        className="vk_prBlocks_item_icon_outer"
                                        style={{backgroundColor: 'transparent', border: '1px solid' + color0}}
                                    ><i className={`fa fas fab far ${icon0} font_icon vk_prBlocks_item_icon`}
                                        style={{color: color0}}>
                                    </i>
                                    </div>
                                }
                            }
                        })()}
                        <RichText.Content
                            className="vk_prBlocks_item_title"
                            tagName={'h1'}
                            value={heading0}/>
                        <RichText.Content
                            className="vk_prBlocks_item_summary"
                            tagName={'p'}
                            value={content0}/>
                    </a>
                </div>
                <div className="vk_prBlocks_item col-sm-4">
                    <a
                        href={url1}
                        target={urlOpenType1? '_blank':'_self'}
                        className="vk_prBlocks_item_link"
                    >
                        {(() => {

                            if (insertImage1) {

                                return <div className="vk_prBlocks_item_image"
                                            style={{
                                                backgroundImage: 'url(' + insertImage1 + ')',
                                                backgroundRepeat: 'no-repeat 50% center',
                                                backgroundSize: 'cover'
                                            }}
                                >
                                    <img
                                        src={insertImage1}
                                        alt=''
                                    />
                                </div>

                            } else {

                                if (bgType1 === '0') {
                                    return <div
                                        className="vk_prBlocks_item_icon_outer"
                                        style={{
                                            backgroundColor: color1,
                                            border: `1px solid ${color1}`
                                        }}
                                    ><i className={`fa fas fab far ${icon1} font_icon vk_prBlocks_item_icon`}
                                        style={{color: '#fff'}}>
                                    </i>
                                    </div>
                                } else {
                                    return <div
                                        className="vk_prBlocks_item_icon_outer"
                                        style={{backgroundColor: 'transparent', border: '1px solid' + color1}}
                                    ><i className={`fa fas fab far ${icon1} font_icon vk_prBlocks_item_icon`}
                                        style={{color: color1}}>
                                    </i>
                                    </div>
                                }
                            }
                        })()}
                        <RichText.Content
                            className="vk_prBlocks_item_title"
                            tagName={'h1'}
                            value={heading1}/>
                        <RichText.Content
                            className="vk_prBlocks_item_summary"
                            tagName={'p'}
                            value={content1}/>
                    </a>
                </div>
                <div className="vk_prBlocks_item col-sm-4">
                    <a
                        href={url2}
                        target={urlOpenType2? '_blank':'_self'}
                        className="vk_prBlocks_item_link"
                    >
                        {(() => {

                            if (insertImage2) {

                                return <div className="vk_prBlocks_item_image"
                                            style={{
                                                backgroundImage: 'url(' + insertImage2 + ')',
                                                backgroundRepeat: 'no-repeat 50% center',
                                                backgroundSize: 'cover'
                                            }}
                                >
                                    <img
                                        src={insertImage2}
                                        alt=''
                                    />
                                </div>

                            } else {

                                if (bgType2 === '0') {
                                    return <div
                                        className="vk_prBlocks_item_icon_outer"
                                        style={{
                                            backgroundColor: color2,
                                            border: `1px solid ${color2}`
                                        }}
                                    ><i className={`fa fas fab far ${icon2} font_icon vk_prBlocks_item_icon`}
                                        style={{color: '#fff'}}>
                                    </i>
                                    </div>
                                } else {
                                    return <div
                                        className="vk_prBlocks_item_icon_outer"
                                        style={{backgroundColor: 'transparent', border: '1px solid' + color2}}
                                    ><i className={`fa fas fab far ${icon2} font_icon vk_prBlocks_item_icon`}
                                        style={{color: color2}}>
                                    </i>
                                    </div>
                                }
                            }
                        })()}
                        <RichText.Content
                            className="vk_prBlocks_item_title"
                            tagName={'h1'}
                            value={heading2}/>
                        <RichText.Content
                            className="vk_prBlocks_item_summary"
                            tagName={'p'}
                            value={content2}/>
                    </a>
                </div>
            </article>
        );
    },
});