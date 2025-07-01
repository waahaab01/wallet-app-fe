import React, { useState } from "react";
import "../Style/row.css";
import SendCoinModal from '../Walletdashboard/SendCoinModal/SendCoinModal';
import BuySellModal from '../Walletdashboard/BuySellModal/BuySellModal';
import BuyCoinsModal from '../Walletdashboard/BuySellModal/BuyCoinsModal';
import SellCoinsModal from '../Walletdashboard/BuySellModal/SellCoinsModal';
import SwapCoinsModal from '../Walletdashboard/SwapCoinsModal';

const buttons = [
  {
    label: "TOP UP",
    bg: "#00e3d8",
    icon: "➕",
  },
  {
    label: "SEND",
    bg: "#f79bd3",
    icon: "↗",
  },
  {
    label: "BUY / SELL",
    bg: "#fff685",
    icon: "💲",
  },
  {
    label: "RECEIVE",
    bg: "#b0ff92",
    icon: "↙",
  },
  {
    label: "SWAP",
    bg: "#ff6b3b",
    icon: "🔄",
  },
];

const Row = () => {
  const [showSendModal, setShowSendModal] = useState(false);
  const [showBuySellModal, setShowBuySellModal] = useState(false);
  const [showBuyCoinsModal, setShowBuyCoinsModal] = useState(false);
  const [showSellCoinsModal, setShowSellCoinsModal] = useState(false);
  const [showSwapCoinsModal, setShowSwapCoinsModal] = useState(false);
  const [buySellStep, setBuySellStep] = useState(null);

  const handleButtonClick = (label) => {
    if (label === 'SEND') setShowSendModal(true);
    else if (label === 'BUY / SELL') setShowBuySellModal(true);
    else if (label === 'SWAP') setShowSwapCoinsModal(true);
    // You can add logic for TOP UP and RECEIVE if you have modals for them
  };

  return (
    <>
      <div className="action-bar">
        {buttons.map((btn, idx) => (
          <button
            key={idx}
            className="action-button"
            style={{ backgroundColor: btn.bg }}
            onClick={() => handleButtonClick(btn.label)}
          >
            <span className="btn-icon">{btn.icon}</span>
            <span className="btn-label">{btn.label}</span>
          </button>
        ))}
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

export default Row;
