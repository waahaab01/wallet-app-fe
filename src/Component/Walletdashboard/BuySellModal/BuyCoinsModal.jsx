import React, { useState } from "react";
import "./BuyCoinsModal.css";
import PopupNotification from "../../PopUp/PopUp"; // apne path ke hisaab se import karein

const BtcSvg = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="10" fill="#f7931a" />
    <text
      x="12"
      y="16"
      textAnchor="middle"
      fontSize="12"
      fill="#fff"
      fontWeight="bold"
    >
      ₿
    </text>
  </svg>
);

const EthSvg = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="10" fill="#26a17b" />
    <polygon points="12,6 17,13 12,11 7,13" fill="#fff" />
    <polygon points="12,18 17,13 12,15 7,13" fill="#fff" />
  </svg>
);

const BuyCoinsModal = ({ open, onClose }) => {
  const [payMethod, setPayMethod] = useState("crypto");
  const [buyAmount, setBuyAmount] = useState("24.012,02");
  const [payAmount, setPayAmount] = useState("24.012,02");

  const [popupData, setPopupData] = useState({
    isOpen: false,
    type: "error",
    title: "Transaction Failed!",
    message: "Something went wrong while buying coins. Please try again.",
    buttonText: "OK"
  });

  const handleBuyCoins = () => {
    // Example: Validation / API error simulation
    if (!buyAmount || parseFloat(buyAmount) <= 0) {
      setPopupData({
        ...popupData,
        isOpen: true,
        message: "Please enter a valid amount to buy coins."
      });
      return;
    }

    // Example: API call simulation
    const success = false; // force error for demo
    if (!success) {
      setPopupData({
        ...popupData,
        isOpen: true,
        message: "Server error occurred while processing your request."
      });
    }
  };

  if (!open) return null;
  return (
    <>
      <div className="buycoins-modal-overlay">
        <div className="buycoins-modal">
          <button className="buycoins-close" onClick={onClose} aria-label="Close">
            ×
          </button>
          <div className="buycoins-title">BUY COINS</div>
          <div className="buycoins-desc">
            Choose your token, enter an amount, and pick a payment method. Your
            assets will land safely in your vault in no time.
          </div>

          {/* Pay options */}
          <div className="buycoins-pay-options">
            <div
              className={`buycoins-pay-option${payMethod === "crypto" ? " selected" : ""}`}
              onClick={() => setPayMethod("crypto")}
            >
              <span className="buycoins-radio">
                {payMethod === "crypto" && <span className="buycoins-radio-dot" />}
              </span>
              <span className="buycoins-pay-icon"><BtcSvg /></span>
              <span className="buycoins-pay-label">PAY WITH CRYPTO</span>
            </div>

            <div
              className={`buycoins-pay-option${payMethod === "bank" ? " selected" : ""}`}
              onClick={() => setPayMethod("bank")}
            >
              <span className="buycoins-radio">
                {payMethod === "bank" && <span className="buycoins-radio-dot" />}
              </span>
              <span className="buycoins-pay-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <rect x="4" y="4" width="16" height="16" rx="4" fill="#fff" stroke="#222" strokeWidth="2" />
                  <rect x="8" y="12" width="8" height="2" fill="#222" />
                </svg>
              </span>
              <span className="buycoins-pay-label">PAY WITH BANK</span>
            </div>
          </div>

          {/* Buy token */}
          <div className="buycoins-field-group">
            <label className="buycoins-label">Buy Token</label>
            <div className="buycoins-input-row">
              <span className="buycoins-token"><BtcSvg /> BTC</span>
              <input
                className="buycoins-input"
                type="text"
                value={buyAmount}
                onChange={(e) => setBuyAmount(e.target.value)}
              />
            </div>
          </div>

          {/* Pay with */}
          <div className="buycoins-field-group">
            <label className="buycoins-label">Pay With</label>
            <div className="buycoins-input-row">
              <span className="buycoins-token"><EthSvg /> ETH</span>
              <input
                className="buycoins-input"
                type="text"
                value={payAmount}
                onChange={(e) => setPayAmount(e.target.value)}
              />
            </div>
          </div>

          <div className="buycoins-info">
            <span className="buycoins-info-label">Info</span>
            <span className="buycoins-info-detail">• Rate: 1 ETH = 0.073 BTC</span>
          </div>

          <button className="buycoins-btn" onClick={handleBuyCoins}>BUY COINS</button>
        </div>
      </div>

      {popupData.isOpen && (
        <PopupNotification
          type={popupData.type}
          title={popupData.title}
          message={popupData.message}
          buttonText={popupData.buttonText}
          onClose={() => setPopupData({ ...popupData, isOpen: false })}
          onButtonClick={() => setPopupData({ ...popupData, isOpen: false })}
        />
      )}
    </>
  );
};

export default BuyCoinsModal;
