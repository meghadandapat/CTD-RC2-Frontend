import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import QuestionBox from "./QuestionBox";
import CodeEditor from "./CodeEditor";
import axiosInstance from "../../axios";
import Preloader from "../Preloader/Preloader";
import { Card, Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import CodeLoader from "./CodeLoader";

const Codingpage = () => {
  const { id } = useParams();
  const [question, setQuestion] = useState({ data: null, loading: true });
  const [isSubmitted, setIsSubmitted] = useState(true);
  const [runCode, setRunCode] = useState({ input: null, output: "" });
 

  const handleRunCodeChange = (e) => {
    setRunCode({ input: e.target.value });
  };


  const handleSubmit = (e) => {
    axiosInstance
      .post("get_output/", {
        pk: id.toString(),
        input: runCode.input.toString(),
      })
      .then((res) => {
        setRunCode({ output: res.data.output });
      });
  };

  

  useEffect(() => {
    axiosInstance.get("questions/" + id + "/").then((res) => {
      setQuestion({ data: res.data.question_desc, loading: false });
    });
  }, [setQuestion]);

  if (question.loading) return <Preloader />;
  else if (!isSubmitted) return <CodeLoader />;
  return (
    <Container fluid>
      <Row style={{ height: "80vh", alignItems: "center" }}>
        <Col lg={6}>
          {" "}
          <QuestionBox question={question.data}></QuestionBox>
          <Row>
            <Col>
              <Row className="justify-content-around">
                <div className="input">
                  <Card className="boxtitle">
                    <Card.Header>Custom Input</Card.Header>
                    <Form.Group controlId="Textarea1" className="boxbody">
                      <Form.Control
                        className="box"
                        as="textarea"
                        id="input"
                        value={runCode.input}
                        onChange={handleRunCodeChange}
                        style={{ height: "9rem" }}
                      />
                    </Form.Group>
                  </Card>
                </div>
                <div className="output">
                  <Card className="boxtitle">
                    <Card.Header>Custom output</Card.Header>
                    <Form.Group controlId="Textarea2" className="boxbody">
                      <Form.Control
                        as="textarea"
                        className="box"
                        readOnly
                        value={runCode.output}
                        style={{ height: "9rem" }}
                      />
                    </Form.Group>
                  </Card>
                </div>
              </Row>
            </Col>
          </Row>
        </Col>
        <Col lg={6}>
          <CodeEditor
            runCode={handleSubmit}
            isSubmitted={isSubmitted}
            setIsSubmitted={setIsSubmitted}
          ></CodeEditor>
          <Row
            className="justify-content-end"
            style={{ width: "90%" }}
          >
            < Col lg={3}></Col>
            < Col lg={3}></Col>
            <Col lg={3}>
              <Button
                variant="outline-secondary"
                className="editor-button movemoreup run"
                onClick={handleSubmit}
              >
                Run Code
              </Button>
            </Col>
            < Col lg={3}></Col>
          </Row>
          <Row className="vem"></Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Codingpage;
