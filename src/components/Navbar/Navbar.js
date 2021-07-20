import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import Logout from "../Logout/Logout";
import "./Navbar.css";
import Timer from  "../Timer/Timer"
import { useState, useEffect } from "react";
import axiosInstance from '../../axios';

const Navbar = () => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const [userName,setUserName] = useState('');
  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);
  const location = useLocation();

  useEffect(() => {
    axiosInstance.get('leaderboard/').then((res) => {
      
      setUserName(res.data.username);
      
    })
    
  }, [])
 
  if (
    location.pathname === "/questionhub" ||
    location.pathname === "/submissions" ||
    location.pathname === "/leaderboard" ||
    location.pathname.includes("coding") ||
    location.pathname === "/testcases" 
   
  )
    return (
      <nav className="navbar navbar-expand-md ">
        <button
          className="navbar-toggler navbar-dark "
          type="button"
          data-toggle="collapse"
          data-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded={!isNavCollapsed ? true : false}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon navbar-dark" />
        </button>
        <img className="logo pisb" alt="PISB Logo" src="../img/pisblogo.png" />
        <Timer/>
  <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarCollapse">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <NavLink
                to="/questionhub"
                className="nav-link"
                activeClassName="currentpage"
              >
                QuestionHub
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/submissions"
                className="nav-link"
                activeClassName="currentpage"
              >
                Submissions
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/leaderboard"
                className="nav-link"
                activeClassName="currentpage"
              >
                Leaderboard
              </NavLink>
            </li>
  <li className="nav-item">
              <Logout />
            </li>
            <li className="nav-item"><h6 className="navuser navbar-nav"><i class="fas fa-user"></i> {userName}</h6></li>
          </ul>
          <img className="logo ctd" alt="RC Logo" src="../img/rclogo.png" />
        </div>
      </nav>
    );

  return (
    <nav className="navbar navbar-expand-lg ">
      <img className="logo pisb" alt="PISB Logo" src="../img/pisblogo.png" />
      <img className="logo ctd ml-auto" alt="RC Logo" src="../img/rclogo.png" />
    </nav>
  );
};

export default Navbar;
