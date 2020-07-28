import hex2rgba from "./hex-to-rgba";
const GenerateBgImage = (props) => {
	const { attributes, clientId, prefix } = props;
	const {
		bgImageMobile,
		bgImageTablet,
		bgImage,
		bgColor,
		opacity,
		bgSize,
	} = attributes;

	const mobileViewport = "max-width: 575.98px";
	const tabletViewport = "min-width: 576px";
	const pcViewport = "min-width: 1200px";
	const underPcViewport = "max-width: 1199.98px";

	let backgroundStyle;
	let backgroundPosition = 'background-position:center!important;'
	if("cover" === bgSize){
		backgroundStyle = `background-size:${bgSize}!important; ${backgroundPosition}`
	}else if("repeat" === bgSize){
		backgroundStyle = `background-repeat:${bgSize}!important; ${backgroundPosition}`
	}else{
		backgroundStyle = ``
	}

	let bgColorWOpacity;

	//hexからrgbaに変換
	if (bgColor) {
		bgColorWOpacity = hex2rgba(bgColor, opacity);
	} else {
		//背景色をクリアした時は、白に変更
		bgColorWOpacity = hex2rgba("#fff", opacity);
	}

	//moible only
	if (bgImageMobile && !bgImageTablet && !bgImage) {
		return (
			<style>{ `.${prefix}-${clientId}{background: linear-gradient(${bgColorWOpacity}, ${bgColorWOpacity}), url(${bgImageMobile})!important; ${backgroundStyle}}`}</style>
		);
	}
	//tablet only
	if (!bgImageMobile && bgImageTablet && !bgImage) {
		return (
			<style>{ `.${prefix}-${clientId}{background: linear-gradient(${bgColorWOpacity}, ${bgColorWOpacity}), url(${bgImageTablet})!important; ${backgroundStyle}}`}</style>
		);
	}
	//pc only
	if (!bgImageMobile && !bgImageTablet && bgImage) {
		return (
			<style>{ `.${prefix}-${clientId}{background: linear-gradient(${bgColorWOpacity}, ${bgColorWOpacity}), url(${bgImage})!important; ${backgroundStyle}}`}</style>
		);
	}
	//pc -mobile
	if (bgImageMobile && !bgImageTablet && bgImage) {
		return (
			<style>
				{ `
          @media screen and (${underPcViewport}) {
            .${prefix}-${clientId}{background: linear-gradient(${bgColorWOpacity}, ${bgColorWOpacity}), url(${bgImageMobile})!important; ${backgroundStyle}}
         }
          @media screen and (${pcViewport}) {
            .${prefix}-${clientId}{background: linear-gradient(${bgColorWOpacity}, ${bgColorWOpacity}), url(${bgImage})!important; ${backgroundStyle}}
         }
          ` }
			</style>
		);
	}
	//pc -tablet
	if (!bgImageMobile && bgImageTablet && bgImage) {
		return (
			<style>
				{ `
          @media screen and (${underPcViewport}) {
            .${prefix}-${clientId}{background: linear-gradient(${bgColorWOpacity}, ${bgColorWOpacity}), url(${bgImageTablet})!important; ${backgroundStyle}}
         }
          @media screen and (${pcViewport}) {
            .${prefix}-${clientId}{background: linear-gradient(${bgColorWOpacity}, ${bgColorWOpacity}), url(${bgImage})!important; ${backgroundStyle}}
         }
          ` }
			</style>
		);
	}
	//tablet - mobile
	if (bgImageMobile && bgImageTablet && !bgImage) {
		return (
			<style>
				{ `
          @media screen and (${mobileViewport}) {
            .${prefix}-${clientId}{background: linear-gradient(${bgColorWOpacity}, ${bgColorWOpacity}), url(${bgImageMobile})!important; ${backgroundStyle}}
         }
          @media screen and (${tabletViewport}) {
            .${prefix}-${clientId}{background: linear-gradient(${bgColorWOpacity}, ${bgColorWOpacity}), url(${bgImageTablet})!important; ${backgroundStyle}}
         }
        ` }
			</style>
		);
	}
	//pc -tablet - mobile
	if (bgImageMobile && bgImageTablet && bgImage) {
		return (
			<style>
				{ `
        @media screen and (${mobileViewport}) {
          .${prefix}-${clientId}{background: linear-gradient(${bgColorWOpacity}, ${bgColorWOpacity}), url(${bgImageMobile})!important; ${backgroundStyle}}
       }
        @media screen and (${tabletViewport}) {
          .${prefix}-${clientId}{background: linear-gradient(${bgColorWOpacity}, ${bgColorWOpacity}), url(${bgImageTablet})!important; ${backgroundStyle}}
       }
        @media screen and (${pcViewport}) {
          .${prefix}-${clientId}{background: linear-gradient(${bgColorWOpacity}, ${bgColorWOpacity}), url(${bgImage})!important; ${backgroundStyle}}
       }
        ` }
			</style>
		);
	}
	//no background image
	if (!bgImageMobile && !bgImageTablet && !bgImage) {
		return (
			<style>{ `.${prefix}-${clientId}{background: linear-gradient(${bgColorWOpacity}, ${bgColorWOpacity})!important; ${backgroundStyle}}`}</style>
		);
	}
};
export default GenerateBgImage
