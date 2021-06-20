import React, { useState } from "react";
import "./CodeEditor.css";
import { Form, Row, Button } from "react-bootstrap";
import AceEditor from "react-ace";
import "brace/mode/java";
import "brace/mode/c_cpp";
import "brace/mode/python";
import "brace/ext/modelist";
import "brace/theme/monokai";
import "ace-builds/src-noconflict/ext-language_tools";
import "ace-builds/src-noconflict/ext-beautify";

export default function CodeEditor() {
  const [lang, setLang] = useState("cpp");

  return (
    <Form>
      <Form.Group controlId="codearea">
        <div className="Container" style={{ marginLeft: "30px", paddingTop: "2rem"
    }}>
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
            theme="monokai"
            style={{ height: "27rem", width: "90%" }}
            setOptions={{
              selectionStyle: "line", // "line"|"text"
              highlightActiveLine: true, // boolean
              highlightSelectedWord: true, // boolean

              cursorStyle: "ace", // "ace"|"slim"|"smooth"|"wide"

              wrapBehavioursEnabled: true, // boolean

              animatedScroll: false, // boolean: true if scroll should be animated
              displayIndentGuides: false, // boolean: true if the indent should be shown. See 'showInvisibles'
              showInvisibles: false, // boolean -> displayIndentGuides: true if show the invisible tabs/spaces in indents
              showPrintMargin: false, // boolean: true if show the vertical print margin

              showGutter: true, // boolean: true if show line gutter

              showLineNumbers: true,
              tabSize: 1, // number
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
          <Button variant="outline-secondary" className="editor-button run">
            Run Code
          </Button>
          <Button variant="outline-secondary" className="editor-button">
            Load buffer
          </Button>
          <input type="file" id="choose-file" name="choose-file" hidden />
          <label for="choose-file" class="customfile">
            Choose File
          </label>
          <Button variant="outline-secondary" className="editor-button submit">
            Submit
          </Button>
        </Row>
      </Form.Group>
    </Form>
  );
}
