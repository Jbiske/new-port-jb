import React from 'react';
import './projects.css';
import { Link } from 'react-router-dom';

const Projects = () => {
  return (
    <div className='project-page'>
      <div className='header'>
        <h1>My Projects</h1>
      </div>
      <div className='links-container'>
      <Link to='https://jb-baseballstatsbeta.netlify.app/' className='links'  >
          <h2>MLB STATS</h2>
          <p>A react project using a baseball api to display baseball stats and standings.</p>
         
          </Link>
        <Link to='https://mlbstream-jb.netlify.app/' className='links'  >
          <h2>MLB Streams</h2>
          <p>Personal Project used to watch Live MLB games </p>
         
          </Link>
        <Link to='https://github.com/dmevola/4-the-record' className='links'  >
          <h2>4 The Record</h2>
          <p>This is a full stack web application written in an Express and Sequlize framework, deployed to Heroku.</p>
         
          </Link>
        <Link to='https://github.com/Jbiske/calculatorJB-/' className='links'  >
          <h2>REACT Calculator</h2>
          <p>A Calculator made from scratch made completely with REACT and and JS </p>
          
        </Link>
        <Link to='https://stark-fjord-23181.herokuapp.com/' className='links'  >
          <h2>Profesional README Generator</h2>
          <p>A Profesional README Generator that will create a README for your future projects and save them for future download </p>
         
          </Link>
        <Link to='#' className='links'  >
          <h2>Bible API</h2>
          <p>Current Project I am working on the link is to the current Repo</p>
         
          </Link>
      </div>
    </div>
  );
};

export default Projects;