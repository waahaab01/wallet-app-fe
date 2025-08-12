import React, { useState } from "react";
import "../Style/ResetPassword.css";
import { useNavigate, useLocation } from "react-router-dom";
import { FaEye, FaEyeSlash } from './eyeicons';
import resetImg from "../../assets/wallet/Portrait-IMG.png";
import { resetPassword } from '../../api/auth';
import PopupNotification from "../PopUp/PopUp"; // <-- import popup

function getPasswordStrength(password) {
  let score = 0;
  if (password.length >= 8) score++;
  if (/[A-Z]/.test(password)) score++;
  if (/[a-z]/.test(password)) score++;
  if (/[0-9]/.test(password)) score++;
  if (/[^A-Za-z0-9]/.test(password)) score++;
  return score;
}

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showRePassword, setShowRePassword] = useState(false);
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
  const passwordStrength = getPasswordStrength(password);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== rePassword) {
      setPopup({
        show: true,
        type: "error",
        title: "Password Mismatch",
        message: "Passwords do not match. Please try again.",
        buttonText: "Retry",
        onButtonClick: () => setPopup(prev => ({ ...prev, show: false }))
      });
      return;
    }

    try {
      const data = await resetPassword({ email, newPassword: password });

      setPopup({
        show: true,
        type: "success",
        title: "Password Changed!",
        message: data.message || "Your password has been successfully updated.",
        buttonText: "Login",
        onButtonClick: () => navigate('/login')
      });

    } catch (err) {
      setPopup({
        show: true,
        type: "error",
        title: "Error",
        message: err.message || "Failed to reset password. Please try again.",
        buttonText: "Retry",
        onButtonClick: () => setPopup(prev => ({ ...prev, show: false }))
      });
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

      <div className="reset-bg">
        <div className="reset-card">
          <h1 className="reset-title">WELCOME TO YOUR WALLET!</h1>
          <p className="reset-desc">Let's keep your assets extra safe. Set up your new password.</p>

          <div className="reset-avatar">
            <img src={resetImg} alt="avatar" className="reset-img" />
            <div className="reset-name">MRFUNKI</div>
          </div>

          <form onSubmit={handleSubmit}>
            <label className="reset-label">Enter Your New Password*</label>
            <div className="reset-field-row">
              <input
                className="reset-input"
                type={showPassword ? "text" : "password"}
                placeholder="********"
                value={password}
                onChange={e => setPassword(e.target.value)}
                required
              />
              <button type="button" onClick={() => setShowPassword(v => !v)} className="reset-eye-btn">
                {showPassword ? <FaEyeSlash size={18} /> : <FaEye size={18} />}
              </button>
            </div>

            <div className="reset-strength-bar">
              <div
                className="reset-bar"
                style={{
                  width: `${passwordStrength * 25}%`,
                  background:
                    passwordStrength <= 1
                      ? '#e74c3c'
                      : passwordStrength === 2
                      ? '#f1c40f'
                      : passwordStrength === 3
                      ? '#3498db'
                      : '#2ecc71'
                }}
              />
            </div>
            <span className="reset-pass-strength">Password Strength</span>

            <label className="reset-label">Re-enter Password*</label>
            <div className="reset-field-row">
              <input
                className="reset-input"
                type={showRePassword ? "text" : "password"}
                placeholder="********"
                value={rePassword}
                onChange={e => setRePassword(e.target.value)}
                required
                style={{ borderColor: rePassword && password !== rePassword ? 'red' : undefined }}
              />
              <button type="button" onClick={() => setShowRePassword(v => !v)} className="reset-eye-btn">
                {showRePassword ? <FaEyeSlash size={18} /> : <FaEye size={18} />}
              </button>
            </div>

            {rePassword && password !== rePassword && (
              <span style={{ color: 'red', fontSize: '12px' }}>Passwords do not match</span>
            )}

            <button className="reset-submit" type="submit">
              SAVE & GOTO WALLET
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ResetPassword;
