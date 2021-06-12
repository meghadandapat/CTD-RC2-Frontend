import "./Login.css";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axiosInstance from "../../axios";

import './Bg.sass';
const Login = () => {
  const history = useHistory();

  const initialFormData = Object.freeze({
    username: "",
    password: "",
  });

  const [formData, updateFormData] = useState(initialFormData);

  const handleChange = (e) => {
    updateFormData({
      ...formData,
      [e.target.name]: e.target.value.trim(),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);

    axiosInstance
      .post("/api/token/", {
        username: formData.username,
        password: formData.password,
      })
      .then((res) => {
        localStorage.setItem("access_token", res.data.access);
        localStorage.setItem("refresh_token", res.data.refresh);
        axiosInstance.defaults.headers["Authorization"] =
          "JWT " + localStorage.getItem("access_token");
        history.push("/instructions");
        console.log(res.status);
      });
  };

  return (
    <div className="login">
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
      <div className="container" id="loginbg">
        <div className="card logincard">
          <div className="card-body">
            <div className="wrapper">
              <h2 className="logintitle typing-demo">Reverse Coding 2.0</h2>
            </div>
            <form className="loginform">
              <div className="formField">
                <div className="logo">
                  <i className="fa fa-user icon"></i>
                </div>
                <div className="formInput">
                  <input
                    type="text"
                    name="username"
                    className="formip"
                    placeholder="Username"
                    id="username"
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="formField">
                <div className="logo">
                  <i className="fas fa-unlock-alt"></i>
                </div>
                <div className="formInput">
                  <input
                    type="password"
                    name="password"
                    className="formip"
                    placeholder="Password"
                    id="password"
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="form-center">
                <div className="radio">
                  <input id="radio-1" name="radio" type="radio" checked />
                  <label for="radio-1" className="radio-label">
                    Junior
                  </label>
                </div>

                <div className="radio">
                  <input id="radio-2" name="radio" type="radio" />
                  <label for="radio-2" className="radio-label">
                    Senior
                  </label>
                </div>
              </div>

              <button
                className="btn loginbutton scanfcode"
                type="submit"
                onClick={handleSubmit}
              >
                <span>Login</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
