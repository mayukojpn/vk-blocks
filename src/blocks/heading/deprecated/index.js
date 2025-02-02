import save0_24_1 from './0.24.1/save';
import save0_24_2 from './0.24.2/save';
import save0_24_3 from './0.24.3/save';
import save0_24_4 from './0.24.4/save';
import save0_24_5 from './0.24.5/save';
import save0_24_6 from './0.24.6/save';
import save0_24_7 from './0.24.7/save';
import save0_37_1 from './0.37.1/save';
import save0_39_5 from './0.39.5/save';
import save0_40_0 from './0.40.0/save';
import save0_40_1 from './0.40.1/save';
import save0_60_1 from './0.60.1/save';
import save1_3_2 from './1.3.2/save';

const blockAttributes = {
	level: {
		type: 'number',
		default: 2,
	},
	align: {
		type: 'string',
	},
	titleStyle: {
		type: 'string',
		default: 'default',
	},
	outerMarginBottom: {
		type: 'number',
	},
	title: {
		type: 'string',
		source: 'html',
		selector: 'h1,h2,h3,h4,h5,h6',
		default: '',
	},
	titleColor: {
		type: 'string',
		default: '#000000',
	},
	titleSize: {
		type: 'number',
		default: 2, // version < 0.17.7 は デフォルト値が 2.6
	},
	titleMarginBottom: {
		type: "number",
		default: 1
	},
	subText: {
		source: 'html',
		selector: 'p',
		default: '',
	},
	subTextFlag: {
		type: 'string',
		default: 'on',
	},
	subTextColor: {
		type: 'string',
		default: '#000000',
	},
	subTextSize: {
		type: 'number',
		default: 1.2,
	},
};

const blockAttributes2 = {
	anchor: {
		type: 'string',
		source: 'attribute',
		attribute: 'id',
		selector: '*',
	},
	...blockAttributes,
	title: {
		type: 'string',
		source: 'html',
		selector: 'span',
		default: '',
	},		
	fontAwesomeIconBefore: {
		type: 'string',
		default: '',
	},
	fontAwesomeIconAfter: {
		type: 'string',
		default: '',
	},
	fontAwesomeIconColor: {
		type: 'string',
		default: '#000000',
	},
}

const blockAttributes3 = {
	...blockAttributes2,
	outerMarginBottom: {
		type: 'number',
		default: 0
	}
}

const deprecated = [
	{
		attributes: blockAttributes3,
		save: save1_3_2,
	},
	{
		attributes: blockAttributes2,
		save: save0_60_1,
	},
	{
		attributes: blockAttributes2,
		save: save0_40_1,
	},
	{
		attributes: blockAttributes2,
		save: save0_40_0,
	},
	{
		attributes: blockAttributes2,
		save: save0_39_5,
	},
	{
		attributes: blockAttributes2,
		save: save0_37_1,
	},
	{
		attributes: {
			...blockAttributes,
			anchor: {
				type: 'string',
				source: 'attribute',
				attribute: 'id',
				selector: '*',
			},
		},
		save: save0_24_7,
	},
	{
		attributes: {
			...blockAttributes,
			anchor: {
				type: 'string',
				source: 'attribute',
				attribute: 'id',
				selector: '*',
			},
		},
		save: save0_24_6,
	},
	{
		attributes: {
			...blockAttributes,
			anchor: {
				type: 'string',
				source: 'attribute',
				attribute: 'id',
				selector: '*',
			},
		},
		save: save0_24_5,
	},
	{
		attributes: {
			...blockAttributes,
			anchor: {
				type: 'string',
				source: 'attribute',
				attribute: 'id',
				selector: '*',
			},
		},
		save: save0_24_4,
	},
	{
		attributes: {
			...blockAttributes,
			anchor: {
				type: 'string',
				source: 'attribute',
				attribute: 'id',
				selector: '*',
			},
		},
		save: save0_24_3,
	},
	{
		attributes: {
			...blockAttributes,
			anchor: {
				type: 'string',
				source: 'attribute',
				attribute: 'id',
				selector: '*',
			},
		},
		save: save0_24_2,
	},
	{
		attributes: blockAttributes,
		save: save0_24_1,
	},
];
export default deprecated;
