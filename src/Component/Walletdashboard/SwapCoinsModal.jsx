import React, { useState } from 'react';
import './SwapCoinsModal.css';
import PopupNotification from "../PopUp/PopUp";

const BtcSvg = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="10" fill="#f7931a"/>
    <text x="12" y="16" textAnchor="middle" fontSize="12" fill="#fff" fontWeight="bold">₿</text>
  </svg>
);
const EthSvg = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="10" fill="#26a17b"/>
    <polygon points="12,6 17,13 12,11 7,13" fill="#fff"/>
    <polygon points="12,18 17,13 12,15 7,13" fill="#fff"/>
  </svg>
);
const SwapIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
    <rect x="4" y="4" width="24" height="24" rx="8" fill="#c9a6f8"/>
    <path d="M12 16h8m0 0l-3-3m3 3l-3 3" stroke="#222" strokeWidth="2.2" strokeLinecap="round"/>
  </svg>
);

const SwapCoinsModal = ({ open, onClose }) => {
  const [buyAmount, setBuyAmount] = useState('24.012,02');
  const [sellAmount, setSellAmount] = useState('24.012,02');

  const [popupData, setPopupData] = useState({
    isOpen: false,
    type: 'error',
    title: 'Swap Failed!',
    message: '',
    buttonText: 'OK',
  });

  const handleSwapCoins = () => {
    // Validation example: remove commas and check positive number
    const buy = parseFloat(buyAmount.replace(/,/g, ''));
    const sell = parseFloat(sellAmount.replace(/,/g, ''));

    if (!buyAmount || isNaN(buy) || buy <= 0) {
      setPopupData({
        ...popupData,
        isOpen: true,
        message: 'Please enter a valid amount to buy.',
      });
      return;
    }
    if (!sellAmount || isNaN(sell) || sell <= 0) {
      setPopupData({
        ...popupData,
        isOpen: true,
        message: 'Please enter a valid amount to sell.',
      });
      return;
    }

    // Simulate failure for demo (or replace with real API call)
    const success = false;
    if (!success) {
      setPopupData({
        ...popupData,
        isOpen: true,
        message: 'Server error occurred during swap. Please try again later.',
      });
    }
  };

  if (!open) return null;

  return (
    <>
      <div className="swapcoins-modal-overlay">
        <div className="swapcoins-modal">
          <button className="swapcoins-close" onClick={onClose} aria-label="Close">×</button>
          <div className="swapcoins-title">SWAP COINS</div>
          <div className="swapcoins-desc">
            Choose the tokens you want to swap, review the rate, and confirm. We'll handle the heavy lifting across the chain.
          </div>
          <div className="swapcoins-field-group">
            <label className="swapcoins-label">Buy</label>
            <div className="swapcoins-input-row">
              <span className="swapcoins-token"><BtcSvg /> BTC</span>
              <input
                className="swapcoins-input"
                type="text"
                value={buyAmount}
                onChange={e => setBuyAmount(e.target.value)}
              />
            </div>
            <div className="swapcoins-rate">1 BTC = 7,14 USDT</div>
          </div>
          <div className="swapcoins-swapicon"><SwapIcon /></div>
          <div className="swapcoins-field-group">
            <label className="swapcoins-label">Sell</label>
            <div className="swapcoins-input-row">
              <span className="swapcoins-token"><EthSvg /> ETH</span>
              <input
                className="swapcoins-input"
                type="text"
                value={sellAmount}
                onChange={e => setSellAmount(e.target.value)}
              />
            </div>
            <div className="swapcoins-rate">1 ETH = 7,14 USDT</div>
          </div>
          <button className="swapcoins-btn" onClick={handleSwapCoins}>SWAP COINS</button>
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

export default SwapCoinsModal;
