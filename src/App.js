import React from 'react'
//import { BrowserRouter as Router, Route } from 'react-router-dom'
import './assets/style.css'
//import ReactDOM from 'react-dom'
//import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
//import LandingPage from './components/LandingPage'
//import Header from './components/Header/header'
import Mainboard from './components/Mainboard'
//import Login from './pages/Login'
//import Login from './pages/Login'
import LoginForm from './components/LoginForm'
import SignUpForm from './components/SignupForm'
import Header from './components/Header'
import 'bootstrap/dist/css/bootstrap.min.css'
//import unsplash from './api/unsplash'

//can not ??? huhu
//import { StyleSheetManager } from 'styled-components'
//import isPropValid from '@emotion/is-prop-valid'

import CreatePin from './components/CreatePin'
import Followers from './components/Followers'


function App() {

  // const getImages = (term) => {
  //   return unsplash.get("https://api.unsplash.com/search/photos", {
  //     params: {
  //       query: term
  //     }
  //   })
  // }

  // const onSearchSubmit = (term) => {
  //   console.log("search ra:", term)
  //   getImages (term)
  // }

  //onSearchSubmit("animals")

  return (
    <div className="app">
      <Navbar /> 
      {/* <LandingPage /> */}
      <Mainboard />
      {/* <Login /> */}
      <LoginForm />
      <SignUpForm />

      <Header />
      {/* <Header onSubmit={onSearchSubmit}/> */}

      <CreatePin />

      <Followers />

    </div>
  )
}

export default App
