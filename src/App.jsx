import React from "react";
import {
  Routes,
  Route,
  Navigate,
  BrowserRouter as Router,
} from "react-router-dom";
import RoleProtectedRoute from "./Component/Auth/RoleProtectedRoute";
import Signup from "./Component/Auth/Signup";
import Login from "./Component/Auth/Login";
import Authentication from "./Component/Auth/Authentication";
import ForgotPassword from "./Component/Auth/ForgotPassword";
import VerifyOTP from "./Component/Auth/VerifyOTP";
import ResetPassword from "./Component/Auth/ResetPassword";
import TopUpLogin from "./Component/Auth/TopUpLogin";
import AdminDashboard from "./Pages/AdminDashboard";
import DashboardLayout from "./Component/Dashbord/DashboardLayout";
import Dashbord from "./Pages/Dashbord";
import Walletdashboard from "./Pages/Walletdashboard";
import ActivityLog from "./Pages/ActivityLog";
import FAQComponent from "./Pages/FaqPage";
import NftPage from "./Pages/NftPage";
import ProfileSettings from "./Pages/ProfileSettings";
import AccountSecurity from "./Pages/AccountSecurity";
import LinkWallet from "./Pages/LinkWallet";
import Notifications from "./Pages/Notifications";
import SettingsSidebar from "./Component/SettingsSidebar";
import PaymentMethods from "./Pages/PaymentMethods";
import CryptoNews from "./Pages/CryptoNews";
import NewsDetail from "./Pages/NewsDetail";
import MarketplacePage from "./Pages/MarketplacePage";
import ForecastPage from "./Pages/forecast/ForecastPage";

function App() {
  return (
    <Router>
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
          {/* <Route path="orders" element={<Dashbord />} /> Temporary - create OrdersPage */}
          <Route path="crypto-news" element={<CryptoNews />} />
          <Route path="crypto-news/:id" element={<NewsDetail />} />
          <Route path="inbox" element={<FAQComponent />} />
          <Route path="faqs" element={<FAQComponent />} />
          <Route path="nft-market-place" element={<NftPage />} />
          <Route path="marketplace" element={<MarketplacePage />} />
          <Route path="forecast" element={<ForecastPage />} />
          
          {/* Settings routes nested under dashboard */}
          <Route path="settings" element={<SettingsSidebar />}>
            <Route index element={<ProfileSettings />} />
            <Route path="profile" element={<ProfileSettings />} />
            <Route path="security" element={<AccountSecurity />} />
            <Route path="kyc" element={<LinkWallet />} />
            <Route path="notifications" element={<Notifications />} />
            <Route path="payments" element={<PaymentMethods />} />
          </Route>
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
    </Router>
  );
}

export default App;
