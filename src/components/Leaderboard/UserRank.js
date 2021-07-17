import { useState, useEffect } from 'react';
import './Leaderboard.css';
import axiosInstance from '../../axios';
const UserRank = ({result, userScore}) => {

    return ( 
        <div className="userrank">
            <td>
                <p className="data">{result.rank}</p>
            </td>
            <td>
                <p className="datauser">{result.username}</p>
            </td>
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
            <td>
                <p className="datascore">{result.score}</p>
            </td>
        </div>
     );
}
 
export default UserRank;