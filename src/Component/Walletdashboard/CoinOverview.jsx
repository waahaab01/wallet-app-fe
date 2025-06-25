import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import '../Style/walletstyle/coin.css';

ChartJS.register(ArcElement, Tooltip, Legend);

const CoinsOverview = () => {
  const data = {
    labels: [],
    datasets: [
      {
        data: [23132, 23132, 23132, 23132, 23132],
        backgroundColor: ['#f9f871', '#b4ff9f', '#53f2ec', '#ff8a5c', '#f39ae2'],
        borderWidth: 0,
        cutout: '75%',
      },
    ],
  };

  return (
    <div className="coins-overview">
      <h2>Coins Overview</h2>
      <div className="chart-container">
        <div className="chart-wrapper">
          <Doughnut data={data} />
          <div className="center-label">
            <h3>$1.201.122</h3>
            <p>Total Value</p>
            <span className="increase">+1.4% ⤴</span>
          </div>
        </div>

        <div className="coin-details">
          {['BTC', 'USDT', 'ETH', 'SOL', 'OTHERS'].map((coin, i) => (
            <div className="coin-item" key={i}>
              <span className={`coin-color color-${i}`}></span>
              <span className="coin-name">{coin} (34)</span>
              <span className="coin-value">$23,132</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoinsOverview;
