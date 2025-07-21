import React from 'react';
import CoinForecastCard from '../../Component/forecast/CoinForecastCard';
import TrendForecastChart from '../../Component/forecast/TrendForecastChart';
import CryptoPredictionsTable from '../../Component/forecast/CryptoPredictionsTable';
import './ForecastPage.css';
import btcIcon from '../../assets/bitcoin1.png';
import ethIcon from '../../assets/ethereum1.png';
import bnbIcon from '../../assets/ethereum2.png';

const forecastData = [
  {
    icon: btcIcon,
    name: 'Bitcoin',
    symbol: 'BTC',
    price: '$94,412',
    change: '+12,7%',
    balance: '2,750,99',
    iconBg: '#f7931a',
    chartColor: '#f7931a',
    chartData: [30, 40, 35, 50, 49, 60, 70, 91, 125],
  },
  {
    icon: ethIcon,
    name: 'Ethereum',
    symbol: 'ETH',
    price: '$94,412',
    change: '+12,7%',
    balance: '2,750,99',
    iconBg: '#627eea',
    chartColor: '#627eea',
    chartData: [50, 60, 55, 70, 69, 80, 90, 111, 145],
  },
  {
    icon: bnbIcon,
    name: 'Binance Coin',
    symbol: 'BNB',
    price: '$94,412',
    change: '+12,7%',
    balance: '2,750,99',
    iconBg: '#f0b90b',
    chartColor: '#f0b90b',
    chartData: [20, 30, 25, 40, 39, 50, 60, 81, 105],
  },
];

const ForecastPage = () => {
  return (
    <div className="forecast-page">
      <div className="forecast-container">
        <div className="forecast-grid">
          {forecastData.map((coin, index) => (
            <CoinForecastCard key={index} coin={coin} />
          ))}
        </div>
        <TrendForecastChart />
        <CryptoPredictionsTable />
      </div>
    </div>
  );
};

export default ForecastPage; 