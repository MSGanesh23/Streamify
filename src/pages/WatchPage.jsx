import React, { useRef, useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { useSidebar } from '../context/SidebarContext';
import Navbar from '../components/Navbar';
import './../assets/css/WatchPage.css';

const WatchPage = () => {
  const { collapsed } = useSidebar();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const videoRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const videoUrl = searchParams.get('url');

  if (!videoUrl) {
    return (
      <div className={`WatchPage ${collapsed ? 'collapsed' : ''}`}>
        <Navbar />
        <div className="watch-error-state">
          <div className="error-icon">🎬</div>
          <h2>No video selected</h2>
          <p>Please go back and select a movie to watch.</p>
          <button className="back-btn" onClick={() => navigate(-1)}>← Go Back</button>
        </div>
      </div>
    );
  }

  return (
    <div className={`WatchPage ${collapsed ? 'collapsed' : ''}`}>
      <Navbar />
      <div className="player-container">
        <div className="player-header">
          <button className="back-btn" onClick={() => navigate(-1)}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
            Back
          </button>
        </div>

        <div className="video-wrapper">
          {isLoading && !hasError && (
            <div className="video-loading">
              <div className="loading-spinner"></div>
              <p>Loading video...</p>
            </div>
          )}
          {hasError && (
            <div className="video-error">
              <div className="error-icon">⚠️</div>
              <h3>Unable to play this video</h3>
              <p>The video format may not be supported by your browser.</p>
            </div>
          )}
          <video
            ref={videoRef}
            className={`video-player ${isLoading ? 'hidden' : ''}`}
            controls
            autoPlay
            onLoadedData={() => setIsLoading(false)}
            onError={() => { setIsLoading(false); setHasError(true); }}
            onCanPlay={() => setIsLoading(false)}
          >
            <source src={videoUrl} />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
};

export default WatchPage;
