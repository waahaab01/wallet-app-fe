import React from "react";
import "../Style/Login.css";
import logo1 from "../../assets/Log.png";
import object from "../../assets/Vector.png";
import { useNavigate } from "react-router-dom";


const Login = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="main-containerlogin">
        <div className="img-blocklogin">
          <div className="img-boxlogin">
            <img src={object} alt="" /></div>
          <div className="text-contlogin">
            <h1 className="textcont-h1">ONE WALLET TO RULE THEM ALL</h1>
            <h2 className="textcont-h2">
              Link MetaMask,Trust Wallet,Coinbase,and more into one supper
              wallet.See everything in one place,instantly
            </h2>
          </div>
        </div>
        <div className="form-blocklogin">
          <div className="form-containerlogin">
          <div className="logodivlogin">
            <img src={logo1} alt="" />
          </div>
            <div className="login-form">
              <form className="form">
                <h1 className="form-h1">Welcome Back</h1>
                <h2 className="form-h2">
                  welcome back!Please enter your details
                </h2>
                <label>
                  <h1 className="label-h1">Username</h1>
                  <input
                    className="input"
                    type="text"
                    placeholder="Enter your username"
                  />
                </label>
                <label>
                  <h1 className="label-h1">password</h1>
                  <div className="password-field">
                    <input
                      className="input"
                      type="password"
                      placeholder="********"
                    />
                    <button type="button">👁️</button>
                  </div>
                </label>
                <label className="terms">
                  <input type="checkbox" /> Remember for me{" "}
                  <span>Forget Password</span>
                </label>
                <button type="submit" className="signup-btn">
                  SIGN in
                </button>
                <button type="button" className="google-btn">
                  SIGN in WITH GOOGLE
                </button>
                <p className="signin-link" onClick={() => navigate("/signup")}>
                  Don't have an account?<span>Sign up</span>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
