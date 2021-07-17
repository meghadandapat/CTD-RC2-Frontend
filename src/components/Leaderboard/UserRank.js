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
                <p className="data"></p>
            </td>
            <td>
                <p className="data"></p>
            </td>
            <td>
                <p className="data"></p>
            </td>
            <td>
                <p className="data"></p>
            </td>
            <td>
                <p className="data"></p>
            </td>
            <td>
                <p className="data"></p>
            </td>
            <td>
                <p className="datascore">{result.score}</p>
            </td>
        </div>
     );
}
 
export default UserRank;