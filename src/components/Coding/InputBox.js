import React from 'react'
import "./Box.css";
import { Card, Form } from 'react-bootstrap';

export default function InputBox() {
    return (
        <div className="input">
            <Card className="boxtitle">
                <Card.Header>Custom Input</Card.Header>
                <Form.Group controlId="Textarea1" className="boxbody">
                    <Form.Control className="box" as="textarea" style={{ height: '9rem' }} />
                </Form.Group>
            </Card>
        </div>
    );
}

