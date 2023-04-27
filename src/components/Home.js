import React from 'react';
import './contact.css';

const Contact = () => {
  return (
    <div className='contact-page'>
      <div className='headers'>
        <h1>Contact Me</h1>
      </div>
      <div className='contact-container'>
        <div
          className='contact-box github'
          onClick={() => window.open('https://github.com/')}
        >
          <a href='https://github.com/'>GitHub</a>
        </div>
        <div
          className='contact-box linkedin'
          onClick={() => window.open('https://www.linkedin.com/')}
        >
          <a href='https://www.linkedin.com/'>LinkedIn</a>
        </div>
        <div
          className='contact-box email'
          onClick={() => window.open('mailto:example@example.com')}
        >
          <a href='mailto:example@example.com'>Email</a>
        </div>
      </div>
    </div>
  );
};

export default Contact;