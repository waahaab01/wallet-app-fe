import React, { useState } from 'react';
import './SendCoinModal.css';
import { sendEthFromMainWallet } from '../../../api/wallet';

// Custom SVG icons for tokens and addresses
const BtcSvg = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="10" fill="#f7931a" />
    <text x="12" y="16" textAnchor="middle" fontSize="12" fill="#fff" fontWeight="bold">
      ₿
    </text>
  </svg>
);
const EthSvg = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="10" fill="#627eea" />
    <polygon points="12,6 17,13 12,11 7,13" fill="#fff" />
    <polygon points="12,18 17,13 12,15 7,13" fill="#fff" />
  </svg>
);
const UsdtSvg = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="10" fill="#26a17b" />
    <text x="12" y="16" textAnchor="middle" fontSize="12" fill="#fff" fontWeight="bold">
      T
    </text>
  </svg>
);
const MetamaskSvg = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
    <rect x="4" y="4" width="16" height="16" rx="4" fill="#e2761b" />
    <polygon points="12,8 16,12 12,10 8,12" fill="#fff" />
  </svg>
);
const BlockchainSvg = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
    <rect x="4" y="4" width="16" height="16" rx="4" fill="#4e8ee5" />
    <rect x="8" y="8" width="8" height="8" fill="#fff" />
  </svg>
);
const CryptoSvg = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="10" fill="#8e44ad" />
    <text x="12" y="16" textAnchor="middle" fontSize="10" fill="#fff" fontWeight="bold">
      CR
    </text>
  </svg>
);

const CloseIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#222" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

const tokenOptions = [
  { label: 'BTC', icon: <BtcSvg /> },
  { label: 'ETH', icon: <EthSvg /> },
  { label: 'USDT', icon: <UsdtSvg /> },
];
const addressOptions = [
  { label: 'METAMASK', icon: <MetamaskSvg /> },
  { label: 'BLOCKCHAIN', icon: <BlockchainSvg /> },
  { label: 'CRYPTOGRAPHY', icon: <CryptoSvg /> },
];

const SendCoinModal = ({ open, onClose }) => {
  const [selectedToken, setSelectedToken] = useState(tokenOptions[0]);
  const [showTokenDropdown, setShowTokenDropdown] = useState(false);
  const [selectedAddress, setSelectedAddress] = useState(addressOptions[0]);
  const [showAddressDropdown, setShowAddressDropdown] = useState(false);
  const [amount, setAmount] = useState('');
  const [recipient, setRecipient] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSend = async () => {
    setError('');
    setSuccess('');
    setLoading(true);
    try {
      const token = localStorage.getItem('authToken');
      console.log('Sending:', { toAddress: recipient, amountEth: amount.replace(/,/g, ''), token });
      const result = await sendEthFromMainWallet({
        toAddress: recipient,
        amountEth: amount.replace(/,/g, ''),
        token,
      });
      setSuccess(result.message || 'Transaction sent!');
      console.log('Send Success:', result);
    } catch (err) {
      setError(err.message);
      console.error('Send Error:', err);
    } finally {
      setLoading(false);
    }
  };

  if (!open) return null;
  return (
    <div className="sendcoin-modal-overlay">
      <div className="sendcoin-modal">
        <button className="sendcoin-close" onClick={onClose} aria-label="Close">
          <CloseIcon />
        </button>
        <h2 className="sendcoin-title">SEND COINS</h2>
        <p className="sendcoin-desc">
          Select the token, enter the recipient, and review the amount before sending. Simple, fast, and fully in your control.
        </p>
        <div className="sendcoin-field-group">
          <label className="sendcoin-label">Token to Send</label>
          <div className="sendcoin-input-row sendcoin-input-row--dropdown">
            <div className="sendcoin-dropdown-wrapper">
              <span
                className={`sendcoin-token sendcoin-dropdown-toggle${showTokenDropdown ? ' open' : ''}`}
                tabIndex={0}
                onClick={() => setShowTokenDropdown((v) => !v)}
                onBlur={() => setTimeout(() => setShowTokenDropdown(false), 150)}
              >
                {selectedToken.icon} {selectedToken.label}
                <span className="sendcoin-dropdown-arrow">
                  <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
                    <path d="M6 8l4 4 4-4" stroke="#20e2c2" strokeWidth="2.2" strokeLinecap="round" />
                  </svg>
                </span>
              </span>
              <div
                className={`sendcoin-dropdown-list${showTokenDropdown ? ' show' : ''}`}
                style={{ pointerEvents: showTokenDropdown ? 'auto' : 'none' }}
              >
                {tokenOptions.map((opt) => (
                  <div
                    key={opt.label}
                    className={`sendcoin-dropdown-item${selectedToken.label === opt.label ? ' selected' : ''}`}
                    onClick={() => {
                      setSelectedToken(opt);
                      setShowTokenDropdown(false);
                    }}
                  >
                    {opt.icon} {opt.label}
                  </div>
                ))}
              </div>
            </div>
            <input className="sendcoin-input" type="text" value={amount} onChange={e => setAmount(e.target.value)} placeholder="Amount (ETH)" />
          </div>
        </div>
        <div className="sendcoin-field-group">
          <label className="sendcoin-label">Recipient Address</label>
          <div className="sendcoin-input-row sendcoin-input-row--dropdown">
            <div className="sendcoin-dropdown-wrapper">
              <span
                className={`sendcoin-token sendcoin-dropdown-toggle${showAddressDropdown ? ' open' : ''}`}
                tabIndex={0}
                onClick={() => setShowAddressDropdown((v) => !v)}
                onBlur={() => setTimeout(() => setShowAddressDropdown(false), 150)}
              >
                {selectedAddress.icon} {selectedAddress.label}
                <span className="sendcoin-dropdown-arrow">
                  <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
                    <path d="M6 8l4 4 4-4" stroke="#20e2c2" strokeWidth="2.2" strokeLinecap="round" />
                  </svg>
                </span>
              </span>
              <div
                className={`sendcoin-dropdown-list${showAddressDropdown ? ' show' : ''}`}
                style={{ pointerEvents: showAddressDropdown ? 'auto' : 'none' }}
              >
                {addressOptions.map((opt) => (
                  <div
                    key={opt.label}
                    className={`sendcoin-dropdown-item${selectedAddress.label === opt.label ? ' selected' : ''}`}
                    onClick={() => {
                      setSelectedAddress(opt);
                      setShowAddressDropdown(false);
                    }}
                  >
                    {opt.icon} {opt.label}
                  </div>
                ))}
              </div>
            </div>
            <input className="sendcoin-input" type="text" value={recipient} onChange={e => setRecipient(e.target.value)} placeholder="Recipient Address" />
          </div>
        </div>
        <div className="sendcoin-or">OR</div>
        <div className="sendcoin-qr">
          <img src="https://api.qrserver.com/v1/create-qr-code/?size=140x140&data=0xABC123...5678" alt="qr" />
        </div>
        <div className="sendcoin-info">
          <span className="sendcoin-info-label">Info</span>
          <span className="sendcoin-info-detail">• Network Fee Estimate: 0.00021 BTC | $6.00</span>
        </div>
        {error && <div className="sendcoin-error">{error}</div>}
        {success && <div className="sendcoin-success">{success}</div>}
        <button className="sendcoin-btn" onClick={handleSend} disabled={loading}>
          {loading ? 'Sending...' : 'SEND COINS'}
        </button>
      </div>
    </div>
  );
};

export default SendCoinModal;
