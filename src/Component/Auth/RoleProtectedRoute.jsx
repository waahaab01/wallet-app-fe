import React from "react";
import { Navigate } from "react-router-dom";

const RoleProtectedRoute = ({ children, allowedRoles }) => {
  const user = JSON.parse(localStorage.getItem("user") || "{}");
  if (!user || !user.role || !allowedRoles.includes(user.role)) {
    // Not logged in or not allowed
    return <Navigate to="/login" replace />;
  }
  return children;
};

export default RoleProtectedRoute;