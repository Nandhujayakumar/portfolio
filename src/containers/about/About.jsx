import React from 'react';
import Feature from '../../components/feature/Feature';
import './about.css';
import { Typewriter } from 'react-simple-typewriter';

const About = () => (
  <div className="gpt3__whatgpt3 section__margin" id="about">
    <div className="gpt3__whatgpt3-feature">
      <Feature title="Know More About me!!" text="Welcome to my portfolio! I am Nandhu Jayakumar, a computer science engineer with a 
                                              passion for software development and UI/UX design. I have honed my 
                                              skills in front-end development and become proficient in different programming languages. 
                                              I have developed a strong eye for design and a deep understanding of user experience, which allows me to create 
                                               innovative solutions for complex problems. I hope you enjoy exploring my portfolio and getting to know more about my work." />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">
      <Typewriter
       words={['Bridging the Gap Between Education and Industry']}
       loop={true}
       delaySpeed={3000}
       typeSpeed={50}
       cursor={true}
       cursorStyle= '_'/>
        
        </h1>
        
      
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature title="Interested area:" text="Designing intuitive user experiences and developing high-performance web applications are my greatest passions." />
      <Feature title="Education" text="I hold a Bachelor of Technology degree in Computer Science Engineering, with a focus on software development and information security." />
      <Feature title="Profession" text="Passionate about technology and innovation, I am eager to contribute my skills and knowledge to a dynamic team in the field of software development or UI/UX design" />
    </div>
  </div>
);

export default About;
