import React from "react";
import "../Style/card.css";

const stats = [
  {
    icon: "💲",
    bg: "#eaffb2",
    value: "$2.15T",
    label: "Total Market Cap",
    change: "+12,7%",
  },
  {
    icon: "📈",
    bg: "#ffb6e6",
    value: "$89.4B",
    label: "24h Volume",
    change: "+12,7%",
  },
  {
    icon: "₿",
    bg: "#fff685",
    value: "42.8%",
    label: "BTC Dominance",
    change: "+12,7%",
  },
  {
    icon: "👥",
    bg: "#ff8f6a",
    value: "2.4M",
    label: "Active Traders",
    change: "+12,7%",
  },
];

const Cards = () => {
  return (
    <div className="stats-grid">
      {stats.map((item, index) => (
        <div className="stat-card" key={index}>
          <div className="stat-header">
            <div className="stat-icon" style={{ backgroundColor: item.bg }}>
              {item.icon}
            </div>
            <div className="stat-value">{item.value}</div>
          </div>
          <div className="stat-footer">
            <span className="stat-label">{item.label}</span>
            <span className="stat-change">
              <span className="trend-icon">📈</span> {item.change}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
