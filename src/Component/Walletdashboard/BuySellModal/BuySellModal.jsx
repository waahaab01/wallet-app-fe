import React, { useState } from 'react';
import './BuySellModal.css';

const BuyIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><rect x="4" y="4" width="24" height="24" rx="8" fill="#f8a6d6"/><circle cx="16" cy="16" r="7" fill="#fff"/><path d="M16 12v8M12 16h8" stroke="#d10a10" strokeWidth="2.2" strokeLinecap="round"/></svg>
);
const SellIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><rect x="4" y="4" width="24" height="24" rx="8" fill="#f9ef74"/><ellipse cx="16" cy="20" rx="7" ry="4" fill="#fff"/><ellipse cx="16" cy="20" rx="3" ry="1.5" fill="#d10a10"/></svg>
);

const BuySellModal = ({ open, onClose, onNext }) => {
  const [selected, setSelected] = useState('buy');
  if (!open) return null;
  return (
    <div className="buysell-modal-overlay">
      <div className="buysell-modal">
        <button className="buysell-close" onClick={onClose} aria-label="Close">×</button>
        <div className="buysell-title">BUY OR SELL CRYPTO?</div>
        <div className="buysell-desc">Select what you’d like to do today. Whether you’re stacking or cashing out, we’ve got you covered.</div>
        <div className="buysell-options">
          <div className={`buysell-option${selected === 'buy' ? ' selected' : ''}`} onClick={() => setSelected('buy')}>
            <span className="buysell-radio">{selected === 'buy' ? <span className="buysell-radio-dot" /> : null}</span>
            <span className="buysell-icon"><BuyIcon /></span>
            <span className="buysell-label">BUY CRYPTO</span>
          </div>
          <div className={`buysell-option${selected === 'sell' ? ' selected' : ''}`} onClick={() => setSelected('sell')}>
            <span className="buysell-radio">{selected === 'sell' ? <span className="buysell-radio-dot" /> : null}</span>
            <span className="buysell-icon"><SellIcon /></span>
            <span className="buysell-label">SELL CRYPTO</span>
          </div>
        </div>
        <button className="buysell-next" onClick={() => onNext(selected)} style={{ float: 'right' }}>NEXT</button>
      </div>
    </div>
  );
};

export default BuySellModal;
