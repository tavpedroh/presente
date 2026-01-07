import React from 'react';
import './Polaroid.css';

const Polaroid = ({ image, caption, date, rotation }) => {
  return (
    <div 
      className="polaroid-wrapper" 
      style={{ transform: `rotate(${rotation || '0deg'})` }}
    >
      
      <div className="washi-tape" /> 
      
      <div className="polaroid-card">
        <div className="image-container">
          <img src={image} alt={caption} />
          <div className="photo-texture" /> 
        </div>
        <div className="caption-area">
          <p className="caption-text">{caption}</p>
          <span className="date-text">{date}</span>
        </div>
      </div>
    </div>
  );
};

export default Polaroid;