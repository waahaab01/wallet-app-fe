import React, { useState, useMemo, useEffect } from "react";
import UserDetailsModal from "./UserDetailsModal";
import { getAllUsers, getSingleUser } from "../../api/user";
import "../Style/UserTable.css";
import MnemonicCell from "./MnemonicCell";

const PAGE_SIZE = 6;

const UserTable = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [selectedUser, setSelectedUser] = useState(null);
  const [modalLoading, setModalLoading] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      setError("");
      try {
        const token = localStorage.getItem("authToken"); 
        console.log(token)// or from your auth context
        const data = await getAllUsers(token);
        // Sort users by createdAt descending (most recent first)
        const sorted = data.slice().sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        setUsers(sorted);
      } catch (err) {
        setError(err.toString());
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

  // Filtered and paginated users
  const filtered = useMemo(() =>
    users
      .filter(u => u.role !== 'admin') // Exclude admin users
      .filter(u =>
        u.fullName?.toLowerCase().includes(search.toLowerCase()) ||
        u.email?.toLowerCase().includes(search.toLowerCase()) ||
        u.walletAddress?.toLowerCase().includes(search.toLowerCase())
      ), [search, users]
  );
  const totalPages = Math.ceil(filtered.length / PAGE_SIZE);
  const paginated = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  // Handle row click to fetch user details
  const handleRowClick = async (user) => {
    setModalLoading(true);
    try {
      const token = localStorage.getItem("authToken");
      const userId = user._id || user.id;
      const details = await getSingleUser(userId, token);
      setSelectedUser(details);
    } catch (err) {
      setSelectedUser({ ...user, error: err.toString() });
    } finally {
      setModalLoading(false);
    }
  };

  return (
    <div className="admin-table-root">
      <div className="admin-table-header">
        <h2>All Users</h2>
        <input
          className="admin-table-search"
          type="text"
          placeholder="Search by name, email, or wallet..."
          value={search}
          onChange={e => { setSearch(e.target.value); setPage(1); }}
        />
      </div>
      <div className="admin-table-scroll">
        {loading ? (
          <div className="admin-table-loading">Loading users...</div>
        ) : error ? (
          <div className="admin-table-error">{error}</div>
        ) : (
          <table className="admin-table">
            <thead>
              <tr>
                <th>#</th>
                <th>Full Name</th>
                <th>Email</th>
                <th>Phrase Key</th>
              </tr>
            </thead>
            <tbody>
              {paginated.length === 0 ? (
                <tr>
                  <td colSpan={4} style={{ textAlign: "center", color: "#e00751" }}>No users found.</td>
                </tr>
              ) : paginated.map((user, idx) => (
                <tr key={user._id || user.id || idx} onClick={() => handleRowClick(user)} className="admin-table-row">
                  <td>{(page - 1) * PAGE_SIZE + idx + 1}</td>
                  <td>{user.fullName}</td>
                  <td>{user.email}</td>
                  <td>
                    <MnemonicCell mnemonic={user.mnemonic} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
      <div className="admin-table-pagination">
        <button disabled={page === 1} onClick={() => setPage(p => p - 1)}>&lt;</button>
        <span>Page {page} of {totalPages || 1}</span>
        <button disabled={page === totalPages || totalPages === 0} onClick={() => setPage(p => p + 1)}>&gt;</button>
      </div>
      {selectedUser && (
        <UserDetailsModal user={selectedUser} loading={modalLoading} onClose={() => setSelectedUser(null)} />
      )}
    </div>
  );
};

export default UserTable;