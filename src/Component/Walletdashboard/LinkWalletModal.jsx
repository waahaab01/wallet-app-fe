import React, { useState } from "react";
import "./LinkWalletModal.css";
import { linkWallet } from "../../api/wallet";

const walletTypes = [
  { label: "Metamask", value: "metamask" },
  { label: "Trust Wallet", value: "trustwallet" },
  { label: "Coinbase", value: "coinbase" },
  { label: "Other", value: "other" },
];

const chains = [
  { label: "Ethereum", value: "ethereum" },
  { label: "Binance Smart Chain", value: "bsc" },
  { label: "Polygon", value: "polygon" },
  { label: "Other", value: "other" },
];

const LinkWalletModal = ({ open, onClose }) => {
  const [walletType, setWalletType] = useState(walletTypes[0].value);
  const [walletAddress, setWalletAddress] = useState("");
  const [chain, setChain] = useState(chains[0].value);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleLink = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess("");
    setError("");
    try {
      const token = localStorage.getItem("authToken");
      const res = await linkWallet({ walletType, walletAddress, chain, token });
      setSuccess(res.message || "Wallet linked successfully!");
      setWalletAddress("");
      setWalletType(walletTypes[0].value);
      setChain(chains[0].value);
    } catch (err) {
      setError(err.message || "Failed to link wallet");
    } finally {
      setLoading(false);
    }
  };

  if (!open) return null;
  return (
    <div className="linkwallet-modal-overlay">
      <div className="linkwallet-modal">
        <button className="linkwallet-close" onClick={onClose} aria-label="Close">×</button>
        <div className="linkwallet-title">LINK WALLET</div>
        <div className="linkwallet-desc">
          Enter your wallet details to link a new wallet to your account.
        </div>
        <form onSubmit={handleLink}>
          <div className="linkwallet-field-group">
            <label className="linkwallet-label">Wallet Type</label>
            <select
              className="linkwallet-input"
              value={walletType}
              onChange={e => setWalletType(e.target.value)}
              required
            >
              {walletTypes.map(opt => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
          </div>
          <div className="linkwallet-field-group">
            <label className="linkwallet-label">Wallet Address</label>
            <input
              className="linkwallet-input"
              type="text"
              value={walletAddress}
              onChange={e => setWalletAddress(e.target.value)}
              placeholder="0x..."
              required
            />
          </div>
          <div className="linkwallet-field-group">
            <label className="linkwallet-label">Chain</label>
            <select
              className="linkwallet-input"
              value={chain}
              onChange={e => setChain(e.target.value)}
              required
            >
              {chains.map(opt => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
          </div>
          {error && <div className="linkwallet-error">{error}</div>}
          {success && <div className="linkwallet-success">{success}</div>}
          <button className="linkwallet-btn" type="submit" disabled={loading}>
            {loading ? "Linking..." : "LINK WALLET"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default LinkWalletModal;