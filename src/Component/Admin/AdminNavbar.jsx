import React from "react";
import { useNavigate } from "react-router-dom";
import "../Style/AdminNavbar.css";

const AdminNavbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/login");
  };

  return (
    <nav className="admin-navbar">
      <div className="admin-navbar-logo">AdminPanel</div>
      <ul className="admin-navbar-links">
        <li>Dashboard</li>
        <li>Users</li>
        <li>Settings</li>
        <li onClick={handleLogout} style={{cursor: 'pointer', color: '#e00751', fontWeight: 600}}>Logout</li>
      </ul>
    </nav>
  );
};

export default AdminNavbar;
