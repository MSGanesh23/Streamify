// src/components/MoviePlayer.jsx
import React from 'react';
// import './MoviePlayer.css'; // Optional for custom styling

const MoviePlayer = ({ fileId, onBack }) => {
  if (!fileId) return <div>No video selected.</div>;

  const videoSrc = `https://drive.google.com/file/d/${fileId}/preview`;


  return (
    <div className="movie-player-container">
      <div className="movie-player-header">
        <button className="back-button" onClick={onBack}>🔙 Back</button>
        <h2>Now Playing</h2>
      </div>

      <div className="video-wrapper">
        <iframe
          src={videoSrc}
          allow="autoplay; fullscreen"
          allowFullScreen
          title="Movie Player"
          className="video-frame"
        ></iframe>
      </div>
    </div>
  );
};

export default MoviePlayer;
