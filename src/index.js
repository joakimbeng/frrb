import React from 'react';
import cn from 'classnames';
import cngen from 'cngen';
import {alternateClass} from './vars';
import {fatResponsiveRadiobutton} from './style';

const className = cngen(fatResponsiveRadiobutton);
let buttons = 0;

export default class FatResponsiveRadiobutton extends React.Component {
	static propTypes = {
		striked: React.PropTypes.bool,
		id: React.PropTypes.string,
		caption: React.PropTypes.string,
		children: React.PropTypes.node
	};

	componentWillMount() {
		if (this.props.id) {
			this._id = this.props.id;
		} else {
			this._id = `fat-responsive-radiobutton-${++buttons}`;
		}
	}

	render() {
		const {striked, caption, children, ...props} = this.props;
		return (
			<div>
				<input
					{...props}
					type="radio"
					id={this._id}
					className={cn(className, {[alternateClass]: striked})}
					/>
				<label htmlFor={this._id}>{children || caption}</label>
			</div>
		);
	}
}
