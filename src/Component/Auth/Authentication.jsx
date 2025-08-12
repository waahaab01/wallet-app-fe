import React, { useRef, useState } from "react";
import "../Style/Authentication.css";
import object3 from "../../assets/Vector2.png";
import logo from "../../assets/Log.png";
import { useNavigate, useLocation } from "react-router-dom";
import { verifyLoginOTP, verifyLoginMnemonicOTP } from '../../api/auth';
import PopupNotification from "../PopUp/PopUp"; // <-- popup ka import

const Authentication = () => {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [loading, setLoading] = useState(false);

  // Popup state
  const [popup, setPopup] = useState({
    show: false,
    type: "success",
    title: "",
    message: "",
    buttonText: "OK",
    onButtonClick: () => {}
  });

  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state?.email || "";
  const mnemonic = location.state?.mnemonic || "";
  const inputs = [useRef(), useRef(), useRef(), useRef()];

  const handleChange = (e, idx) => {
    const val = e.target.value.replace(/\D/g, "").slice(0, 1);
    const newOtp = [...otp];
    newOtp[idx] = val;
    setOtp(newOtp);
    if (val && idx < 3) inputs[idx + 1].current.focus();
    if (!val && idx > 0) inputs[idx - 1].current.focus();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (otp.some(d => d === "")) {
      setPopup({
        show: true,
        type: "error",
        title: "Missing Digits",
        message: "Please enter all 4 digits.",
        buttonText: "Try Again",
        onButtonClick: () => setPopup(prev => ({ ...prev, show: false }))
      });
      return;
    }

    setLoading(true);
    try {
      const code = otp.join("");
      let data;
      if (mnemonic) {
        data = await verifyLoginMnemonicOTP({ mnemonic, otp: code });
      } else {
        data = await verifyLoginOTP({ email, otp: code });
      }

      localStorage.setItem("authToken", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));
      localStorage.setItem("userWallet", JSON.stringify(data.wallet));

      setPopup({
        show: true,
        type: "success",
        title: "Login Verified!",
        message: "Redirecting you to your dashboard...",
        buttonText: "Continue",
        onButtonClick: () => {
          if (data.user && data.user.role === "admin") {
            navigate('/admin');
          } else {
            navigate('/');
          }
        }
      });

    } catch (err) {
      setPopup({
        show: true,
        type: "error",
        title: "Login Failed",
        message: err.message || "Something went wrong. Please try again.",
        buttonText: "Retry",
        onButtonClick: () => setPopup(prev => ({ ...prev, show: false }))
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {popup.show && (
        <PopupNotification
          type={popup.type}
          title={popup.title}
          message={popup.message}
          buttonText={popup.buttonText}
          onClose={() => setPopup(prev => ({ ...prev, show: false }))}
          onButtonClick={popup.onButtonClick}
        />
      )}

      <div className="auth-container">
        <div className="authimg-block">
          <div className="img-box">
            <img src={object3} alt="" />
          </div>
          <div className="text-cont">
            <h1 className="textcont-h1">CRYPTO ZEN MODE ACTIVATED</h1>
            <h2 className="textcont-h3">
              Track coins, monitor NFTs, swap like a ninja all without leaving your vault.
              Your assets. Your vibe.
            </h2>
          </div>
        </div>

        <div className="form-block">
          <div className="form-container">
            <div className="logodiv">
              <img src={logo} alt="" />
            </div>
            <div className="auth-form1">
              <form className="auth-form" onSubmit={handleSubmit}>
                <h1 className="form-h5">VERIFY YOUR IDENTITY</h1>
                <h2 className="form-h2">Enter the 4-digit code sent to your email</h2>

                <div className="code-div">
                  {otp.map((val, idx) => (
                    <input
                      key={idx}
                      ref={inputs[idx]}
                      className="auth-inp"
                      type="text"
                      inputMode="numeric"
                      maxLength={1}
                      placeholder="_"
                      value={val}
                      onChange={e => handleChange(e, idx)}
                      onFocus={e => e.target.select()}
                      autoFocus={idx === 0}
                    />
                  ))}
                </div>

                <button type="submit" className="verify" disabled={loading}>
                  {loading ? 'Please wait...' : 'VERIFY'}
                </button>

                <button type="button" className="back" onClick={() => navigate('/login')}>
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
