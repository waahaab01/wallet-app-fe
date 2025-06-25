import React from "react";
import "../Style/Authentication.css";
import object3 from "../../assets/Vector2.png"
import logo from "../../assets/Log.png"



const Authentication = () => {
  return (
    <>
      <div className="auth-container">
        <div className="authimg-block">
          <div className="img-box">
            <img src={object3} alt="" />
          </div>
          <div className="text-cont">
            <h1 className="textcont-h1">CRYPTO ZEN MODE ACTIVATED</h1>
            <h2 className="textcont-h3">
              Track coins, monitor NFTs ,swap like a ninja all without leaving
              you vault. Your assets. your vibe.
            </h2>
          </div>
        </div>
        <div className="form-block">
          <div className="form-container">
          <div className="logodiv">
            <img src={logo} alt="" />
          </div>
            <div className="auth-form1">
              <form className="auth-form">
                <h1 className="form-h5">VERIFY YOUR IDENTITY</h1>
                <h2 className="form-h2">
                  Enter the 4- digit code sent to your email
                </h2>
                <div className="code-div">
                    <input className="auth-inp" type="number" placeholder="_" />
                    <input className="auth-inp" type="number" placeholder="_" />
                    <input className="auth-inp" type="number" placeholder="_" />
                    <input className="auth-inp" type="number" placeholder="_" />
                </div>

                <button type="submit" className="verify">
                  VERIFY
                </button>
                <button type="button" className="back">
                  BACK TO LOGIN
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Authentication;
