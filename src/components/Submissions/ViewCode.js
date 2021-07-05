import React, { useState, useEffect } from 'react'
import { Button, Modal } from 'react-bootstrap'
import "./Submissions.css";
import copy from "copy-to-clipboard";
import axiosInstance from '../../axios';
import AceEditor from "react-ace";
import "brace/mode/java";
import "brace/mode/c_cpp";
import "brace/mode/python";
import "brace/ext/modelist";

const ViewCode = (props) => {
  
  const [code, setCode] = useState("");

  useEffect(() => {
    axiosInstance.get('submissions/' + props.id.toString()).then((res) => {
      setCode(res.data.code);
     
    })
  }, [setCode]);
  
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleView = () => setShow(true);

  const copyToClipboard = () => {
    copy(code);

 }
 
    return (
  <div>
        <Button variant="default" className=" btn btn1 sub-button" onClick={handleView}>
          View
        </Button>
        <Modal
          show={show}
          onHide={handleClose}
          centered
          keyboard={false}
          size="md"
          scrollable
        >
          <Modal.Header closeButton>
          <Modal.Title>Submission</Modal.Title>
          
          </Modal.Header>
          <Modal.Body>
          <Button variant="default" className=" btn copybtn" onClick={copyToClipboard}><i class="far fa-clipboard"></i></Button>
          <div className="compiler" style={{margin:0}}>
          <AceEditor
            mode="java"
            theme="dracula"
            style={{ height: "27rem", width: "100%" }}
            value={code}
            setOptions={{
                showPrintMargin: false,
                showGutter: true, 
                showLineNumbers: true,
                tabSize: 4,
                readOnly: true,
                wrap: true,
              }}
          />
        </div>
          </Modal.Body>
          
        </Modal>
        </div>
     );
}
 
export default ViewCode;
