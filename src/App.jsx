import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import RoleProtectedRoute from './Component/Auth/RoleProtectedRoute';
import Signup from './Component/Auth/Signup'
import Login from './Component/Auth/Login'
import Authentication from './Component/Auth/Authentication'
import ForgotPassword from './Component/Auth/ForgotPassword'
import VerifyOTP from './Component/Auth/VerifyOTP'
import ResetPassword from './Component/Auth/ResetPassword'
import TopUpLogin from './Component/Auth/TopUpLogin'
import AdminDashboard from './Pages/AdminDashboard';
import DashboardLayout from './Component/Dashbord/DashboardLayout';
import Dashbord from './Pages/Dashbord';
import Walletdashboard from './Pages/Walletdashboard';
import ActivityLog from './Pages/ActivityLog';

function App() {
  return (
    <Routes>
      {/* Public Auth Routes */}
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/authentication" element={<Authentication />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/verify-otp" element={<VerifyOTP />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route path="/topup-login" element={<TopUpLogin />} />

      {/* User dashboard layout with nested routes */}
      <Route
        path="/"
        element={
          <RoleProtectedRoute allowedRoles={["user"]}>
            <DashboardLayout />
          </RoleProtectedRoute>
        }
      >
        <Route index element={<Dashbord />} />
        <Route path="wallet" element={<Walletdashboard />} />
        <Route path="activity-log" element={<ActivityLog />} />
        {/* Add more nested routes as needed */}
      </Route>

      {/* Admin-only routes */}
      <Route
        path="/admin"
        element={
          <RoleProtectedRoute allowedRoles={["admin"]}>
            <AdminDashboard />
          </RoleProtectedRoute>
        }
      />
      {/* Catch-all: if no role or not allowed, redirect to login */}
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  )
}

export default App
