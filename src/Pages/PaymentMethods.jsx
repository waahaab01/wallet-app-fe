import React, { useEffect, useState } from "react";
import SettingsSidebar from "../Component/SettingsSidebar";
// import visaIcon from "../assets/visa.png";
// import paypalIcon from "../assets/paypal.png";
// import mastercardIcon from "../assets/mastercard.png";
// import applepayIcon from "../assets/applepay.png";
import profilebg from "../assets/Image wrap.png";
import avatarImg from "../assets/Portrait.png";
import { FiEye, FiEyeOff, FiCopy } from "react-icons/fi";

const paymentMethods = [
  {
    type: "Visa",
    // icon: visaIcon,
    number: "12••••678",
    date: "8 April, 2025",
  },
  {
    type: "PayPal",
    // icon: paypalIcon,
    number: "12••••678",
    date: "8 April, 2025",
  },
  {
    type: "MasterCard",
    // icon: mastercardIcon,
    number: "12••••678",
    date: "8 April, 2025",
  },
  {
    type: "Apple Pay",
    // icon: applepayIcon,
    number: "12••••678",
    date: "8 April, 2025",
  },
];

const PaymentMethods = () => {
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

        {/* Payment Header */}
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
        {/* Payment Methods Section */}
        <section className="payment-methods-section">
          <div className="payment-methods-header">
            <div>
              <h3 style={{ margin: 0 }}>Payment Methods</h3>
              <div className="section-desc">
                Tap to add new Payment Method or edit existing ones.
              </div>
            </div>
            <button className="add-payment-btn">ADD PAYMENT METHOD</button>
          </div>
          <div className="payment-methods-card-list">
            <div className="payment-methods-search-row">
              <input
                className="payment-methods-search-input"
                placeholder="Search"
              />
            </div>
            {paymentMethods.map((pm, idx) => (
              <div className="payment-method-card" key={idx}>
                <div className="payment-method-info">
                  <img
                    src={pm.icon}
                    alt={pm.type}
                    className="payment-method-icon"
                  />
                  <span className="payment-method-type">{pm.type}</span>
                  <span className="payment-method-number">{pm.number}</span>
                </div>
                <div className="payment-method-meta">
                  <div className="payment-method-date">Linked On {pm.date}</div>
                  <button className="disable-payment-btn">DISABLE</button>
                </div>
                <div className="payment-method-menu">...</div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default PaymentMethods;
