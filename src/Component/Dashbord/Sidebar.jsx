import React, { useState } from "react";
import "../Style/sidebar.css";
import item1 from "../../assets/sidebar/item1.png"
import item1hover from "../../assets/sidebar/item1hover.png"
import item1active from "../../assets/sidebar/item1active.png"
import item2 from "../../assets/sidebar/item2.png"
import item2hover from "../../assets/sidebar/item2hover.png"
import item2active from "../../assets/sidebar/item2actvie.png"
import item3 from "../../assets/sidebar/item3.png"
import item3hover from "../../assets/sidebar/item3hover.png"
import item3active from "../../assets/sidebar/item3active.png"
import item4 from "../../assets/sidebar/item4.png"
import item4hover from "../../assets/sidebar/item4hover.png"
import item4active from "../../assets/sidebar/item4active.png"
import item5 from "../../assets/sidebar/item5.png"
import item5hover from "../../assets/sidebar/item5hover.png"
import item5active from "../../assets/sidebar/item5active.png"
import item6 from "../../assets/sidebar/item6.png"
import item6hover from "../../assets/sidebar/item6hover.png"
import item6active from "../../assets/sidebar/item6active.png"
import item7 from "../../assets/sidebar/item7.png"
import item7hover from "../../assets/sidebar/item7hover.png"
import item7active from "../../assets/sidebar/item7active.png"
import item8 from "../../assets/sidebar/item8.png"
import item8hover from "../../assets/sidebar/item8hover.png"
import item8active from "../../assets/sidebar/item8active.png"
import item9 from "../../assets/sidebar/item9.png"
import item9hover from "../../assets/sidebar/item9hover.png"
import item9active from "../../assets/sidebar/item9active.png"
import item10 from "../../assets/sidebar/item10.png"
import item10hover from "../../assets/sidebar/item10hover.png"
import item10active from "../../assets/sidebar/item10active.png"
import item11 from "../../assets/sidebar/item11.png"
import item11hover from "../../assets/sidebar/item11hover.png"
import item11active from "../../assets/sidebar/item11active.png"

const navItems = [
  {
    default: item1,
    hover: item1hover,
    active: item1active,
    label: 'Dashboard'
  },
  {
    default: item2,
    hover: item2hover,
    active: item2active,
    label: 'Wallet'
  },
  {
    default: item3,
    hover: item3hover,
    active: item3active,
    label: 'Activity'
  },
  {
    default: item4,
    hover: item4hover,
    active: item4active,
    label: 'Orders'
  },
  {
    default: item5,
    hover: item5hover,
    active: item5active,
    label: 'News'
  },
  {
    default: item6,
    hover: item6hover,
    active: item6active,
    label: 'Settings'
  },
  {
    default: item7,
    hover: item7hover,
    active: item7active,
    label: 'Profile'
  },
  {
    default: item8,
    hover: item8hover,
    active: item8active,
    label: 'Support'
  },
  // {
  //   default: item9,
  //   hover: item9hover,
  //   active: item9active,
  //   label: 'FAQs'
  // },
  {
    default: item11,
    hover: item11hover,
    active: item11active,
    label: 'Forecast'
  },
  {
    default: item10,
    hover: item10hover,
    active: item10active,
    label: 'Marketplace'
  },

];

const Sidebar = ({ activeIdx, onItemClick, pageConfigs }) => {
  const [hoveredIdx, setHoveredIdx] = useState(null);

  return (
    <div className="sidebar-db">
      <div className="sidebar-icons">
        {navItems.map((item, index) => (
          <div
            className={`icon-wrapper${activeIdx === index ? ' active' : ''}`}
            key={index}
            tabIndex={0}
            onClick={() => {
              console.log('Sidebar item path:', pageConfigs[index]?.path);
              onItemClick(index, pageConfigs[index]?.name, pageConfigs[index]?.color, pageConfigs[index]?.path);
            }}
            onMouseEnter={() => setHoveredIdx(index)}
            onMouseLeave={() => setHoveredIdx(null)}
          >
            <img 
              src={
                activeIdx === index ? item.active :
                hoveredIdx === index ? item.hover :
                item.default
              } 
              alt={item.label}
              className={index === 0 ? "top-img" : "icon-img"}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
