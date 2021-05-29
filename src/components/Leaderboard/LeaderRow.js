import './Leaderboard.css';
import { Table } from "react-bootstrap";
const LeaderRow = ({data}) => {
    return ( 
        <div className="leaderrow">
            
                <td>
                    <p className="data">{data.rank}</p>
                </td>
                <td>
                    <p className="datauser">{data.username}</p>
                </td>
                <td>
                    <p className="data">{data.q1}</p>
                </td>
                <td>
                    <p className="data">{data.q2}</p>
                </td>
                <td>
                    <p className="data">{data.q3}</p>
                </td>
                <td>
                    <p className="data">{data.q4}</p>
                </td>
                <td>
                    <p className="data">{data.q5}</p>
                </td>
                <td>
                    <p className="data">{data.q6}</p>
                </td>
                <td>
                    <p className="datascore">{data.total}</p>
                </td>
            
        </div>
     );
}
 
export default LeaderRow;