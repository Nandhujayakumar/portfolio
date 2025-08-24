import React from 'react';
import ReactDOM from 'react-dom';
import { Helmet } from 'react-helmet';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { inject } from '@vercel/analytics';


import App from './App';
import './index.css';

const container = document.getElementById('root');
const root = createRoot(container);

inject();


root.render(
  <StrictMode>
  
    <Helmet>
      <title>Nandhu's Portfolio</title>
      </Helmet>
      
      <App /> 
  </StrictMode>
  
);