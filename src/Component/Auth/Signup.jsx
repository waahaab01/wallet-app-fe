import React, { useState } from "react";
import "../Style/Signup.css";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/Log.png";
import { signupUser } from '../../api/auth';
import { FaEye, FaEyeSlash } from './eyeicons';
import PopupNotification from "../PopUp/PopUp"; // <-- Import your popup

function getPasswordStrength(password) {
  let score = 0;
  if (password.length >= 8) score++;
  if (/[A-Z]/.test(password)) score++;
  if (/[a-z]/.test(password)) score++;
  if (/[0-9]/.test(password)) score++;
  if (/[^A-Za-z0-9]/.test(password)) score++;
  return score;
}

const Signup = () => {
  const [loading, setLoading] = useState(false);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showRePassword, setShowRePassword] = useState(false);

  const [popupData, setPopupData] = useState(null); // For popup control

  const navigate = useNavigate();

  const passwordStrength = getPasswordStrength(password);
  const strengthLabels = [
    "Very Weak",
    "Weak",
    "Medium",
    "Strong",
    "Very Strong"
  ];

  const handleSubmit = async (e) => {
    if (e) e.preventDefault();
    setLoading(true);

    if (password !== rePassword) {
      setPopupData({
        type: "error",
        title: "Passwords do not match",
        message: "Please make sure both password fields are identical.",
        buttonText: "OK",
        onButtonClick: () => setPopupData(null),
      });
      setLoading(false);
      return;
    }

    const fullName = `${firstName} ${lastName}`.trim();

    try {
      const data = await signupUser({ fullName, email, password });
      localStorage.setItem("authToken", data.token);

      setPopupData({
        type: "success",
        title: "Signup Successful!",
        message: "Wallet created successfully. Redirecting to login...",
        buttonText: "Go to Login",
        onButtonClick: () => {
          setPopupData(null);
          navigate("/login");
        }
      });
    } catch (err) {
      setPopupData({
        type: "error",
        title: "Signup Failed",
        message: err.message || "Something went wrong. Please try again.",
        buttonText: "OK",
        onButtonClick: () => setPopupData(null)
      });
    } finally {
      setLoading(false);
    }
  };

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
          <form className="form1" onSubmit={handleSubmit}>
            <label className="label">
              First Name*
              <input type="text" placeholder="Enter your first name" value={firstName} onChange={e => setFirstName(e.target.value)} required />
            </label>
            <label className="label">
              Last Name*
              <input type="text" placeholder="Enter your last name" value={lastName} onChange={e => setLastName(e.target.value)} required />
            </label>
            <label className="label">
              Email*
              <input type="email" placeholder="Enter your email" value={email} onChange={e => setEmail(e.target.value)} required />
            </label>
            <label className="label">
              Password*
              <div className="password-field">
                <input type={showPassword ? "text" : "password"} placeholder="********" value={password} onChange={e => setPassword(e.target.value)} required />
                <button type="button" onClick={() => setShowPassword(v => !v)} style={{background:'none',border:'none',padding:0,marginLeft:8,cursor:'pointer'}}>
                  {showPassword ? <FaEyeSlash size={18} /> : <FaEye size={18} />}
                </button>
              </div>
              <div className="strength-bar strength-bar-single">
                <div className="bar" style={{width: `${passwordStrength*25}%`, background: passwordStrength <= 1 ? '#e74c3c' : passwordStrength === 2 ? '#f1c40f' : passwordStrength === 3 ? '#3498db' : '#2ecc71'}} />
              </div>
              <span className="pass">Password Strength: {strengthLabels[passwordStrength-1] || 'Very Weak'}</span>
            </label>
            <label className="label">
              Re-enter Password*
              <div className="password-field">
                <input type={showRePassword ? "text" : "password"} placeholder="********" value={rePassword} onChange={e => setRePassword(e.target.value)} required style={{borderColor: rePassword && password !== rePassword ? 'red' : undefined}} />
                <button type="button" onClick={() => setShowRePassword(v => !v)} style={{background:'none',border:'none',padding:0,marginLeft:8,cursor:'pointer'}}>
                  {showRePassword ? <FaEyeSlash size={18} /> : <FaEye size={18} />}
                </button>
              </div>
              {rePassword && password !== rePassword && (
                <span style={{color:'red',fontSize:'12px'}}>Passwords do not match</span>
              )}
            </label>
            <label className="terms1">
              <input type="checkbox" required  /> I agree to the{" "}
              <span> Terms of Service</span> and <span> Privacy Policy</span>.
            </label>
            <button type="submit" className="signup-btn" disabled={loading}>
              {loading ? (
                <span>
                  <span className="loader" style={{
                    display: 'inline-block',
                    width: 18,
                    height: 18,
                    border: '2px solid #fff',
                    borderTop: '2px solid #00bfae',
                    borderRadius: '50%',
                    animation: 'spin 1s linear infinite',
                    marginRight: 8,
                    verticalAlign: 'middle'
                  }} />
                  Please wait...
                </span>
              ) : (
                "SIGN UP"
              )}
            </button>

            <button type="button" className="google-btn" onClick={()=>handleSubmit()}>
              SIGN UP WITH GOOGLE
            </button>
            <p className="signin-link1" onClick={() => navigate("/login")}> 
              Already have an account?<span>Sign in</span>
            </p>
          </form>
        </div>
      </div>

      {popupData && (
        <PopupNotification
          type={popupData.type}
          title={popupData.title}
          message={popupData.message}
          buttonText={popupData.buttonText}
          onClose={() => setPopupData(null)}
          onButtonClick={popupData.onButtonClick}
        />
      )}
    </div>
  );
};

export default Signup;
