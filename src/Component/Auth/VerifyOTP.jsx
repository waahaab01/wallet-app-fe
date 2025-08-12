import React, { useRef, useState } from "react";
import "../Style/VerifyOTP.css";
import { useNavigate, useLocation } from "react-router-dom";
import { verifyResetOTP } from '../../api/auth';
import PopupNotification from "../PopUp/PopUp"; // ✅ apna popup component import karo

const VerifyOTP = () => {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [loading, setLoading] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [popupType, setPopupType] = useState("success");
  const [popupTitle, setPopupTitle] = useState("");
  const [popupMessage, setPopupMessage] = useState("");
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
      setPopupType("error");
      setPopupTitle("Invalid OTP");
      setPopupMessage("Please enter all 4 digits");
      setShowPopup(true);
      return;
    }
    setLoading(true);
    try {
      const code = otp.join("");
      const data = await verifyResetOTP({ email, otp: code });

      setPopupType("success");
      setPopupTitle("OTP Verified!");
      setPopupMessage(data.message || "Your OTP has been verified successfully.");
      setShowPopup(true);

      setTimeout(() => {
        navigate('/reset-password', { state: { email } });
      }, 1200);
    } catch (err) {
      setPopupType("error");
      setPopupTitle("Verification Failed");
      setPopupMessage(err.message || "OTP verification failed. Please try again.");
      setShowPopup(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="verify-bg">
      <div className="verify-card">
        <h1 className="verify-title">VERIFY YOUR IDENTITY</h1>
        <p className="verify-desc">Enter the 4-digit code sent to your email.</p>
        <form onSubmit={handleSubmit}>
          <div className="verify-code-row">
            {otp.map((val, idx) => (
              <input
                key={idx}
                ref={inputs[idx]}
                className="verify-code-input"
                type="text"
                inputMode="numeric"
                maxLength={1}
                value={val}
                onChange={e => handleChange(e, idx)}
                onFocus={e => e.target.select()}
                autoFocus={idx === 0}
              />
            ))}
          </div>
          <button
            className="verify-submit"
            type="submit"
            disabled={loading}
          >
            {loading ? 'Please wait...' : 'SUBMIT'}
          </button>
          <button
            className="verify-cancel"
            type="button"
            onClick={() => navigate('/login')}
          >
            CANCEL
          </button>
        </form>
        <div className="verify-bottom">
          Already have an account?{" "}
          <span className="verify-signin" onClick={() => navigate('/login')}>
            Sign in
          </span>
        </div>
      </div>

      {/* ✅ Popup Notification */}
      {showPopup && (
        <PopupNotification
          type={popupType}
          title={popupTitle}
          message={popupMessage}
          buttonText="OK"
          onClose={() => setShowPopup(false)}
          onButtonClick={() => setShowPopup(false)}
        />
      )}
    </div>
  );
};

export default VerifyOTP;
