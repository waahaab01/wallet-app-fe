import React, { useState } from "react";
import "../Style/walletstyle/walletbutton.css";
import SendCoinModal from "./SendCoinModal/SendCoinModal";
import BuySellModal from "./BuySellModal/BuySellModal";
import BuyCoinsModal from "./BuySellModal/BuyCoinsModal";
import SellCoinsModal from "./BuySellModal/SellCoinsModal";
import SwapCoinsModal from "./SwapCoinsModal";
import ReceiveCoinModal from '../Walletdashboard/ReceiveCoinModal';
import plusIcon from '../../assets/logo assets/plus-circle.png';
import sendIcon from '../../assets/logo assets/Icon (1).png';
import buySellIcon from '../../assets/logo assets/Icon (2).png';
import receiveIcon from '../../assets/logo assets/Icon (3).png';
import swapIcon from '../../assets/logo assets/Icon.png';
import topupBg from '../../assets/logo assets/plus-circle (1).png'; // Example, apni image rakhain
import sendBg from '../../assets/logo assets/trend-up-02.png';
import buySellBg from '../../assets/logo assets/currency-dollar-circle.png';
import receiveBg from '../../assets/logo assets/trend-down-02.png';
import swapBg from '../../assets/logo assets/coins-swap-02.png';

const buttons = [
  {
    label: "TOP UP",
    bg: "#00e3d8",
    icon: plusIcon,
    bgImage: topupBg,
  },
  {
    label: "SEND",
    bg: "#f79bd3",
    icon: sendIcon,
    bgImage: sendBg,
  },
  {
    label: "BUY/SELL",
    bg: "#fff685",
    icon: buySellIcon,
    bgImage: buySellBg,
  },
  {
    label: "RECEIVE",
    bg: "#b0ff92",
    icon: receiveIcon,
    bgImage: receiveBg,
  },
  {
    label: "SWAP",
    bg: "#ff6b3b",
    icon: swapIcon,
    bgImage: swapBg,
  },
];
const Buttons = () => {
  const [showSendModal, setShowSendModal] = useState(false);
  const [showBuySellModal, setShowBuySellModal] = useState(false);
  const [showBuyCoinsModal, setShowBuyCoinsModal] = useState(false);
  const [showSellCoinsModal, setShowSellCoinsModal] = useState(false);
  const [showSwapCoinsModal, setShowSwapCoinsModal] = useState(false);
    const [showReceiveModal, setShowReceiveModal] = useState(false);
    const [token, setToken] = useState(null);
  
  const [buySellStep, setBuySellStep] = useState(null); // 'buy' or 'sell'
 const handleButtonClick = (label) => {
  if (label === 'SEND') setShowSendModal(true);
  else if (label === 'BUY/SELL') setShowBuySellModal(true); // ✅ fixed
  else if (label === 'SWAP') setShowSwapCoinsModal(true);
  else if (label === 'RECEIVE') setShowReceiveModal(true);
};

  React.useEffect(() => {
      const storedToken = localStorage.getItem('authToken');
      setToken(storedToken);
    }, []);
  return (
    <>
      <div className="action-bar">
        {buttons.map((btn, idx) => (
          <button
            key={idx}
            className="action-button-wallet"
            style={{
              backgroundColor: btn.bg,
              backgroundImage: `url(${btn.bgImage})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "bottom right",
              backgroundSize: "60px 60px",
              width:"100%" // adjust as needed
            }}
            onClick={() => handleButtonClick(btn.label)}
          >
            <span className="btn-icon">
              <img
                src={btn.icon}
                alt={btn.label}
                style={{ width: 28, height: 28 }}
              />
            </span>
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
      <ReceiveCoinModal open={showReceiveModal} onClose={() => setShowReceiveModal(false)} token={token} />

    </>
  );
};

export default Buttons;
