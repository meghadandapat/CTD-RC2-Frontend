import React from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import "./Testcase.css";
import TestcaseCard from "./TestcaseCard";

const Testcase = () => {
  const List1 = [1, 2, 3].map((num) => <TestcaseCard val={num} />);
  const List2 = [4, 5, 6].map((num) => <TestcaseCard val={num}/>);

  return (
    <Container fluid>
      <Row>
        <Col lg={8}>
          <Row className="justify-content-center">{List1}</Row>
          <Row className="justify-content-center">{List2}</Row>
          <Row >
            <Col className="scoreandstatus"><Row className="justify-content-center">Your Score</Row><Row className="justify-content-center">45</Row></Col>
            <Col className="scoreandstatus"><Row className="justify-content-center">Status</Row><Row className="justify-content-center">AC</Row></Col>
          </Row>
        </Col>
        <Col lg={4}>
          <Row className="justify-content-center">
            <Form style={{ width: "70%"}}>
          <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label className="console-label">Console</Form.Label>
          <Form.Control as="textarea" rows={15} className="console" readOnly value="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type  specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with deskto specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with deskto" />
        </Form.Group>
        </Form>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Testcase;
