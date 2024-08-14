import React from 'react';
import '../components/Headerbutton.css';
import logo from '../logo.png'; // Add your logo image here
import { Link } from 'react-router-dom';

const Headerbutton = ({ toggleSidebar }) => {
  return (
    <header className="header">
      <button className="menu-button" onClick={toggleSidebar}>
        <i className="fas fa-bars"></i>
      </button>
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <div className="auth-buttons">
        <Link to="/login">
          <button className="login">Login</button>
        </Link>
        <Link to="/signup">
          <button className="signup">Sign Up</button>
        </Link>
      </div>
    </header>
  );
};

export default Headerbutton;
