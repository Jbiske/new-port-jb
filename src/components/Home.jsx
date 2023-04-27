import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './home.css';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
  useEffect(() => {
    Aos.init({ duration: 2500 });
  }, []);

  return (
    <div className='home-container'>
      <div className='message' data-aos='fade-down'>
        <h1>Welcome to Joshua's Site!</h1>
      </div>
      <div className='options-container'>
        <Link to='/about' className='option' data-aos='fade-right'>
          <h2>About Me</h2>
        </Link>
        <Link to='/projects' className='option' data-aos='fade-up'>
          <h2>My Projects</h2>
        </Link>
        <Link to='/contact' className='option' data-aos='fade-left'>
          <h2>Contact Me</h2>
        </Link>
      </div>
    </div>
  );
};

export default Home;