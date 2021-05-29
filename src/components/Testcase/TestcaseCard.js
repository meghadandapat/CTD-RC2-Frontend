import React from "react";
import { Card } from "react-bootstrap";
import "./TestcaseCard.css";


const TestcaseCard = (props) => {

  console.log(props.status);

    return (<Card className="card-preview">
          <Card.Body >
            <Card.Title className="card-heading">Testcase {props.val}</Card.Title>
            <Card.Text className="card-status">
             {props.status ? 'Pass':'Fail'}
            </Card.Text>            
          </Card.Body>
        </Card>  );
}
 
export default TestcaseCard;
