import React from 'react';

import { Footer, Project,  Skills, About, Header } from './containers';
import { CTA, Navbar } from './components';

import './App.css';

const App = () => (
  <div className="App">
    <div className="gradient__bg">
      <Navbar />
      <Header />
    </div>
    
    <About />
    <Skills />
    
   
    <Project/>
     <CTA />
    <Footer />
  </div>
);

export default App;
