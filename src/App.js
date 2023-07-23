import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
//import { BrowserRouter as Router } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css'

import CreatePin from './components/CreatePin'
import Followers from './components/Followers'
import Following from './components/Following'
import UserInforForm from './components/UserInforForm'

import Home from './pages/Home.jsx'
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'
import MainPage from './pages/MainPage'

// import unsplash from './api/unsplash'


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/signup' element={<SignupPage />} />
        <Route path='/createpost' element={<CreatePin />} />
        <Route path='/mainpage' element={<MainPage />} />
      </Routes>

      <CreatePin />
      <Followers />
      <Following />
      <UserInforForm />

    </Router>
  )
}

export default App
