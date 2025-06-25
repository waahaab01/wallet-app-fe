import React from "react";
import "../Style/Signup.css";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/Log.png";

const Signup = () => {
  const navigate = useNavigate();

  return (
    <div className="signup-container">
      <div className="navbarsignup">
        <img src={logo} alt="Logo" className="logo-img" />
      </div>
      <div className="wrap-container">
        <div className="form-card">
          <div className="head-container">
            <h1 className="title12">GET STARTED</h1>
            <p className="subtitle">
              Sign up to manage your wallets, track coins, and vibe.
            </p>
          </div>
          <form className="form1">
            <label className="label">
              Username*
              <input type="text" placeholder="Enter your username" />
            </label>
            <label className="label">
              Email*
              <input type="email" placeholder="Enter your email" />
            </label>
            <label className="label">
              Phone Number*
              <div className="phone-field">
                <select>
                  <option value="us">US</option>
                  <option value="pk">PK</option>
                </select>
                <input type="text" placeholder="+1" />
              </div>
            </label>
            <label className="label">
              Password*
              <div className="password-field">
                <input type="password" placeholder="********" />
                <button type="button">👁️</button>
              </div>
              <div className="strength-bar">
                <div className="bar" />
                <div className="bar" />
                <div className="bar" />
                <div className="bar" />
              </div>
              <span className="pass">Password Strength</span>
            </label>

            <label className="label">
              Re-enter Password*
              <div className="password-field">
                <input type="password" placeholder="********" />
                <button type="button">👁️</button>
              </div>
            </label>
          </form>
          <label className="terms1">
            <input type="checkbox" /> I agree to the{" "}
            <span> Terms of Service</span> and <span> Privacy Policy</span>.
          </label>

          <button type="submit" className="signup-btn">
            SIGN UP
          </button>
          <button type="button" className="google-btn">
            SIGN UP WITH GOOGLE
          </button>

          <p className="signin-link1" onClick={() => navigate("/login")}>
            Already have an account?<span>Sign in</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
