import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import "../assets/css/LandingPage.css";
import { useNavigate } from 'react-router-dom';

const bannerImages = [
  {
    src: "/images/thumbnails/bahubali.jpg",
    title: "Bahubali",
    desc: "Description of Bahubali",
    driveFileId: "1xxxxxx" // 🔁 Replace with actual Google Drive File ID
  },
  {
    src: "/images/thumbnails/guntur_karam.jpg",
    title: "Guntur Karam",
    desc: "Description of Guntur Karam",
    driveFileId: "1yyyyyy"
  },
  {
    src: "/images/thumbnails/devara.jpg",
    title: "Devara",
    desc: "Description of Devara",
    driveFileId: "1zzzzzz"
  },
  {
    src: "/images/thumbnails/spiderman.jpg",
    title: "Ultimate Spider Man",
    desc: "Description of Spiderman",
    driveFileId: "1RkMo4lluZbyRegO-sgASy_Idwt7Gf2q8"
  }
];

const LandingPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate(); // ✅ Now it's defined

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % bannerImages.length);
    }, 10000); // 10 seconds

    return () => clearInterval(interval);
  }, []);

  const { src, title, desc, driveFileId } = bannerImages[currentIndex];

  return (
    <div className="LandingPage">
      <Navbar />

      <section className="carousel-banner">
        <img src={src} alt={title} className="carousel-image" />
        <div className="carousel-overlay">
          <h1>{title}</h1>
          <p>{desc}</p>
          <button onClick={() => navigate(`/watch/${driveFileId}`)}>Watch Now</button>
        </div>
      </section>

      <footer className="footer">
        <p>© 2025 Streamify. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
