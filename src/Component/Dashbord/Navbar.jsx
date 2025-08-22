import React, { useState } from "react";
import "../Style/navbar.css";
import bell from "../../assets/bell.png";
import avatar from "../../assets/Portrait.png";
import { useNavigate } from "react-router-dom";

const Navbar = ({ logo, titleImg, bgColor }) => {
  const navigate = useNavigate();
  const [showNotifications, setShowNotifications] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const handleLogout = () => {
    // Yaha aap logout ka logic dal sakte ho (localStorage clear, token remove, etc.)
    localStorage.removeItem("user"); 
    setShowLogoutModal(false);
    navigate("/login");
  };

  return (
    <div className="navbar" style={{ backgroundColor: bgColor }}>
      <div className="left">
        {logo && <img src={logo} alt="Logo" className="logo" style={{ marginRight: 10 }} />}
        {titleImg && <img src={titleImg} alt="Title" className="navbar-title-img" style={{ height: 56 }} />}
      </div>

      <div className="right">
        {/* SEARCH */}
        <div className="search">
          <input type="text" placeholder="Search" />
          <span className="search-icon">🔍</span>
        </div>

        {/* NOTIFICATION BELL */}
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

        {/* AVATAR + DROPDOWN */}
        <div className="avatar-container">
          <img
            src={avatar}
            alt="Avatar"
            className="avatar"
            onClick={() => setShowDropdown(!showDropdown)}
          />
          {showDropdown && (
            <div className="avatar-dropdown">
              <p className="dropdown-item" onClick={() => { setShowDropdown(false); navigate("/settings"); }}>
                Profile
              </p>
              <p className="dropdown-item logout" onClick={() => { setShowDropdown(false); setShowLogoutModal(true); }}>
                Logout
              </p>
            </div>
          )}
        </div>
      </div>

      {/* LOGOUT CONFIRMATION MODAL */}
      {showLogoutModal && (
        <div className="modal-overlay">
          <div className="modal">
            <h3>Are you sure you want to logout?</h3>
            <div className="modal-actions">
              <button className="btn cancel" onClick={() => setShowLogoutModal(false)}>Cancel</button>
              <button className="btn confirm" onClick={handleLogout}>Yes</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
