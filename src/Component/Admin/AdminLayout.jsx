import React from "react";
import AdminNavbar from "./AdminNavbar";
import AdminSidebar from "./AdminSidebar";
import "../Style/AdminLayout.css";

const AdminLayout = ({ children }) => (
  <div className="admin-layout-root">
    <AdminNavbar />
    <div className="admin-layout-content">
      <AdminSidebar />
      <main className="admin-main-content">{children}</main>
    </div>
  </div>
);

export default AdminLayout;
