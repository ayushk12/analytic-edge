import React, { Component } from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"

class Titles extends Component {
	render() {
		return (
			<div className="text-center mt-5">
				<h1>Weather Finder</h1>
				<p className="lead mb-20"><b>Find out Temperature conditions and more!..</b></p>

			</div>
		);
	}
};

export default Titles;