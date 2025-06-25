import React from "react";
import "../Style/walletstyle/navwallet.css";
import logoW from "../../assets/wallet/Logo.png"
import frameW from "../../assets/wallet/walletframe.png";
import bell from "../../assets/bell.png";
import avatar from "../../assets/Portrait.png";

const Navwallet = () => {
  return (
    <div className="wallet-navbar">
      <div className="left">
        <img src={logoW} alt="Logo" className="logo" />
        <span className="titleW">
          <img className="logo-img1" src={frameW} alt="" />
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

export default Navwallet;
