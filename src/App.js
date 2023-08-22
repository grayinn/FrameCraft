import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import ViewDetailPost from './pages/ViewDetailPost.jsx'
import Home from './pages/Home.jsx'
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'
import CreatePost from './pages/CreatePost'
import ProfilePage from './pages/ProfilePage'
import ProfileFavor from './pages/ProfileFavor'
import Mainboard from './pages/Mainboard.jsx'
// import 'bootstrap/dist/css/bootstrap.min.css'


function App() {
  return (
    <Router>
      <div className="App"> 
        <ToastContainer position="top-center"/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/signup' element={<SignupPage />} />
          <Route path='/mainpage' element={<Mainboard />} />
          <Route path='/createpost' element={<CreatePost />} />
          <Route path='/profile' element={<ProfilePage />} />
          <Route path='/profilefavorite' element={<ProfileFavor />} />
          <Route path='/detail/:id' Component={ViewDetailPost} />
        </Routes>
      </div>
    </Router>
  )
}
export default App





