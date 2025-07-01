import React from "react";
import { useNavigate } from "react-router-dom";
import "../Style/sidebar.css";
import navitem from "../../assets/NavItem6.png";
import navitem1 from "../../assets/Nav Item 1.png";
import navitem2 from "../../assets/Nav Item 2.png";
import navitem3 from "../../assets/Nav Item 4.png";
import navitem4 from "../../assets/Nav Item 5.png";
import navitem5 from "../../assets/Nav Item 7.png";
import navitem6 from "../../assets/Nav Item 8.png";
import navitem7 from "../../assets/Nav Item 10.png";
import navitem8 from "../../assets/Nav Item 11.png";
import navitem9 from "../../assets/Nav Item 6.png";

const Walletsidebar = () => {
  const navigate = useNavigate();
  const menuItems = [
    navitem1,
    navitem2,
    navitem3,
    navitem4,
    navitem5,
    navitem6,
    navitem7,
    navitem8,
    navitem9,
  ];

  return (
    <div className="sidebar">
      <div
        className="sidebar-top"
        onClick={() => navigate("/dashboard")}
        style={{ cursor: "pointer" }}
      >
        <img src={navitem} alt="Top Icon" className="top-img" />
      </div>

      <div className="sidebar-icons">
        {menuItems.map((src, index) => (
          <div
            className="icon-wrapper"
            key={index}
            onClick={() => {
              if (index === 0) {
                console.log("Walletsidebar navitem1 clicked");
                navigate("/wallet");
              }
            }}
            style={{ cursor: index === 0 ? "pointer" : "default" }}
          >
            <img src={src} alt={`icon-${index}`} className="icon-img" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Walletsidebar;
