import React from "react";
import "./Instructions.css";
import {Card, Button, Row, Col, Container} from 'react-bootstrap'

const Instructions = () => {
  return (
      <Container style={{ height: "80vh", display:"flex"}}>
          <Row style={{ alignItems: "center" }}>
        <Col>
          <Card className="instruction-card" >
            <Card.Body>
              <Card.Title style={{ textAlign: "center" }}>Instructions</Card.Title>
              <Card.Text>
                <ul>
                  <li>
                    Possession the unpleasing simplicity her uncommonly.Off say
                    yet ample ten ought hence.Off say yet ample ten ought hence.
                  </li>
                
                  <li>
                    Off say yet ample ten ought hence. Depending in newspaper an
                    september do existence strangers. Total great saw water had
                    mirth happy new. Projecting pianoforte no of partiality is
                    on. Nay besides joy society him totally six.
                  </li>
                 
                  <li>
                    Immediate him her resolving his favourite. Wished denote
                    abroad at branch at.
                  </li>
                  
                  <li>
                    Immediate him her resolving his favourite. Wished denote
                    abroad at branch at.
                  </li>
                 
                </ul>
              </Card.Text>
              <Card.Footer style={{ textAlign: "center", backgroundColor:"#152238"}}>
                <Button>Proceed</Button>
              </Card.Footer>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Instructions;
