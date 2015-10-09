'use strict';
import {size, alternateClass, transitionTime} from './vars';

exports.fatResponsiveRadiobutton = {
	'opacity': 0,
	'position': 'absolute',
	'display': 'inline-block',
	'verticalAlign': 'middle',
	'zIndex': 100,
	'& + label': {
		'paddingLeft': vmin(size * 1.5),
		'display': 'block',
		'position': 'relative',
		'height': vmin(size),
		'lineHeight': vmin(size),
		'fontSize': vmin(size / 2),
		'cursor': 'pointer',
		'overflow': 'hidden',
		'::before': {
			content: '""',
			display: 'inline-block',
			width: vmin(size),
			height: vmin(size),
			position: 'absolute',
			left: 0,
			top: '50%',
			marginTop: vmin(-size / 2),
			border: prop([
				vmin(0.75),
				'solid',
				'#666'
			]),
			borderRadius: '50%',
			boxShadow: prop([
				'inset',
				vmin(0.5),
				vmin(0.5),
				vmin(0.5),
				'0',
				'rgba(153, 153, 153, 0.75)'
			]),
			cursor: 'pointer'
		},
		'::after': {
			content: '""',
			cursor: 'pointer',
			transition: `color ${transitionTime}, opacity ${transitionTime}`,
			boxShadow: prop([
				vmin(0.3),
				vmin(0.3),
				vmin(0.3),
				'0',
				'rgba(153, 153, 153, 0.75)'
			]),
			display: 'inline-block',
			textAlign: 'center',
			position: 'absolute',
			left: vmin(2.5),
			top: vmin(2.5),
			width: 0,
			height: 0,
			zIndex: 2,
			fontSize: vmin(0.1),
			border: prop([vmin(2.5), 'solid']),
			borderRadius: '50%',
			opacity: 0
		}
	},
	':checked + label': {
		'::after': {
			opacity: 1
		}
	},
	[`&.${alternateClass}`]: {
		'& + label': {
			'transition': `color ${transitionTime}, text-decoration ${transitionTime}`,
			'::after': {
				transition: `opacity ${transitionTime}`
			}
		},
		':checked + label': {
			'textDecoration': 'line-through',
			'color': '#999',
			'::before': {
				borderColor: '#999'
			}
		}
	},
	':focus + label': {
		outline: [
			'rgba(33, 33, 33, .2) solid 5px',
			'-moz-outline-color auto 5px',
			'-webkit-focus-ring-color auto 5px'
		]
	}
};

function vmin(val) {
	return `${val}vmin`;
}

function prop(val) {
	return val.join(' ');
}
