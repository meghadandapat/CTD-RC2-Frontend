import { ProgressBar} from "react-bootstrap";
import { useState } from 'react';
import { Table } from "react-bootstrap";
import React from 'react';
import "./Submissions.css";
import QueCard from "./QueCard";
import SubCard from "./SubCard";


const Submissions = () => {
    const [queno, setQueno] = useState(1);

    const [qdetails, setQdetails] = useState([
        {id:1, time:'00:00', progress:10 },
        {id:2, time:'00:00', progress:70 },]);

    function questionHandler(e){
        setQueno(e.target.value)
        setQdetails([
                    {id:1, time:'00:00', progress:10 },
                    {id:2, time:'00:00', progress:70 },
                ])
    }

    function questionHandler2(e){
        setQueno(e.target.value)
        setQdetails([
                    {id:1, time:'00:00', progress:0 },
                    {id:2, time:'00:00', progress:60 },
                    {id:3, time:'00:00', progress:50 },
                ])
    }

    function questionHandler3(e){
        setQueno(e.target.value)
        setQdetails([
                    {id:1, time:'00:00', progress:0 },
                    {id:2, time:'00:00', progress:60 },
                    {id:3, time:'00:00', progress:15 },
                    {id:4, time:'00:00', progress:43 },
                ])
    }

    function questionHandler4(e){
        setQueno(e.target.value)
        setQdetails([
                    {id:1, time:'00:00', progress:88 },
                    {id:2, time:'00:00', progress:60 },
                    {id:3, time:'00:00', progress:2 },
                    {id:4, time:'00:00', progress:43 },
                ])
    }

    function questionHandler5(e){
        setQueno(e.target.value)
        setQdetails([
                    {id:1, time:'00:00', progress:2 },
                    {id:2, time:'00:00', progress:60 },
                    {id:3, time:'00:00', progress:15 },
                    {id:4, time:'00:00', progress:77 },
                    {id:5, time:'00:00', progress:35 },
                ])
    }

    function questionHandler6(e){
        setQueno(e.target.value)
        setQdetails([
                    {id:1, time:'00:00', progress:0 },
                    {id:2, time:'00:00', progress:22 },

                ])
    }

    return (
        <div className="sub">
            <div className="row qbuttons">
                <div className="col">
                    <Table responsive className="table stable1 table-borderless">
                        <tbody>
                            <tr>
                                <td>
                                    <div className="radio">
                                    <input 
                                    id="radio-1" 
                                    name="radio" 
                                    value="1" 
                                    type="radio" 
                                    onChange={questionHandler}
                                    defaultChecked
                                    />
                                    <label for="radio-1" className="radio-label">
                                    Question 1
                                    </label>
                                    </div>
                                </td>
                                <td>
                                    <div className="radio">
                                    <input 
                                    id="radio-2" 
                                    name="radio" 
                                    value="2" 
                                    onChange={questionHandler2}
                                    type="radio"  />
                                    <label for="radio-2" className="radio-label">
                                    Question 2
                                    </label>
                                    </div>
                                </td>

                            </tr>
                        </tbody>
                    </Table>
                </div>
                <div className="col">
                    <Table responsive className="table stable table-borderless">
                        <tbody>
                            <tr>
                                <td>
                                    <div className="radio">
                                    <input 
                                    id="radio-3" 
                                    name="radio" 
                                    value="3" 
                                    onChange={questionHandler3}
                                    type="radio"  />
                                    <label for="radio-3" className="radio-label">
                                    Question 3
                                    </label>
                                    </div>



                                </td>
                                <td>
                                    <div className="radio">
                                    <input 
                                    id="radio-4" 
                                    name="radio" 
                                    value="4" 
                                    onChange={questionHandler4}
                                    type="radio"  />
                                    <label for="radio-4" className="radio-label">
                                    Question 4
                                    </label>
                                    </div>
                                </td>

                            </tr>
                        </tbody>
                    </Table>  
                </div>

                <div className="col">
                <Table responsive className="table stable table-borderless">
                        <tbody>
                            <tr>
                            <td>
                                    <div className="radio">
                                    <input 
                                    id="radio-5" 
                                    name="radio" 
                                    value="5" 
                                    onChange={questionHandler5}
                                    type="radio"/>
                                    <label for="radio-5" className="radio-label">
                                    Question 5
                                    </label>
                                    </div>
                                </td>
                                <td>
                                    <div className="radio">
                                    <input 
                                    id="radio-6" 
                                    name="radio" 
                                    value="6" 
                                    onChange={questionHandler6}
                                    type="radio"  />
                                    <label for="radio-6" className="radio-label">
                                    Question 6
                                    </label>
                                    </div>
                                </td>                                

                            </tr>
                        </tbody>
                    </Table>
                </div>

            </div>
            <div className="ques1">
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