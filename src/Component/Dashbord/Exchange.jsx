import React from "react";
import "../Style/exchange.css";
import bitcoin from "../../assets/bitcoin1.png"
import ethereum from "../../assets/ethereum2.png"

const ExchangeCrypto = () => {
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

      <button className="swap-button">SWAP COINS</button>
    </div>
  );
};

export default ExchangeCrypto;
