import React from "react";
import { useNavigate } from "react-router-dom";
import "./../assets/css/Homepage.css";

const Homepage = () => {
  const navigate = useNavigate();

  return (
    <div className="homepage">
      {/* Background image layer */}
      <div className="homepage-bg"></div>

      {/* Decorative floating orbs */}
      <div className="orb orb-1"></div>
      <div className="orb orb-2"></div>
      <div className="orb orb-3"></div>

      {/* Main Content */}
      <div className="homepage-content">
        {/* Brand */}
        <div className="homepage-brand">
          <div className="homepage-logo-badge">
            <span>🎬</span> Now Streaming
          </div>
          <h1 className="title">Streamify</h1>
          <p className="homepage-tagline">Your stories. Your world. Unlimited entertainment.</p>
        </div>

        {/* Stats */}
        <div className="homepage-stats">
          <div className="stat-item">
            <div className="stat-number">10K+</div>
            <div className="stat-label">Movies & Shows</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">4K</div>
            <div className="stat-label">Ultra HD Quality</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">∞</div>
            <div className="stat-label">Streaming Hours</div>
          </div>
        </div>

        {/* CTA */}
        <div className="homepage-cta">
          <div className="price-badge">
            Plans starting at just <strong>₹149/month</strong> · Cancel anytime
          </div>
          <div className="cta-buttons">
            <button className="btn-primary" onClick={() => navigate("/signin")}>
              <span>▶</span> Get Started
            </button>
            <button className="btn-secondary" onClick={() => navigate("/signup")}>
              Create Account
            </button>
          </div>
        </div>

        {/* Feature Pills */}
        <div className="homepage-features">
          <div className="feature-pill"><span className="pill-icon">🖥️</span> Watch on any device</div>
          <div className="feature-pill"><span className="pill-icon">📶</span> Download for offline</div>
          <div className="feature-pill"><span className="pill-icon">🚫</span> No ads</div>
          <div className="feature-pill"><span className="pill-icon">🎵</span> Dolby Audio</div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
