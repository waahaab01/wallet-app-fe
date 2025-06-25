import React from "react";
import "../Style/topgainers.css";

const gainerData = [
  {
    rank: 1,
    name: "DOGE/USDT",
    volume: "2.1B",
    price: "$0.0845",
    change: "+8,24%",
    bg: "#fcebf6",
    badgeColor: "#f686d7",
  },
  {
    rank: 2,
    name: "MATIC/USDT",
    volume: "890M",
    price: "$0.0845",
    change: "+8,24%",
    bg: "#f0fbe7",
    badgeColor: "#b3ec89",
  },
  {
    rank: 3,
    name: "LINK/USDT",
    volume: "445M",
    price: "$0.0845",
    change: "+8,24%",
    bg: "#fdeceb",
    badgeColor: "#ff876c",
  },
  {
    rank: 4,
    name: "ADA/USDT",
    volume: "234M",
    price: "$0.0845",
    change: "+8,24%",
    bg: "#e8fbfb",
    badgeColor: "#74efff",
  },
  {
    rank: 5,
    name: "SOL/USDT",
    volume: "1.2B",
    price: "$0.0845",
    change: "+8,24%",
    bg: "#f4f2fa",
    badgeColor: "#c79fff",
  },
];

const TopGainers = () => {
  return (
    <div className="gainer-wrapperF">
      <h2 className="gainer-titleF">Top Gainers (24h)</h2>
      {gainerData.map((coin, index) => (
        <div className="gainer-cardF" key={index} style={{ backgroundColor: coin.bg }}>
          <div className="leftF">
            <div className="rank-badgeF" style={{ backgroundColor: coin.badgeColor }}>
              {coin.rank}
            </div>
            <div className="gainer-infoF">
              <div className="gainer-nameF">{coin.name}</div>
              <div className="gainer-volF">Vol: {coin.volume}</div>
            </div>
          </div>
          <div className="rightF">
            <div className="gainer-priceF">{coin.price}</div>
            <div className="gainer-changeF">
              <span className="arrowF">🟢</span>
              {coin.change}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TopGainers;
