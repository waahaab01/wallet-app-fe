import React from 'react';
import ApexCharts from 'react-apexcharts';
import './CoinForecastCard.css';

const CoinForecastCard = ({ coin }) => {
  const chartOptions = {
    chart: {
      type: 'area',
      height: 60,
      sparkline: {
        enabled: true,
      },
      animations: {
        enabled: false,
      },
    },
    stroke: {
      curve: 'smooth',
      width: 2.5,
      colors: [coin.chartColor],
    },
    fill: {
      type: 'gradient',
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.4,
        opacityTo: 0.1,
        stops: [0, 100],
        colorStops: [
          {
            offset: 0,
            color: coin.chartColor,
            opacity: 0.4,
          },
          {
            offset: 100,
            color: coin.chartColor,
            opacity: 0,
          },
        ],
      },
    },
    tooltip: {
      enabled: false,
    },
  };

  const chartSeries = [
    {
      name: 'Price',
      data: coin.chartData,
    },
  ];

  return (
    <div className="coin-forecast-card">
      <div className="forecast-card-top">
        <div className="forecast-coin-icon" style={{ backgroundColor: coin.iconBg }}>
          <img src={coin.icon} alt={coin.name} />
        </div>
        <div className="forecast-price">{coin.price}</div>
      </div>
      <div className="forecast-percent-badge">
        <span className="forecast-percent-icon">↗</span>
        {coin.change}
      </div>
      <div className="forecast-coin-info">
        <div className="forecast-coin-name">{coin.name} / {coin.symbol}</div>
        <div className="forecast-coin-balance">Balance: {coin.balance} USD</div>
      </div>
      <div className="forecast-chart">
        <ApexCharts options={chartOptions} series={chartSeries} type="area" height={60} />
      </div>
    </div>
  );
};

export default CoinForecastCard; 