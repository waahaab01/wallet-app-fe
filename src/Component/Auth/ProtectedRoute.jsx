import React from 'react';
import { Navigate } from 'react-router-dom';

// Example: Check if user is authenticated (adjust logic as needed)
const isAuthenticated = () => {
  // You can replace this with your actual authentication logic
  return localStorage.getItem('authToken') !== null;
};

const ProtectedRoute = ({ children }) => {
  if (!isAuthenticated()) {
    // Redirect to login if not authenticated
    return <Navigate to="/login" replace />;
  }
  return children;
};

export default ProtectedRoute;
