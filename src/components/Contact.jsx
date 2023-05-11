import React from 'react';
import './contact.css';

const Contact = () => {
  return (
    <div className='contact-page'>
      <div className='headers'>
        <h1>Contact Me</h1>
      </div>
      <div class='contact-container'>
      <div className='contact-box'>
        <a href='https://github.com/jbiske'>
          <img
            src='https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-social-github-512.png'
            alt='GitHub'
          />
        </a>
      </div>
      <div className='contact-box'>
        <a href='https://www.linkedin.com/in/josh-biske-9a10a0225/'>
          <img
            src='https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-social-linkedin-512.png'
            alt='LinkedIn'
          />
        </a>
      </div>
      <div className='contact-box'>
        <a href='mailto:joshua.biske@gmail.com'>
          <img
            src='https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-email-512.png'
            alt='Email'
          />
        </a>

      </div>
      </div>
    </div>
  );
};

export default Contact;