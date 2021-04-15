import { ProgressBar} from "react-bootstrap";
import { useState } from 'react';

import React from 'react';
import "./Submissions.css";
import QueCard from "./QueCard";
import SubCard from "./SubCard";


const Submissions = () => {
    const [que1, setQue1] = useState([
        {id:1, time:'00:00', progress:70 },
        {id:2, time:'00:00', progress:70 },
    ]);

    const [que2, setQue2] = useState([
        {id:1, time:'00:00', progress:70 },
    ]);  

    const [que3, setQue3] = useState([
        {id:1, time:'00:00', progress:70 },
        {id:2, time:'00:00', progress:70 },
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
    return (
        <div className="sub">
            <QueCard qno={1}/>
            {que1.map((que1) => (
                <div className="que-preview" key={que1.id}>
                    {que1.id!==0 && <SubCard
                    attemptNo={que1.id}
                    time={que1.time}
                    progbar={<ProgressBar
                        variant="secondary"
                        now={que1.progress}
                      />}
                    button="yes"   
                    />}
                </div>
            ))}
            <QueCard qno={2}/>
            {que2.map((que2) => (
                <div className="que-preview" key={que2.id}>
                    {que2.id!==0 && <SubCard
                    attemptNo={que2.id}
                    time={que2.time}
                    progbar={<ProgressBar
                        variant="secondary"
                        now={que2.progress}
                      />}
                    button="yes"   
                    />}
                </div>
            ))}
            <QueCard qno={3}/>
            {que3.map((que3) => (
                <div className="que-preview" key={que3.id}>
                    {que3.id!==0 && <SubCard
                    attemptNo={que3.id}
                    time={que3.time}
                    progbar={<ProgressBar
                        variant="secondary"
                        now={que3.progress}
                      />}
                    button="yes"   
                    />}
                </div>
            ))}
            <QueCard qno={4}/>
            {que4.map((que4) => (
                <div className="que-preview" key={que4.id}>
                    {que4.id!==0 && <SubCard
                    attemptNo={que4.id}
                    time={que4.time}
                    progbar={<ProgressBar
                        variant="secondary"
                        now={que4.progress}
                      />}
                    button="yes"   
                    />}
                </div>
            ))}
            <QueCard qno={5}/>
            {que5.map((que5) => (
                <div className="que-preview" key={que5.id}>
                    {que5.id!==0 && <SubCard
                    attemptNo={que5.id}
                    time={que5.time}
                    progbar={<ProgressBar
                        variant="secondary"
                        now={que5.progress}
                      />}
                    button="yes"   
                    />}
                </div>
            ))}
            <QueCard qno={6}/>
            {que6.map((que6) => (
                <div className="que-preview" key={que6.id}>
                    {que6.id!==0 && <SubCard
                    attemptNo={que6.id}
                    time={que6.time}
                    progbar={<ProgressBar
                        variant="secondary"
                        now={que6.progress}
                      />}
                    button="yes"   
                    />}
                </div>
            ))}
        </div>
    );
}
 
export default Submissions;