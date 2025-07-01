import React, { useRef, useState } from "react";
import "../Style/Authentication.css";
import object3 from "../../assets/Vector2.png";
import logo from "../../assets/Log.png";
import { useNavigate, useLocation } from "react-router-dom";
import { toast, ToastContainer } from './toaster';
import { verifyLoginOTP } from '../../api/auth';

const Authentication = () => {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state?.email || "";
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
      toast.error("Please enter all 4 digits", { position: 'top-center', theme: 'colored' });
      return;
    }
    setLoading(true);
    try {
      const code = otp.join("");
      const data = await verifyLoginOTP({ email, otp: code });
      localStorage.setItem("authToken", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));
      toast.success("Login verified! Redirecting...", { position: 'top-center', theme: 'colored' });
      setTimeout(() => navigate('/dashboard'), 1200);
    } catch (err) {
      toast.error(err.message, { position: 'top-center', theme: 'colored' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <ToastContainer />
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
              <form className="auth-form" onSubmit={handleSubmit}>
                <h1 className="form-h5">VERIFY YOUR IDENTITY</h1>
                <h2 className="form-h2">
                  Enter the 4- digit code sent to your email
                </h2>
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
