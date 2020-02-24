import React from 'react';
import ReactDom from 'react-dom';

class Car extends React.Component {
	render() {
		return <h2>Hi, I am a {this.props.brand} Car!</h2>
	}
}

const myelement = <Car brand="Ford" />

export default Car;