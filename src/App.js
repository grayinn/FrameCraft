import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

//import unsplash from './api/unsplash'

import Navbar from './components/Navbar.jsx'
import LoginForm from './components/LoginForm'
import SignUpForm from './components/SignupForm'
import 'bootstrap/dist/css/bootstrap.min.css'


import CreatePin from './components/CreatePin'
import Followers from './components/Followers'
import Header from './components/Header'
import LandingPage from './components/LandingPage'
import Mainboard from './components/Mainboard'
import Following from './components/Following'
import UserInforForm from './components/UserInforForm'


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Navbar />} />
        <Route path='/login' element={<LoginForm />} />
        <Route path='/signup' element={<SignUpForm />} />

        <Route path='/createpost' element={<CreatePin />} />

      </Routes>

      <CreatePin />
      <Followers />
      <LandingPage />
      <Header />
      <Mainboard />
      <Following />
      <UserInforForm />

    </Router>
  )
}

export default App
