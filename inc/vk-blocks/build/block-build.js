!function(e){var t={};function a(n){if(t[n])return t[n].exports;var l=t[n]={i:n,l:!1,exports:{}};return e[n].call(l.exports,l,l.exports,a),l.l=!0,l.exports}a.m=e,a.c=t,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var l in e)a.d(n,l,function(t){return e[t]}.bind(null,l));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="",a(a.s=0)}([function(e,t,a){"use strict";a.r(t);a(1),a(2),a(3),a(4),a(5)},function(e,t){var a=wp.i18n.__,n=wp.blocks.registerBlockType,l=wp.editor.RichText;n("vk-blocks/alert",{title:a("Alert","vk-blocks"),icon:"info",category:"vk-blocks-cat",attributes:{style:{type:"string",default:"info"},content:{type:"string",source:"html",selector:"p"}},edit:function(e){var t=e.attributes,a=e.setAttributes,n=t.style,c=t.content;return React.createElement("div",{className:"alert alert-".concat(n)},React.createElement("select",{onChange:function(e){a({style:e.target.value})}},React.createElement("option",{value:"success",selected:"success"===n},"Success"),React.createElement("option",{value:"info",selected:"info"===n},"Info"),React.createElement("option",{value:"warning",selected:"warning"===n},"Warning"),React.createElement("option",{value:"danger",selected:"danger"===n},"Danger")),React.createElement(l,{tagName:"p",onChange:function(e){a({content:e})},value:c}))},save:function(e){var t=e.attributes,a=t.style,n=t.content;return React.createElement("div",{className:"alert alert-".concat(a)},React.createElement(l.Content,{tagName:"p",value:n}))}})},function(e,t){var a=wp.i18n.__,n=wp.blocks.registerBlockType,l=wp.components,c=(l.RangeControl,l.RadioControl),o=l.PanelBody,r=l.Button,s=wp.element.Fragment,i=wp.editor,u=i.RichText,m=i.InspectorControls,g=i.MediaUpload,v=i.ColorPalette,k=React.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"576",height:"512",viewBox:"0 0 576 512"},React.createElement("path",{d:"M544 450.583c0 22.75 13.014 42.454 32 52.092v7.969c-5.313 0.727-10.736 1.112-16.25 1.112-34.004 0-64.674-14.264-86.361-37.132-13.111 3.491-27.001 5.376-41.389 5.376-79.529 0-144-57.308-144-128s64.471-128 144-128c79.529 0 144 57.308 144 128 0 27.674-9.882 53.296-26.678 74.233-3.412 7.412-5.322 15.656-5.322 24.35zM115.339 110.593c-33.107 26.899-51.339 61.492-51.339 97.407 0 20.149 5.594 39.689 16.626 58.075 11.376 18.96 28.491 36.293 49.494 50.126 15.178 9.996 25.39 25.974 28.088 43.947 0.9 5.992 1.464 12.044 1.685 18.062 3.735-3.097 7.375-6.423 10.94-9.988 12.077-12.076 28.39-18.745 45.251-18.745 2.684 0 5.381 0.168 8.078 0.512 10.474 1.331 21.172 2.008 31.797 2.010v64c-13.564-0.001-26.877-0.869-39.871-2.521-54.989 54.989-120.625 64.85-184.088 66.298v-13.458c34.268-16.789 64-47.37 64-82.318 0-4.877-0.379-9.665-1.082-14.348-57.898-38.132-94.918-96.377-94.918-161.652 0-114.875 114.615-208 256-208 139.229 0 252.496 90.307 255.918 202.76-20.548-9.158-42.92-14.711-66.131-16.289-5.765-28.034-22.701-54.408-49.126-75.878-17.661-14.349-38.458-25.695-61.814-33.722-24.853-8.54-51.38-12.871-78.847-12.871s-53.994 4.331-78.847 12.871c-23.356 8.027-44.153 19.372-61.814 33.722z"}));n("vk-blocks/balloon",{title:a("Ballon","vk-blocks"),icon:k,category:"vk-blocks-cat",attributes:{content:{source:"html",selector:"p"},balloonName:{source:"html",selector:"figcaption"},balloonType:{type:"string",default:"type-serif"},balloonBgColor:{type:"string"},balloonAlign:{type:"string",default:"balloon-left"},IconImage:{type:"string",default:null}},edit:function(e){var t=e.attributes,n=e.className,l=e.setAttributes,i=t.content,k=t.balloonName,p=t.balloonType,d=t.balloonBgColor,b=t.balloonAlign,f=t.IconImage;return React.createElement(s,null,React.createElement(m,null,React.createElement(o,{title:a("Balloon setting","vk-blocks")},React.createElement(c,{label:a("Position","vk-blocks"),help:a("Please specify the layout of the balloon.","vk-blocks"),selected:b,options:[{label:a("Left","vk-blocks"),value:"balloon-left"},{label:a("Right","vk-blocks"),value:"balloon-right"}],onChange:function(e){return l({balloonAlign:e})}}),React.createElement(c,{label:a("Type","vk-blocks"),help:a("Please select the type of balloon.","vk-blocks"),selected:p,options:[{label:a("Serif","vk-blocks"),value:"type-serif"},{label:a("Thinking","vk-blocks"),value:"type-think"}],onChange:function(e){return l({balloonType:e})}}),React.createElement(v,{value:d,onChange:function(e){return l({balloonBgColor:e})}}))),React.createElement("div",{className:"".concat(n," ").concat(b," ").concat(p)},React.createElement("div",{className:"image"},React.createElement(g,{onSelect:function(e){return l({IconImage:e.sizes.full.url})},type:"image",className:"icon-image",value:f,render:function(e){var t=e.open;return React.createElement(r,{onClick:t,className:f?"image-button":"button button-large"},f?React.createElement("img",{className:"icon-image",src:f,alt:a("Upload image","vk-blocks")}):a("Select image","vk-blocks"))}}),React.createElement(u,{tagName:"figcaption",onChange:function(e){return l({balloonName:e})},value:k,placeholder:a("Icon Name","vk-blocks")})),React.createElement(u,{style:{background:d,border:d},tagName:"p",onChange:function(e){return l({content:e})},value:i,placeholder:a("Input text","vk-blocks")})))},save:function(e){var t=e.attributes,a=(e.className,t.content),n=t.balloonName,l=t.balloonType,c=t.balloonBgColor,o=t.balloonAlign,r=t.IconImage;return React.createElement("div",{className:"".concat(o," ").concat(l)},React.createElement("div",{className:"image"},r?React.createElement("figure",null,React.createElement("img",{className:"icon-image",src:r,alt:""}),React.createElement(u.Content,{tagName:"figcaption",value:n})):""),React.createElement(u.Content,{className:"text",style:{background:c,border:c},tagName:"p",value:a}))}})},function(e,t){var a=wp.i18n.__,n=wp.blocks.registerBlockType,l=wp.editor.RichText;n("vk-blocks/faq",{title:a("FAQ","vk-blocks"),icon:"editor-help",category:"vk-blocks-cat",attributes:{heading:{type:"string",source:"html",selector:"dt"},content:{type:"string",source:"html",selector:"dd"}},edit:function(e){var t=e.attributes,n=e.setAttributes,c=t.heading,o=t.content;return React.createElement("dl",{className:"vk_faq"},React.createElement(l,{tagName:"dt",className:"vk_faq_title",onChange:function(e){return n({heading:e})},value:c,placeholder:a("Please enter a question.","vk-blocks")}),React.createElement(l,{tagName:"dd",className:"vk_faq_content",onChange:function(e){return n({content:e})},value:o,placeholder:a("Please enter a answer.","vk-blocks")}))},save:function(e){var t=e.attributes,a=t.heading,n=t.content;return React.createElement("dl",{className:"vk_faq"},React.createElement(l.Content,{tagName:"dt",className:"vk_faq_title",value:a}),React.createElement(l.Content,{tagName:"dd",className:"vk_faq_content",value:n}))}})},function(e,t){var a=wp.i18n.__,n=wp.blocks.registerBlockType,l=wp.components,c=(l.RangeControl,l.RadioControl),o=l.PanelBody,r=l.Button,s=(l.PanelColor,wp.element.Fragment),i=wp.editor,u=i.RichText,m=i.InspectorControls,g=i.MediaUpload;i.ColorPalette;n("vk-blocks/flow",{title:a("Flow","vk-blocks"),icon:"arrow-down",category:"vk-blocks-cat",attributes:{heading:{type:"string",source:"html",selector:"dt"},content:{type:"string",source:"html",selector:"dd"},arrowFlag:{type:"string",default:"vk_flow-arrow-on"},insertImage:{type:"string",default:null}},edit:function(e){var t=e.attributes,n=e.setAttributes,l=t.heading,i=t.content,v=t.insertImage,k=t.arrowFlag;return[React.createElement(s,null,React.createElement(m,null,React.createElement(o,{title:a("Display of arrow","vk-blocks")},React.createElement(c,{selected:k,options:[{label:a("Arrow display","vk-blocks"),value:"vk_flow-arrow-on"},{label:a("Arrow hidden","vk-blocks"),value:"vk_flow-arrow-off"}],onChange:function(e){return n({arrowFlag:e})}}))),React.createElement("div",{className:"".concat(k," vk_flow")},React.createElement("div",{className:"vk_flow_frame"},React.createElement("dl",{className:"vk_flow_frame_text"},React.createElement(u,{tagName:"dt",className:"vk_flow_frame_text_title",onChange:function(e){return n({heading:e})},value:l,placeholder:a("Input title","vk-blocks")}),React.createElement(u,{tagName:"dd",className:"vk_flow_frame_text_content",onChange:function(e){return n({content:e})},value:i,placeholder:a("Input content","vk-blocks")})),React.createElement("div",{className:"vk_flow_frame_image"},React.createElement(g,{onSelect:function(e){return n({insertImage:e.url})},type:"image",className:"vk_flow_frame_image",value:v,render:function(e){var t=e.open;return React.createElement(r,{onClick:t,className:v?"image-button":"button button-large"},v?React.createElement("img",{className:"icon-image",src:v,alt:a("Upload image","vk-blocks")}):a("Select image","vk-blocks"))}})))))]},save:function(e){var t=e.attributes,a=t.heading,n=t.content,l=t.insertImage,c=t.arrowFlag;return React.createElement("div",{className:"".concat(c," vk_flow")},React.createElement("div",{className:"vk_flow_frame"},React.createElement("dl",{className:"vk_flow_frame_text"},React.createElement(u.Content,{tagName:"dt",className:"vk_flow_frame_text_title",value:a}),React.createElement(u.Content,{tagName:"dd",className:"vk_flow_frame_text_content",value:n})),l?React.createElement("div",{className:"vk_flow_frame_image"},React.createElement("img",{src:l,alt:""})):""))}})},function(e,t){var a=wp.i18n.__,n=wp.blocks.registerBlockType,l=wp.components,c=(l.RangeControl,l.RadioControl),o=l.PanelBody,r=l.Button,s=l.BaseControl,i=l.CheckboxControl,u=l.TextControl,m=wp.element.Fragment,g=wp.editor,v=g.RichText,k=g.InspectorControls,p=g.MediaUpload,d=g.ColorPalette;n("vk-blocks/pr",{title:a("PR Block","vk-blocks"),icon:"arrow-down",category:"vk-blocks-cat",attributes:{heading:{type:"string",source:"html",selector:"h1"},content:{type:"string",source:"html",selector:"p"},url:{type:"string",default:null},urlOpenType:{type:"Boolean",default:!1},icon:{type:"string",default:"fa-file-text-o"},color:{type:"string",default:null},bgType:{type:"string",default:"0"},insertImage:{type:"string",default:null}},edit:function(e){var t=e.attributes,n=e.setAttributes,l=t.heading,g=t.content,b=t.url,f=t.urlOpenType,R=t.icon,y=t.color,E=t.bgType,h=t.insertImage;return[React.createElement(m,null,React.createElement(k,null,React.createElement(o,{title:a("PR Block1 Setting","vk-blocks")},React.createElement(s,{label:a("Link URL:","vk-blocks")},React.createElement(u,{value:b,onChange:function(e){return n({url:e})}}),React.createElement(i,{label:a("Open link new tab.","vk-blocks"),checked:f,onChange:function(e){return n({urlOpenType:e})}})),React.createElement(s,{label:a("Icon 1","vk-blocks")},React.createElement(u,{label:a("Class name of the icon font you want to use:","vk-blocks"),value:R,onChange:function(e){return n({icon:e})}}),React.createElement(d,{value:y,onChange:function(e){return n({color:e})}}),React.createElement(c,{label:a("Icon Background:","vk-blocks"),selected:E,options:[{label:a("Solid color","vk-blocks"),value:"0"},{label:a("No background","vk-blocks"),value:"1"}],onChange:function(e){return n({bgType:e})}})),React.createElement(s,{label:a("PR Image 1","vk-blocks"),help:a("When you have an image. Image is displayed with priority","vk-blocks")},React.createElement(p,{onSelect:function(e){return n({insertImage:e.url})},type:"image",value:h,render:function(e){var t=e.open;return React.createElement(r,{onClick:t,className:h?"image-button":"button button-large"},h?React.createElement("img",{className:"icon-image",src:h,alt:a("Upload image","vk-blocks")}):a("Select image","vk-blocks"))}})))),React.createElement("div",null,React.createElement(v,{tagName:"h1",onChange:function(e){return n({heading:e})},value:l,placeholder:a("Input title","vk-blocks")}),React.createElement(v,{tagName:"p",onChange:function(e){return n({content:e})},value:g,placeholder:a("Input content","vk-blocks")})))]},save:function(e){var t=e.attributes,a=(t.heading,t.content,t.url),n=t.urlOpenType,l=(t.icon,t.color),c=t.bgType;t.insertImage;return React.createElement("article",{className:"veu_prBlocks prBlocks row"},React.createElement("div",{className:"prBlock col-sm-4"},React.createElement("a",{href:a,target:n},"0"===c?React.createElement("div",{className:"prBlock_icon_outer",style:{backgroundColor:l,border:"1px solid ".concat(l)}},React.createElement("i",{className:"1px solid ".concat(l," font_icon prBlock_icon"),style:"color:".concat(l)})):React.createElement("div",{className:"prBlock_icon_outer",style:{backgroundColor:"none",border:"1px solid ".concat(l)}},React.createElement("i",{className:"1px solid ".concat(l," font_icon prBlock_icon"),style:"color:".concat(l)})),React.createElement("h1",{className:"prBlock_title"},"Service"),React.createElement("p",{className:"prBlock_summary"},"fdsafasdgasdf"))))}})}]);
//# sourceMappingURL=block-build.js.map