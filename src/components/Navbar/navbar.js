
//import "./navbar.scss"
//import SearchIcon from '@mui/icons-material/Search';
import React from 'react';
import navbarlogo from './logo.svg';

const Navbar = () => {
  return (
    <nav>
        <img src={navbarlogo} alt="" className="logo" />

        <div class="search-bar">
            <input type="text" placeholder="Search..." />
        </div>
        <div className="auth-buttons">
            <button className="login-button">Log in</button>
            <button className="signup-button">Sign up</button>
        </div>
    </nav>
  );
};

export default Navbar;
