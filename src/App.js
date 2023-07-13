import React from 'react';
//import { BrowserRouter as Router, Route } from 'react-router-dom';
//import './assets/style.css';

import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
//import Header from './components/Header/header';
import Mainboard from './components/Mainboard';
//import Login from './pages/Login'



function App() {
  return (
      <div className="app">
        <Navbar /> 
        <LandingPage />
        <Mainboard />
      </div>
  );
}

export default App;
