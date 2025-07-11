import React from "react";
import { NavLink } from "react-router-dom";

const SettingsSidebar = () => {
  return (
    <aside className="settings-sidebar">
      <nav>
        <ul>
          <li>
            <NavLink to="/settings/profile" activeClassName="active">
              {/* Icon Placeholder */}
              <span role="img" aria-label="profile">👤</span> My Profile
            </NavLink>
          </li>
          <li>
            <NavLink to="/settings/security" activeClassName="active">
              <span role="img" aria-label="security">🔒</span> Account Security
            </NavLink>
          </li>
          <li>
            <NavLink to="/settings/kyc" activeClassName="active">
              <span role="img" aria-label="kyc">📝</span> Link Wallet
            </NavLink>
          </li>
          <li>
            <NavLink to="/settings/notifications" activeClassName="active">
              <span role="img" aria-label="notifications">🔔</span> Notifications
            </NavLink>
          </li>
          <li>
            <NavLink to="/settings/payments" activeClassName="active">
              <span role="img" aria-label="payments">💳</span> Payment Options
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default SettingsSidebar; 