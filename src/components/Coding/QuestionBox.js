import React from 'react'
import "./Box.css";
import { Card, Form, Row } from 'react-bootstrap';

const QuestionBox = (props) => {
    return (
        <Row className="question_container justify-content-center">
        
        <Card className="Question" >
                <Card.Header style={{ textAlign: "center" }}>Problem Statement</Card.Header>
                
                <Form.Group controlId="Quearea2" className="boxbody">
              
                    <Form.Control as="textarea" readOnly value={props.question} rows={10} className="box" />
        </Form.Group>
    </Card>
         
            </Row>

    )
}

export default QuestionBox;