import React, { useState } from "react";
import "../Style/ForgotPassword.css";
import { useNavigate } from "react-router-dom";
import { sendResetOTP } from "../../api/auth";
import { toast, ToastContainer } from "./toaster";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const data = await sendResetOTP({ email });
      toast.success(data.message || "OTP sent to your email", {
        position: "top-center",
        theme: "colored",
      });
      setTimeout(
        () => navigate("/verify-otp", { state: { email, reset: true } }),
        1500
      );
    } catch (err) {
      toast.error(err.message, { position: "top-center", theme: "colored" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="forgot-bg">
      <ToastContainer />
      <div className="forgot-card">
        <h1 className="forgot-title">FORGOT PASSWORD</h1>
        <p className="forgot-desc">
          Forget password? Enter your email to reset it.
        </p>
        <form onSubmit={handleSubmit}>
          <label className="forgot-label">Email</label>
          <input
            className="forgot-input"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button className="forgot-submit" type="submit" disabled={loading}>
            {loading ? "Please wait..." : "SUBMIT"}
          </button>
          <button
            className="forgot-cancel"
            type="button"
            onClick={() => navigate("/login")}
          >
            CANCEL
          </button>
        </form>
        <div className="forgot-bottom">
          Already have an account?{" "}
          <span className="forgot-signin" onClick={() => navigate("/login")}>
            Sign in
          </span>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
