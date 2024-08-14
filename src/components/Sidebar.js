import React from 'react';
import './Sidebar.css'; // Create this CSS file for styling
import { Link } from 'react-router-dom';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
      <button className="close-btn" onClick={toggleSidebar}>
        <i className="fas fa-times"></i>
      </button>
      <nav className="sidebar-menu">
        <Link to = "/login"><a href="#home">Login</a></Link>
        <Link to = "/profile"><a href="#services">Profile</a></Link>  
        <Link to = "/survey"><a href="#about">Quiz</a></Link>
        <Link to = "/admin"><a href="#contact">View Clubs</a></Link>
        <Link to = "/mainblog"><a href="#contact">Blog</a></Link>
      </nav>
    </div>
  );
};

export default Sidebar;
