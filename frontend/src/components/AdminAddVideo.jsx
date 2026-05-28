import React, { useState } from 'react';
import './../assets/css/AdminAddVideo.css';
import AdminNavbar from '../components/AdminNavbar';

// Importing Backend API from .env
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const AdminAddVideo = () => {
  const loggedInEmail = sessionStorage.getItem('email');

  const [video, setVideo] = useState({
    title: '',
    description: '',
    genres: [],
    year: '',
    duration: '',
    thumbnailUrl: '',
    videoUrl: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "genres") {
      const genresArray = value.split(",").map(genre => genre.trim());
      setVideo({ ...video, genres: genresArray });
    } else {
      setVideo({ ...video, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`${API_BASE_URL}/api/videos`, {
      method: 'POST',
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(video)
    });

    if (response.ok) {
      alert('Video added successfully!');
      setVideo({
        title: '',
        description: '',
        genres: [],
        year: '',
        duration: '',
        thumbnailUrl: '',
        videoUrl: ''
      });
    } else {
      alert('Failed to add video.');
    }
  };

  return (
    <>
      <AdminNavbar email={loggedInEmail} />
      <div className="admin-form">
        <div className="admin-form-header">
          <div className="admin-form-icon">🎬</div>
          <h2>Add New Video</h2>
          <p>Fill in the details to add a new movie to the library</p>
        </div>
        <form onSubmit={handleSubmit} className="admin-video-form">
          <div className="form-group">
            <label>Movie Title</label>
            <input name="title" value={video.title} onChange={handleChange} placeholder="e.g. Saaho (2019)" required />
          </div>
          <div className="form-group">
            <label>Description</label>
            <textarea name="description" value={video.description} onChange={handleChange} placeholder="Brief plot summary..." rows="3" />
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>Year</label>
              <input name="year" type="number" value={video.year} onChange={handleChange} placeholder="2024" />
            </div>
            <div className="form-group">
              <label>Duration</label>
              <input name="duration" value={video.duration} onChange={handleChange} placeholder="2h 30m" />
            </div>
          </div>
          <div className="form-group">
            <label>Genres (comma-separated)</label>
            <input
              name="genres"
              value={video.genres.join(', ')}
              onChange={handleChange}
              placeholder="Action, Thriller, Drama"
            />
          </div>
          <div className="form-group">
            <label>Thumbnail URL</label>
            <input name="thumbnailUrl" value={video.thumbnailUrl} onChange={handleChange} placeholder="https://..." />
          </div>
          <div className="form-group">
            <label>Video URL (S3 / Direct Link)</label>
            <input
              name="videoUrl"
              value={video.videoUrl}
              onChange={handleChange}
              placeholder="https://your-bucket.s3.amazonaws.com/movie.mkv"
              required
            />
          </div>
          <button type="submit" className="submit-btn">
            <span>+</span> Add to Library
          </button>
        </form>
      </div>
    </>
  );
};

export default AdminAddVideo;
