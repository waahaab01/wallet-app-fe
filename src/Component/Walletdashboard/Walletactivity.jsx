import React from 'react';
import '../Style/walletstyle/walletactivity.css';

const Walletactivity = () => {
  const activities = [
    {
      type: "SENT",
      to: "To: 0xABC...123",
      amount: "-0.25 ETH",
      time: "2 hrs ago",
      color: "#fce9f1",
      icon: "↗️",
      amountColor: "#e00751"
    },
    {
      type: "RECEIVED",
      to: "To: 0xABC...123",
      amount: "+$500 USDT",
      time: "Today at 9:45 AM",
      color: "#e8fce9",
      icon: "⬇️",
      amountColor: "#00b000"
    },
    {
      type: "SWAPED",
      to: "USDC → ETH",
      amount: "~$220",
      time: "Yesterday",
      color: "#fff0e6",
      icon: "🔁",
      amountColor: "#00b000"
    },
    {
      type: "TOP-UP",
      to: "From: Coinbase Wallet",
      amount: "+$500 USDT",
      time: "Yesterday",
      color: "#e7f8fc",
      icon: "➕",
      amountColor: "#00b000"
    }
  ];

  return (
    <div className="activity-logsW">
      <h2>Activity Log</h2>
      {activities.map((activity, index) => (
        <div
          className="activity-boxW"
          key={index}
          style={{ backgroundColor: activity.color }}
        >
          <div className="activity-leftW">
            <div className="activity-iconW">{activity.icon}</div>
            <div>
              <div className="activity-typeW">{activity.type}</div>
              <div className="activity-toW">{activity.to}</div>
            </div>
          </div>
          <div className="activity-rightW">
            <div
              className="activity-amountW"
              style={{ color: activity.amountColor }}
            >
              {activity.amount}
            </div>
            <div className="activity-timeW">{activity.time}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Walletactivity;
