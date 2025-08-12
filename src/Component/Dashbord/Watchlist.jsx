import React,{useState} from 'react';
import '../Style/watchlist.css';
import BitcoinIcon from '../../assets/bitcoin1.png';
import PirlIcon from '../../assets/iconcrypto.png';
import MonaIcon from '../../assets/iconcrypto1.png';
import ZcashIcon from '../../assets/iconcrypto2.png';
import BinanceIcon from '../../assets/ethereum1.png';
import PopupNotification from "../PopUp/PopUp"; // aapka popup component ka path

function Watchlist() {
  const [showPopup, setShowPopup] = useState(false);

  // Jab trade button click ho
  const handleTradeClick = () => {
    setShowPopup(true);  // popup dikhao
  };

  // Popup close karne ka function
  const handleClosePopup = () => {
    setShowPopup(false);
  };

  // Popup ke button click handler
  const handlePopupButtonClick = () => {
    // Yahan aap koi extra action kar sakte hain
    alert("Popup button clicked!");
    setShowPopup(false);
  };
  const coins = [
    {
      id: '01',
      name: 'Bitcoin',
      symbol: 'BTC',
      price: '$21.144,05',
      change: '+8,24%',
      up: true,
      icon: BitcoinIcon,
    },
    {
      id: '02',
      name: 'Pirl',
      symbol: 'PRL',
      price: '$3.721,32',
      change: '+8,24%',
      up: true,
      icon: PirlIcon,
    },
    {
      id: '03',
      name: 'Mona',
      symbol: 'MON',
      price: '$5.206,94',
      change: '-6,13%',
      up: false,
      icon: MonaIcon,
    },
    {
      id: '04',
      name: 'Zcash',
      symbol: 'ZEC',
      price: '$5.206,94',
      change: '+8,24%',
      up: true,
      icon: ZcashIcon,
    },
    {
      id: '05',
      name: 'Binance',
      symbol: 'BNB',
      price: '$18.204,01',
      change: '-6,13%',
      up: false,
      icon: BinanceIcon,
    },
  ];

  return (
    <div className="watchlist-containerF">
      <h2 className="watchlist-heading">Watchlist</h2>
      <table className="watchlist-table">
        <thead>
          <tr>
            <th>No.</th>
            <th>Currency</th>
            <th>Current Price</th>
            <th>Last 24h</th>
            <th>Options</th>
          </tr>
        </thead>
        <tbody>
          {coins.map((coin,) => (
            <tr key={coin.id}>
              <td>{coin.id}</td>
              <td className="currency-cell">
                <img src={coin.icon} alt={coin.name} className="coin-icon" />
                <div>
                  <div className="coin-name">{coin.name}</div>
                  <div className="coin-symbol">{coin.symbol}</div>
                </div>
              </td>
              <td>{coin.price}</td>
              <td className={`change-cell ${coin.up ? 'up' : 'down'}`}>
                <span className="change-arrow">{coin.up ? '🡅' : '🡇'}</span>
                <span>{coin.change}</span>
              </td>
              <td>
      <button onClick={handleTradeClick} className="trade-btn">Trade</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {showPopup && (
        <PopupNotification
          type="error"
          title="Trade Failed!"
          message="You cannot execute this trade at the moment."
          buttonText="OK"
          onClose={handleClosePopup}
          onButtonClick={handlePopupButtonClick}
        />
      )}
    </div>
  );
}

export default Watchlist;
