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
              <div><b>Wallet Address:</b> {user.walletAddress}</div>
              {/* Add more fields as needed */}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserDetailsModal;