import React from 'react';
import classNames from "classnames";

const {RichText} = wp.editor;
const {__} = wp.i18n; // Import __() from wp.i18n

export class Component extends React.Component {

    render() {
        const {level, align, title, titleColor, titleSize, subText, subTextFlag, subTextColor, subTextSize, titleStyle, titleMarginBottom, outerMarginBottom} = this.props.attributes;
        const setAttributes = this.props.setAttributes;
        let className = this.props.className;
        let for_ = this.props.for_;
        let containerClass = classNames(className, `vk_heading vk_heading-style-${titleStyle}`);
        const tagName = 'h' + level;
        let cStyle;
        let tStyle;

        //containerのマージンを切り替え
        if (outerMarginBottom != null) {
            cStyle = {marginBottom: outerMarginBottom + `rem`};
        }

        //titleのマージンを切り替え
        if(titleMarginBottom != null){
            tStyle = {
                color: titleColor,
                fontSize: titleSize + 'rem',
                marginBottom: titleMarginBottom + 'rem'
            };
        }else {
            tStyle = {
                color: titleColor,
                fontSize: titleSize + 'rem',
                textAlign: align,
            };
        }

        if(for_ === 'edit'){
            return (
                <div
                    className={containerClass}
                    style={cStyle}
                >
                    <RichText
                        tagName={tagName}
                        value={title}
                        onChange={(value) => setAttributes({title: value})}
                        style={tStyle}
                        className={`vk_heading_title vk_heading_title-style-${titleStyle}`}
                        placeholder={__('Input title…', 'vk-blocks')}
                    />
                    {
                        // サブテキスト
                        (() => {
                            if (subTextFlag === 'on') {
                                return (
                                    <RichText
                                        tagName={'p'}
                                        value={subText}
                                        onChange={(value) => setAttributes({subText: value})}
                                        style={{
                                            color: subTextColor,
                                            fontSize: subTextSize + 'rem',
                                            textAlign: align
                                        }}
                                        className={`vk_heading_subtext vk_heading_subtext-style-${titleStyle}`}
                                        placeholder={__('Input sub text…', 'vk-blocks')}
                                    />
                                );
                            }
                        })()
                    }
                </div>
            );
        }else if(for_ === 'save'){
            return (
                <div
                    className={containerClass}
                    style={cStyle}
                >
                    <RichText.Content
                        tagName={tagName}
                        value={title}
                        onChange={(value) => setAttributes({title: value})}
                        style={tStyle}
                        className={`vk_heading_title vk_heading_title-style-${titleStyle}`}
                        placeholder={__('Input title…', 'vk-blocks')}
                    />
                    {
                        // サブテキスト
                        (() => {
                            if (subTextFlag === 'on') {
                                return (
                                    <RichText.Content
                                        tagName={'p'}
                                        value={subText}
                                        onChange={(value) => setAttributes({subText: value})}
                                        style={{
                                            color: subTextColor,
                                            fontSize: subTextSize + 'rem',
                                            textAlign: align
                                        }}
                                        className={`vk_heading_subtext vk_heading_subtext-style-${titleStyle}`}
                                        placeholder={__('Input sub text…', 'vk-blocks')}
                                    />
                                );
                            }
                        })()
                    }
                </div>
            );
        }
    }
}