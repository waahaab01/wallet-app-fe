import React from 'react';
import './RecentTradesAndExchange.css';
import ExchangeCrypto from '../Dashbord/Exchange';
import swapIcon from '../../assets/logo assets/coins-swap-02.png';
import buyIcon from '../../assets/logo assets/plus-circle.png';
import sellIcon from '../../assets/logo assets/trend-down-02.png';

const trades = [
  {
    type: 'SWAPPED',
    icon: swapIcon,
    desc: 'USDC → ETH',
    time: 'Today at 3:15 PM',
    amount: '+$200',
    amountClass: 'trade-profit',
    bg: 'trade-bg-swap',
    token: '',
  },
  {
    type: 'BOUGHT',
    icon: buyIcon,
    desc: 'Via: Coinbase Wallet',
    time: 'Yesterday',
    amount: '+$500 SOL',
    amountClass: 'trade-profit',
    bg: 'trade-bg-buy',
    token: 'SOL',
  },
  {
    type: 'SWAPPED',
    icon: swapIcon,
    desc: 'USDC → ETH',
    time: 'Yesterday',
    amount: '+$200',
    amountClass: 'trade-profit',
    bg: 'trade-bg-swap',
    token: '',
  },
  {
    type: 'SOLD',
    icon: sellIcon,
    desc: 'Via: Coinbase Wallet',
    time: 'Yesterday',
    amount: '-$250 ETH',
    amountClass: 'trade-loss',
    bg: 'trade-bg-sell',
    token: 'ETH',
  },
  {
    type: 'BOUGHT',
    icon: buyIcon,
    desc: 'Via: Coinbase Wallet',
    time: 'Yesterday',
    amount: '+$500 SOL',
    amountClass: 'trade-profit',
    bg: 'trade-bg-buy',
    token: 'SOL',
  },
];

const RecentTradesAndExchange = () => {
  return (
    <div className="recent-exchange-root">
      <div className="recent-trades-table">
        <div className="trades-title">Recent Trades</div>
        <div className="trades-list">
          {trades.map((trade, idx) => (
            <div className={`trade-row ${trade.bg}`} key={idx}>
              <div className="trade-icon-cell">
                <img src={trade.icon} alt={trade.type} className="trade-icon" />
              </div>
              <div className="trade-info-cell">
                <div className="trade-type">{trade.type}</div>
                <div className="trade-desc">{trade.desc}</div>
              </div>
              <div className="trade-time-cell">{trade.time}</div>
              <div className={`trade-amount-cell ${trade.amountClass}`}>{trade.amount}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="exchange-module">
        <ExchangeCrypto />
      </div>
    </div>
  );
};

export default RecentTradesAndExchange; 