import React from 'react';
import Radiobutton from './';

class App extends React.Component {
	render() {
		return (
			<ul>
				<li>
					<Radiobutton name="radio" defaultChecked>
						Fat
					</Radiobutton>
				</li>
				<li>
					<Radiobutton name="radio" caption="Responsive" />
				</li>
				<li>
					<Radiobutton name="radio" striked>
						Radiobutton
					</Radiobutton>
				</li>
			</ul>
		);
	}
}

React.render(
	<App />,
	document.body
);
