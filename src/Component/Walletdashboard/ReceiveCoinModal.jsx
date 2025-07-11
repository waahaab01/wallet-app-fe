import React, { useEffect, useState } from 'react';
import './ReceiveCoinModal.css';
import { getReceivedTransactions } from '../../api/wallet';

const ReceiveCoinModal = ({ open, onClose, token }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    if (open) {
      setLoading(true);
      setError(null);
      getReceivedTransactions(token)
        .then(res => {
          setTransactions(res.transactions || []);
          setLoading(false);
        })
        .catch(err => {
          setError(err.message || 'Failed to load');
          setLoading(false);
        });
    }
  }, [open, token]);

  if (!open) return null;

  return (
    <div className="receive-modal-overlay">
      <div className="receive-modal">
        <button className="receive-modal-close" onClick={onClose}>&times;</button>
        <h2 className="receive-modal-title">Received Transactions</h2>
        {loading && <div className="receive-modal-loading">Loading...</div>}
        {error && <div className="receive-modal-error">{error}</div>}
        {!loading && !error && (
          <div className="receive-modal-list">
            {transactions.length === 0 ? (
              <div className="receive-modal-empty">No received transactions found.</div>
            ) : (
              transactions.map((tx, idx) => (
                <div className="receive-modal-card" key={tx._id || idx}>
                  {Object.entries(tx).map(([key, value]) => (
                    <div className="receive-modal-row" key={key}>
                      <span className="receive-modal-key">{key}:</span>
                      <span className="receive-modal-value">{String(value)}</span>
                    </div>
                  ))}
                </div>
              ))
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ReceiveCoinModal; 