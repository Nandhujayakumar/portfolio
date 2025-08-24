import React from 'react';
import './cta.css';
import { Typewriter } from 'react-simple-typewriter';

const CTA = () => (
  <div className="gpt3__cta">
    <div className="gpt3__cta-content">
      <p>Discover My Code Repository on Github</p>
      <h3>
      <Typewriter
       words={['Experience My Passion for Coding and Development']}
       loop={true}
       delaySpeed={1000}
       cursor={true}
       typeSpeed={40}
       cursorStyle= '_'/></h3>
    </div>
    <div className="gpt3__cta-btn hover:animate-pulse">
      <button onClick={() => window.open('https://github.com/Nandhujayakumar')} type="button">Go to Github</button>
    </div>
  </div>
);

export default CTA;
