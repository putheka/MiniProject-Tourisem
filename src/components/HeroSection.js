import React from 'react';
import '../style/App.css';
import '../style/HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/bgvideo.mp4' autoPlay loop muted />
      <h1>TRAVEL WITH US</h1>
      <p>Start Your Trip Now!</p>
    </div>
  );
}

export default HeroSection;
