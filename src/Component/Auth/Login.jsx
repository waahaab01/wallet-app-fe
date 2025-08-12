import React, { useState } from "react";
import "../Style/Login.css";
import logo1 from "../../assets/Log.png";
import object from "../../assets/Vector.png";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../api/auth";
import { FaEye, FaEyeSlash } from "./eyeicons";
import PopupNotification from "../PopUp/PopUp"; // Import popup component

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const [popup, setPopup] = useState({
    show: false,
    type: "success",
    title: "",
    message: "",
  });

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const data = await loginUser({ email, password });
      setPopup({
        show: true,
        type: "success",
        title: "Login Successful!",
        message: data.message || "OTP sent to your email",
      });

      // Navigate after 1.5 sec
      setTimeout(() => {
        setPopup({ ...popup, show: false });
        navigate("/authentication", { state: { email } });
      }, 2000);
    } catch (err) {
      setPopup({
        show: true,
        type: "error",
        title: "Login Failed!",
        message: err.message || "Invalid credentials",
      });

      // Auto close after 2 sec
      setTimeout(() => {
        setPopup({ ...popup, show: false });
      }, 2000);
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
          buttonText="OK"
          onClose={() => setPopup({ ...popup, show: false })}
          onButtonClick={() => setPopup({ ...popup, show: false })}
        />
      )}

      <div className="main-containerlogin">
        <div className="img-blocklogin">
          <div className="img-boxlogin">
            <img src={object} alt="" />
          </div>
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
              <form className="form" onSubmit={handleSubmit}>
                <h1 className="form-h1">Welcome Back</h1>
                <h2 className="form-h2">
                  welcome back! Please enter your details
                </h2>

                <label>
                  <h1 className="label-h1">Email</h1>
                  <input
                    className="input"
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </label>

                <label>
                  <h1 className="label-h1">Password</h1>
                  <div className="password-field">
                    <input
                      className="input"
                      type={showPassword ? "text" : "password"}
                      placeholder="********"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword((v) => !v)}
                      style={{
                        background: "none",
                        border: "none",
                        padding: 0,
                        marginLeft: 8,
                        cursor: "pointer",
                      }}
                    >
                      {showPassword ? <FaEyeSlash size={18} /> : <FaEye size={18} />}
                    </button>
                  </div>
                </label>

                <label className="terms">
                  <input type="checkbox" /> Remember for me{" "}
                  <span
                    style={{ color: "#00bfae", cursor: "pointer" }}
                    onClick={() => navigate("/forgot-password")}
                  >
                    Forget Password
                  </span>
                </label>

                <button type="submit" className="signup-btn" disabled={loading}>
                  {loading ? (
                    <span>
                      <span
                        className="loader"
                        style={{
                          display: "inline-block",
                          width: 18,
                          height: 18,
                          border: "1px solid black",
                          // borderTop: "2px solid #00bfae",
                          borderRadius: "6px",
                          boxShadow: "4px 4px 0 black",
                          animation: "spin 1s linear infinite",
                          marginRight: 8,
                          verticalAlign: "middle",
                        }}
                      />
                      Please wait...
                    </span>
                  ) : (
                    "SIGN in"
                  )}
                </button>

                <button type="button" className="google-btn">
                  SIGN in WITH GOOGLE
                </button>

                <button
                  type="button"
                  className="topup-btn"
                  style={{
                    marginTop: 10,
                    background: '#f79bd3',
                    color: '#222',
                    fontWeight: 700,
                    borderRadius: 8,
                    border: '1px solid #222',
                    padding: '12px 0',
                    width: '100%',
                    boxShadow: '4px 4px 0px black',
                    fontSize: '1.1rem',
                    cursor: 'pointer',
                  }}
                  onClick={() => navigate('/topup-login')}
                >
                  TOPUP LOGIN
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
