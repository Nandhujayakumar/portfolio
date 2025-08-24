import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo1.svg';
import './navbar.css';
import { motion } from 'framer-motion';


const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="gpt3__navbar">
      <motion.div 
      initial={{x:-200}}
      animate={{x:0}}
      transition={{duration:1.5}}
      
      className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <img src={logo} alt="Logo"/>
        </div>
        <div className="gpt3__navbar-links_container">
          <p><a className='text-white hover:animate-pulse hover:text-[#F1966E]' href="#home">Home</a></p>
          <p><a className='text-white hover:animate-pulse hover:text-[#F1966E]' href="#about">About</a></p>
          <p><a className='text-white hover:animate-pulse hover:text-[#F1966E]' href="#skills">Skills</a></p>
          <p><a className='text-white hover:animate-pulse hover:text-[#F1966E]' href="#project">Projects</a></p>
        </div>
      </motion.div>
      <motion.div
      initial={{x:200}}
      animate={{x:0}}
      transition={{duration:1.5}}
      
      className="gpt3__navbar-sign">
        <a className='text-white pr-10 hover:text-orange-400' href="https://drive.google.com/file/d/16Y8lQ04uAG8uz-UbIBTvOV9Wkrhruyz5/view?usp=share_link" target='_blank' rel="noopener noreferrer">My Resume</a>
        <a href="#contact"><button className='hover:bg-gradient-to-r from-purple-500 to-orange-600' type="button">Connect</button> </a>
      </motion.div>
      <div className="gpt3__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="gpt3__navbar-menu_container scale-up-center">
          <div className="gpt3__navbar-menu_container-links">
          <p><a className='text-white hover:animate-pulse hover:text-[#F1966E]' href="#home">Home</a></p>
          <p><a className='text-white hover:animate-pulse hover:text-[#F1966E]' href="#about">About</a></p>
          <p><a className='text-white hover:animate-pulse hover:text-[#F1966E]' href="#skills">Skills</a></p>
          <p><a className='text-white hover:animate-pulse hover:text-[#F1966E]' href="#project">Projects</a></p>
          </div>
        <div className="gpt3__navbar-menu_container-links-sign">
        <a className='text-white hover:text-orange-400' href="https://drive.google.com/file/d/16Y8lQ04uAG8uz-UbIBTvOV9Wkrhruyz5/view?usp=share_link" target='_blank' rel="noopener noreferrer">My Resume</a>
        <a href="#contact"><button className='hover:bg-gradient-to-r from-purple-500 to-orange-600' type="button">Connect</button> </a>
          </div>
        </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
