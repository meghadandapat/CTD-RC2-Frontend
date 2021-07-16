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
                    <p className="data">{data.score_list[0]}</p>
                </td>
                <td>
                    <p className="data">{data.score_list[1]}</p>
                </td>
                <td>
                    <p className="data">{data.score_list[2]}</p>
                </td>
                <td>
                    <p className="data">{data.score_list[3]}</p>
                </td>
                <td>
                    <p className="data">{data.score_list[4]}</p>
                </td>
                <td>
                    <p className="data">{data.score_list[5]}</p>
                </td>
                <td>
                    <p className="datascore">{data.total_score}</p>
                </td>
            
        </div>
     );
}
 
export default LeaderRow;