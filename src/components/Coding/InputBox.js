// React

import React from 'react'
import { Card, Form } from 'react-bootstrap';

// CSS

import "./Box.css";

export default function InputBox() {
    return (
        <div className="input">
            <Card className="boxtitle">
                <Card.Header>Custom Input</Card.Header>
                <Form.Group controlId="Textarea1" className="boxbody">
                    <Form.Control className="box" as="textarea" style={{ height: '10rem' }} />
                </Form.Group>
            </Card>
        </div>
    );
}

