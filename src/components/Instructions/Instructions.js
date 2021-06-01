import React from "react";
import "./Instructions.css";
import {Button} from 'react-bootstrap'

const Instructions = () => {
  return (
 
    <div className="instructions">
      <h2 className="instrtitle">Instructions</h2>
      <p className="instrcontent">
      <ul>
                  <li>
                     Possession the unpleasing simplicity her uncommonly.Off say
                     yet ample ten ought hence.Off say yet ample ten ought hence.
                  </li>
                
                   <li>
                     Off say yet ample ten ought hence. Depending in newspaper an
                     september do existence strangers. Total great saw water had
                     mirth happy new. Projecting pianoforte no of partiality is
                     on. Nay besides joy society him totally six.
                   </li>
                 
                   <li>
                     Immediate him her resolving his favourite. Wished denote
                     abroad at branch at.
                   </li>
                  
                   <li>
                     Immediate him her resolving his favourite. Wished denote
                     abroad at branch at.
                   </li>
                 
                 </ul>
      </p>
      <div className="instrbutton" style={{ textAlign: "center"}}>
        <Button variant="dark" onClick={
          (e) => {
            e.preventDefault();
            window.location.pathname = '/questionhub';
          }
        }>Proceed</Button>
      </div>
    </div>
  );
};

export default Instructions;
