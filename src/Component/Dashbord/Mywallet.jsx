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
    <div className="wallet-cardF">
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
