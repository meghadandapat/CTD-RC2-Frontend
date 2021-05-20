// React

import React from "react";
import { Navbar} from "react-bootstrap"

// CSS

import  './Footer.css';
    
const Footer = () => {
    return (
        <Navbar fixed="bottom" expand="lg" variant="default" className="footer">
          <Navbar.Brand>&copy; PICT IEEE Student Branch</Navbar.Brand>
        </Navbar>
       );
}
 
export default Footer;

