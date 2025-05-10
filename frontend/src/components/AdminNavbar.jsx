import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/css/AdminDashboard.css';

export default function AdminNavbar({ email, onSectionChange }) {
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleLogout = () => {
    sessionStorage.clear();
    navigate('/');
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(prev => !prev);
  };

  const handleSectionChange = (section) => {
    onSectionChange(section); // Use the prop passed from AdminDashboard
    setIsDropdownOpen(false); // Close the dropdown
  };

  return (
    <nav className="navbar">
      <span className="title" onClick={() => navigate('/admin')} style={{ cursor: 'pointer' }}>
        Streamify
      </span>

      <div className="nav-left">
        <div className="dropdown">
          <span className="dropdown-toggle" onClick={toggleDropdown}>Admin Options ▾</span>
          {isDropdownOpen && (
            <ul className="dropdown-menu">
              <li onClick={() => handleSectionChange('addVideo')}>Add New Video</li>
              <li onClick={() => handleSectionChange('addAdmin')}>Add Admin</li>
              <li onClick={() => handleSectionChange('usersList')}>Users List</li>
            </ul>
          )}
        </div>
      </div>

      <div className="nav-right">
        <div className="user-info">
          <img src="/images/profile.png" alt="User Avatar" className="user-avatar" />
          <span className="user-email">{email}</span>
          <button className="logout-button" onClick={handleLogout}>Logout</button>
        </div>
      </div>
    </nav>
  );
}