import React from 'react';
import '../Style/cryptonews.css';
import image from "../../assets/image.png"
import image1 from "../../assets/image1.png"
import image2 from "../../assets/image2.png"

function  Cryptonews() {
  const articles = [
    {
      id: 1,
      date: '10 April, 2025',
      title: 'Bitcoin ETF Approval Sparks Rally',
      description: 'Major institutional adoption drives BTC to new heights...',
      image: image,
      tags: ['Crypto', 'Bitcoin']
    },
    {
      id: 2,
      date: '10 April, 2025',
      title: 'Ethereum 2.0 Staking Rewards Increase',
      description: 'Network upgrades boost staking yields to 8.5%...',
      image: image1,
      tags: ['Crypto', 'Blockchain']
    },
    {
      id: 3,
      date: '10 April, 2025',
      title: 'DeFi TVL Reaches All-Time High',
      description: 'Total value locked in DeFi protocols surpasses...',
      image: image2,
      tags: ['DeFiPulse', 'Bitcoin']
    }
  ];

  const getTagClass = (tag) => {
    return `tag ${tag.toLowerCase()}`;
  };

  return (
    <div className="appFirst">
      <h1 className="headingFirst">
        Crypto News <span className="info-icon"></span>
      </h1>

      <div className="news-containerFirst">
        {articles.map(article => (
          <div key={article.id} className="news-cardFirst">
            <img src={article.image} alt={article.title} className="news-img" />
            <div className="news-contentFirst">
              <p className="news-dateFirst">{article.date}</p>
              <h2 className="news-titleFirst">
                {article.title} <span className="arrowFirst">↗</span>
              </h2>
              <p className="news-descFirst">{article.description}</p>
              <div className="tagsFirst">
                {article.tags.map((tag, i) => (
                  <span key={i} className={getTagClass(tag)}>{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="button-containerFirst">
        <button className="view-more-btnFirst">VIEW MORE</button>
      </div>
    </div>
  );
}

export default Cryptonews;
