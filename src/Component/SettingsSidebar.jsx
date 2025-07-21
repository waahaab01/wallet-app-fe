import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import "./Style/SettingsSidebar.css";

const SettingsSidebar = () => {
  return (
    <div className="settings-layout">
      <aside className="settings-sidebar">
        <nav>
          <ul>
            <li>
              <NavLink to="/settings/profile" className={({ isActive }) => isActive ? "active" : ""}>
                {/* Icon Placeholder */}
                <span role="img" aria-label="profile">👤</span> My Profile
              </NavLink>
            </li>
            <li>
              <NavLink to="/settings/security" className={({ isActive }) => isActive ? "active" : ""}>
                <span role="img" aria-label="security">🔒</span> Account Security
              </NavLink>
            </li>
            <li>
              <NavLink to="/settings/kyc" className={({ isActive }) => isActive ? "active" : ""}>
                <span role="img" aria-label="kyc">📝</span> Link Wallet
              </NavLink>
            </li>
            <li>
              <NavLink to="/settings/notifications" className={({ isActive }) => isActive ? "active" : ""}>
                <span role="img" aria-label="notifications">🔔</span> Notifications
              </NavLink>
            </li>
            <li>
              <NavLink to="/settings/payments" className={({ isActive }) => isActive ? "active" : ""}>
                <span role="img" aria-label="payments">💳</span> Payment Options
              </NavLink>
            </li>
          </ul>
        </nav>
      </aside>
      <div className="settings-content">
        <Outlet />
      </div>
    </div>
  );
};

export default SettingsSidebar; 