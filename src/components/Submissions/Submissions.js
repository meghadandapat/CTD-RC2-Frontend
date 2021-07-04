import { ProgressBar} from "react-bootstrap";
import { useState } from 'react';
import { Table } from "react-bootstrap";
import React from 'react';
import "./Submissions.css";
import QueCard from "./QueCard";
import SubCard from "./SubCard";


const Submissions = () => {
    const [queno, setQueno] = useState(1);

    const [qdetails, setQdetails] = useState([{id:1, time:'00:00', progress:10 }]);
    const [que1, setQue1] = useState([
        {id:1, time:'00:00', progress:10 },
        {id:2, time:'00:00', progress:70 },
    ]);

    const [que2, setQue2] = useState([
        {id:1, time:'00:00', progress:50 },
    ]);  

    const [que3, setQue3] = useState([
        {id:1, time:'00:00', progress:0 },
        {id:2, time:'00:00', progress:20 },
    ]);

    const [que4, setQue4] = useState([
        {id:1, time:'00:00', progress:70 },
    ]);

    const [que5, setQue5] = useState([
        {id:1, time:'00:00', progress:70 },
        {id:2, time:'00:00', progress:70 },
    ]);

    const [que6, setQue6] = useState([

    ]);

    function questionHandler(e){
        setQueno(e.target.value)
        if(queno == 1){
            setQdetails([
                {id:1, time:'00:00', progress:10 },
                {id:2, time:'00:00', progress:70 },
            ])
        }
        if(queno == 2){
            setQdetails([
                {id:1, time:'00:00', progress:10 },
            ])
        }
        if(queno == 3){
            setQdetails([
                {id:1, time:'00:00', progress:0 },
                {id:2, time:'00:00', progress:20 },
            ])
        }
        if(queno == 4){
            setQdetails([
                {id:1, time:'00:00', progress:0 },
                {id:2, time:'00:00', progress:20 },
                {id:3, time:'00:00', progress:70 },
                {id:4, time:'00:00', progress:8 },
            ])
        }
    }
    return (
        <div className="sub">
            <div className="row qbuttons">
            <Table responsive className="table table-borderless">
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
                    onChange={questionHandler}
                    type="radio"  />
                    <label for="radio-2" className="radio-label">
                    Question 2
                    </label>
                    </div>
                  </td>
                  <td>
                    <div className="radio">
                    <input 
                    id="radio-3" 
                    name="radio" 
                    value="3" 
                    onChange={questionHandler}
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
                    onChange={questionHandler}
                    type="radio"  />
                    <label for="radio-4" className="radio-label">
                    Question 4
                    </label>
                    </div>
                  </td>
                  <td>
                    <div className="radio">
                    <input 
                    id="radio-5" 
                    name="radio" 
                    value="5" 
                    onChange={questionHandler}
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
                    onChange={questionHandler}
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
            <div className="ques1">
                <QueCard qno={queno} />
                {qdetails.map((que1) => (
                    <div className="que-preview" key={que1.id}>
                    {que1.id!==0 && <SubCard
                    attemptNo={que1.id}
                    time={que1.time}
                    progbar={<ProgressBar animated
                        now={que1.progress}
                    />}
                
                    />}
                </div>                    

                ))

                }
            </div>

            {/* <div className="ques1">
                <QueCard qno={1} />
                {que1.map((que1) => (
                    <div className="que-preview" key={que1.id}>
                        {que1.id!==0 && <SubCard
                        attemptNo={que1.id}
                        time={que1.time}
                        progbar={<ProgressBar animated
                            now={que1.progress}
                        />}
                    
                        />}
                    </div>
                ))}
            </div>

            <div className="ques">
                <QueCard qno={2}/>
                {toggle2 && que2.map((que2) => (
                    <div className="que-preview" key={que2.id}>
                        {que2.id!==0 && <SubCard
                        attemptNo={que2.id}
                        time={que2.time}
                        progbar={<ProgressBar animated
                            now={que2.progress}
                        />}
                
                        />}
                    </div>
                ))}
            </div>

            <div className="ques">
            <QueCard qno={3}/>
            {toggle3 && que3.map((que3) => (
                <div className="que-preview" key={que3.id}>
                    {que3.id!==0 && <SubCard
                    attemptNo={que3.id}
                    time={que3.time}
                    progbar={<ProgressBar animated
                        now={que3.progress}
                      />}
                  
                    />}
                </div>
            ))}
            </div>

            <div className="ques">
            <QueCard qno={4}/>
            {toggle4 && que4.map((que4) => (
                <div className="que-preview" key={que4.id}>
                    {que4.id!==0 && <SubCard
                    attemptNo={que4.id}
                    time={que4.time}
                    progbar={<ProgressBar animated
                        now={que4.progress}
                      />}
                   
                    />}
                </div>
            ))}
            </div>
            
            <div className="ques">
            <QueCard qno={5}/>
            {toggle5 && que5.map((que5) => (
                <div className="que-preview" key={que5.id}>
                    {que5.id!==0 && <SubCard
                    attemptNo={que5.id}
                    time={que5.time}
                    progbar={<ProgressBar animated
                        now={que5.progress}
                      />}
                  
                    />}
                </div>
            ))}
            </div>

            <div className="ques">
            <QueCard qno={6}/>
            {toggle6 && que6.map((que6) => (
                <div className="que-preview" key={que6.id}>
                    {que6.id!==0 && <SubCard
                    attemptNo={que6.id}
                    time={que6.time}
                    progbar={<ProgressBar animated
                        now={que6.progress}
                      />}
                   
                    />}
                </div>
            ))}
            </div> */}


            <div className="space"></div>
        </div>
    );
}
 
export default Submissions;