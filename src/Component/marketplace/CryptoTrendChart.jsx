import React, { useState, useRef } from "react";
import ApexCharts from "react-apexcharts";
import "./CryptoTrendChart.css";
import btcIcon from "../../assets/bitcoin1.png";

const timeRanges = [
  { label: "12 month", value: "12m" },
  { label: "30 days", value: "30d" },
  { label: "7 days", value: "7d" },
  { label: "24 hours", value: "24h" },
];

// Mock candlestick data for BTC (12 months)
const mockData = [
  { x: "Jan", y: [12000, 18000, 10000, 17000] },
  { x: "Feb", y: [17000, 25000, 16000, 22000] },
  { x: "Mar", y: [22000, 32000, 21000, 30000] },
  { x: "Apr", y: [30000, 35000, 25000, 34000] },
  { x: "May", y: [34000, 40000, 32000, 39000] },
  { x: "Jun", y: [39000, 42000, 35000, 37000] },
  { x: "Jul", y: [37000, 45000, 36000, 44000] },
  { x: "Aug", y: [44000, 47000, 40000, 41000] },
  { x: "Sep", y: [41000, 60000, 39000, 58000] },
  { x: "Oct", y: [58000, 65000, 57000, 64000] },
  { x: "Nov", y: [64000, 50000, 48000, 52000] },
  { x: "Dec", y: [52000, 30000, 25000, 27000] },
];

const CryptoTrendChart = () => {
  const [selectedRange, setSelectedRange] = useState("12m");
  const [selectedDate, setSelectedDate] = useState("");
  const dateInputRef = useRef(null);
  const coins = [
    { name: "Bitcoin", symbol: "BTC", icon: btcIcon },
    {
      name: "Ethereum",
      symbol: "ETH",
      icon: "https://cryptologos.cc/logos/ethereum-eth-logo.png",
    },
    {
      name: "Ripple",
      symbol: "XRP",
      icon: "https://cryptologos.cc/logos/xrp-xrp-logo.png",
    },
  ];

  const [selectedCoin, setSelectedCoin] = useState(coins[0]);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const openDatePicker = () => {
    if (dateInputRef.current) {
      dateInputRef.current.showPicker(); // Opens native date input
    }
  };
  const chartOptions = {
    chart: {
      type: "candlestick",
      height: 558,
      toolbar: { show: false },
      background: "transparent",
      fontFamily: "inherit",
    },
    grid: {
      borderColor: "black",
      strokeDashArray: 2,
    },
    xaxis: {
      type: "category",
      labels: {
        style: { fontWeight: 600, fontSize: "1rem", colors: "#222" },
      },
      axisBorder: { show: false },
      axisTicks: { show: false },
    },
    yaxis: {
      labels: {
        style: { fontWeight: 600, fontSize: "0.95rem", colors: "#222" },
      },
      min: 0,
      max: 70000,
      tickAmount: 6,
    },
    plotOptions: {
      candlestick: {
        colors: {
          upward: "#3ecf8e",
          downward: "#e74c3c",
        },
        wick: {
          useFillColor: true,
        },
      },
    },
    tooltip: {
      enabled: true,
      style: { fontSize: "1rem", fontWeight: 600 },
    },
    fill: {
      opacity: 1,
    },
  };

  return (
    <div className="crypto-trend-chart-root">
      <div className="crypto-trend-header">
        <span className="crypto-trend-title">
          Crypto Trend <span className="info-icon">ⓘ</span>
        </span>
        <div className="crypto-trend-controls">
          <div className="crypto-trend-coin" style={{ position: "relative" }}>
            <div
              onClick={() => setDropdownOpen(!dropdownOpen)}
              style={{
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
                gap: "6px",
              }}
            >
              <img
                src={selectedCoin.icon}
                alt={selectedCoin.symbol}
                className="crypto-trend-coin-icon"
              />
              <span className="crypto-trend-coin-label">
                {selectedCoin.name} ({selectedCoin.symbol})
              </span>
              <span className="crypto-trend-coin-caret">▼</span>
            </div>

            {dropdownOpen && (
              <div
                className="crypto-dropdown"
                style={{
                  position: "absolute",
                  top: "100%",
                  left: 0,
                  backgroundColor: "#fff",
                  border: "1px solid #ccc",
                  borderRadius: "6px",
                  boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                  zIndex: 999,
                  marginTop: "6px",
                  minWidth: "180px",
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
                      display: "flex",
                      alignItems: "center",
                      padding: "8px 12px",
                      cursor: "pointer",
                      gap: "6px",
                      fontWeight: 500,
                    }}
                  >
                    <img
                      src={coin.icon}
                      alt={coin.symbol}
                      style={{ width: 20, height: 20 }}
                    />
                    <span>
                      {coin.name} ({coin.symbol})
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="crypto-trend-range-btns">
            {timeRanges.map((r) => (
              <button
                key={r.value}
                className={`trend-range-btn${
                  selectedRange === r.value ? " active" : ""
                }`}
                onClick={() => setSelectedRange(r.value)}
              >
                {r.label}
              </button>
            ))}
          </div>
          <div className="crypto-trend-date-picker">
            <input
              ref={dateInputRef}
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              style={{
                opacity: 0,
                position: "absolute",
                pointerEvents: "none",
                width: 0,
                height: 0,
              }}
            />
            <span
              className="date-picker-btn"
              onClick={openDatePicker}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                cursor: "pointer",
                // backgroundColor: '#865DFF',
                color: "black",
                padding: "8px 12px",
                borderRadius: "8px",
                fontWeight: "500",
              }}
            >
              <span className="date-picker-icon">📅</span>
              {selectedDate
                ? new Date(selectedDate).toLocaleDateString("en-GB")
                : "Select Date"}
            </span>
          </div>
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
