import React from 'react';
import logo from '../../assets/logo1.svg';
import './footer.css';




const Footer = () => (

  
  <div className="gpt3__footer section__padding" id='contact'>
    <div className="gpt3__footer-heading">
      <h1 className="gradient__text">Get in Touch? Email me</h1>
    </div>

    <div className="gpt3__footer-btn hover:bg-gradient-to-r rounded-xl hover:border hover:border-[#F2976B]">
      <button className='text-sm text-white hover:animate-bounce from-purple-500 to-pink-500 ' onClick={() =>window.open('https://mail.google.com/mail/?view=cm&to=nandhujayakumar.nj@gmail.com', '_blank')} type='button' >Email Me</button>
    </div>

    <div className="gpt3__footer-links">
      <div className="gpt3__footer-links_logo">
        <img src={logo} alt="gpt3_logo" />
        <p>Be the change you wish to see in the world." <br /> - Mahatma Gandhi</p>
      </div>
      <div className="gpt3__footer-links_div ">
        <h4>Social Links</h4>
        <a className='text-white text-xs pt-3 hover:animate-pulse hover:text-[#F1966E]'  href="https://linkedin.com/in/nandhujayakumar" target="_blank" rel="noopener noreferrer">Linkedin</a>
        <a className='text-white text-xs pt-3  hover:animate-pulse hover:text-[#F1966E]'  href="https://github.com/Nandhujayakumar" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a className='text-white text-xs pt-3 hover:animate-pulse hover:text-[#F1966E]'  href="https://www.instagram.com/atomic._.lover/" target="_blank" rel="noopener noreferrer">Instagram</a>
        <a className='text-white text-xs pt-3 hover:animate-pulse hover:text-[#F1966E]'  href="mailto:nandhujayakumar.nj@gmail.com" target="_blank" rel="noopener noreferrer">Gmail</a>


          
          
        
        
      
        
      </div>
      
      <div className="gpt3__footer-links_div">
        <h4>Get in touch</h4>
        
        <p>(+91) 8138890907</p>
        <a className='text-white text-xs pt-3 hover:animate-pulse hover:text-[#F1966E]' href="mailto:nandhujayakumar.nj@gmail.com" rel="noopener noreferrer" target='_blank'>nandhujayakumar.nj@gmail.com</a>
      </div>
    </div>

    <div className="gpt3__footer-copyright">
      <p>@2023. All rights reserved.</p>
    </div>
  </div>
);

export default Footer;
