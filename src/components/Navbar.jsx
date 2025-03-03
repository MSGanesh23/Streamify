import React, { useState } from 'react';
import './Navbar.css'; // Assuming you will style it with a separate CSS file

const Navbar = () => {
  const [energyLevel, setEnergyLevel] = useState(70); // Just an example, adjust as needed

  return (
    <nav className="navbar">
      {/* Left Side: Site Name */}
      <div className="site-name">
        <h1>Streamify</h1>
      </div>

      {/* Center: Menu Items */}
      <ul className="menu">
        <li><a href="/">Home</a></li>
        <li><a href="/web-series">Web Series</a></li>
        <li><a href="/movies">Movies</a></li>
        <li><a href="/recently-added">Recently Added</a></li>
        <li><a href="/my-list">My List</a></li>
      </ul>

      {/* Center: Search Bar */}
      <div className="search-bar">
        <input type="text" placeholder="Search..." />
      </div>

      {/* Center: Energy Bar */}
      <div className="energy-bar" style={{ width: `${energyLevel}%` }}>
        {/* You can customize the energy bar here */}
      </div>

      {/* Right Side: User Profile Logo */}
      <div className="profile-logo">
        <img src="/path/to/profile-logo.png" alt="Profile" />
      </div>
    </nav>
  );
};

export default Navbar;
