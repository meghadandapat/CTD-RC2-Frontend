// React

import React from "react";
import {Card, Button, Row, Col, Container} from 'react-bootstrap';

// CSS

import "./Instructions.css";

// Local Imports

import axiosInstance from '../../axios';


const Instructions = () => {

  return (
    //   <Container style={{ height: "80vh", display:"flex"}}>
    //       <Row style={{ alignItems: "center" }}>
    //     <Col>
    //       <Card className="instruction-card" >
    //         <Card.Body>
    //           <Card.Title style={{ textAlign: "center" }}>Instructions</Card.Title>
    //           <div>
    //             <ul>
    //               <li>
    //                 Possession the unpleasing simplicity her uncommonly.Off say
    //                 yet ample ten ought hence.Off say yet ample ten ought hence.
    //               </li>
                
    //               <li>
    //                 Off say yet ample ten ought hence. Depending in newspaper an
    //                 september do existence strangers. Total great saw water had
    //                 mirth happy new. Projecting pianoforte no of partiality is
    //                 on. Nay besides joy society him totally six.
    //               </li>
                 
    //               <li>
    //                 Immediate him her resolving his favourite. Wished denote
    //                 abroad at branch at.
    //               </li>
                  
    //               <li>
    //                 Immediate him her resolving his favourite. Wished denote
    //                 abroad at branch at.
    //               </li>
                 
    //             </ul>
    //           </div>
    //           <Card.Footer style={{ textAlign: "center", backgroundColor:"#152238"}}>
    //             <Button>Proceed</Button>
    //           </Card.Footer>
    //         </Card.Body>
    //       </Card>
    //     </Col>
    //   </Row>
    // </Container>
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
        <Button variant="dark">Proceed</Button>
      </div>
    </div>
  );
};

export default Instructions;
