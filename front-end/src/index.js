import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navbar from './navbar';
import Footer from './Footer';
import About from './About';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Login from './Login';
import Display from './Display';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<App />} />
          <Route path="About" element={<About />} />
          <Route path="Account" element={<Login />} />
          <Route path="TrackOrder" element={<Display/>}/> 
          <Route path="*" element={<Navbar/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </div>
    
);
const footer = ReactDOM.createRoot(document.getElementById('footer'))
footer.render(
  <div>
    <Footer/>
  </div>
)