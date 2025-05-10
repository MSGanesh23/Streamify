// src/Navbar.jsx
import React, { useState } from 'react';
import './../assets/css/Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(prevState => !prevState);
  };

  const toggleProfileMenu = () => {
    setIsProfileMenuOpen(prevState => !prevState);
  };

  return (
    <nav className="navbar">
      {/* Left Side: Site Name */}
      <h1 className="site-name">
        Streamify
      </h1>

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
      <div className="profile-logo" onClick={toggleProfileMenu}>
        <img
          src="../images/profile.png" // Update this path based on your actual image location
          alt="User  Profile"
          className="profile-image"
        />
      </div>

      {/* Profile Menu */}
      {isProfileMenuOpen && (
        <div className="profile-menu">
          <ul>
            <li><a href="/my-profile">My Profile</a></li>
            <li><a href="/logout">Logout</a></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
