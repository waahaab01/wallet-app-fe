import React, { useState } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import Sidebar from "./sidebar";
import Navbar from "./Navbar";
import "../Style/DashboardLayout.css";
import frame from "../../assets/Frame.png";
import navLogo1 from "../../assets/Logo.png";
import navLogo2 from "../../assets/logo assets/purple.png";
import navLogo3 from "../../assets/logo assets/logo.png";
import navLogo4 from "../../assets/logo assets/pink.png";
import navLogo5 from "../../assets/Nav Item 5.png";
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
const pageConfigs = [
  { name: "Dashboard", color: "#BFF6EE", path: "/" }, // index route
  { name: "Wallet", color: "#e6defe", path: "wallet" },
  { name: "Activity", color: "#f0fff7", path: "activity-log" },
  { name: "Orders", color: "#fff0f7", path: "orders" },
  { name: "News", color: "#f0f7ff", path: "news" },
  { name: "Settings", color: "#f7fff0", path: "settings" },
  { name: "Profile", color: "#f0f0ff", path: "profile" },
  { name: "Support", color: "#fff0f0", path: "support" },
  { name: "Logout", color: "#fffbe6", path: "/logout" }, // keep as is for logout logic
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
];

const DashboardLayout = ({ children }) => {
  const [activeIdx, setActiveIdx] = useState(0);
  const [bgColor, setBgColor] = useState(pageConfigs[0].color);
  const navigate = useNavigate();

  const handleSidebarClick = (idx, name, color, path) => {
    setActiveIdx(idx);
    setBgColor(color);
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
        />
        <div className="dashboard-layout-content">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
