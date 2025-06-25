import React from 'react';
import '../Style/walletstyle/uswallet.css';
import img from '../../assets/wallet/bitcoin.png'
import img1 from '../../assets/wallet/bitcoin1.png'
import img2 from '../../assets/wallet/usdt1.png'
import img3 from '../../assets/wallet/others.png'
import img4 from '../../assets/wallet/up.png'

const WalletCard = () => {
  return (
    <div className="wallet-cardus">
      <div className="wallet-header">
        <span className="wallet-title">My Wallet</span>
        <span className="wallet-currency">USD ▼</span>
      </div>

      <div className="wallet-balance">
        <h1>$1,201,122</h1>
      </div>

      <div className="wallet-bar">
        <div className="bar btc"></div>
        <div className="bar usdt"></div>
        <div className="bar eth"></div>
        <div className="bar others"></div>
      </div>

      <div className="wallet-labels">
        <div><img src={img} alt="btc" /> BTC</div>
        <div><img src={img1} alt="usdt" /> USDT</div>
        <div><img src={img2} alt="eth" /> ETH</div>
        <div><img src={img3} alt="others" /> OTHERS</div>
      </div>

      <div className="wallet-footer">
        <span className="wallet-change-positive">+ $3,432.15</span>
        <span className="wallet-percent">+3.1% <img src={img4} alt="up" /></span>
      </div>
    </div>
  );
};

export default WalletCard;
