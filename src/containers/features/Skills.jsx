import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';
import { motion } from 'framer-motion';

const featuresData = [
  {
    title: 'Frontend Development',
    text: 'React.js, Next.js, Typescript, HTML, CSS, JavaScript, TailwindCSS ',
  },
  {
    title: 'Backend Development',
    text: 'Python, Java, C, C++, TypeScript, SQL, GIT ',
  },
  {
    title: 'Frameworks & UI/UX Tools',
    text: 'Spring Boot, Next.js, Selenium, TestNG ',
  },
  
];

const Skills = () => (
  <div className="gpt3__features section__padding" id="skills">
    <motion.div 
      initial={{y:-100, opacity:0}}
      animate={{y:0, opacity:1}}
      whileInView={{y:0}}
      transition={{duration:1.5}}
    
    className="gpt3__features-heading">
      <h1 className="gradient__text">
        
        Programming isn't about what you know; it's about what you can figure out.</h1>
      <p>Mastery in Motion: My Collection of Skills and Technologies</p>
    </motion.div>
    <div className="gpt3__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Skills;
