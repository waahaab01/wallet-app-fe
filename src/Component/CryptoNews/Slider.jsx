import React, { useState } from 'react';
import './Slider.css';
import vector2 from '../../assets/image.png';
import image1 from "../../assets/image1.png"

const headlines = [
  {
    date: '10 April, 2025',
    title: 'Bitcoin ETF Approval Sparks Rally',
    description: 'The long-awaited approval of the Bitcoin Spot ETF has ignited a surge in market momentum, pushing BTC to new highs. Major institutional players are entering the space, signaling broader ado...',
    tags: ['Crypto', 'Bitcoin'],
    image: vector2,
  },
  {
    date: '10 April, 2025',
    title: 'Bitcoin ETF Approval Sparks Rally',
    description: 'The long-awaited approval of the Bitcoin Spot ETF has ignited a surge in market momentum, pushing BTC to new highs. Major institutional players are entering the space, signaling broader ado...',
    tags: ['Crypto', 'Bitcoin'],
    image: image1,
  },
  {
    date: '10 April, 2025',
    title: 'Bitcoin ETF Approval Sparks Rally',
    description: 'The long-awaited approval of the Bitcoin Spot ETF has ignited a surge in market momentum, pushing BTC to new highs. Major institutional players are entering the space, signaling broader ado...',
    tags: ['Crypto', 'Bitcoin'],
    image: vector2,
  },
  {
    date: '10 April, 2025',
    title: 'Bitcoin ETF Approval Sparks Rally',
    description: 'The long-awaited approval of the Bitcoin Spot ETF has ignited a surge in market momentum, pushing BTC to new highs. Major institutional players are entering the space, signaling broader ado...',
    tags: ['Crypto', 'Bitcoin'],
    image: image1,
  },
  {
    date: '10 April, 2025',
    title: 'Bitcoin ETF Approval Sparks Rally',
    description: 'The long-awaited approval of the Bitcoin Spot ETF has ignited a surge in market momentum, pushing BTC to new highs. Major institutional players are entering the space, signaling broader ado...',
    tags: ['Crypto', 'Bitcoin'],
    image: vector2,
  },
  {
    date: '10 April, 2025',
    title: 'Bitcoin ETF Approval Sparks Rally',
    description: 'The long-awaited approval of the Bitcoin Spot ETF has ignited a surge in market momentum, pushing BTC to new highs. Major institutional players are entering the space, signaling broader ado...',
    tags: ['Crypto', 'Bitcoin'],
    image: vector2,
  },
  // Add more headline objects as needed
];

const Slider = () => {
  const [current, setCurrent] = useState(0);
  const length = headlines.length;

  const nextSlide = () => setCurrent(current === length - 1 ? 0 : current + 1);
  const prevSlide = () => setCurrent(current === 0 ? length - 1 : current - 1);
  const goToSlide = idx => setCurrent(idx);

  return (
    <div className="slider-container">
      <h2 className="slider-headline">HEADLINES</h2>
      <div className="slider-main">
        <button className="slider-arrow left" onClick={prevSlide}>&lt;</button>
        <div className="slider-content">
          <img src={headlines[current].image} alt="headline" className="slider-img" />
          <div className="slider-info">
            <div className="slider-date">{headlines[current].date}</div>
            <div className="slider-title">{headlines[current].title}</div>
            <div className="slider-desc">{headlines[current].description}</div>
            <div className="slider-tags">
              {headlines[current].tags.map(tag => (
                <span className="slider-tag" key={tag}>{tag}</span>
              ))}
            </div>
          </div>
        </div>
        <button className="slider-arrow right" onClick={nextSlide}>&gt;</button>
      </div>
      <div className="slider-dots">
        {headlines.map((_, idx) => (
          <span
            key={idx}
            className={`slider-dot${idx === current ? ' active' : ''}`}
            onClick={() => goToSlide(idx)}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider; 