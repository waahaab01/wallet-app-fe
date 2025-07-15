import React from 'react';
import './CryptoCoinsTable.css';
import btcIcon from '../../assets/bitcoin1.png';
import pirlIcon from '../../assets/iconcrypto.png';
import monaIcon from '../../assets/iconcrypto1.png';
import zecIcon from '../../assets/iconcrypto2.png';
import bnbIcon from '../../assets/ethereum1.png';

const coins = [
  {
    id: '01',
    name: 'Bitcoin',
    symbol: 'BTC',
    icon: btcIcon,
    price: '$21,144,05',
    change24h: '+8,24%',
    change7d: '+8,24%',
    up24h: true,
    up7d: true,
  },
  {
    id: '02',
    name: 'Pirl',
    symbol: 'PRL',
    icon: pirlIcon,
    price: '$3,721,32',
    change24h: '+8,24%',
    change7d: '+8,24%',
    up24h: true,
    up7d: true,
  },
  {
    id: '03',
    name: 'Mona',
    symbol: 'MON',
    icon: monaIcon,
    price: '$5,206,94',
    change24h: '-6,13%',
    change7d: '-6,13%',
    up24h: false,
    up7d: false,
  },
  {
    id: '04',
    name: 'Zcash',
    symbol: 'ZEC',
    icon: zecIcon,
    price: '$5,206,94',
    change24h: '+8,13%',
    change7d: '-6,13%',
    up24h: true,
    up7d: false,
  },
  {
    id: '05',
    name: 'Binance',
    symbol: 'BNB',
    icon: bnbIcon,
    price: '$18,204,01',
    change24h: '-6,13%',
    change7d: '-6,13%',
    up24h: false,
    up7d: false,
  },
];

const CryptoCoinsTable = () => {
  return (
    <div className="crypto-coins-table-root">
      <div className="crypto-coins-table-header">
        <span className="crypto-coins-title">Crypto Coins <span className="info-icon">ⓘ</span></span>
        <button className="download-report-btn">⬇ DOWNLOAD REPORT</button>
      </div>
      <div className="crypto-coins-table-scroll">
        <table className="crypto-coins-table">
          <thead>
            <tr>
              <th><input type="checkbox" /></th>
              <th>No.</th>
              <th>Currency</th>
              <th>Current Price</th>
              <th>Last 24h</th>
              <th>Last 7d</th>
              <th>Options</th>
            </tr>
          </thead>
          <tbody>
            {coins.map((coin, idx) => (
              <tr key={coin.id}>
                <td><input type="checkbox" /></td>
                <td>{coin.id}</td>
                <td className="coin-cell">
                  <img src={coin.icon} alt={coin.name} className="coin-icon" />
                  <div className="coin-info">
                    <div className="coin-name">{coin.name}</div>
                    <div className="coin-symbol">{coin.symbol}</div>
                  </div>
                </td>
                <td>{coin.price}</td>
                <td className={coin.up24h ? 'change-up' : 'change-down'}>
                  <span className="change-arrow">{coin.up24h ? '🡅' : '🡇'}</span>
                  <span>{coin.change24h}</span>
                </td>
                <td className={coin.up7d ? 'change-up' : 'change-down'}>
                  <span className="change-arrow">{coin.up7d ? '🡅' : '🡇'}</span>
                  <span>{coin.change7d}</span>
                </td>
                <td><button className="trade-btn">Trade</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CryptoCoinsTable; 