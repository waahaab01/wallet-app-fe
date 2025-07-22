import React from "react";
import "../Style/navbar.css";
import bell from "../../assets/bell.png";
import avatar from "../../assets/Portrait.png";
import { useNavigate } from "react-router-dom";

const Navbar = ({ logo, titleImg, bgColor }) => {
  const navigate = useNavigate();
  return (
    <div className="navbar" style={{ backgroundColor: bgColor }}>
      <div className="left">
        {logo && <img src={logo} alt="Logo" className="logo" style={{marginRight: 10}} />}
        {titleImg && <img src={titleImg} alt="Title" className="navbar-title-img" style={{height: 56}} />}
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
        <img src={avatar} alt="Avatar" className="avatar" onClick={() => navigate('/settings')} />
      </div>
    </div>
  );
};

export default Navbar;
