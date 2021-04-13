import React from "react";
import { Card } from "react-bootstrap";


const TestcaseCard = (props) => {

    const cardstyle = {
        width: '10rem',
        height: '5rem',
        marginTop: '7vh',
        marginRight: '10px'
    }


    return (<Card style={cardstyle}>
          <Card.Body>
            <Card.Title>Testcase {props.val}</Card.Title>
            <Card.Text>
             Pass
            </Card.Text>            
          </Card.Body>
        </Card>  );
}
 
export default TestcaseCard;
