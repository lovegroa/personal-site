import React from 'react';

function Hero() {
  return (
    <div id='hero-container'>
      <h1>
        <span>Alex </span>
        <span className="last-name">Lovegrove</span>
      </h1>
      <nav>
        <ul>
          <li>Projects</li>
          <li>Career</li>
          <li>Contact</li>
        </ul>
      </nav>
    </div>
  );
}

export default Hero;