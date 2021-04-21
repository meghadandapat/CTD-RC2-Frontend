import { Table } from "react-bootstrap"
import LeaderRow from "./LeaderRow"
import './Leaderboard.css';
import { useState } from "react";

const Leaderboard = () => {
    const [data, setData] = useState([
        {rank:'1', username:'ABC', score:'80'},
        {rank:'2', username:'DEF', score:'78'},
        {rank:'3', username:'GHI', score:'77'},
        {rank:'4', username:'JKL', score:'69'},
        {rank:'5', username:'MNO', score:'58'},
        {rank:'6', username:'PQR', score:'50'},
        {rank:'7', username:'STU', score:'49'}
    ])
    return ( 
        <div className="leaderboard">
            <Table striped bordered hover responsive classname="leadertable">
                <thead>
                    <tr className="tablerow">
                        <LeaderRow rank="Rank" username="Name" score="Score" />
                    </tr>
                </thead>
                
                    {data.map((data)=>(
                        data.rank%2!==0 && <tr className="tablerow"><LeaderRow rank={data.rank} username={data.username} score={data.score} /></tr> ||
                        data.rank%2!==0 || <tr className="tablerow"><LeaderRow rank={data.rank} username={data.username} score={data.score} /></tr>
                    ))}
                
            </Table>
        </div>
     );
}
 
export default Leaderboard;