import React from 'react';
//import { BrowserRouter as Router, Route } from 'react-router-dom';
//import './assets/style.css';
//import ReactDOM from 'react-dom';
//import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
//import LandingPage from './components/LandingPage';
//import Header from './components/Header/header';
import Mainboard from './components/Mainboard';
//import Login from './pages/Login';
//import Login from './pages/Login';
import LoginForm from './components/LoginForm';
import SignUpForm from './components/SignupForm';
import Header from './components/Header'
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <div className="app">
      <Navbar /> 
      {/* <LandingPage /> */}
      <Mainboard />
      {/* <Login /> */}
      <LoginForm />
      <SignUpForm />

      <Header />
    </div>
  )
}

export default App
