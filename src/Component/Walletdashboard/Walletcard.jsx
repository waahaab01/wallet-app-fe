import React, { useEffect, useState } from 'react';
import '../Style/walletstyle/uswallet.css';
import imgUp from '../../assets/wallet/up.png';
import { fetchWalletsAndBalances, getWalletBarMeta } from '../../utils/walletUtils.js';

const WalletCard = () => {
  const [wallets, setWallets] = useState([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      setLoading(true);
      try {
        const token = localStorage.getItem('authToken');
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
    <div className="wallet-cardus">
      <div className="wallet-header">
        <span className="wallet-title">My Wallet</span>
        <span className="wallet-currency">USD ▼</span>
      </div>

      <div className="wallet-balance">
        <h1>
          {loading ? 'Loading...' : `$${total.toLocaleString(undefined, { maximumFractionDigits: 2 })}`}
        </h1>
      </div>

      <div className="wallet-bar" style={{ display: 'flex', height: 14, borderRadius: 8, overflow: 'hidden', marginBottom: 8 }}>
        {barData.map((w, i) => (
          <div
            key={w._id || i}
            style={{
              width: `${w.percent}%`,
              background: w.color,
              transition: 'width 0.5s',
              height: '100%',
            }}
            title={`${w.walletType}: ${w.balance}`}
          />
        ))}
      </div>

      <div className="wallet-labels">
        {barData.map((w, i) => (
          <div key={w._id || i} style={{ display: 'flex', alignItems: 'center', marginRight: 12 }}>
            <img src={w.icon} alt={w.walletType} style={{ width: 22, marginRight: 4 }} />
            <span style={{ fontWeight: 600 }}>{w.walletType}</span>
            <span style={{ marginLeft: 6, color: '#888', fontSize: 13 }}>
              {w.balance}
            </span>
          </div>
        ))}
      </div>

      <div className="wallet-footer">
        <span className="wallet-change-positive">0%</span>
        <span className="wallet-percent">0% <img src={imgUp} alt="up" /></span>
      </div>
    </div>
  );
};

export default WalletCard;
