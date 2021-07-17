import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import "./CodeEditor.css";
import { Form, Row, Button, Col } from "react-bootstrap";
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
  // const [isSubmitted, setIsSubmitted] = useState(true);
  const [lang, setLang] = useState("cpp");
  const [result, setResult] = useState({ passed: null, status: null });
  const [code, setCode] = useState(
  `#include <bits/stdc++.h>
  using namespace std;
    int main () {

    }`);

  const handleCodeChange = (e) => {
    setCode(e);
  };

  const handleLoadBuffer = (e) => {
    axiosInstance.get("load_buffer/" + id + "_" + lang).then((res) => {
      setCode(res.data.code);
    });
  };

  const handleLang = (e) => {
    setLang(e.target.value);
    switch (e.target.value) {
      case "java":
        setCode(
          `import java.io.*;
import java.util.*;
  public class main {
  public static void main (String[] args) throws IOException {
          
  }
  }`
        );
        break;
      case "c":
        setCode(
          `#include <stdio.h>
  int main () {
         
  }`
        );
        break;
      case "cpp":
        setCode(
          `#include <bits/stdc++.h>
using namespace std;
  int main () {
         
  }`
        );
        break;
      default:
        setCode("");
    }
  };

  const handleSubmit = (e) => {
    // render(<CodeLoader />)
    props.setIsSubmitted(false);
    axiosInstance
      .post("submit/" + id + "/", {
        code: code,
        language: lang,
      })
      .then((res) => {
        setResult({
          error: res.data.error,
          status: res.data.status,
          passed: res.data.passed_test_cases,
        });
        console.log(res);
        history.push("/testcases", [
          {
            error: res.data.error,
            status: res.data.status,
            passed: res.data.passed_test_cases,
            data: res.data.data,
          },
        ]);
        props.setIsSubmitted(true);
      });
  };
  // if (!props.isSubmitted) return <CodeLoader/>

  let fileReader;

  const handleFileRead = (e) => {
    const content = fileReader.result;
    console.log(content);
    setCode(content);
  };
  const handleFileChosen = (file) => {
    var extension = file.name.split(".").pop().toLowerCase();
    if (extension === "cpp" || extension === "c" || extension === "py") {
      fileReader = new FileReader();
      fileReader.onloadend = handleFileRead;
      fileReader.readAsText(file);
    } else {
      alert("Uploading only .c, .cpp & .py files is allowed.");
    }
  };

  return (
    <Form>
      <Form.Group controlId="codearea">
        <div className="Container" style={{ marginLeft: "30px" }}>
          <Row className="justify-content-between">
            <select id="dropdown" value={lang} onChange={handleLang}>
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
            style={{ height: "25rem", width: "92%" }}
            onChange={handleCodeChange}
            value={code}
            setOptions={{
              showPrintMargin: false,
              showGutter: true,
              showLineNumbers: true,
              tabSize: 4,
              wrap: true,
            }}
          />
        </div>
        <Row
          className="justify-content-between "
          style={{
            width: "90%",
            marginLeft: "1rem",
            marginTop: "1.7rem",
          }}
        >
          < Col lg={3}>
        <Button
        variant="outline-secondary"
        className="editor-button "
        onClick={handleLoadBuffer}
      >
        Load buffer
      </Button></Col>
        <Col lg={3}>
          <input
            type="file"
            id="choose-file"
            name="choose-file"
            onChange={(e) => handleFileChosen(e.target.files[0])}
            hidden
          />
          <label htmlFor="choose-file" className="customfile choosecode moveup">
            Choose File
          </label>
        </Col>
         
        < Col lg={3}></Col>
        < Col lg={3}>
          <Button
            variant="outline-secondary"
            className="editor-button submit"
            onClick={handleSubmit}
          >
            Submit
          </Button>
          </Col>
        </Row>
      </Form.Group>
    </Form>
  );
};

export default CodeEditor;
