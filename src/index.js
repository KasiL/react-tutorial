import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
class App extends Component {
	render() {
		const name = "Charles";
		return (
			<div className="App" >
				<h1> Hello {name}! </h1> 
			</div>
		);
	}
}

ReactDOM.render( <App /> , document.getElementById('root'));