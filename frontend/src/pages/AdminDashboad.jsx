import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./../assets/css/AdminDashboard.css"; // optional if you want to style

export default function AdminDashboard() {
  const navigate = useNavigate();

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        <h2 className="logo">Streamify Admin</h2>
        <ul className="nav-links">
          <li onClick={() => navigate('/AddAdmin')}>Add Admin</li>
          {/* You can add more nav options here */}
          <li onClick={() => navigate('/')}>Logout</li>
        </ul>
      </nav>

      {/* Dashboard Content */}
      <div className="dashboard-content">
        <h3>Welcome to the Admin Dashboard</h3>
        {/* Add any other dashboard widgets here */}
      </div>
    </div>
  );
}
