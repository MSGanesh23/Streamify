import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./../assets/css/AdminDashboard.css";

export default function AdminDashboard() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');

  useEffect(() => {
    const storedEmail = sessionStorage.getItem('email');
    if (storedEmail) {
      setEmail(storedEmail);
    } else {
      navigate('/'); // redirect if not logged in
    }
  }, [navigate]);

  const handleLogout = () => {
    sessionStorage.clear();
    navigate('/');
  };

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        <h2 className="logo">Streamify Admin</h2>

        <div className="nav-right">
          <ul className="nav-links">
            <li onClick={() => navigate('/AddAdmin')}>Add Admin</li>
          </ul>
          <div className="user-info">
            <img
              src="/images/profile.png" // You can replace this with a real image path or URL
              alt="User Avatar"
              className="user-avatar"
            />
            <span className="user-email">{email}</span>
            <button className="logout-button" onClick={handleLogout}>
              Logout
            </button>
          </div>
        </div>
      </nav>

      {/* Dashboard Content */}
      <div className="dashboard-content">
        <h3>Welcome to the Admin Dashboard</h3>
        {/* Add widgets here */}
      </div>
    </div>
  );
}
