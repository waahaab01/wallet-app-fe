import React, { useState } from 'react';
import ApexCharts from 'react-apexcharts';
import './CryptoTrendChart.css';
import btcIcon from '../../assets/bitcoin1.png';

const timeRanges = [
  { label: '12 month', value: '12m' },
  { label: '30 days', value: '30d' },
  { label: '7 days', value: '7d' },
  { label: '24 hours', value: '24h' },
];

// Mock candlestick data for BTC (12 months)
const mockData = [
  { x: 'Jan', y: [12000, 18000, 10000, 17000] },
  { x: 'Feb', y: [17000, 25000, 16000, 22000] },
  { x: 'Mar', y: [22000, 32000, 21000, 30000] },
  { x: 'Apr', y: [30000, 35000, 25000, 34000] },
  { x: 'May', y: [34000, 40000, 32000, 39000] },
  { x: 'Jun', y: [39000, 42000, 35000, 37000] },
  { x: 'Jul', y: [37000, 45000, 36000, 44000] },
  { x: 'Aug', y: [44000, 47000, 40000, 41000] },
  { x: 'Sep', y: [41000, 60000, 39000, 58000] },
  { x: 'Oct', y: [58000, 65000, 57000, 64000] },
  { x: 'Nov', y: [64000, 50000, 48000, 52000] },
  { x: 'Dec', y: [52000, 30000, 25000, 27000] },
];

const CryptoTrendChart = () => {
  const [selectedRange, setSelectedRange] = useState('12m');
  const [selectedDate, setSelectedDate] = useState('');

  const chartOptions = {
    chart: {
      type: 'candlestick',
      height: 558,
      toolbar: { show: false },
      background: 'transparent',
      fontFamily: 'inherit',
    },
    grid: {
      borderColor: 'black',
      strokeDashArray: 2,
    },
    xaxis: {
      type: 'category',
      labels: {
        style: { fontWeight: 600, fontSize: '1rem', colors: '#222' },
      },
      axisBorder: { show: false },
      axisTicks: { show: false },
    },
    yaxis: {
      labels: {
        style: { fontWeight: 600, fontSize: '0.95rem', colors: '#222' },
      },
      min: 0,
      max: 70000,
      tickAmount: 6,
    },
    plotOptions: {
      candlestick: {
        colors: {
          upward: '#3ecf8e',
          downward: '#e74c3c',
        },
        wick: {
          useFillColor: true,
        },
      },
    },
    tooltip: {
      enabled: true,
      style: { fontSize: '1rem', fontWeight: 600 },
    },
    fill: {
      opacity: 1,
    },
  };

  return (
    <div className="crypto-trend-chart-root">
      <div className="crypto-trend-header">
        <span className="crypto-trend-title">Crypto Trend <span className="info-icon">ⓘ</span></span>
        <div className="crypto-trend-controls">
          <span className="crypto-trend-coin">
            <img src={btcIcon} alt="btc" className="crypto-trend-coin-icon" />
            <span className="crypto-trend-coin-label">Bitcoin (BTC)</span>
            <span className="crypto-trend-coin-caret">▼</span>
          </span>
          <div className="crypto-trend-range-btns">
            {timeRanges.map(r => (
              <button
                key={r.value}
                className={`trend-range-btn${selectedRange === r.value ? ' active' : ''}`}
                onClick={() => setSelectedRange(r.value)}
              >
                {r.label}
              </button>
            ))}
          </div>
          <label className="crypto-trend-date-picker">
            <input
              type="date"
              value={selectedDate}
              onChange={e => setSelectedDate(e.target.value)}
              className="crypto-trend-date-input"
            />
            <span className="date-picker-btn">
              <span className="date-picker-icon">📅</span> Select Date
            </span>
          </label>
        </div>
      </div>
      <div className="crypto-trend-chart-area">
        <ApexCharts
          options={chartOptions}
          series={[{ data: mockData }]}
          type="candlestick"
          height={340}
        />
      </div>
    </div>
  );
};

export default CryptoTrendChart; 