import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import './Logout.css'

const Logout = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    return (
  <React.Fragment>
        <Button variant="default" className="mybtn" onClick={handleShow} style={{marginLeft: "1rem"}}>
          Logout
        </Button>
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
          <Modal.Title>Log out</Modal.Title>
          </Modal.Header>
          <Modal.Body>
           Are you sure you want to Log out?
          </Modal.Body>
            <Modal.Footer>
            <Button variant="default" className="mybtn">Yes</Button>
            <Button variant="default" className="mybtn" onClick={handleClose}>
              No
            </Button>
            
          </Modal.Footer>
        </Modal>
        </React.Fragment>
     );
}
 
export default Logout;