import React from 'react';

import possibility from '../../assets/possibility.png';
import './header.css';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';

const Header = () => (

  
  <div className="gpt3__header section__padding" id="home">
    <motion.div 
    initial={{x:-200}}
    animate={{x:0}}
    transition={{duration:1.5}}
      className="gpt3__header-content">

      <h1 className="gradient__text">Hey, I'm Nandhu !! <br/> 
      <Typewriter
       words={['Web Developer', 'UX/UI Designer', 'Software Developer']}
       loop={true}
       delaySpeed={1000}
       cursor={true}
       cursorStyle= '_'/></h1>
      <p>Developer who is passionate about creating intuitive, user-friendly digital experiences. 
        With expertise in HTML/CSS, JavaScript, React, Angular, Node.js, PHP, and more, I'm equipped to tackle any project. 
        Let's work together to bring your digital vision to life.</p>
    </motion.div>

    <motion.div 
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1.5}}
    className="gpt3__header-image">
      <img src={possibility} alt='Main_Image' />
    </motion.div>
  </div>
);

export default Header;
