import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import QuestionBox from './QuestionBox'
import InputBox from './InputBox';
import OutputBox from './OutputBox';
import CodeEditor from './CodeEditor';
const Codingpage = () => {
    return (
        <Container fluid >
            <Row style={{ height:"80vh", alignItems:"center" }}>
          <Col lg={6}> <QuestionBox></QuestionBox>
            <Row>
              <Col>
                <Row className="justify-content-around">
                  <InputBox></InputBox> 
                  <OutputBox></OutputBox>
                </Row>
              </Col>
            </Row>
          </Col>
          <Col lg={6}> <CodeEditor></CodeEditor>
          <Row className="justify-content-center  " style={{  width: "90%", marginLeft:"1rem" }}>
                        
          
          <Col lg={3}> <Button variant="outline-secondary" className="editor-button movemoreup run">Run Code</Button> </Col>
  
          <Col lg={3}><input type="file" id="choose-file" name="choose-file" hidden/>
          <label for="choose-file" className="customfile moveup">Choose File</label> </Col>

        

            </Row>
            <Row className="vem"></Row>
  </Col>
        </Row>
       
      </Container>
     );
}
 
export default Codingpage;