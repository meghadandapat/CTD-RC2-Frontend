import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import QuestionBox from './QuestionBox'
import InputBox from './InputBox';
import OutputBox from './OutputBox';
import CodeEditor from './CodeEditor';
const Codingpage = () => {
    return (
        <Container fluid >
            <Row style={{ marginTop: "-2vh" }}>
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
          <Col lg={6}> <CodeEditor></CodeEditor> </Col>
        </Row>
      </Container>
     );
}
 
export default Codingpage;