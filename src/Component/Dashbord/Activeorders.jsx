import React from "react";
import "../Style/activeorders.css";

const orders = [
  {
    pair: "BTC/USDT",
    type: "BUY",
    amount: "0.0234",
    filled: 65,
    price: "$42800",
    time: "14:32",
  },
  {
    pair: "ETH/USDT",
    type: "SELL",
    amount: "1.567",
    filled: 23,
    price: "$2845",
    time: "14:28",
  },
  {
    pair: "ADA/USDT",
    type: "BUY",
    amount: "0.0234",
    filled: 65,
    price: "$42800",
    time: "14:32",
  },
];

const ActiveOrders = () => {
  return (
    <div className="active-orders-container">
      <h2>Active Orders</h2>
      {orders.map((order, index) => (
        <div
          key={index}
          className={`order-card ${order.type === "BUY" ? "buy" : "sell"}`}
        >
          <div className="order-header">
            <h3>{order.pair}</h3>
            <span className={`badge ${order.type.toLowerCase()}`}>
              {order.type}
            </span>
          </div>
          <div className="order-details">
            <p>
              <strong>Amount:</strong> {order.amount}
            </p>
            <p>
              <strong>Filled:</strong> {order.filled}%
            </p>
            <p>
              <strong>Price:</strong> {order.price}
            </p>
            <p>
              <strong>Time:</strong> {order.time}
            </p>
          </div>
          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{
                width: `${order.filled}%`,
                backgroundColor: order.type === "BUY" ? "#9fff8c" : "#ff6b4a",
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ActiveOrders;
