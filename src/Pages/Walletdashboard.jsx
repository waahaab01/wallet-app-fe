import React, { useState } from "react";
import "../Component/Style/walletstyle/walletdash.css";
// import Navwallet from "../Component/Walletdashboard/Navwallet";
import CoinsOverview from "../Component/Walletdashboard/CoinOverview";
import Walletactivity from "../Component/Walletdashboard/Walletactivity";
import Linkedwallet from "../Component/Walletdashboard/Linkedwallet";
import Buttons from "../Component/Walletdashboard/walletbutton";
import WalletCard from "../Component/Walletdashboard/Walletcard";
// import Walletsidebar from "../Component/Walletdashboard/Walletsidebar";
import LinkWalletModal from "../Component/Walletdashboard/LinkWalletModal";

function Walletdashboard() {
    const [showLinkWallet, setShowLinkWallet] = useState(false);

  return (
    <>
      <div className="main-wall">
        {/* <Navwallet /> */}
        <div className="mainwall-cont">
          {/* <div className="wall-left">
            <Walletsidebar/>
          </div> */}
          <div className="wall-right">
            <div className="btn-cont">
              <WalletCard />
              <Buttons />
            </div>
            <div className="slider-cont">
              <div className="slider-hd">
                <h1>LINKED WALLET</h1>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <button onClick={() => setShowLinkWallet(true)} className="wal-btn">LINK WALLET</button>
                  <button
                    style={{
                      background: '#fff',
                      border: '2px solid #222',
                      borderRadius: '50%',
                      width: '38px',
                      height: '38px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '22px',
                      cursor: 'pointer',
                      boxShadow: '2px 2px 0 #222',
                    }}
                    title="Refresh"
                    onClick={() => window.location.reload()}
                  >
                    &#x21bb;
                  </button>
                </div>
              </div>
                    <LinkWalletModal open={showLinkWallet} onClose={() => setShowLinkWallet(false)} />

              <Linkedwallet />
            </div>
            <div className="widget-hd">
              <h1>WIDGETS</h1>
            </div>
            <div className="widget-cont">
              <CoinsOverview />
              <Walletactivity />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Walletdashboard;
