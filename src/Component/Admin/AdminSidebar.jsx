import React from "react";
import "../Style/AdminSidebar.css";

const AdminSidebar = () => (
  <aside className="admin-sidebar">
    <ul>
      <li className="active">Overview</li>
      <li>Wallets</li>
      <li>Staking</li>
      <li>Plans</li>
      <li>Transactions</li>
      <li>Settings</li>
    </ul>
  </aside>
);

export default AdminSidebar;
