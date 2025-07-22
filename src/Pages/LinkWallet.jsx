import React, { useEffect, useState } from "react";
import SettingsSidebar from "../Component/SettingsSidebar";
import avatarImg from "../assets/Portrait.png";
import metamaskImg from "../assets/logo assets/Icon (4).png"; // Placeholder for Metamask icon
import profilebg from "../assets/Image wrap.png";
import { FiEye, FiEyeOff, FiCopy } from "react-icons/fi";

const LinkWallet = () => {
   const [walletData, setWalletData] = useState({
      walletAddress: "",
      mnemonic: "",
    });
    const [showDetails, setShowDetails] = useState(false);
  
    useEffect(() => {
      const storedData = JSON.parse(localStorage.getItem("userWallet"));
      if (storedData) {
        setWalletData({
          walletAddress: storedData.address || "",
          mnemonic: storedData.mnemonic || "",
        });
      }
    }, []);
  
    const copyToClipboard = (text) => {
      navigator.clipboard.writeText(text);
      alert("Copied to clipboard!");
    };
  return (
    <div className="settings-page-wrapper">
      {/* <SettingsSidebar /> */}
      <main className="settings-main-content">
        <img src={profilebg} style={{ marginBottom: "15%", width: "100%" }} />
        {/* Profile Header */}
        <section className="profile-header">
              <img src={avatarImg} alt="avatar" className="profile-avatar" />
              <div className="profile-header-info">
                <h2 className="profile-username">MRFUNKI</h2>
        
                <div className="profile-userid">
                  Wallet Address:&nbsp;
                  {showDetails ? walletData.walletAddress : "************"}
                  <span
                    onClick={() => setShowDetails(!showDetails)}
                    className="ml-2 cursor-pointer"
                  >
                    {showDetails ? <FiEyeOff /> : <FiEye />}
                  </span>
                  {showDetails && (
                    <span
                      onClick={() => copyToClipboard(walletData.walletAddress)}
                      className="ml-2 cursor-pointer"
                    >
                      <FiCopy />
                    </span>
                  )}
                </div>
        
                <div className="profile-phrasekey">
                  Phrase Key:&nbsp;
                  {showDetails ? walletData.mnemonic : "************"}
                  <span
                    onClick={() => setShowDetails(!showDetails)}
                    className="ml-2 cursor-pointer"
                  >
                    {showDetails ? <FiEyeOff /> : <FiEye />}
                  </span>
                  {showDetails && (
                    <span
                      onClick={() => copyToClipboard(walletData.mnemonic)}
                      className="ml-2 cursor-pointer"
                    >
                      <FiCopy />
                    </span>
                  )}
                </div>
              </div>
              <button className="profile-share-btn">🔗 SHARE</button>
            </section>

        {/* Link Wallet Section */}
        <section className="link-wallet-section">
          <h4 className="section-title">Link Wallet</h4>
          <p className="section-desc">
            Scan the barcode or use the hyperlink to link a wallet.
          </p>
          <div className="link-wallet-box">
            <div className="qr-row">
              <div className="qr-code-placeholder">
                {/* Replace with real QR code if needed */}
                <img
                  src="https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=https://metamask.io/connect-wallet"
                  alt="QR Code"
                />
              </div>
            </div>
            <div className="or-label">OR</div>
            <div className="wallet-url-row">
              <div className="wallet-dropdown">
                <img src={metamaskImg} alt="Metamask" className="wallet-icon" />
                <span className="wallet-name">METAMASK</span>
                <span className="wallet-dropdown-arrow">▼</span>
              </div>
              <input
                type="text"
                value="https://metamask.io/connect-wallet"
                readOnly
                className="wallet-url-input"
              />
              <button className="copy-url-btn">COPY URL</button>
            </div>
            <div className="or-label">OR</div>
            <div className="form-group">
              <label>Enter Phrase Key</label>
              <input type="text" placeholder="Enter Phrase Key Here" />
            </div>
            <button className="link-wallet-btn">LINK WALLET</button>
          </div>
        </section>

        {/* Linked Wallets Section */}
        <section className="linked-wallets-section">
          <h4 className="section-title">Linked Wallets</h4>
          <p className="section-desc">
            Here is a List of All the Linked Wallets.
          </p>
          <div className="linked-wallets-box">
            <div className="linked-wallets-search-row">
              <input
                type="text"
                placeholder="Search"
                className="linked-wallets-search-input"
              />
              <span className="search-icon">🔍</span>
            </div>
            <div className="linked-wallets-list">
              {[1, 2, 3].map((item) => (
                <div className="linked-wallet-card" key={item}>
                  <div className="linked-wallet-info">
                    <img
                      src={metamaskImg}
                      alt="Metamask"
                      className="wallet-icon"
                    />
                    <div className="wallet-details">
                      <div className="wallet-name">METAMASK</div>
                      <div className="wallet-address">0x1234...5678</div>
                      <div className="wallet-date">Linked On 8 April, 2025</div>
                    </div>
                  </div>
                  <button className="disable-wallet-btn">DISABLE</button>
                  <span className="wallet-card-menu">⋯</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default LinkWallet;
