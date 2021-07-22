import Resultcards from "./Resultcards";
import "./Result.css";
import { useState, useEffect } from 'react';
import axiosInstance from '../../axios';
import { logout } from '../utils/index';

import gold from "../svgs/Gold.svg";
import silver from "../svgs/Silver.svg";
import bronze from "../svgs/Bronze.svg";

const Result = () => {

  localStorage.removeItem('saved_countdown');


  const [result, setResult] = useState({});
  const[topThree, setTopThree] = useState([
    {username: "Loading..."},
    {username: "Loading..."},
    {username: "Loading..."}
  ]);
  

  useEffect(() => {
    axiosInstance.get('leaderboard/').then((res) => {
      
      setResult({
        username: res.data.username,
        firstchar: res.data.username.charAt(0).toUpperCase(),
        rank: res.data.rank,
        score: res.data.score

      })
      setTopThree(res.data.page_obj.data);
      
    })
    
    logout();
  }, [setResult])


  

  return (
    <div className="fluid-container resultpage ">
      <div className="row" style={{ marginTop: "7vh" }}>
        <div className="col-sm-4 ">
          <div className="row justify-content-center">
            <Resultcards username={result.username} rank={result.rank} score={ result.score } firstchar={result.firstchar} />
          </div>
        </div>
        <div className="col-sm-8">
          <div className="row ">
            <div className="col text-center">
              <img className="svgs  svg-down" src={gold} alt="Rank 1" />
              <p className="svg-rank">{topThree[0].username}</p>
            </div>
          </div>
          <div className="row row2">
            <div className="col text-center">
              <img className="svgs" src={silver} alt="rank 2" />
              <p className="svg-rank">{topThree[1].username}</p>
            </div>
            <div className="col bronze text-center">
              <img className="svgs svg-down" src={bronze} alt="My Happy SVG" />
              <p className="svg-rank">{topThree[2].username}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Result;