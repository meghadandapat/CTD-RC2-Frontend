import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import { Button, Modal } from 'react-bootstrap'
import './Logout.css'
import { logout } from '../utils/index';

const Logout = () => {

  const history = useHistory();

  const handleYes = (e) => {
    e.preventDefault();
    history.push('/result');
    handleClose();
  }

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    return (
  <div>
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
            <Button variant="default" className="mybtn" onClick={ handleYes }>Yes</Button>
            <Button variant="default" className="mybtn" onClick={handleClose}>
              No
            </Button>
            
          </Modal.Footer>
        </Modal>
        </div>
     );
}
 
export default Logout;