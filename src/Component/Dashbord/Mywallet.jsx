import React from "react";
import "../Style/mywallet.css";

const Mywallet = () => {
  return (
    <div className="wallet-cardF">
      <div className="wallet-header">
        <span className="wallet-title">My Wallet</span>
        <span className="wallet-currency">USD ⌄</span>
      </div>

      <div className="wallet-balance">$1,201,122</div>

      <div className="wallet-bar">
        <div className="bar-segment btc"></div>
        <div className="bar-segment usdt"></div>
        <div className="bar-segment eth"></div>
        <div className="bar-segment others"></div>
      </div>

      <div className="wallet-coins">
        <div className="coin"><span className="btc-icon">₿</span> BTC</div>
        <div className="coin"><span className="usdt-icon">₮</span> USDT</div>
        <div className="coin"><span className="eth-icon">◆</span> ETH</div>
        <div className="coin"><span className="others-icon">★</span> OTHERS</div>
      </div>

      <div className="wallet-stats">
        <div className="wallet-profit">+ $3,432.15</div>
        <div className="wallet-change">+ 3.1% 📈</div>
      </div>
    </div>
  );
};

export default Mywallet;
