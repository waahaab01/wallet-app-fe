import React from "react";
import "../Style/market.css";
import bitcoin from "../../assets/bitcoin1.png"
import ethereum2 from "../../assets/ethereum2.png"
import frame1 from "../../assets/Frame1.png"
import frame2 from "../../assets/Frame2.png"
import iconcrypto from "../../assets/iconcrypto1.png"

const marketData = [
  {
    name: "BTC/USDT",
    volume: "1.2B",
    price: "$42.850",
    change: "+8,24%",
    changeType: "up",
    bg: "#fefac9",
    img: bitcoin,
  },
  {
    name: "ETH/USDT",
    volume: "890M",
    price: "$2.840",
    change: "+8,24%",
    changeType: "up",
    bg: "#e4fcdc",
    img: ethereum2,
  },
  {
    name: "ADA/USDT",
    volume: "445M",
    price: "$1.24",
    change: "-6,13%",
    changeType: "down",
    bg: "#fdeceb",
    img: frame1,
  },
  {
    name: "SOL/USDT",
    volume: "234M",
    price: "$98.5",
    change: "+8,24%",
    changeType: "up",
    bg: "#e8fbfb",
    img: frame2,
  },
  {
    name: "MONA/USDT",
    volume: "1.2B",
    price: "$6.78",
    change: "+8,24%",
    changeType: "up",
    bg: "#f4f2fa",
    img: iconcrypto,
  },
];

const MarketOverview = () => {
  return (
    <div className="market-wrapperFirst">
      <h2 className="market-titleFirst">Market Overview</h2>
      {marketData.map((coin, index) => (
        <div key={index} className="coin-cardFirst" style={{ backgroundColor: coin.bg }}>
          <div className="leftFirst">
            <div className="coin-iconFirst">
              <img src={coin.img} alt={coin.name} />
            </div>
            <div className="coin-detailsFirst">
              <div className="coin-nameFirst">{coin.name}</div>
              <div className="coin-volumeFirst">Vol: {coin.volume}</div>
            </div>
          </div>
          <div className="rightFirst">
            <div className="coin-priceFirst">{coin.price}</div>
            <div className={`coin-changeFirst ${coin.changeType}`}>
              <span className="arrowFirst">
                {coin.changeType === "up" ? "🟢" : "🔴"}
              </span>
              {coin.change}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MarketOverview;
