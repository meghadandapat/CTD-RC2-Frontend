import React, { useState, useEffect } from 'react'
import { Button, Modal } from 'react-bootstrap'
import copy from "copy-to-clipboard";
import axiosInstance from '../../axios';


const ViewCode = (props) => {
  
  const [code, setCode] = useState("");

  useEffect(() => {
    axiosInstance.get('submissions/' + props.id.toString()).then((res) => {
      setCode(res.data.code);
      console.log(res.data);
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
          size="lg"
          scrollable
        >
          <Modal.Header closeButton>
          <Modal.Title>Submission</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <p>
          { code }
        </p>
          
          </Modal.Body>
          <Button variant="default" className=" btn copybtn" onClick={copyToClipboard}>Copy</Button>
        </Modal>
        </div>
     );
}
 
export default ViewCode;