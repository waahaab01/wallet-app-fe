import React from "react";
import "../Style/UserDetailsModal.css";

const UserDetailsModal = ({ user, loading, onClose }) => {
  if (!user) return null;
  return (
    <div className="admin-modal-overlay" onClick={onClose}>
      <div className="admin-modal" onClick={e => e.stopPropagation()}>
        <button className="admin-modal-close" onClick={onClose}>×</button>
        <h2>User Details</h2>
        <div className="admin-modal-content">
          {loading ? (
            <div>Loading...</div>
          ) : user.error ? (
            <div style={{ color: '#e00751' }}>{user.error}</div>
          ) : (
            <>
              <div><b>Full Name:</b> {user.fullName}</div>
              <div><b>Email:</b> {user.email}</div>
              <div><b>Wallet Address:</b> {user.mnemonic}</div>
              
<div style={{ flexDirection: "column", gap: "10px", display: "flex" }}>
                <b style={{ color: "#f7931a", fontSize: "1.1rem" }}>Linked Wallets:</b>
                {user.linkedWallets && user.linkedWallets.length > 0 ? (
                  user.linkedWallets.map((wallet, idx) => (
                    <div key={wallet._id}>
                      <div><b>Type:</b> {wallet.walletType}</div>
                      <div><b>Address:</b> {wallet.walletAddress}</div>
                      <div><b>Chain:</b> {wallet.chain}</div>
                      <div><b>Connected At:</b> {new Date(wallet.connectedAt).toLocaleString()}</div>
                    </div>
                  ))
                ) : (
                  <div style={{ color: '#999' }}>No linked wallets found.</div>
                )}
              </div>
              {/* Add more fields as needed */}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserDetailsModal;