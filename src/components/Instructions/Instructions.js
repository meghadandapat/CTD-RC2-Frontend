import React from "react";
import "./Instructions.css";
import {Button} from 'react-bootstrap'

const Instructions = () => {
  return (
 
    <div className="instructions">
      <h2 className="instrtitle">Instructions</h2>
      <p className="instrcontent">
        <ul>
          <li>There are 6 questions in the contest.
          </li>
          <li>You can use C/C++/Java/Python to submit the answer.</li>
          <li>There are two boxes, one where you can type the input which is run against the correct code and the out put is displayed in the output box.</li>
      
      <li>For every correct submission you get +100 score, and there is partial marking.</li>
      
      
      
                 
                 </ul>
      </p>
      <div className="instrbutton" style={{ textAlign: "center"}}>
        <Button variant="dark" className="ibtn" onClick={
          (e) => {
            e.preventDefault();
            window.location.pathname = '/questionhub';
          }
        }>Proceed</Button>
      </div>
      <div className="instrSpace"></div>
    </div>
  );
};

export default Instructions;
