// React

import React from 'react'
import { Card, Form, Row } from 'react-bootstrap';

// CSS

import "./Box.css";

export default function QuestionBox() {
    return (
        <Row className="question_container justify-content-center">
        
        <Card className="Question" >
                <Card.Header style={{ textAlign: "center" }}>Problem Statement</Card.Header>
                
                <Form.Group controlId="Quearea2" className="boxbody">
              
                    <Form.Control as="textarea" readOnly value=" Ashley loves primes!
                    She gives you T testcases
                    In each testcase you are given two space separated integers L and R. You have to print the number of
                    primes in range L to R(both included)
                    INPUT FORMAT
                    First line contains a single integer T, the number of testcases.
                    Next T lines consists of 2 space separated integers, L and R.
                    CONSTRAINTS
                    1 = T = 10^5
                    1 = L = R = 10^6
                    OUTPUT FORMAT
                    For each testcase print a single required integer.               
                    SAMPLE INPUT
                    1
                    2 4                              
                    SAMPLE OUTPUT
                    2  
                    EXPLANATION
                    Numbers in range [2, 4] are 2, 3, 4. Out of these 2 and 3 are prime numbers so answer is 2." rows={10} className="box" />
        </Form.Group>
    </Card>
         
            </Row>

    )
}