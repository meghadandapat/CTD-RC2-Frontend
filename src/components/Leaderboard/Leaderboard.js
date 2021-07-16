import { Table } from "react-bootstrap"
import LeaderRow from "./LeaderRow"
import './Leaderboard.css';
import React, { useState, useEffect } from 'react'
import ReactPaginate from 'react-paginate';
import TitleLeader from "./TitleLeader";
import UserRank from "./UserRank";
import Preloader from '../Preloader/Preloader';
import axiosInstance from "../../axios";

const Leaderboard = () => {
    const [userScore, setUserScore] = useState([]);
    const [result, setResult] = useState({});
    const [pagecount, setPagecount] = useState(1)
    const [isLoading, setIsLoading] = useState(true)
    const [datas, setDatas] = useState([{
        username: "",
        score_list: [],
        total_score: null,
        rank: null
    }]);
 
    const [page, setPage] = useState(0);

    useEffect(() => {
        axiosInstance.get('leaderboard/?page=' + page).then((res) => {
            console.log(res)
            setPagecount(res.data.page_range.length)
            setDatas(res.data.page_obj.data);
            setIsLoading(false)
        })
        
    }, [setDatas, page, pagecount])

    useEffect(() => {
        axiosInstance.get('leaderboard/').then((res) => {
   
          setResult({
            username: res.data.username,
            rank: res.data.rank,
            score: res.data.score,
         })
        })
        for(let i=0; i<datas.length; i++){
            if(datas[i].username===result.username) setUserScore(datas[i].score_list);
                
        }
      }, [setResult])

      if (isLoading) return <Preloader />
    return ( 
        <div className="leaderboard">
            <Table striped borderless hover responsive className="leadertable">
                <thead>
                    
                        <TitleLeader/>
                    
                </thead>
                
                    {datas.map((data)=>(
                        data.rank%2!==0 && <tr className="tablerow"><LeaderRow data={data}/></tr> ||
                        data.rank%2!==0 || <tr className="tablerow"><LeaderRow data={data} /></tr>
                    ))}
                <UserRank result={result} userScore={userScore}/>
            </Table>
            <ReactPaginate
                previousLabel={"Previous"}
                nextLabel={"Next"}              
                initialPage={0}
                pageCount={pagecount}
                onPageChange={(e) => setPage(e.selected + 1)}
                containerClassName={"pagination"}
                subContainerClassName={"pages pagination"}
                activeClassName={"active"} />
                <div className="leaderspacing"></div>
        </div>
     );
}
 
export default Leaderboard;