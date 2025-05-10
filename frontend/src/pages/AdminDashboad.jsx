import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AdminNavbar from '../components/AdminNavbar'; // import the navbar
import './../assets/css/AdminDashboard.css';
import Footer from '../components/Footer';

export default function AdminDashboard() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');

  useEffect(() => {
    const storedEmail = sessionStorage.getItem('email');
    if (storedEmail) {
      setEmail(storedEmail);
    } else {
      navigate('/');
    }
  }, [navigate]);

  return (
    <div>
      <AdminNavbar email={email} /> {/* use the new navbar component */}

      <div className="dashboard-content">
        <h3>Welcome to the Admin Dashboard</h3>
        {/* Add more widgets or content here */}
      </div>
      <Footer/>
    </div>
  );
}
