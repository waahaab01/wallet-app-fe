import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './NewsDetail.css';
import mainImg from '../assets/image1.png';
import subImg from '../assets/image.png';

const dummyNews = {
  id: '1',
  date: '10 April, 2025',
  title: 'Bitcoin ETF Approval Sparks Rally',
  tags: ['Crypto', 'Bitcoin'],
  mainImg,
  intro: `
    Etiam bibendum elit, quis egestas ligula eu dictum, amet. Vestibulum suspendisse mattis eleifend dictumst porttitor habitasse felis. Bitcoin cursus sagittis, felis. Tincidunt aliquam convallis mattis. Pellentesque posuere volutpat arcu, varius erat. Nulla facilisi tristique, feugiat habitant.`,
  subImg,
  subImgCaption: 'Image courtesy: Getty/Reuters',
  quote: 'The approval of a Bitcoin Spot ETF is more than a regulatory milestone, it’s a greenlight for mainstream finance to finally enter the crypto space. The market’s reaction says it all.',
  quoteAuthor: 'Dani Rivas, Reporter',
  content: `Duis arcu enim tortor, erat eu dictum, eleifend euismod, malesuada odio velit vitae, euismod. Etiam bibendum elit, quis egestas ligula eu dictum, amet. Vestibulum suspendisse mattis eleifend dictumst porttitor habitasse felis. Bitcoin cursus sagittis, felis. Tincidunt aliquam convallis mattis. Pellentesque posuere volutpat arcu, varius erat. Nulla facilisi tristique, feugiat habitant. Etiam bibendum elit, quis egestas ligula eu dictum, amet. Vestibulum suspendisse mattis eleifend dictumst porttitor habitasse felis. Bitcoin cursus sagittis, felis. Tincidunt aliquam convallis mattis. Pellentesque posuere volutpat arcu, varius erat. Nulla facilisi tristique, feugiat habitant.`
};

const NewsDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  // In real app, fetch news by id
  const news = dummyNews;

  return (
    <div className="news-detail-bg">
      <button className="back-btn" onClick={() => navigate(-1)}>&larr; Go Back</button>
      <div className="news-detail-date">{news.date}</div>
      <h1 className="news-detail-title">{news.title}</h1>
      <div className="news-detail-tags">
        {news.tags.map(tag => (
          <span className="news-detail-tag" key={tag}>{tag}</span>
        ))}
      </div>
      <img src={news.mainImg} alt="main" className="news-detail-main-img" />
      <div className="news-detail-section">
        <h2 className="news-detail-section-title">Introduction</h2>
        <p className="news-detail-intro">{news.intro}</p>
        <img src={news.subImg} alt="sub" className="news-detail-sub-img" />
        <div className="news-detail-img-caption">{news.subImgCaption}</div>
        <blockquote className="news-detail-quote">
          “{news.quote}”
          <div className="news-detail-quote-author">— {news.quoteAuthor}</div>
        </blockquote>
        <p className="news-detail-content">{news.content}</p>
      </div>
    </div>
  );
};

export default NewsDetail; 