import React, { useState } from "react";
import "../Style/ForgotPassword.css";
import { useNavigate } from "react-router-dom";
import { sendResetOTP } from "../../api/auth";
import PopupNotification from "../PopUp/PopUp"; // <-- import popup

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const data = await sendResetOTP({ email });

      setPopup({
        show: true,
        type: "success",
        title: "OTP Sent!",
        message: data.message || "OTP has been sent to your email.",
        buttonText: "Verify OTP",
        onButtonClick: () =>
          navigate("/verify-otp", { state: { email, reset: true } })
      });

    } catch (err) {
      setPopup({
        show: true,
        type: "error",
        title: "Error",
        message: err.message || "Failed to send OTP. Please try again.",
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

      <div className="forgot-bg">
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
    </>
  );
};

export default ForgotPassword;
