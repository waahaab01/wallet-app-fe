import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Dashbord from './Pages/Dashbord'
import Signup from './Component/Auth/Signup'
import Login from './Component/Auth/Login'
import Authentication from './Component/Auth/Authentication'
import Walletdashboard from './Pages/Walletdashboard'
import ProtectedRoute from './Component/Auth/ProtectedRoute'
import ForgotPassword from './Component/Auth/ForgotPassword'
import VerifyOTP from './Component/Auth/VerifyOTP'
import ResetPassword from './Component/Auth/ResetPassword'

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/authentication" element={
        // <ProtectedRoute>
          <Authentication />
        // </ProtectedRoute>
      } />
      <Route path="/wallet" element={
        // <ProtectedRoute>
          <Walletdashboard />
        // </ProtectedRoute>
      } />
      <Route path="/dashboard" element={
        <ProtectedRoute>
          <Dashbord />
        </ProtectedRoute>
      } />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/verify-otp" element={<VerifyOTP />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route path="/" element={<Login />} />
      <Route path="*" element={<Login />} />
    </Routes>
  )
}

export default App
