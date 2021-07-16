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
                <p className="data">{userScore[0]}</p>
            </td>
            <td>
                <p className="data">{userScore[1]}</p>
            </td>
            <td>
                <p className="data">{userScore[2]}</p>
            </td>
            <td>
                <p className="data">{userScore[3]}</p>
            </td>
            <td>
                <p className="data">{userScore[4]}</p>
            </td>
            <td>
                <p className="data">{userScore[5]}</p>
            </td>
            <td>
                <p className="datascore">{result.score}</p>
            </td>
        </div>
     );
}
 
export default UserRank;