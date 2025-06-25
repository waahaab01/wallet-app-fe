import React, { useRef } from 'react';
import '../Style/walletstyle/linkedwallet.css';
import group from '../../assets/wallet/Group.png'; 

const data = [
  { id: 1, value: "$20,169", change: "+1.4%", profit: "+$1,402" },
  { id: 2, value: "$20,169", change: "+1.4%", profit: "+$1,402" },
  { id: 3, value: "$20,169", change: "+1.4%", profit: "+$1,402" },
  { id: 4, value: "$20,169", change: "+1.4%", profit: "+$1,402" },
];

const Linkedwallet = () => {
  const scrollRef = useRef(null);

  const scroll = (dir) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: dir === 'left' ? -300 : 300,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="carousel-container">
      <button className="scroll-btn left" onClick={() => scroll('left')}>&lt;</button>
      <div className="card-list" ref={scrollRef}>
        {data.map((card, i) => (
          <div className="wallet-card" key={i}>
            <div className="wallet-header">
              <img src={group} alt="metamask" className="icon" />
              <span className="wallet-name">METAMASK</span>
              <span className="dropdown">USD ⌄</span>
            </div>
            <div className="wallet-balance">{card.value}</div>
            <div className="wallet-bar">
              <div className="btc"></div>
              <div className="usdt"></div>
              <div className="eth"></div>
              <div className="others"></div>
            </div>
            <div className="labels">
              <span className="btc-label">🟡 BTC</span>
              <span className="usdt-label">🟢 USDT</span>
              <span className="eth-label">🔵 ETH</span>
              <span className="others-label">🟣 OTHERS</span>
            </div>
            <div className="wallet-footer">
              <div>{card.profit}</div>
              <div>{card.change} 🔼</div>
            </div>
          </div>
        ))}
      </div>
      <button className="scroll-btn right" onClick={() => scroll('right')}>&gt;</button>
    </div>
  );
};

export default Linkedwallet;
