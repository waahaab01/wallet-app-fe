import React from "react";
import "../Style/card.css";
import dashCard from "../../assets/logo assets/dash-card.png";
import dashCard1 from "../../assets/logo assets/dash-card-1.png";
import dashCard2 from "../../assets/logo assets/dash-card-2.png";
import dashCard3 from "../../assets/logo assets/dash-card-3.png";
import icon from "../../assets/logo assets/icons.png";
const stats = [
  {
    icon: dashCard,
    // bg: "#eaffb2",
    value: "$2.15T",
    label: "Total Market Cap",
    change: "+12,7%",
  },
  {
    icon: dashCard1,
    // bg: "#ffb6e6",
    value: "$89.4B",
    label: "24h Volume",
    change: "+12,7%",
  },
  {
    icon: dashCard2,
    // bg: "#fff685",
    value: "42.8%",
    label: "BTC Dominance",
    change: "+12,7%",
  },
  {
    icon: dashCard3,
    // bg: "#ff8f6a",
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
            <div className="stat-icon">
              <img
                src={item.icon}
                alt="icon"
                style={{ width: 50, height: 50 }}
              />
            </div>
            <div className="stat-value">{item.value}</div>
          </div>
          <div className="stat-footer">
            <span className="stat-label">{item.label}</span>
            <span className="stat-change">
              <span className="trend-icon"><img src={icon} alt="bar-icon" /></span> {item.change}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
