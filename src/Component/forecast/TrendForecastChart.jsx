import React, { useState, useRef } from 'react';
import ApexCharts from 'react-apexcharts';
import './TrendForecastChart.css';
import btcIcon from '../../assets/bitcoin1.png';

const timeRanges = [
  { label: '12 month', value: '12m' },
  { label: '30 days', value: '30d' },
  { label: '7 days', value: '7d' },
  { label: '24 hours', value: '24h' },
];

const coins = [
  { name: 'Bitcoin', symbol: 'BTC', icon: btcIcon },
  { name: 'Ethereum', symbol: 'ETH', icon: 'https://cryptologos.cc/logos/ethereum-eth-logo.png' },
  { name: 'Ripple', symbol: 'XRP', icon: 'https://cryptologos.cc/logos/xrp-xrp-logo.png' },
];

const TrendForecastChart = () => {
  const [selectedRange, setSelectedRange] = useState('12m');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedCoin, setSelectedCoin] = useState(coins[0]);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dateInputRef = useRef(null);

  const openDatePicker = () => {
    if (dateInputRef.current) {
      dateInputRef.current.showPicker();
    }
  };

  const chartOptions = {
    chart: {
      type: 'line',
      height: 350,
      toolbar: { show: false },
      fontFamily: 'Bangers, cursive',
    },
    grid: {
      borderColor: '#e7e7e7',
      strokeDashArray: 4,
    },
    stroke: {
      width: [3, 3, 3],
      curve: 'smooth',
    },
    colors: ['#8b5cf6', '#3b82f6', '#ec4899'],
    xaxis: {
      type: 'category',
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      labels: {
        style: {
          fontWeight: 700,
          fontSize: '1rem',
        },
      },
    },
    yaxis: {
      min: 0,
      max: 60000,
      tickAmount: 6,
      labels: {
        formatter: (value) => `${value / 1000}k`,
        style: {
          fontWeight: 700,
          fontSize: '1rem',
        },
      },
    },
    legend: { show: false },
    tooltip: {
      enabled: true,
      shared: false,
      intersect: true,
      custom: function () {
        return `
          <div class="apex-tooltip">
            <div class="tooltip-header">
              <img src="${selectedCoin.icon}" alt="${selectedCoin.symbol}" class="tooltip-icon" />
              <div class="tooltip-title">
                <div class="tooltip-coin">${selectedCoin.symbol}</div>
                <div class="tooltip-coin-name">${selectedCoin.name}</div>
              </div>
            </div>
            <div class="tooltip-change">+9.6%</div>
          </div>
        `;
      },
    },
    markers: {
      size: 6,
      colors: ['#fff'],
      strokeColors: '#8b5cf6',
      strokeWidth: 3,
      hover: {
        size: 8,
      },
    },
    dataLabels: {
      enabled: false,
    },
  };

  const chartSeries = [
    {
      name: 'Trend 1',
      type: 'line',
      data: [10000, 15000, 12000, 18000, 32000, 28000, 25000, 22000, 28000, 25000, 20000, 15000],
    },
    {
      name: 'Trend 2',
      type: 'line',
      data: [8000, 10000, 18000, 22000, 20000, 18000, 28000, 35000, 24000, 28000, 34000, 28000],
    },
    {
      name: 'Trend 3',
      type: 'line',
      data: [5000, 8000, 10000, 12000, 15000, 22000, 18000, 15000, 20000, 30000, 28000, 22000],
    },
    {
      name: 'Volume',
      type: 'bar',
      data: [5000, 7000, 10000, 8000, 12000, 15000, 9000, 7000, 6000, 12000, 8000, 10000],
    },
  ];

  return (
    <div className="trend-forecast-chart-root">
      <div className="trend-forecast-header">
        <div className="trend-forecast-title-section">
          <span className="trend-forecast-title">
            Trend Forecast <span className="info-icon">ⓘ</span>
          </span>

          {/* Coin Dropdown */}
          <div className="trend-forecast-coin-selector" style={{ position: 'relative' }}>
            <div
              onClick={() => setDropdownOpen(!dropdownOpen)}
              style={{ display: 'flex', alignItems: 'center', cursor: 'pointer', gap: '6px' }}
            >
              <img src={selectedCoin.icon} alt={selectedCoin.symbol} className="trend-coin-icon" />
              <span className="trend-coin-label">{selectedCoin.name} ({selectedCoin.symbol})</span>
              <span className="trend-coin-caret">▼</span>
            </div>

            {dropdownOpen && (
              <div
                className="coin-dropdown"
                style={{
                  position: 'absolute',
                  top: '100%',
                  left: 0,
                  backgroundColor: '#fff',
                  border: '1px solid #ccc',
                  borderRadius: '6px',
                  boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                  zIndex: 999,
                  marginTop: '6px',
                  minWidth: '180px',
                }}
              >
                {coins.map((coin) => (
                  <div
                    key={coin.symbol}
                    onClick={() => {
                      setSelectedCoin(coin);
                      setDropdownOpen(false);
                    }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      padding: '8px 12px',
                      cursor: 'pointer',
                      gap: '6px',
                      fontWeight: 500,
                    }}
                  >
                    <img src={coin.icon} alt={coin.symbol} style={{ width: 20, height: 20 }} />
                    <span>{coin.name} ({coin.symbol})</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Time + Date Controls */}
        <div className="trend-forecast-controls">
          <div className="trend-range-btns">
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

          {/* Date Picker */}
          <div className="trend-date-picker" style={{ position: 'relative' }}>
            <input
              ref={dateInputRef}
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              style={{
                opacity: 0,
                position: 'absolute',
                pointerEvents: 'none',
                width: 0,
                height: 0,
              }}
            />
            <span
              onClick={openDatePicker}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                cursor: 'pointer',
                // backgroundColor: '#8b5cf6',
                color: 'black',
                padding: '8px 12px',
                borderRadius: '8px',
                fontWeight: '500',
              }}
            >
              <span className="date-picker-icon">📅</span>
              {selectedDate ? new Date(selectedDate).toLocaleDateString('en-GB') : 'Select Date'}
            </span>
          </div>
        </div>
      </div>

      {/* Chart */}
      <div className="trend-forecast-chart-area">
        <ApexCharts options={chartOptions} series={chartSeries} type="line" height={350} />
      </div>
    </div>
  );
};

export default TrendForecastChart;
