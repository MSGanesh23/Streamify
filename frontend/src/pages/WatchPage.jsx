import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import MoviePlayer from '../components/MoviePlayer';
import Navbar from '../components/Navbar';

const WatchPage = () => {
  const { fileId } = useParams();
  const navigate = useNavigate();

  return (
    <div className="WatchPage">
      <Navbar />
      <MoviePlayer fileId={fileId} onBack={() => navigate(-1)} />
    </div>
  );
};

export default WatchPage;
