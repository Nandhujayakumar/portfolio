import React from 'react';
import Article from '../../components/article/Article';
import { blog01, blog02, blog03, blog04, blog05, blog06, blog07 } from './imports';
import './projects.css';
import { Typewriter } from 'react-simple-typewriter';

const Project = () => (
  <div className="gpt3__blog section__padding" id="project">
    <div className="gpt3__blog-heading">
      <h1 className="gradient__text">Some Things I've built <br /> 
      <Typewriter
       words={['Glimpse of my projects.']}
       loop={true}
       delaySpeed={3000}
       typeSpeed={50}
       cursor={true}
       cursorStyle= '_'
       />
      
      </h1>
    </div>
    <div className="gpt3__blog-container">
      <div className="gpt3__blog-container_groupA">
        <Article imgUrl={blog01} date="Sep 26, 2021" text="Campus-Based Application: Stay connected and informed with our campus-based application built with Reactjs. Our app is designed to provide students, faculty, and staff with a single platform to access information about classes, 
        events, resources, and more. " />
      </div>
      <div className="gpt3__blog-container_groupB">
        <Article imgUrl={blog02} date="Redux Tailwind RapidAPI" text="Spotify 2.0 Clone: Experience seamless and immersive music with Redux, Tailwind." />
        <Article imgUrl={blog03} date="DALL-E React.js TailwindCSS" text="Text-to-Image Web App: Create stunning images with just text using Reactjs, DALL-E, and Tailwind. " />
        <Article imgUrl={blog04} date="React.js" text="Google Colab Clone: Collaborate on machine learning projects with ease using Reactjs and Tailwind." />
        <Article imgUrl={blog05} date="Flutter Firebase"  text="YouTube Clone: Watch your favorite videos and channels with ease, built using Reactjs, Material UI 5, 
        and Rapid Api." />
        <Article imgUrl={blog06} date="Python Machine Learning" text="Health Prediction App: Take control of your health with our health prediction app built with Python. Our app uses machine learning algorithms to analyze various health metrics and predict potential health risks." />
        <Article imgUrl={blog07} date="React.js" text="Travel Advisory App: Plan your next trip with confidence using Reactjs. Our app provides up-to-date travel advisories and safety information for destinations around the world." />
      </div>
    </div>
  </div>
);

export default Project;
