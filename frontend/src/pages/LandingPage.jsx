import React from 'react';
import Navbar from '../components/Navbar';
import "../assets/css/LandingPage.css";

const LandingPage = () => {
  return (
    <div className="LandingPage">
      <Navbar />

      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to Streamify</h1>
          <p>Your favorite movies and TV shows, all in one place.</p>
          <button>Start Watching</button>
        </div>
      </section>

      <section className="featured">
        <h2>Featured Videos</h2>
        <div className="video-list">
          {/* Sample Video */}
          <div className="video-item">
            <img src="https://via.placeholder.com/300x200" alt="Sample Video 1" />
            <h3>Video Title 1</h3>
          </div>
          <div className="video-item">
            <img src="https://via.placeholder.com/300x200" alt="Sample Video 2" />
            <h3>Video Title 2</h3>
          </div>
          <div className="video-item">
            <img src="https://via.placeholder.com/300x200" alt="Sample Video 3" />
            <h3>Video Title 3</h3>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>© 2025 StreamMaster. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default LandingPage;
