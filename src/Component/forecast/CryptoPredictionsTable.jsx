import React from 'react';
import './CryptoPredictionsTable.css';
import btcIcon from '../../assets/bitcoin1.png';
import pirlIcon from '../../assets/iconcrypto.png';
import monaIcon from '../../assets/iconcrypto1.png';
import zecIcon from '../../assets/iconcrypto2.png';
import bnbIcon from '../../assets/ethereum1.png';

const predictions = [
  {
    id: '01',
    name: 'Bitcoin',
    symbol: 'BTC',
    icon: btcIcon,
    currentPrice: '$21,144,05',
    currentChange: '+8,24%',
    forecastPrice: '$21,144,05',
    forecastChange: '+8,24%',
    isUp: true,
  },
  {
    id: '02',
    name: 'Pirl',
    symbol: 'PRL',
    icon: pirlIcon,
    currentPrice: '$3,721,32',
    currentChange: '+8,24%',
    forecastPrice: '$3,721,32',
    forecastChange: '+8,24%',
    isUp: true,
  },
  {
    id: '03',
    name: 'Mona',
    symbol: 'MON',
    icon: monaIcon,
    currentPrice: '$5,206,94',
    currentChange: '-6,13%',
    forecastPrice: '$5,206,94',
    forecastChange: '-6,13%',
    isUp: false,
  },
  {
    id: '04',
    name: 'Zcash',
    symbol: 'ZEC',
    icon: zecIcon,
    currentPrice: '$5,206,94',
    currentChange: '+8,24%',
    forecastPrice: '$5,206,94',
    forecastChange: '-6,13%',
    isUp: true, // Mixed state for variety
  },
  {
    id: '05',
    name: 'Binance',
    symbol: 'BNB',
    icon: bnbIcon,
    currentPrice: '$18,204,01',
    currentChange: '-6,13%',
    forecastPrice: '$18,204,01',
    forecastChange: '-6,13%',
    isUp: false,
  },
];

const CryptoPredictionsTable = () => {
  return (
    <div className="predictions-table-root">
      <div className="predictions-table-header">
        <span className="predictions-title">Crypto Predictions <span className="info-icon">ⓘ</span></span>
        <button className="download-report-btn">
          <span className="download-icon">🔄</span> DOWNLOAD REPORT
        </button>
      </div>
      <div className="predictions-table-scroll">
        <table className="predictions-table">
          <thead>
            <tr>
              <th><input type="checkbox" /></th>
              <th>No. <span className="sort-icon">↕</span></th>
              <th>Currency <span className="sort-icon">↕</span></th>
              <th>Current Price <span className="sort-icon">↕</span></th>
              <th>Current % <span className="sort-icon">↕</span></th>
              <th>Forecast Price <span className="sort-icon">↕</span></th>
              <th>Forecast % <span className="sort-icon">↕</span></th>
              <th>Options <span className="sort-icon">↕</span></th>
            </tr>
          </thead>
          <tbody>
            {predictions.map((coin) => (
              <tr key={coin.id}>
                <td><input type="checkbox" /></td>
                <td>{coin.id}</td>
                <td className="pred-coin-cell">
                  <div className="pred-coin-info">
                  <img src={coin.icon} alt={coin.name} className="pred-coin-icon" />
                    <div className="pred-coin-name">{coin.name}</div>
                    <div className="pred-coin-symbol">{coin.symbol}</div>
                  </div>
                </td>
                <td>{coin.currentPrice}</td>
                <td className={coin.isUp ? 'pred-change-up' : 'pred-change-down'}>
                  <span className="pred-change-arrow">{coin.isUp ? '↗' : '↘'}</span>
                  {coin.currentChange}
                </td>
                <td>{coin.forecastPrice}</td>
                <td className={!coin.isUp ? 'pred-change-down' : 'pred-change-up'}>
                  <span className="pred-change-arrow">{!coin.isUp ? '↘' : '↗'}</span>
                  {coin.forecastChange}
                </td>
                <td><button className="pred-trade-btn">Trade</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CryptoPredictionsTable; 