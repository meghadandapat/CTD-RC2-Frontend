import React from "react";
import { Link } from "react-router-dom"
import Logout from "../Logout/Logout";
import "./Navbar.css";
import Timer from "../Timer/Timer";
import { isLogin } from '../utils/index';



const Navbar = () => {

  

  if (!isLogin()){
    return(
      <nav className="navbar navbar-expand-lg ">
    <div className="container nav-continer">
 
      <button
        className="navbar-toggler"
        data-toggle="collapse"
        data-target="#navbarCollapse"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      
     
       
         <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav ml-auto justify-content-right">
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
            <Timer />
          </li>
          </ul>
        </div>
  </div>
  </nav>
    );
  }

  return (
    <nav className="navbar navbar-expand-lg ">
    <div className="container nav-continer">
 
      <button
        className="navbar-toggler"
        data-toggle="collapse"
        data-target="#navbarCollapse"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      
     
       
         <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav ml-auto justify-content-right">
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
            <Timer />
          </li>
          <li className="nav-item">
        <Logout />
          </li>
          </ul>
        </div>
  </div>
  </nav>
  );
};

export default Navbar;