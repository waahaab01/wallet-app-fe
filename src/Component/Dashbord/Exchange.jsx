import React, { useState } from "react";
import "../Style/exchange.css";
import bitcoin from "../../assets/bitcoin1.png";
import ethereum from "../../assets/ethereum2.png";
import PopupNotification from '../PopUp/PopUp';  // Popup import karo

const ExchangeCrypto = () => {
  const [popupData, setPopupData] = useState({
    isOpen: false,
    type: 'error',
    title: '',
    message: '',
    buttonText: 'OK',
  });

  const handleSwapClick = () => {
    setPopupData({
      isOpen: true,
      type: 'error',
      title: 'Feature Coming Soon',
      message: 'Swap Coins feature is not yet implemented.',
      buttonText: 'OK',
    });
  };

  return (
    <div className="exchange-box">
      <h2 className="heading">
        Exchange Crypto <span className="info-icon">ⓘ</span>
      </h2>

      <div className="section">
        <label className="label">Buy</label>
        <div className="input-group yellow">
          <div className="coin">
            <img src={bitcoin} alt="BTC" />
            <span>BTC ▾</span>
          </div>
          <input type="text" value="24.012,02" readOnly />
        </div>
        <div className="rate">1 BTC = 17,14 USDT</div>
      </div>

      <div className="swap-icon">⇅</div>

      <div className="section">
        <label className="label">Sell</label>
        <div className="input-group green">
          <div className="coin">
            <img src={ethereum} alt="ETH" />
            <span>ETH ▾</span>
          </div>
          <input type="text" value="24.012,02" readOnly />
        </div>
        <div className="rate">1 ETH = 17,14 USDT</div>
      </div>

      <button className="swap-button" onClick={handleSwapClick}>SWAP COINS</button>

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
    </div>
  );
};

export default ExchangeCrypto;
