import React, { useState } from "react";
import "../Style/TopUpLogin.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import topup from "../../assets/topup.png";
import logo1 from "../../assets/Log.png";
import { loginWithMnemonic } from '../../api/auth';
import { useNavigate } from "react-router-dom";
import PopupNotification from "../PopUp/PopUp"; // ✅ import your popup

const TopUpLogin = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [phrase, setPhrase] = useState("");
  const [remember, setRemember] = useState(false);
  const [loading, setLoading] = useState(false);

  const [popup, setPopup] = useState({
    visible: false,
    type: "success",
    title: "",
    message: "",
    buttonText: "OK",
    onButtonClick: null,
  });

  const handleMnemonicLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await loginWithMnemonic(phrase);
      setPopup({
        visible: true,
        type: "success",
        title: "Login Successful!",
        message: res.message || "OTP sent to your email",
        buttonText: "Continue",
        onButtonClick: () => navigate("/authentication", { state: { mnemonic: phrase } })
      });
    } catch (err) {
      setPopup({
        visible: true,
        type: "error",
        title: "Login Failed",
        message: err.message || "Failed to login",
        buttonText: "Try Again",
        onButtonClick: () => setPopup((prev) => ({ ...prev, visible: false }))
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="topup-container">
      {popup.visible && (
        <PopupNotification
          type={popup.type}
          title={popup.title}
          message={popup.message}
          buttonText={popup.buttonText}
          onClose={() => setPopup((prev) => ({ ...prev, visible: false }))}
          onButtonClick={popup.onButtonClick}
        />
      )}

      <div className="topup-img-block">
        <div className="topup-img-box">
          <img src={topup} alt="" />
        </div>
        <div className="topup-text-cont">
          <h1 className="topup-h1">TOP-UP FROM ANYWHERE</h1>
          <h2 className="topup-h2">
            Move crypto from your linked wallets directly into your main vault.
            One tap, zero chaos.
          </h2>
        </div>
      </div>
      <div className="topup-form-block">
        <div className="topup-form-container">
          <div className="topup-logo-div">
            <img src={logo1} alt="" />
          </div>
          <div className="topup-login-form">
            <form className="topup-form" onSubmit={handleMnemonicLogin}>
              <h1 className="topup-form-h1">Welcome Back</h1>
              <h2 className="topup-form-h2">
                welcome back! Please enter your Phrase key
              </h2>
              <label className="topup-label-h1">
                Private Key
                <div className="topup-password-field-container">
                  <input
                    className="topup-input"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your phrase key"
                    value={phrase}
                    onChange={(e) => setPhrase(e.target.value)}
                    autoComplete="off"
                  />
                  <button
                    type="button"
                    className="topup-password-field"
                    onClick={() => setShowPassword((v) => !v)}
                    tabIndex={-1}
                    style={{
                      background: "none",
                      border: "none",
                      padding: 0,
                      marginLeft: 8,
                      cursor: "pointer",
                    }}
                  >
                    {showPassword ? (
                      <FaEyeSlash size={18} />
                    ) : (
                      <FaEye size={18} />
                    )}
                  </button>
                </div>
              </label>
              <div className="topup-terms">
                <label className="topup-remember">
                  <input
                    type="checkbox"
                    checked={remember}
                    onChange={(e) => setRemember(e.target.checked)}
                  />
                  Remember for me
                </label>
                <span style={{ color: "#FC7339", cursor: "pointer" }}>
                  Forget password
                </span>
              </div>
              <button type="submit" className="topup-signup-btn main" disabled={loading}>
                {loading ? "Please wait..." : "SIGN IN"}
              </button>
              <button type="button" className="topup-google-btn email" onClick={() => navigate("/login")}>
                SIGN IN WITH EMAIL
              </button>
              <button
                type="button"
                className="topup-google-btn google"
                style={{ background: "#AF96FB" }}
              >
                SIGN IN WITH GOOGLE
              </button>
              <div className="topup-signin-link">
                Don't have an account? <span>Sign up</span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopUpLogin;
