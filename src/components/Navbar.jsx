// src/Navbar.jsx
import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(prevState => !prevState);
  };

  return (
    <nav className="navbar">
      {/* Left Side: Site Name */}
      <div className="site-name">
        <h1>Streamify</h1>
      </div>

      {/* Center: Menu Items (For Desktop and Mobile) */}
      <div className={`menu-container ${isMenuOpen ? 'open' : ''}`}>
        <ul className="menu">
          <li><a href="/">Home</a></li>
          <li><a href="/web-series">Web Series</a></li>
          <li><a href="/movies">Movies</a></li>
          <li><a href="/recently-added">Recently Added</a></li>
          <li><a href="/my-list">My List</a></li>
        </ul>
        {/* Hamburger Menu for Mobile */}
        <button className="menu-toggle" onClick={toggleMenu}>
          <span className="hamburger"></span>
        </button>
      </div>

      {/* Center: Search Bar */}
      <div className="search-bar">
        <input type="text" placeholder="Search..." />
      </div>

      {/* Right Side: User Profile Logo */}
      <div className="profile-logo">
        <img src="/path/to/profile-logo.png" alt="Profile" />
      </div>
    </nav>
  );
};

export default Navbar;
