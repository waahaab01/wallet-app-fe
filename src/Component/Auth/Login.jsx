import React, { useState } from "react";
import "../Style/Login.css";
import logo1 from "../../assets/Log.png";
import object from "../../assets/Vector.png";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../api/auth";
import { toast, ToastContainer } from "./toaster";
import { FaEye, FaEyeSlash } from "./eyeicons";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const data = await loginUser({ email, password });
      toast.success(data.message || "OTP sent to your email", {
        position: "top-center",
        theme: "colored",
      });
      setTimeout(() => navigate("/authentication", { state: { email } }), 1500);
    } catch (err) {
      toast.error(err.message, { position: "top-center", theme: "colored" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <ToastContainer />
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
                  welcome back!Please enter your details
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
                      {showPassword ? (
                        <FaEyeSlash size={18} />
                      ) : (
                        <FaEye size={18} />
                      )}
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
                          border: "2px solid #fff",
                          borderTop: "2px solid #00bfae",
                          borderRadius: "50%",
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
