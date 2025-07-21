import React from "react";
import { useNavigate, Outlet, useLocation } from "react-router-dom";
import Sidebar from "./sidebar";
import Navbar from "./Navbar";
import "../Style/DashboardLayout.css";
import frame from "../../assets/Frame.png";
import navLogo1 from "../../assets/Logo.png";
import navLogo2 from "../../assets/logo assets/purple.png";
import navLogo3 from "../../assets/logo assets/logo.png";
import navLogo4 from "../../assets/logo assets/pink.png";
import navLogo5 from "../../assets/logo assets/yellow.png";
import navLogo6 from "../../assets/logo assets/blue.png";
import navLogo7 from "../../assets/logo assets/red.png";
import navLogo8 from "../../assets/Nav Item 10.png";
import navLogo9 from "../../assets/logo assets/yellow.png";
import navLogo10 from "../../assets/logo assets/pink.png";
import navLogo11 from "../../assets/logo assets/purple.png";

import title1 from "../../assets/logo assets/title 1.png";
import title2 from "../../assets/logo assets/title2.png";
import title3 from "../../assets/logo assets/title3.png";
import title4 from "../../assets/logo assets/title4.png";
import title5 from "../../assets/logo assets/title5.png";
import title6 from "../../assets/logo assets/title6.png";
import title7 from "../../assets/logo assets/setting-title.png";
import title9 from "../../assets/logo assets/support-title.png";
import title8 from "../../assets/logo assets/inbox-title.png";
const pageConfigs = [
  { name: "Dashboard", color: "#BFF6EE", path: "/" }, 
  { name: "Wallet", color: "#EADAFC", path: "wallet" },
  { name: "Activity", color: "#ebffd1", path: "activity-log" },
  { name: "News", color: "#fee1f4", path: "marketplace" },
  { name: "Settings", color: "#fffbd3", path: "forecast" },
  { name: "Profile", color: "#cbe8ff", path: "nft-market-place" },
  { name: "Support", color: "#fff0f0", path: "crypto-news" },
  { name: "Inbox", color: "#e6defe", path: "inbox" },
  { name: "Settings", color: "#fffbd3", path: "settings" },
  { name: "FAQS", color: "#fee1f4", path: "faqs" },
];
const navbarLogos = [
  navLogo1,
  navLogo2,
  navLogo3,
  navLogo4,
  navLogo5,
  navLogo6,
  navLogo7,
  navLogo11,
  navLogo9,
  navLogo10// Add Crypto News icon to navbarLogos
];
const navbarTitles = [
  frame,
  title1,
  title2,
  title3,
  title4,
  title5,
  title6,
  title7,
  title8,
  title9,
];

const DashboardLayout = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const getActiveIdx = () => {
    const currentPath = location.pathname;
    console.log('Current path:', currentPath);
    
    // Check for exact matches first
    for (let i = 0; i < pageConfigs.length; i++) {
      const cfg = pageConfigs[i];
      let cfgPath = cfg.path.startsWith("/") ? cfg.path : "/" + cfg.path;
      
      if (currentPath === cfgPath) {
        console.log('Exact match found at index:', i, 'for path:', cfgPath);
        return i;
      }
    }
    
    // Check for partial matches (for nested routes)
    for (let i = 0; i < pageConfigs.length; i++) {
      const cfg = pageConfigs[i];
      let cfgPath = cfg.path.startsWith("/") ? cfg.path : "/" + cfg.path;
      
      if (currentPath.startsWith(cfgPath) && cfgPath !== "/") {
        console.log('Partial match found at index:', i, 'for path:', cfgPath);
        return i;
      }
    }
    
    // Default to dashboard (index 0)
    console.log('No match found, defaulting to dashboard');
    return 0;
  };

  const activeIdx = getActiveIdx();
  const bgColor = pageConfigs[activeIdx]?.color || pageConfigs[0].color;

  const handleSidebarClick = (idx, name, color, path) => {
    console.log('Sidebar click:', { idx, name, path });
    
    if (path === "/logout") {
      localStorage.removeItem("authToken");
      navigate("/login");
    } else if (path === "/") {
      navigate("/");
    } else if (path) {
      // Navigate to the path
      navigate(path);
    }
  };

  return (
    <div className="dashboard-layout-root" style={{ background: bgColor }}>
      <Sidebar
        activeIdx={activeIdx}
        onItemClick={handleSidebarClick}
        pageConfigs={pageConfigs}
      />
      <div className="dashboard-layout-main">
        <Navbar
          logo={navbarLogos[activeIdx]}
          titleImg={navbarTitles[activeIdx]}
          bgColor={bgColor}
        />
        <div className="dashboard-layout-content">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
