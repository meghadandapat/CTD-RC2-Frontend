import React from "react";
import { Navbar} from "react-bootstrap"
import { useLocation, Link } from "react-router-dom";
import  './Footer.css';
    
const Footer = () => {
  
    return (
        <Navbar fixed="bottom" expand="lg" variant="default" className="footer">
          <Navbar.Brand className="footerSize">&copy; PICT IEEE Student Branch || Developed by <Link to="/ourteam">PISB Web Team</Link></Navbar.Brand>
        </Navbar>
       );

  
};
 
export default Footer;
