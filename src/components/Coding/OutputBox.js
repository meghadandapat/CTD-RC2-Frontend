import React from 'react'
import "./Box.css";
import { Card, Form } from 'react-bootstrap';

export default function OutputBox() {
    return (
        <div className="output">
            <Card className="boxtitle">
                <Card.Header>Custom output</Card.Header>
                <Form.Group controlId="Textarea2" className="boxbody">
                <Form.Control as="textarea" className="box" readOnly value="Lorem Ipsum has been the industry's standard du" style={{ height: '10rem' }}/>
                </Form.Group>
            </Card>
        </div>
    )
}
