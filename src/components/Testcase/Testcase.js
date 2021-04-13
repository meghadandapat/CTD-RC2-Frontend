import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import './Testcase.css';
import TestcaseCard from "./TestcaseCard";


const Testcase = () => {

  const List1 = [1, 2, 3].map((num) => <TestcaseCard val={num} />)
  const List2 = [4, 5, 6].map((num) => <TestcaseCard val={num} />)


  return (
    <Container fluid>
      <Row>
        <Col md={8}>         
          <Row className="justify-content-center">
           {List1}
          </Row>
          <Row  className="justify-content-center">           
          {List2}
          </Row>
          <Row>
           <Col className="scoreandstatus">Your score</Col>
           <Col className="scoreandstatus">Status</Col>
          </Row>
        </Col>
              <Col md={4}><Row  className="justify-content-md-center">
              <p>Console will be placed here</p></Row></Col>
      </Row>
    </Container>
  );
};

export default Testcase;
