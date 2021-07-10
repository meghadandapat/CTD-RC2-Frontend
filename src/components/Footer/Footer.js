import React from "react";
import { Navbar} from "react-bootstrap"
import { Link, NavLink, useLocation } from "react-router-dom";
import  './Footer.css';
    
const Footer = () => {
  // const location = useLocation();
  // if (
  //   location.pathname === "/questionhub" ||
  //   location.pathname === "/submissions" ||
  //   location.pathname === "/leaderboard" 
  // )
    return (
        <Navbar fixed="bottom" expand="lg" variant="default" className="footer">
          <Navbar.Brand>&copy; PICT IEEE Student Branch <Link to="/webteam" className="our-team"> OUR TEAM</Link>
            </Navbar.Brand>
            
        </Navbar>
       );

  // return(
  //   <Navbar fixed="bottom" expand="lg" variant="default" className="footer">
  //     <Navbar.Brand>&copy; PICT IEEE Student Branch OUR TEAM</Navbar.Brand>
  //   </Navbar>);
};
 
export default Footer;

