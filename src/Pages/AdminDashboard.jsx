import React from "react";
import AdminLayout from "../Component/Admin/AdminLayout";
import UserTable from "../Component/Admin/UserTable";

const AdminDashboard = () => {
  return (
    <AdminLayout>
      {/* Add your admin dashboard content here */}
          <UserTable />

    </AdminLayout>
  );
};

export default AdminDashboard;
