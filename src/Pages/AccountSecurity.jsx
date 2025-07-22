import React, { useEffect, useState } from "react";
import SettingsSidebar from "../Component/SettingsSidebar";
import avatarImg from "../assets/Portrait.png";
import profilebg from "../assets/Image wrap.png"
import { FiEye, FiEyeOff, FiCopy } from "react-icons/fi";

const AccountSecurity = () => {
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
      <img src={profilebg} style={{ marginBottom: "15%",width:"100%" }} />
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

        {/* Authentications Section */}
        <section className="auth-section">
          <h4 className="section-title">Authentications</h4>
          <p className="section-desc">Select your preferred types of Authentication.</p>
          <div className="auth-cards-row">
            <div className="auth-card">
              <div className="auth-card-title">Email Authentication</div>
              <div className="auth-card-desc">Lorem ipsum dolor sit amet Et minima iusto qui assumenda.</div>
              <button className="auth-disable-btn">DISABLE</button>
            </div>
            <div className="auth-card">
              <div className="auth-card-title">SMS Authentication</div>
              <div className="auth-card-desc">Lorem ipsum dolor sit amet Et minima iusto qui assumenda.</div>
              <button className="auth-enable-btn">ENABLE</button>
            </div>
          </div>
        </section>

        {/* Account Security Form */}
        <form className="account-security-form">
          <h4 className="section-title">Account Security</h4>
          <p className="section-desc">This section contains account security.</p>
          <div className="form-group">
            <label>Password*</label>
            <div className="password-input-row">
              <input type="password" value="********" readOnly />
              <button type="button" className="reset-link">Reset Password</button>
            </div>
          </div>
          <div className="form-group">
            <label>Security Question*</label>
            <div className="security-question-row">
              <select>
                <option>Select a Question</option>
                <option>What is your pet's name?</option>
                <option>What is your favorite color?</option>
              </select>
              <button type="button" className="reset-link">Reset Question</button>
            </div>
          </div>
          <div className="form-group">
            <label>Answer*</label>
            <input type="text" placeholder="Enter your answer" />
          </div>
          <div className="form-actions">
            <button type="button" className="cancel-btn">CANCEL</button>
            <button type="submit" className="save-btn">SAVE</button>
          </div>
        </form>
      </main>
    </div>
  );
};

export default AccountSecurity; 