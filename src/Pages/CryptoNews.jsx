import React from 'react';
import Slider from '../Component/CryptoNews/Slider';
import NewsCards from '../Component/CryptoNews/NewsCards';

const CryptoNews = () => {
  return (
    <div className="crypto-news-page">
      <Slider />
      <NewsCards />
    </div>
  );
};

export default CryptoNews; 