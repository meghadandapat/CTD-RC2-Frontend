import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import "./CodeEditor.css";
import { Container, Form, Row, Col, Button } from "react-bootstrap";
import axiosInstance from "../../axios";
import Testcase from "../Testcase/Testcase";
import AceEditor from "react-ace";
import "brace/mode/java";
import "brace/mode/c_cpp";
import "brace/mode/python";
import "brace/ext/modelist";
import "brace/theme/dracula";

const CodeEditor = (props) => {
  const history = useHistory();
  const { id } = useParams();

  const [lang, setLang] = useState("cpp");
  const [result, setResult] = useState({ passed: null, status: null });
  const [code, setCode] = useState("");

  const handleCodeChange = (e) => {
    setCode(e);
  };

  const handleLoadBuffer = (e) => {
    axiosInstance.get("load_buffer/" + id + "_" + lang).then((res) => {
      setCode(res.data.code);
    });
  };

  const handleSubmit = (e) => {
    console.log(code);
    axiosInstance
      .post("submit/" + id + "/", {
        code: code,
        language: lang,
      })
      .then((res) => {
        console.log(res.data.error);
        setResult({
          error: res.data.error,
          status: res.data.status,
          passed: res.data.passed_test_cases,
        });
        console.log(res.data);
        history.push("/testcases", [
          {
            error: res.data.error,
            status: res.data.status,
            passed: res.data.passed_test_cases,
          },
        ]);
      });
  };

  return (
    <Form>
      <Form.Group controlId="codearea">
        <div className="Container" style={{ marginLeft: "30px" }}>
          <Row className="justify-content-between">
            <select
              id="dropdown"
              value={lang}
              onChange={(e) => setLang(e.target.value)}
            >
              <option value="cpp">C++</option>
              <option value="c">C</option>
              <option value="java">Java</option>
              <option value="py">Python</option>
            </select>

            <Form.Control
              style={{ marginRight: "80px" }}
              className="score"
              type="text"
              value="Score: 000"
              readOnly
            />
          </Row>
        </div>
        <div className="compiler">
          <AceEditor
            mode="java"
            theme="dracula"
            style={{ height: "27rem", width: "90%" }}
            onChange={handleCodeChange}
            value={code}
            setOptions={{
                showPrintMargin: false,
                showGutter: true, 
                showLineNumbers: true,
                tabSize: 1, 
                wrap: true,
              }}
          />
        </div>
        <Row
          className="justify-content-between "
          style={{
            marginBottom: "5vh",
            width: "90%",
            marginLeft: "1rem",
            marginTop: "3vh",
          }}
        >
          {/* <Button variant="outline-secondary" className="editor-button run" onClick={ props.runCode }>Run Code</Button> */}
          <Button
            variant="outline-secondary"
            className="editor-button "
            onClick={handleLoadBuffer}
          >
            Load buffer
          </Button>
          {/* <input type="file" id="choose-file" name="choose-file" hidden/>
                            <label for="choose-file" class="customfile">Choose File</label> */}
          <Button
            variant="outline-secondary"
            className="editor-button submit"
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </Row>
      </Form.Group>
    </Form>
  );
};

export default CodeEditor;
