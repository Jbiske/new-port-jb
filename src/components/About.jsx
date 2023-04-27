import React from 'react';
import Me from './images/me.png';
import  './About.css';

const About = () => {
  return (
    <div className="about-page">
      <div className="about-image">
        <img src={Me} alt="Myself" />
      </div>
      <div className="about-text">
        <h2>About Me</h2>
        <p>
        I am a 21 year old Web Developer from Macomb, Michigan who is currently looking for oppurtunity to begin my career in Web Devlopment.        </p>
      </div>
    </div>
  );
};

export default About;