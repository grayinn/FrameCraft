import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
//import { BrowserRouter as Router } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css'

import Followers from './components/Followers'
import Following from './components/Following'
import UserInforForm from './components/UserInforForm'
import ChangePass from './components/ChangePass'

import Home from './pages/Home.jsx'
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'
import MainPage from './pages/MainPage'
import CreatePost from './pages/CreatePost'
import ProfilePage from './pages/ProfilePage'
import ProfileFavor from './pages/ProfileFavor'


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/signup' element={<SignupPage />} />
        <Route path='/mainpage' element={<MainPage />} />
        <Route path='/createpost' element={<CreatePost />} />
        <Route path='/profile' element={<ProfilePage />} />
        <Route path='/profilefavorite' element={<ProfileFavor />} />
      </Routes>

      <Followers />
      <Following />
      <ChangePass />
      <UserInforForm />

    </Router>
  )
}

export default App
