import React, {Component} from 'react';

class Table extends Component {
    render(){
        return (
            <table>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Job</th>
                </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Homer Simpson</td>
                        <td>Nuclear Safety Inspector</td>
                    </tr>
                    <tr>
                        <td>Moe Szylak</td>
                        <td>Bartender</td>
                    </tr>
                    <tr>
                        <td>Barney Gumble</td>
                        <td>Drunk</td>
                    </tr>
                </tbody>
            </table>
        );
    }
}
export default Table;