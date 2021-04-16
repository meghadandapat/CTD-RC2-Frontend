import React from "react";
import { Navbar} from "react-bootstrap"
import  './Footer.css';
    
const Footer = () => {
    return (
        <Navbar fixed="bottom" expand="lg" variant="light" bg="dark" className="footer">
          <Navbar.Brand>PICT IEEE Student Branch</Navbar.Brand>
        </Navbar>
       );
}
 
export default Footer;

