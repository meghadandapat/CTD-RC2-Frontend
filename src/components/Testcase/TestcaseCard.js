import React from "react";
import { Card } from "react-bootstrap";
import "./TestcaseCard.css";


const TestcaseCard = (props) => {


    return (<Card className="card-preview">
          <Card.Body >
            <Card.Title className="card-heading" style={{textAlign: 'center'}}>Testcase {props.val}</Card.Title>
            <Card.Text style={{textAlign: 'center'}}>
             Pass
            </Card.Text>            
          </Card.Body>
        </Card>  );
}
 
export default TestcaseCard;
