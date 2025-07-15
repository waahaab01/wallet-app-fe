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
import navLogo6 from "../../assets/Nav Item 7.png";
import navLogo7 from "../../assets/Nav Item 8.png";
import navLogo8 from "../../assets/Nav Item 10.png";
import navLogo9 from "../../assets/Nav Item 11.png";
import title1 from "../../assets/logo assets/title 1.png";
import title2 from "../../assets/logo assets/title2.png";
import title3 from "../../assets/logo assets/title3.png";
import title4 from "../../assets/logo assets/title4.png";
import title5 from "../../assets/logo assets/title5.png";
import title6 from "../../assets/logo assets/title6.png";
import navitemCryptoNews from '../../assets/nft.png'; // Use a relevant icon for Crypto News
const pageConfigs = [
  { name: "Dashboard", color: "#BFF6EE", path: "/" }, // index route
  { name: "Wallet", color: "#EADAFC", path: "wallet" },
  { name: "Activity", color: "#ebffd1", path: "activity-log" },
  { name: "Setting", color: "#fff0f7", path: "marketplace" },
  { name: "News", color: "#fffbd3", path: "crypto-news" },
  // { name: "Crypto News", color: "#ffe6db", path: "crypto-news" }, // New Crypto News item
  { name: "NFT", color: "#cbe8ff", path: "nft-market-place" },
  { name: "Profile", color: "#f0f0ff", path: "nft-market-place" },
  { name: "Support", color: "#fff0f0", path: "/settings/profile" },
  { name: "FAQs", color: "#fee1f4", path: "faqs" }, // keep as is for logout logic
];

// Navbar logo and title images (separate from sidebar icons)
const navbarLogos = [
  navLogo1,
  navLogo2,
  navLogo3,
  navLogo4,
  navLogo5,
  navLogo6,
  navLogo7,
  navLogo8,
  navLogo9,
  navitemCryptoNews, // Add Crypto News icon to navbarLogos
];
const navbarTitles = [
  frame,
  title1,
  title2,
  title3,
  title4,
  title5,
  title6,
  navLogo9,
  navitemCryptoNews, // Add Crypto News title image if needed
];

const DashboardLayout = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();

  // Find the active index based on the current path
  const getActiveIdx = () => {
    const currentPath = location.pathname.toLowerCase();
    return pageConfigs.findIndex(cfg => {
      // Always compare with leading slash
      let cfgPath = cfg.path.startsWith("/") ? cfg.path : "/" + cfg.path;
      return currentPath === cfgPath.toLowerCase();
    });
  };

  const activeIdx = getActiveIdx();
  const bgColor = pageConfigs[activeIdx]?.color || pageConfigs[0].color;

  const handleSidebarClick = (idx, name, color, path) => {
    if (path === "/logout") {
      localStorage.removeItem("authToken");
      navigate("/login");
    } else if (path === "/") {
      navigate("/");
    } else if (path) {
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
