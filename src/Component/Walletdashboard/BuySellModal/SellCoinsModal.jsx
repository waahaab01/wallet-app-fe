import React, { useState } from 'react';
import './SellCoinsModal.css';
import PopupNotification from '../../PopUp/PopUp'; // popup component ka sahi path dalna

const BtcSvg = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="10" fill="#f7931a" />
    <text x="12" y="16" textAnchor="middle" fontSize="12" fill="#fff" fontWeight="bold">₿</text>
  </svg>
);
const UsdtSvg = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="10" fill="#26a17b" />
    <text x="12" y="16" textAnchor="middle" fontSize="12" fill="#fff" fontWeight="bold">T</text>
  </svg>
);

const SellCoinsModal = ({ open, onClose }) => {
  const [sellAmount, setSellAmount] = useState('24.012,02');
  const [receiveAmount, setReceiveAmount] = useState('24.012,02');

  // Popup state
  const [popupData, setPopupData] = useState({
    isOpen: false,
    type: 'error',
    title: '',
    message: '',
    buttonText: 'OK',
  });

  const handleButtonClick = () => {
    setPopupData({
      isOpen: true,
      type: 'error',
      title: 'Action Not Allowed',
      message: 'This feature is currently disabled.',
      buttonText: 'OK',
    });
  };

  if (!open) return null;

  return (
    <>
      <div className="sellcoins-modal-overlay">
        <div className="sellcoins-modal">
          <button className="sellcoins-close" onClick={onClose} aria-label="Close">×</button>
          <div className="sellcoins-title">SELL COINS</div>
          <div className="sellcoins-desc">Sell your crypto for another token or stablecoin. Fast, easy, and always in your control.</div>
          <div className="sellcoins-field-group">
            <label className="sellcoins-label">I Want to Sell</label>
            <div className="sellcoins-input-row">
              <span className="sellcoins-token"><BtcSvg /> BTC</span>
              <input
                className="sellcoins-input"
                type="text"
                value={sellAmount}
                onChange={e => setSellAmount(e.target.value)}
              />
            </div>
          </div>
          <div className="sellcoins-field-group">
            <label className="sellcoins-label">I Want to Receive</label>
            <div className="sellcoins-input-row">
              <span className="sellcoins-token"><UsdtSvg /> USDT</span>
              <input
                className="sellcoins-input"
                type="text"
                value={receiveAmount}
                onChange={e => setReceiveAmount(e.target.value)}
              />
            </div>
          </div>
          <div className="sellcoins-info">
            <span className="sellcoins-info-label">Info</span>
            <span className="sellcoins-info-detail">
              • Exchange Rate: 1 BTC = 43,300 USDT<br />
              • Estimated Fee: ~0.001 BTC
            </span>
          </div>
          <button className="sellcoins-btn" onClick={handleButtonClick}>
            BUY COINS
          </button>
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

export default SellCoinsModal;
