import React from "react";
import {Link} from 'react-router-dom'
import Logout from "../Logout/Logout";
import "./Navbar.css";
import Timer from "../Timer/Timer";


const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-sm ">
    <div className="container">
 
      <button
        className="navbar-toggler"
        data-toggle="collapse"
        data-target="#navbarCollapse"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link to="/submissions" className="nav-link">
              Submissions
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/questionhub" className="nav-link">
              QuestionHub
            </Link>
          </li>
        
          <li className="nav-item">
            {/* <Link to="/testcases" className="nav-link">
              Testcases
            </Link> */}
          </li>
          </ul>
          
        </div>
        <Timer/>
        <Logout/>
    </div>
  </nav>
  );
};

export default Navbar;