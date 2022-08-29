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
import Admin from './Admin';
import ListUserComponent from './components/ListUserComponent';
import CreateUserComponent from './components/CreateUserComponent';
import ViewUserComponent from './components/ViewUserComponent';

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
          <Route path="Admin"element={<Admin/>}/>
          <Route path = "users" component = {ListUserComponent}></Route>
          <Route path = "add-user/:id" component = {CreateUserComponent}></Route>
          <Route path = "view-user/:id" component = {ViewUserComponent}></Route>
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