import { Table } from "react-bootstrap"
import LeaderRow from "./LeaderRow"
import './Leaderboard.css';
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ReactPaginate from 'react-paginate';
import TitleLeader from "./TitleLeader";

const Leaderboard = () => {
    const [data, setData] = useState([
        {rank:'1', username:'ABC',q1:60,q2:60, q3:60, q4:60,q5:60,q6:60, total:'80'},
        {rank:'2', username:'DEF',q1:60,q2:60, q3:60, q4:60,q5:60,q6:60, total:'78'},
        {rank:'3', username:'GHI',q1:60,q2:60, q3:60, q4:60,q5:60,q6:60, total:'77'},
        {rank:'4', username:'JKL',q1:60,q2:60, q3:60, q4:60,q5:60,q6:60, total:'69'},
        {rank:'5', username:'MNO',q1:60,q2:60, q3:60, q4:60,q5:60,q6:60, total:'58'},
        {rank:'6', username:'PQR',q1:60,q2:60, q3:60, q4:60,q5:60,q6:60, total:'50'}
    ])
    return ( 
        <div className="leaderboard">
            <Table striped borderless hover responsive className="leadertable">
                <thead>
                    
                        <TitleLeader/>
                    
                </thead>
                
                    {data.map((data)=>(
                        data.rank%2!==0 && <tr className="tablerow"><LeaderRow data={data}/></tr> ||
                        data.rank%2!==0 || <tr className="tablerow"><LeaderRow data={data} /></tr>
                    ))}
                
            </Table>
            <ReactPaginate
                previousLabel={"previous"}
                nextLabel={"next"}
                breakLabel={"..."}
                breakClassName={"break-me"}
                /*pageCount={pageCount}*/
                onPageChange={console.log("click")}
                containerClassName={"pagination"}
                subContainerClassName={"pages pagination"}
                activeClassName={"active"} />
        </div>
     );
}
 
export default Leaderboard;