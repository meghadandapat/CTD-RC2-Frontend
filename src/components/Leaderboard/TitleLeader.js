import './Leaderboard.css';
import { Table } from "react-bootstrap";
const TitleLeader = () => {
    return ( 
        <div className="leaderrow">
            <tr className="tabletitle">
                <td rowSpan="2">
                    <p className="data trank">Rank</p>
                </td>
                <td rowSpan="2">
                    <p className="datauser tuser">Username</p>
                </td>
                <td colSpan="6" >
                    <p className="data">Question</p>
                </td>
                <td rowSpan="2">
                    <p className="datascore tscore">Total Score</p>
                </td>
            </tr>
            <tr className="tabletitle">
                <td>
                    <p className="data">Q1</p>
                </td>
                <td>
                    <p className="data">Q2</p>
                </td>
                <td>
                    <p className="data">Q3</p>
                </td>
                <td>
                    <p className="data">Q4</p>
                </td>
                <td>
                    <p className="data">Q5</p>
                </td>
                <td>
                    <p className="data">Q6</p>
                </td>
            </tr>
        </div>
     );
}
 
export default TitleLeader;