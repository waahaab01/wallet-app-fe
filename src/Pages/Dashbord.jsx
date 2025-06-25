import React from "react";
import "../Component/Style/dashbord.css";
import Navbar from "../Component/Dashbord/Navbar";
import Sidebar from "../Component/Dashbord/sidebar";
import Mywallet from "../Component/Dashbord/mywallet";
import Cryptonews from "../Component/Dashbord/Cryptonews";
import Watchlist from "../Component/Dashbord/Watchlist";
import ActiveOrders from "../Component/Dashbord/Activeorders";
import CryptoExchange from "../Component/Dashbord/Exchange";
import MarketOverview from "../Component/Dashbord/Market";
import TopGainers from "../Component/Dashbord/Topgainers";
import Row from "../Component/Dashbord/Row";
import Cards from "../Component/Dashbord/Cards";

function Dashbord() {
  return (
    <>
      <div className="dash-cont">
        <Navbar />
        <Sidebar />
        <div className="wallet-cont">
          <div className="wallet-div">
            <Mywallet />
            <Cards />
          </div>
        <div className="row-div">
          <Row />
        </div>
        <div className="market-div">
          <TopGainers />
          <MarketOverview />
          <CryptoExchange />
        </div>
        <div className="watchlist-div">
          <Watchlist />
          <ActiveOrders />
        </div>
        <div className="crypto-div">
          <Cryptonews />
        </div>
        </div>
      </div>
    </>
  );
}

export default Dashbord;
