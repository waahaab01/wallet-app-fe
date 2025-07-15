import React, { useState } from 'react';
import './NewsCards.css';
import { useNavigate } from 'react-router-dom';
import vector2 from '../../assets/image.png';
import image1 from "../../assets/image1.png"

const newsData = [
  {
    date: '9 April, 2025',
    title: 'Ethereum 2.0 Staking Rewards Increase',
    description: 'Staking rewards for Ethereum 2.0 have reached an all-time high, drawing in more validators.',
    tags: ['Ethereum', 'Staking'],
    image: vector2,
  },
  {
    date: '8 April, 2025',
    title: 'DeFi TVL Reaches All-Time High',
    description: 'Total Value Locked in DeFi protocols surges, indicating bullish sentiment.',
    tags: ['DeFi', 'TVL'],
    image: vector2,
  },
  {
    date: '9 April, 2025',
    title: 'Ethereum 2.0 Staking Rewards Increase',
    description: 'Staking rewards for Ethereum 2.0 have reached an all-time high, drawing in more validators.',
    tags: ['Ethereum', 'Staking'],
    image: image1,
  },
  {
    date: '8 April, 2025',
    title: 'DeFi TVL Reaches All-Time High',
    description: 'Total Value Locked in DeFi protocols surges, indicating bullish sentiment.',
    tags: ['DeFi', 'TVL'],
    image: image1,
  },
  {
    date: '9 April, 2025',
    title: 'Ethereum 2.0 Staking Rewards Increase',
    description: 'Staking rewards for Ethereum 2.0 have reached an all-time high, drawing in more validators.',
    tags: ['Ethereum', 'Staking'],
    image: vector2,
  },
  {
    date: '8 April, 2025',
    title: 'DeFi TVL Reaches All-Time High',
    description: 'Total Value Locked in DeFi protocols surges, indicating bullish sentiment.',
    tags: ['DeFi', 'TVL'],
    image: vector2,
  },
  {
    date: '9 April, 2025',
    title: 'Ethereum 2.0 Staking Rewards Increase',
    description: 'Staking rewards for Ethereum 2.0 have reached an all-time high, drawing in more validators.',
    tags: ['Ethereum', 'Staking'],
    image: vector2,
  },
  {
    date: '8 April, 2025',
    title: 'DeFi TVL Reaches All-Time High',
    description: 'Total Value Locked in DeFi protocols surges, indicating bullish sentiment.',
    tags: ['DeFi', 'TVL'],
    image: vector2,
  },
  {
    date: '9 April, 2025',
    title: 'Ethereum 2.0 Staking Rewards Increase',
    description: 'Staking rewards for Ethereum 2.0 have reached an all-time high, drawing in more validators.',
    tags: ['Ethereum', 'Staking'],
    image: image1,
  },
  {
    date: '8 April, 2025',
    title: 'DeFi TVL Reaches All-Time High',
    description: 'Total Value Locked in DeFi protocols surges, indicating bullish sentiment.',
    tags: ['DeFi', 'TVL'],
    image: image1,
  },
  {
    date: '9 April, 2025',
    title: 'Ethereum 2.0 Staking Rewards Increase',
    description: 'Staking rewards for Ethereum 2.0 have reached an all-time high, drawing in more validators.',
    tags: ['Ethereum', 'Staking'],
    image: image1,
  },
  {
    date: '8 April, 2025',
    title: 'DeFi TVL Reaches All-Time High',
    description: 'Total Value Locked in DeFi protocols surges, indicating bullish sentiment.',
    tags: ['DeFi', 'TVL'],
    image: image1,
  },
  // Add more news objects as needed
];

const pageSize = 6;

const NewsCards = () => {
  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(newsData.length / pageSize);
  const paginatedData = newsData.slice((page - 1) * pageSize, page * pageSize);
  const navigate = useNavigate();

  return (
    <div className="news-cards-section">
      <h2 className="news-cards-headline">GENERAL NEWS</h2>
      <div className="news-cards-grid">
        {paginatedData.map((news, idx) => (
          <div
            className="news-card"
            key={idx + (page - 1) * pageSize}
            onClick={() => navigate(`/crypto-news/${idx + (page - 1) * pageSize}`)}
            style={{ cursor: 'pointer' }}
          >
            <img src={news.image} alt="news" className="news-card-img" />
            <div className="news-card-info">
              <div className="news-card-date">{news.date}</div>
              <div className="news-card-title">{news.title}</div>
              <div className="news-card-desc">{news.description}</div>
              <div className="news-card-tags">
                {news.tags.map(tag => (
                  <span className="news-card-tag" key={tag}>{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="news-cards-pagination">
        <button onClick={() => setPage(page - 1)} disabled={page === 1}>Previous</button>
        {[...Array(totalPages)].map((_, idx) => (
          <button
            key={idx}
            className={page === idx + 1 ? 'active' : ''}
            onClick={() => setPage(idx + 1)}
          >
            {idx + 1}
          </button>
        ))}
        <button onClick={() => setPage(page + 1)} disabled={page === totalPages}>Next</button>
      </div>
    </div>
  );
};

export default NewsCards; 