import { ProgressBar} from "react-bootstrap";
import { useState } from 'react';
import { Table } from "react-bootstrap";
import React from 'react';
import "./Submissions.css";
import QueCard from "./QueCard";
import SubCard from "./SubCard";
import ReactPaginate from 'react-paginate';

const Submissions = () => {
    const [queno, setQueno] = useState(1);

    const [qdetails, setQdetails] = useState([
        {id:1, time:'00:00', progress:10 },
        {id:2, time:'00:00', progress:70 },]);

   

  

    return (
        <div className="sub">
            
            <ReactPaginate
            previousClassName="hidelabel"
                    nextClassName="hidelabel"
                    pageClassName="chooseque"
    pageCount={6}
    onPageChange={console.log("click")}
    containerClassName={"pagination"}
    subContainerClassName={"pages pagination"}
    activeClassName={"active"} />
         
          <div className="ques">
                <QueCard qno={queno} />
                {qdetails.map((que) => (
                    <div className="que-preview" key={que.id}>
                    {que.id!==0 && <SubCard
                    attemptNo={que.id}
                    time={que.time}
                    progbar={<ProgressBar animated
                        now={que.progress}
                    />}
                
                    />}
                </div>       
                ))}
            </div>


            <div className="space"></div>
        </div>
    );
}
 
export default Submissions;