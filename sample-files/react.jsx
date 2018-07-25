import React from "react";

import calculate from "../logic/calculate";

import "./App.css";
import ButtonPanel from "./ButtonPanel";
import Display from "./Display";

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			total: `test`,
			next: null,
			operation: null,
		};
	}

	handleClick = (buttonName) => {
		this.setState(calculate(this.state, buttonName));
	};

	testing123 = () => /^regexTesting$[123](abc)$/.exec(`abcdefg`);

	testing456 = () => /^regexTesting[123](abc)$/.exec(`abcdefg`);

	render() {
		return (
			<div className="component-app">
				Tacos
				<Display value={this.state.next || this.state.total || `0`} />
				<ButtonPanel clickHandler={this.handleClick} />
			</div>
		);
	}
}
export default App;
