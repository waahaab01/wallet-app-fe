import React from 'react';
import './Marketplace.css';
import '../Style/row.css';
import btcIcon from '../../assets/bitcoin1.png';
import ethIcon from '../../assets/ethereum1.png';
import solIcon from '../../assets/Frame2.png';
import bnbIcon from '../../assets/ethereum2.png';
import icon from "../../assets/logo assets/icons.png";
import buySellIcon from '../../assets/logo assets/Icon (2).png';
import swapIcon from '../../assets/logo assets/Icon.png';
import buySellBg from '../../assets/logo assets/currency-dollar-circle.png';
import swapBg from '../../assets/logo assets/coins-swap-02.png';
import BuySellModal from '../Walletdashboard/BuySellModal/BuySellModal';
import SwapCoinsModal from '../Walletdashboard/SwapCoinsModal';

const coins = [
  {
    name: 'BTC',
    icon: btcIcon,
    price: '$38.061',
    color: '#fffbd3',
    graphColor: '#fffbd3',
    percent: '+12.7%',
    graphClass: 'graph-btc',
  },
  {
    name: 'ETH',
    icon: ethIcon,
    price: '$38.061',
    color: '#ebffd1',
    graphColor: '#ebffd1',
    percent: '+12.7%',
    graphClass: 'graph-eth',
  },
  {
    name: 'SOL',
    icon: solIcon,
    price: '$38.061',
    color: '#eadafc',
    graphColor: '#eadafc',
    percent: '+12.7%',
    graphClass: 'graph-sol',
  },
  {
    name: 'BNB',
    icon: bnbIcon,
    price: '$38.061',
    color: '#d3f6ff',
    graphColor: '#d3f6ff',
    percent: '+12.7%',
    graphClass: 'graph-bnb',
  },
];

const Marketplace = () => {
  const [showBuySell, setShowBuySell] = React.useState(false);
  const [showSwap, setShowSwap] = React.useState(false);

  return (
    <div className="marketplace-root">
      <div className="marketplace-cards">
        {coins.map((coin, idx) => (
          <div className="marketplace-card" style={{ background: coin.color }} key={coin.name}>
            <div className="marketplace-card-header">
              <img src={coin.icon} alt={coin.name} className="marketplace-coin-icon" />
              <span className="marketplace-coin-name">{coin.name}</span>
            </div>
            <div className="marketplace-card-price">{coin.price}</div>
            <div className="marketplace-card-percent">
              <span className="marketplace-percent"><img src={icon} alt="bar-icon" /> {coin.percent}</span>
            </div>
            <div className={`marketplace-graph ${coin.graphClass}`}></div>
          </div>
        ))}
        <div className="marketplace-action-bar">
          <button
            className="action-button"
            style={{
              backgroundColor: '#fff685',
              backgroundImage: `url(${buySellBg})`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'bottom right',
              backgroundSize: '60px 60px',
            }}
            onClick={() => setShowBuySell(true)}
          >
            <span className="btn-icon">
              <img src={buySellIcon} alt="BUY/SELL" />
            </span>
            <span className="btn-label">BUY/SELL</span>
          </button>
          <button
            className="action-button"
            style={{
              backgroundColor: '#ff6b3b',
              backgroundImage: `url(${swapBg})`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'bottom right',
              backgroundSize: '60px 60px',
            }}
            onClick={() => setShowSwap(true)}
          >
            <span className="btn-icon">
              <img src={swapIcon} alt="SWAP" />
            </span>
            <span className="btn-label">SWAP</span>
          </button>
        </div>
      </div>
      <BuySellModal open={showBuySell} onClose={() => setShowBuySell(false)} />
      <SwapCoinsModal open={showSwap} onClose={() => setShowSwap(false)} />
    </div>
  );
};

export default Marketplace; 