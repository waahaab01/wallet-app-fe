import React from "react";
import "../Style/navbar.css";
import logo from "../../assets/logo.png"
import frame from "../../assets/Frame.png";
import bell from "../../assets/bell.png";
import avatar from "../../assets/Portrait.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="left">
        <img src={logo} alt="Logo" className="logo" />
        <span className="title">
          <img className="logo-img1" src={frame} alt="" />
        </span>
      </div>

      <div className="right">
        <div className="search">
          <input type="text" placeholder="Search" />
          <span className="search-icon">🔍</span>
        </div>
        <div className="bell">
          <span className="dot"></span>
          <img src={bell} alt="Notifications" />
        </div>
        <img src={avatar} alt="Avatar" className="avatar" />
      </div>
    </div>
  );
};

export default Navbar;
