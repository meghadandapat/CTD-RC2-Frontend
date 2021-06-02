import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import Logout from "../Logout/Logout";
import "./Navbar.css";
import Timer from "../Timer/Timer";

const Navbar = () => {
  const location = useLocation();
  console.log(location.pathname === "/questionhub");
  if (
    location.pathname === "/questionhub" ||
    location.pathname === "/submissions" ||
    location.pathname === "/leaderboard" ||
    location.pathname === "/coding" ||
    location.pathname === "/testcases"
  )
    return (
      <nav className="navbar navbar-expand-lg ">
        <button
          className="navbar-toggler navbar-dark "
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon navbar-dark" />
        </button>
        <img className="logo pisb" alt="PISB Logo" src="../img/pisblogo.png" />
        <Timer/>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <NavLink
                to="/questionhub"
                className="nav-link"
                activeStyle={{color:"#58A6FF"}}
              >
                QuestionHub
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/submissions"
                className="nav-link"
                activeStyle={{color:"#58A6FF"}}
              >
                Submissions
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/leaderboard"
                className="nav-link"
                activeStyle={{color:"#58A6FF"}}
              >
                Leaderboard
              </NavLink>
            </li>

            <li className="nav-item">
              <Logout />
            </li>
          </ul>
          <img className="logo ctd" alt="RC Logo" src="../img/rclogo.png" />
        </div>
      </nav>
    );

  return (<nav className="navbar navbar-expand-lg ">
    <img className="logo pisb" alt="PISB Logo" src="../img/pisblogo.png"  />
    <img className="logo ctd ml-auto" alt="RC Logo" src="../img/rclogo.png"  /></nav>);
};

export default Navbar;
