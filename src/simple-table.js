import TableHeader from './simple-table-head';
import TableBody from './simple-table-body';

class SimpleTable extends Component {
    render() {
        return(
            <table>
                <TableHeader />
                <TableBody />
            </table>
        );
    }
}
export default SimpleTable;