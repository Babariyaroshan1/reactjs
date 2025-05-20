import React, { useState, useRef } from 'react';
import '../components/TrendingSlider.css';
import { trendingItemsData } from '../data';

const CARD_WIDTH = 178;
const CARD_MARGIN_RIGHT = 50; 
const CARDS_TO_SHOW = 6;

const SliderItem = ({ item, index }) => {
  const rank = index + 1;
  const animationDelay = `${(index % CARDS_TO_SHOW) * 100}ms`;

  return (
    <li className="trending-list-item" style={{ minWidth: `${CARD_WIDTH}px` }}>
      <button
        className="trending-card-button"
        aria-label={`${item.title}, Rank ${rank}`}
      >
        <div
          className="trending-loading-placeholder"
          style={{ animationDelay: animationDelay }}
        ></div>
        {item.imageUrl && (
          <div
            className="trending-image-background"
            style={{ backgroundImage: `url(${item.imageUrl})` }}
          ></div>
        )}
        <div className="trending-card-content">{item.title}</div>
        <span className="trending-number-badge-container">
          <span className="visually-hidden">{rank}</span>
          <span
            aria-hidden="true"
            data-content={rank}
            className="trending-styled-number"
          >
            {rank}
          </span>
        </span>
      </button>
    </li>
  );
};

const TrendingSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const listRef = useRef(null);

  const totalItems = trendingItemsData.length;
  const cardSlotWidth = CARD_WIDTH + CARD_MARGIN_RIGHT;
  const transformOffset = currentIndex * cardSlotWidth;

  const handleNext = () => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex + CARDS_TO_SHOW < totalItems) {
        return prevIndex + CARDS_TO_SHOW;
      }
      return prevIndex;
    });
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => Math.max(0, prevIndex - CARDS_TO_SHOW));
  };

  const canGoPrev = currentIndex > 0;
  const canGoNext = currentIndex + CARDS_TO_SHOW < totalItems;

  return (
    <div className="trending-slider-outer-container">
      <div className="default-ltr-cache-dulgtd">
        <div className="curve-container-wrapper"> 
          <div className="default-ltr-cache-1f97ztc"></div>
        </div>
      </div>

      <div className="trending-slider-content-wrapper">
        <h2 className="trending-slider-title fs-4">Trending Now</h2>

        {canGoPrev && (
          <button
            className="slider-nav-button slider-nav-prev"
            onClick={handlePrev}
            disabled={!canGoPrev}
            aria-label="Previous"
          >
            
          &gt;
          </button>
        )}

        <div className="trending-list-viewport">
          <ul
            className="trending-scrollable-list"
            ref={listRef}
            style={{ transform: `translateX(-${transformOffset}px)` }}
          >
            {trendingItemsData.map((item, index) => (
              <SliderItem key={item.id} item={item} index={index} />
            ))}
          </ul>
        </div>

        {canGoNext && (
          <button
            className="slider-nav-button slider-nav-next"
            onClick={handleNext}
            disabled={!canGoNext}
            aria-label="Next"
          >
            
            &lt;
          </button>
        )}
      </div>
    </div>
  );
};

export default TrendingSlider;