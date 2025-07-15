import React from "react";
import "../Style/sidebar.css";
import navitem from '../../assets/NavItem6.png'
import navitem1 from '../../assets/Nav Item 1.png'
import navitem2 from '../../assets/Nav Item 2.png'
import navitem3 from '../../assets/Nav Item 4.png'
import navitem4 from '../../assets/Nav Item 5.png'
import navitem5 from '../../assets/Nav Item 7.png'
import navitem6 from '../../assets/Nav Item 8.png'
import navitem7 from '../../assets/Nav Item 10.png'
import navitem8 from '../../assets/Nav Item 11.png'
import navitem9 from '../../assets/Nav Item 6.png'
import navitemCryptoNews from '../../assets/Nav Item 1.png'; // Use the same icon as in DashboardLayout

// All sidebar icons in order, including the top icon
const iconList = [
  navitem, // top icon (Dashboard)
  navitem1, // Wallet
  navitem2, // Activity
  navitem3, // Orders
  navitem4, // News
 // Crypto News
  navitem5, // Settings
  navitem6, // Profile
  navitem7, // Support
  navitemCryptoNews, // (extra, if needed)
  // navitem9  // (extra, if needed)
];

const Sidebar = ({ activeIdx, onItemClick, pageConfigs }) => {
  return (
    <div className="sidebar-db">
      {/* Top icon is now part of iconList, so render all icons in one map */}
      <div className="sidebar-icons">
        {iconList.map((src, index) => (
          <div
            className={`icon-wrapper${activeIdx === index ? ' active' : ''}`}
            key={index}
            tabIndex={0}
            onClick={() => {
              console.log('Sidebar item path:', pageConfigs[index]?.path);
              onItemClick(index, pageConfigs[index]?.name, pageConfigs[index]?.color, pageConfigs[index]?.path);
            }}
            style={{ cursor: 'pointer', transition: 'transform 0.18s' }}
            onMouseOver={e => e.currentTarget.style.transform = 'scale(1.08)'}
            onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
          >
            <img src={src} alt={`icon-${index}`} className={index === 0 ? "top-img" : "icon-img"} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
