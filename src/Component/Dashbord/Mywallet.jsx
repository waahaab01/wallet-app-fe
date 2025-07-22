import React, { useEffect, useState } from "react";
import "../Style/mywallet.css";
import { syncWalletByUserId } from "../../api/wallet";
import ufo from "../../assets//ufo.png";

const Mywallet = () => {
  const [balance, setBalance] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchBalance = async () => {
      setLoading(true);
      setError("");
      try {
        const user = JSON.parse(localStorage.getItem("user"));
        const userId = user?.id;
        const token = localStorage.getItem("authToken");
        const res = await syncWalletByUserId({ userId, token });
        setBalance(res.balance);
      } catch (err) {
        setError("Failed to fetch balance");
      } finally {
        setLoading(false);
      }
    };
    fetchBalance();
  }, []);

  return (
    <div className="wallet-cardF" style={{ position: 'relative' }}>
      <button
        className="refresh-btn-wallet"
        style={{
          position: 'absolute',
          top: 16,
          left: 166,
          // background: '#fff',
          border: '1px solid black',
          // borderRadius: '50%',
          width: 36,
          height: 36,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 25,
          cursor: 'pointer',
          zIndex: 2,
          boxShadow: '4px 4px 0 black',
        }}
        title="Refresh"
        onClick={() => window.location.reload()}
      >
        &#x21bb;
      </button>
      <img src={ufo} alt="ufo-wallet" className="ufo-wallet" />
      <div className="wallet-header">
        <span className="wallet-title">My Wallet</span>
        <span className="wallet-currency">USD ⌄</span>
      </div>
      <div className="wallet-balance-db">
        {loading ? "Loading..." : error ? error : `$${balance}`}
      </div>
      {/* You can add more wallet info here if needed */}
    </div>
  );
};

export default Mywallet;
