import React from "react";
import { Link } from "react-router-dom";
import "./css/login.css";
import CustomNavbar from "./Navbar";

export default function Login() {
  return (
    <div>
      <CustomNavbar/>
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>
        <input type="text" placeholder="Email or Phone" />
        <input type="password" placeholder="Password" />
        <button className="login-btn">Login</button>
        <p>
          Don't have an account? <Link to="/signup">Sign up</Link>
        </p>
      </div>
    </div>
    </div>
  );
}
