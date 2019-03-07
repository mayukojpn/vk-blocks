/**
 * heading block type
 *
 */
import React from "react";
import {schema} from './schema';
import HeadingToolbar from './heading-toolbar';
const {RichText, InspectorControls, ColorPalette, BlockControls, AlignmentToolbar} = wp.editor;

export const Version0_6_0 = [
    {

        attributes: schema,
        supports : {
            className: false,
            anchor: true,
        },

        save({attributes}) {
            const {level, align, title, titleColor, titleSize, subText, subTextFlag, subTextColor, subTextSize, titleStyle, titleMarginBottom, outerMarginBottom} = attributes;
            const tagName = 'h' + level;

            return (
                <div
                    className={`vk_heading vk_heading-style-${titleStyle}`}
                    style={{marginBottom: outerMarginBottom + `rem`}}
                >
                    <RichText.Content
                        tagName={tagName}
                        value={title}
                        style={{
                            color: titleColor,
                            fontSize: titleSize + 'rem',
                            textAlign: align,
                            marginBottom: titleMarginBottom + 'rem'
                        }}
                        className={`vk_heading_title vk_heading_title-style-${titleStyle}`}
                    />
                    {
                        // サブテキスト
                        (() => {
                            if (subTextFlag === 'on') {
                                return (
                                    <RichText.Content
                                        tagName={'p'}
                                        value={subText}
                                        style={{color: subTextColor, fontSize: subTextSize + 'rem', textAlign: align}}
                                        className={`vk_heading_subtext vk_heading_subtext-style-${titleStyle}`}
                                    />
                                );
                            }
                        })()
                    }
                </div>
            );
        }
    }
];
