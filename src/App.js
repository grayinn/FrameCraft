import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

import CreatePin from './components/CreatePin'
import Followers from './components/Followers'
import Header from './components/Header'
import Mainboard from './components/Mainboard'
import Following from './components/Following'
import UserInforForm from './components/UserInforForm'

import Home from './pages/Home.jsx'
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/signup' element={<SignupPage />} />
        <Route path='/createpost' element={<CreatePin />} />

      </Routes>

      <CreatePin />
      <Followers />
      <Header />
      <Mainboard />
      <Following />
      <UserInforForm />

    </Router>
  )
}

export default App
