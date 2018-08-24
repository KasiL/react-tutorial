import React, {Component} from 'react';
import Table from './Table';
import SimpleTable from './simple-table';

// Class Component
class App extends Component {
	render() {
		return(
			<div className="container">
				<Table />
			</div>
		);
	}
}

// Simple Component

// class App extends Component {
//     render() {
//         return (
// 			<SimpleTable />
//         );
//     }
// }

export default App;