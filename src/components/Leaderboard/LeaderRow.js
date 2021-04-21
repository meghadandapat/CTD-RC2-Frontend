import './Leaderboard.css';
import { Table } from "react-bootstrap";
const LeaderRow = ({rank, username, score}) => {
    return ( 
        <div className="leaderrow">
            
                <td>
                    <p className="data">{rank}</p>
                </td>
                <td>
                    <p className="data">{username}</p>
                </td>
                <td>
                    <p className="data">{score}</p>
                </td>
            
        </div>
     );
}
 
export default LeaderRow;