import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import RoleProtectedRoute from './Component/Auth/RoleProtectedRoute';
import Dashbord from './Pages/Dashbord'
import Signup from './Component/Auth/Signup'
import Login from './Component/Auth/Login'
import Authentication from './Component/Auth/Authentication'
import Walletdashboard from './Pages/Walletdashboard'
import ForgotPassword from './Component/Auth/ForgotPassword'
import VerifyOTP from './Component/Auth/VerifyOTP'
import ResetPassword from './Component/Auth/ResetPassword'
import TopUpLogin from './Component/Auth/TopUpLogin'
import AdminDashboard from './Pages/AdminDashboard'; // Make sure this exists

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

      {/* User-only routes */}
      <Route
        path="/wallet"
        element={
          <RoleProtectedRoute allowedRoles={["user"]}>
            <Walletdashboard />
          </RoleProtectedRoute>
        }
      />
      <Route
        path="/"
        element={
          <RoleProtectedRoute allowedRoles={["user"]}>
            <Dashbord />
          </RoleProtectedRoute>
        }
      />
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
