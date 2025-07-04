import React, { useEffect, useState } from "react";
import "../Style/mywallet.css";
import { fetchWalletsAndBalances, getWalletBarMeta } from "../../utils/walletUtils.js";

const Mywallet = () => {
  const [wallets, setWallets] = useState([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      setLoading(true);
      try {
        const token = localStorage.getItem("authToken");
        const { wallets, total } = await fetchWalletsAndBalances(token);
        setWallets(wallets);
        setTotal(total);
      } catch {
        setWallets([]);
        setTotal(0);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  // Calculate bar widths
  const barData = wallets.map(w => {
    const meta = getWalletBarMeta(w.walletType);
    return {
      ...w,
      ...meta,
      percent: total ? (w.balance / total) * 100 : 0,
    };
  });

  return (
    <div className="wallet-cardF">
      <div className="wallet-header">
        <span className="wallet-title">My Wallet</span>
        <span className="wallet-currency">USD ⌄</span>
      </div>

      <div className="wallet-balance">
        {loading ? "Loading..." : `$${total.toLocaleString(undefined, { maximumFractionDigits: 2 })}`}
      </div>

      <div className="wallet-bar">
        {barData.map((w, i) => (
          <div
            key={w._id || i}
            className={`bar-segment ${w.walletType ? w.walletType.toLowerCase() : "others"}`}
            style={{
              width: `${w.percent}%`,
              background: w.color,
              transition: "width 0.5s"
            }}
            title={`${w.walletType}: ${w.balance}`}
          />
        ))}
      </div>

      <div className="wallet-coins">
        {barData.map((w, i) => (
          <div className="coin" key={w._id || i}>
            <img src={w.icon} alt={w.walletType} style={{ width: 18, marginRight: 4, verticalAlign: "middle" }} />
            {w.walletType?.toUpperCase() || "OTHERS"} <span style={{ color: "#888", fontSize: 13, marginLeft: 4 }}>{w.balance}</span>
          </div>
        ))}
      </div>

      <div className="wallet-stats">
        <div className="wallet-profit">+ $3,432.15</div>
        <div className="wallet-change">+ 3.1% 📈</div>
      </div>
    </div>
  );
};

export default Mywallet;
