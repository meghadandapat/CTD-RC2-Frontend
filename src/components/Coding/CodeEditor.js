import React, {useState} from 'react'
import './CodeEditor.css';
import Code from './Code.js';
import { Container, Form, Row, Col, Button } from 'react-bootstrap';

export default function CodeEditor() {
    const [lang, setLang] = useState('cpp');

    return (
        <Form>
            <Form.Group controlId="codearea" >
                <div className="Container" style={{ marginLeft: "30px" }}>
                   
                        <Row className="justify-content-between">
                            
                            <select id="dropdown" value={lang} onChange={e => setLang(e.target.value)} >
                            <option value="cpp">C++</option>
                            <option value="c">C</option>
                            <option value="java">Java</option>
                            <option value="py">Python</option>
                            </select>
                          
                
                                            <Form.Control style={{ marginRight: "80px" }} className="score" type="text" value="Score: 000" readOnly />
                                       
                                  
                            
                        </Row>
                 
                    </div>
                <div className="compiler">
                    <Code></Code>
                    
                </div>
                <Row className="justify-content-between " style={{ marginBottom: "5vh", width: "90%", marginLeft:"1rem", marginTop: "3vh" }}>
                        
                            <Button variant="outline-secondary" className="editor-button run">Run Code</Button>
                            <Button variant="outline-secondary" className="editor-button" >Load buffer</Button>
                            <input type="file" id="choose-file" name="choose-file" hidden/>
                            <label for="choose-file" class="customfile">Choose File</label>
                            <Button variant="outline-secondary" className="editor-button submit">Submit</Button>
                  
                    </Row>
                
                    
                
            </Form.Group>
        </Form>

    )
}
