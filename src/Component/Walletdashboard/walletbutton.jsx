import React, { useState } from 'react';
import '../Style/walletstyle/walletbutton.css';
import plus from '../../assets/wallet/plus-circle.png';
import trend from '../../assets/wallet/trend-up-02.png';
import trend1 from '../../assets/wallet/trend-down-02.png';
import currency from '../../assets/wallet/currency-dollar-circle.png';
import swap from '../../assets/wallet/coins-swap-02.png';
import SendCoinModal from './SendCoinModal/SendCoinModal';
import BuySellModal from './BuySellModal/BuySellModal';
import BuyCoinsModal from './BuySellModal/BuyCoinsModal';
import SellCoinsModal from './BuySellModal/SellCoinsModal';
import SwapCoinsModal from './SwapCoinsModal';

const Buttons = () => {
  const [showSendModal, setShowSendModal] = useState(false);
  const [showBuySellModal, setShowBuySellModal] = useState(false);
  const [showBuyCoinsModal, setShowBuyCoinsModal] = useState(false);
  const [showSellCoinsModal, setShowSellCoinsModal] = useState(false);
  const [showSwapCoinsModal, setShowSwapCoinsModal] = useState(false);
  const [buySellStep, setBuySellStep] = useState(null); // 'buy' or 'sell'

  return (
    <>
      <div className="buttons-container">
        <div className="row">
          <div className="btn-card" style={{ backgroundColor: '#20E2C2' }}>
            <img src={plus} alt="top up" />
            <span>TOP UP</span>
          </div>
          <div
            className="btn-card"
            style={{ backgroundColor: '#F8A6D6' }}
            onClick={() => setShowSendModal(true)}
          >
            <img src={trend} alt="send" />
            <span>SEND</span>
          </div>
        </div>
        <div className="row">
          <div
            className="btn-card"
            style={{ backgroundColor: '#F9EF74' }}
            onClick={() => setShowBuySellModal(true)}
          >
            <img src={currency} alt="buy/sell" />
            <span>BUY / SELL</span>
          </div>
          <div className="btn-card" style={{ backgroundColor: '#A9FA91' }}>
            <img src={trend1} alt="receive" />
            <span>RECEIVE</span>
          </div>
        </div>
        <div className="row">
          <div
            className="btn-card full"
            style={{ backgroundColor: '#FF7035' }}
            onClick={() => setShowSwapCoinsModal(true)}
          >
            <img src={swap} alt="swap" />
            <span>SWAP</span>
          </div>
        </div>
      </div>
      <SendCoinModal open={showSendModal} onClose={() => setShowSendModal(false)} />
      <BuySellModal
        open={showBuySellModal}
        onClose={() => setShowBuySellModal(false)}
        onNext={step => {
          setBuySellStep(step);
          setShowBuySellModal(false);
          if (step === 'buy') setShowBuyCoinsModal(true);
          else if (step === 'sell') setShowSellCoinsModal(true);
        }}
      />
      <BuyCoinsModal open={showBuyCoinsModal} onClose={() => setShowBuyCoinsModal(false)} />
      <SellCoinsModal open={showSellCoinsModal} onClose={() => setShowSellCoinsModal(false)} />
      <SwapCoinsModal open={showSwapCoinsModal} onClose={() => setShowSwapCoinsModal(false)} />
    </>
  );
};

export default Buttons;
