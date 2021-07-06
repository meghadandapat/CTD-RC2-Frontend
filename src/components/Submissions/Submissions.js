import { ProgressBar} from "react-bootstrap";
import { useState, useEffect } from 'react';
import { Table } from "react-bootstrap";
import React from 'react';
import "./Submissions.css";
import QueCard from "./QueCard";
import SubCard from "./SubCard";
import ReactPaginate from 'react-paginate';
import axiosInstance from '../../axios';





const Submissions = () => {
    const [queno, setQueno] = useState(1);

    const [qdetails, setQdetails] = useState([]);

    useEffect(() => {
        console.log(queno);
        axiosInstance.post('submissions/', {qno: queno}).then((res) => {
            console.log(res.data);
            setQdetails(res.data);
        });
    }, [setQdetails,queno])

    

    

    

    

    

    return (
        <div className="sub">
            <div className="row qbuttons">
            <ReactPaginate
                previousLabel={"previous"}
                nextLabel={"next"}
                breakLabel={"..."}
                breakClassName={"break-me"}
                pageCount={6}
                onPageChange={(e) => setQueno(e.selected + 1)}
                containerClassName={"pagination"}
                subContainerClassName={"pages pagination"}
                activeClassName={"active"} />
                

                

            </div>
            <div className="ques1">


    

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