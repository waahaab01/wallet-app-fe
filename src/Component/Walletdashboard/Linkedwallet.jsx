import React, { useRef, useEffect, useState } from 'react';
import '../Style/walletstyle/linkedwallet.css';
import group from '../../assets/wallet/Group.png';
import { getUserWallets, getWalletBalance } from '../../api/wallet';

const Linkedwallet = () => {
  const scrollRef = useRef(null);
  const [wallets, setWallets] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch all user wallets and their balances
  useEffect(() => {
    const fetchWallets = async () => {
      setLoading(true);
      try {
        const token = localStorage.getItem('authToken');
        const res = await getUserWallets(token);
        const walletsArr = res.wallets || [];
        // Fetch balances for each wallet
        const walletsWithBalances = await Promise.all(
          walletsArr.map(async (w) => {
            try {
              const balRes = await getWalletBalance({ walletId: w._id, token });
              return {
                ...w,
                balance: balRes.balance?.eth || '0',
                profit: '+$0', // You can calculate profit if you have data
                change: '+0%', // You can calculate change if you have data
              };
            } catch {
              return { ...w, balance: '0', profit: '+$0', change: '+0%' };
            }
          })
        );
        setWallets(walletsWithBalances);
      } catch {
        setWallets([]);
      } finally {
        setLoading(false);
      }
    };
    fetchWallets();
  }, []);

  const scroll = (dir) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: dir === 'left' ? -300 : 300,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="carousel-container">
      <button className="scroll-btn left" onClick={() => scroll('left')}>&lt;</button>
      <div className="card-list" ref={scrollRef}>
        {loading ? (
          <div style={{ padding: 40, fontWeight: 600 }}>Loading...</div>
        ) : wallets.length === 0 ? (
          <div style={{ padding: 40, fontWeight: 600 }}>No linked wallets found.</div>
        ) : (
          wallets.map((wallet, i) => (
            <div className="wallet-card" key={wallet._id || i}>
              <div className="wallet-header">
                <img src={group} alt="metamask" className="icon" />
                <span className="wallet-name">{wallet.walletType?.toUpperCase() || 'WALLET'}</span>
                <span className="dropdown">{wallet.chain?.toUpperCase() || 'CHAIN'} ⌄</span>
              </div>
              <div className="wallet-balance">${Number(wallet.balance).toLocaleString(undefined, { maximumFractionDigits: 4 })}</div>
              <div className="wallet-bar">
                <div className="btc"></div>
                <div className="usdt"></div>
                <div className="eth"></div>
                <div className="others"></div>
              </div>
              <div className="labels">
                <span className="btc-label">🟡 BTC</span>
                <span className="usdt-label">🟢 USDT</span>
                <span className="eth-label">🔵 ETH</span>
                <span className="others-label">🟣 OTHERS</span>
              </div>
              <div className="wallet-footer">
                <div>{wallet.profit}</div>
                <div>{wallet.change} 🔼</div>
              </div>
            </div>
          ))
        )}
      </div>
      <button className="scroll-btn right" onClick={() => scroll('right')}>&gt;</button>
    </div>
  );
};

export default Linkedwallet;
