// src/components/MovieSection.jsx
import React from 'react';
import './../assets/css/MovieSection.css'; // Import your CSS for styling

const MovieSection = ({ title, videos }) => {
  return (
    <div className="movie-section">
      <h2>{title}</h2>
      <div className="row">
        {videos.map(video => (
          <div className="col-md-3 col-sm-6 mb-4" key={video.id}>
            <div className="card">
              <img src={video.thumbnail} alt={video.title} className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">{video.title}</h5>
                <p className="card-text">{video.desc}</p>
                <a href={`/watch/${video.driveFileId}`} className="btn btn-primary">Watch Now</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieSection;
