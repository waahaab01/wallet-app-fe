import React from 'react';
import '../Style/walletstyle/walletbutton.css';
import plus from '../../assets/wallet/plus-circle.png'
import trend from '../../assets/wallet/trend-up-02.png'
import trend1 from '../../assets/wallet/trend-down-02.png'
import currency from '../../assets/wallet/currency-dollar-circle.png'
import swap from '../../assets/wallet/coins-swap-02.png'


const Buttons = () => {
  return (
    <div className="buttons-container">
      <div className="row">
        <div className="btn-card" style={{ backgroundColor: '#20E2C2' }}>
          <img src={plus} alt="top up" />
          <span>TOP UP</span>
        </div>
        <div className="btn-card" style={{ backgroundColor: '#F8A6D6' }}>
          <img src={trend} alt="send" />
          <span>SEND</span>
        </div>
      </div>
      <div className="row">
        <div className="btn-card" style={{ backgroundColor: '#F9EF74' }}>
          <img src={currency} alt="buy/sell" />
          <span>BUY / SELL</span>
        </div>
        <div className="btn-card" style={{ backgroundColor: '#A9FA91' }}>
          <img src={trend1} alt="receive" />
          <span>RECEIVE</span>
        </div>
      </div>
      <div className="row">
        <div className="btn-card full" style={{ backgroundColor: '#FF7035' }}>
          <img src={swap} alt="swap" />
          <span>SWAP</span>
        </div>
      </div>
    </div>
  );
};

export default Buttons;
