import React, { useEffect, useState } from "react";
import { getTransactionHistory } from "../../api/wallet";
import "./Walletactivity.css";

const typeMeta = {
  send:   { color: "#ffe5e5", icon: "↗️", label: "Send" },
  stake:  { color: "#e5f7ff", icon: "📥", label: "Stake" },
  unstake:{ color: "#f9f5e7", icon: "📤", label: "Unstake" },
  buy:    { color: "#e5ffe5", icon: "🛒", label: "Buy" },
  swap:   { color: "#f3e5ff", icon: "🔄", label: "Swap" },
  default:{ color: "#f0f0f0", icon: "💸", label: "Other" }
};

const Walletactivity = () => {
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError("");
      try {
        const token = localStorage.getItem("authToken");
        const res = await getTransactionHistory(token);
        setActivities(res.transactions || []);
      } catch (err) {
        setError("Failed to load activity");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="activity-card">
      <div className="activity-title">Wallet Activity</div>
      <div className="activity-scroll">
        {loading && <div className="activity-loading">Loading...</div>}
        {error && <div className="activity-error">{error}</div>}
        {!loading && !error && activities.length === 0 && (
          <div className="activity-empty">No activity found.</div>
        )}
        {activities.map((tx) => {
          const meta = typeMeta[tx.type] || typeMeta.default;
          return (
            <div className="activity-row" style={{ background: meta.color }} key={tx._id}>
              <div className="activity-icon">{meta.icon}</div>
              <div className="activity-info">
                <div className="activity-type-status">
                  <span className="activity-type">{meta.label}</span>
                  <span className={`activity-status ${tx.status}`}>{tx.status}</span>
                </div>
                <div className="activity-fromto">
                  <span>From: <b>{tx.from}</b></span>
                  <span>To: <b>{tx.to}</b></span>
                </div>
                <div className="activity-chain">
                  <span>{tx.chain}</span>
                  <span className="activity-date">
                    {new Date(tx.createdAt).toLocaleString()}
                  </span>
                </div>
              </div>
              <div className="activity-amount">
                {tx.type === "send" || tx.type === "unstake" ? "-" : "+"}
                {tx.amount}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Walletactivity;
