import searchIcon from "../assets/logo assets/search-lg.png";
import filterIcon from "../assets/logo assets/Icon (4).png";
import sendImg from "../assets/logo assets/sendlog.png";
import receiveImg from "../assets/logo assets/receivelog.png";
import swapImg from "../assets/logo assets/swaplog.png";
import topupImg from "../assets/logo assets/topuplog.png";
import { MdDateRange } from "react-icons/md";
import "../Component/Style/activitylog/ActivityLog.css";
const transactions = [
  {
    type: "SENT",
    to: "0xABC...123",
    amount: "-0.25 ETH",
    time: "2 hrs ago",
    icon: "🟣",
    // color: "#ffcccc",
  },
  {
    type: "RECEIVED",
    to: "0xABC...123",
    amount: "+500 USDT",
    time: "Today at 9:45 AM",
    icon: "🟢",
    // color: "#ccffcc",
  },
  {
    type: "SWAPPED",
    to: "USDC → ETH",
    amount: "-$720",
    time: "Yesterday",
    icon: "🟠",
    // color: "#fff2cc",
  },
  {
    type: "TOP-UP",
    to: "From: Coinbase Wallet",
    amount: "+500 USDT",
    time: "Yesterday",
    icon: "🔵",
    // color: "#cce5ff",
  },
  // Duplicate for scrolling effect
  {
    type: "SENT",
    to: "0xABC...123",
    amount: "-0.25 ETH",
    time: "2 hrs ago",
    icon: "🟣",
    // color: "#ffcccc",
  },
  {
    type: "TOP-UP",
    to: "From: Coinbase Wallet",
    amount: "+500 USDT",
    time: "Yesterday",
    icon: "🔵",
    // color: "#cce5ff",
  },
  {
    type: "RECEIVED",
    to: "0xABC...123",
    amount: "+500 USDT",
    time: "Today at 8:56 AM",
    icon: "🟢",
    // color: "#ccffcc",
  },
  {
    type: "SWAPPED",
    to: "USDC → ETH",
    amount: "-$720",
    time: "Yesterday",
    icon: "🟠",
    // color: "none",
  },
];

const getTxImage = (type) => {
  switch (type) {
    case "SENT":
      return sendImg;
    case "RECEIVED":
      return receiveImg;
    case "SWAPPED":
      return swapImg;
    case "TOP-UP":
      return topupImg;
    default:
      return sendImg;
  }
};

const ActivityLog = () => {
  return (
    <div className="history-wrapper">
      <div className="history-header">
        <div className="search-bar">
          <div
            className="search-input-wrapper"
            style={{ position: "relative" }}
          >
            <input type="text" placeholder="Search" />
            <img
              src={searchIcon}
              alt="search"
              className="search-img-icon"
              style={{
                position: "absolute",
                right: "12px",
                top: "50%",
                transform: "translateY(-50%)",
                width: "30px",
                height: "30px",
                pointerEvents: "none",
              }}
            />
          </div>
          <div style={
            {
              backgroundColor:"white",
              border:"1px solid black",
              borderRadius:"8px",
              boxShadow:"4px 4px 0 black",
              padding:"10px",
              height:"49px",
              width:"49px",
              display:"flex",
              justifyContent:"center",
              alignItems:"center"
            }

          }
          className="filter-icon">
          <img
            src={filterIcon}
            alt="filter"
            className="icon filter-img-icon"
            style={{
              width: "30px",
              height: "30px",
              cursor: "pointer",
            }}
          />
          </div>
        </div>
        <button className="date-btn">
          <MdDateRange className="icon" /> Select Date
        </button>
      </div>
      <div style={{position: 'relative'}}>
        <div className="fade-top"></div>
        <div className="transaction-list">
          {transactions.map((tx, index) => (
            <div
              className="transaction-card"
              // style={{ backgroundColor: tx.color }}
              key={index}
            >
              <img
                src={getTxImage(tx.type)}
                alt={tx.type}
                className="tx-img-icon"
                style={{ width: "40px", height: "40px", marginRight: "16px" }}
              />
              <div className="tx-details">
                <strong>{tx.type}</strong>
                <small>{tx.to}</small>
              </div>
              <div
                className={`tx-amount ${
                  tx.amount.includes("-") ? "negative" : "positive"
                }`}
              >
                {tx.amount}
              </div>
              <div className="tx-time">{tx.time}</div>
            </div>
          ))}
        </div>
        <div className="fade-bottom"></div>
      </div>
    </div>
  );
};
export default ActivityLog;
