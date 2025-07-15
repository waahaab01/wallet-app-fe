import React from 'react';
import Marketplace from '../Component/marketplace/Marketplace';
import RecentTradesAndExchange from '../Component/marketplace/RecentTradesAndExchange';
import CryptoTrendChart from '../Component/marketplace/CryptoTrendChart';
import CryptoCoinsTable from '../Component/marketplace/CryptoCoinsTable';

const MarketplacePage = () => {
  return (
    <div className="marketplace-page-wrapper">
      <Marketplace />
      <RecentTradesAndExchange />
      <CryptoTrendChart />
      <CryptoCoinsTable />
    </div>
  );
};

export default MarketplacePage; 