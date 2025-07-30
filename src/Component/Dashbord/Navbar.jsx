import React, { useState } from "react";
import "../Style/navbar.css";
import bell from "../../assets/bell.png";
import avatar from "../../assets/Portrait.png";
import { useNavigate } from "react-router-dom";

const Navbar = ({ logo, titleImg, bgColor }) => {
  const navigate = useNavigate();
  const [showNotifications, setShowNotifications] = useState(false);

  return (
    <div className="navbar" style={{ backgroundColor: bgColor }}>
      <div className="left">
        {logo && <img src={logo} alt="Logo" className="logo" style={{ marginRight: 10 }} />}
        {titleImg && <img src={titleImg} alt="Title" className="navbar-title-img" style={{ height: 56 }} />}
      </div>
      <div className="right">
        <div className="search">
          <input type="text" placeholder="Search" />
          <span className="search-icon">🔍</span>
        </div>

        {/* BELL WITH HOVER NOTIFICATION DROPDOWN */}
        <div
          className="bell"
          onMouseEnter={() => setShowNotifications(true)}
          onMouseLeave={() => setShowNotifications(false)}
        >
          <span className="dot"></span>
          <img src={bell} alt="Notifications" />
          {showNotifications && (
            <div className="notification-popup">
              <p className="notification-item">🔔 New user signed up</p>
              <p className="notification-item">💸 Payment received</p>
              <p className="notification-item">🚀 Server restarted</p>
              <p className="notification-item">📦 New order placed</p>
              <p className="notification-item">📢 Marketing campaign launched</p>
            </div>
          )}
        </div>

        <img src={avatar} alt="Avatar" className="avatar" onClick={() => navigate('/settings')} />
      </div>
    </div>
  );
};

export default Navbar;
