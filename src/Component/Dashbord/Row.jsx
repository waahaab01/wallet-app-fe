import React from "react";
import "../Style/row.css";

const buttons = [
  {
    label: "TOP UP",
    bg: "#00e3d8",
    icon: "➕",
  },
  {
    label: "SEND",
    bg: "#f79bd3",
    icon: "↗",
  },
  {
    label: "BUY / SELL",
    bg: "#fff685",
    icon: "💲",
  },
  {
    label: "RECEIVE",
    bg: "#b0ff92",
    icon: "↙",
  },
  {
    label: "SWAP",
    bg: "#ff6b3b",
    icon: "🔄",
  },
];

const Row = () => {
  return (
    <div className="action-bar">
      {buttons.map((btn, idx) => (
        <button
          key={idx}
          className="action-button"
          style={{ backgroundColor: btn.bg }}
        >
          <span className="btn-icon">{btn.icon}</span>
          <span className="btn-label">{btn.label}</span>
        </button>
      ))}
    </div>
  );
};

export default Row;
