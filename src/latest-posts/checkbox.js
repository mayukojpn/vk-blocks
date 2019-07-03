'use strict';
import React from "react";

const {CheckboxControl} = wp.components;

/**
 *
 * @param reactDomToRender
 * @param slug
 * @param checkedData
 * @param setAttributes
 * @returns {*}
 */
const renderPostTypes = (reactDomToRender, slug, checkedData, setAttributes) => {

    if(!Array.isArray(checkedData)){
        return false
    }

    if(checkedData)
    return (reactDomToRender.push(
        <CheckboxControl
            label={slug}
            checked={checkedData.some(item => item === slug)}
            onChange={(value) => {
                if (value) {
                    checkedData.push(slug);
                    }else {
                    checkedData = checkedData.filter(elm => elm !== slug);
                    }
                setAttributes({isCheckedPostType: JSON.stringify(checkedData)});
                }
            }
        />));
};

const renderTaxonomy = (reactDomToRender, slug, checkedData, setAttributes) => {
    return (reactDomToRender.push(
        <CheckboxControl
            label={slug}
            checked={checkedData.some(item => item === slug)}
            onChange={(value) => {
                if (value) {
                    checkedData.push(slug);
                } else {
                    checkedData = checkedData.filter(elm => elm !== slug);
                }
                setAttributes({isCheckedPostType: JSON.stringify(checkedData)});
            }
            }
        />));
};


/**
 *
 * @param args
 * @returns {*}
 */
const addCheckBox = (args) => {

    if (!args.originData) {
        return false
    }

    const name = args.name;
    const originData = args.originData;
    const checkedData = args.checkedData;
    const setAttributes = args.setAttributes;
    const reactDomToRender = [];

    for (let child in originData) {

        let slug = originData[child].slug;
        // console.log(slug);
        // console.log(checkedData);

        switch (name) {
            case 'postTypes':
                renderPostTypes(reactDomToRender, slug, checkedData, setAttributes);
                break;

            case 'taxonomy':
                renderTaxonomy(reactDomToRender, slug, checkedData, setAttributes);
                break;

            default:
        }
    }
    return (
        <ul>
            {reactDomToRender}
        </ul>
    );
};

export default addCheckBox;
