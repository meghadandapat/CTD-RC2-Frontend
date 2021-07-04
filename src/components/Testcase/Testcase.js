import React from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import "./Testcase.css";
import TestcaseCard from "./TestcaseCard";

const Testcase = (props) => {
 
  const List1 = [1, 2, 3].map((num) => <TestcaseCard val={num} status={props.location.state[0].passed[num - 1]}/>);
  const List2 = [4, 5, 6].map((num) => <TestcaseCard val={num} status={props.location.state[0].passed[num - 1]}/>);

  return (
    <Container fluid>
      <Row>
        <Col lg={8}>
          <Row className="justify-content-center">{List1}</Row>
          <Row className="justify-content-center">{List2}</Row>
          <Row >
          <Col className="scoreandstatus"><Row className="justify-content-center">Your Score</Row><Row className="justify-content-center">Write score</Row></Col>
          <Col className="scoreandstatus"><Row className="justify-content-center">Status</Row><Row className="justify-content-center">Write Status</Row></Col>
          </Row>
        </Col>
        <Col lg={4}>
          <Row className="justify-content-center">
            <Form style={{ width: "70%"}}>
          <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label className="console-label">Console</Form.Label>
          <Form.Control as="textarea" rows={15} className="console" readOnly value={props.location.state[0].error[props.location.state[0].error.length - 1] ? props.location.state[0].error[props.location.state[0].error.length - 1] : 'Passed!'} />
        </Form.Group>
        </Form>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Testcase;
