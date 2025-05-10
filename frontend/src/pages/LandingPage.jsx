// src/pages/LandingPage.jsx
import React from 'react';
import Navbar from '../components/Navbar';
import HeroBanner from '../components/HeroBanner'; // Import the new HeroBanner component
import "../assets/css/LandingPage.css";
import Footer from '../components/Footer';

const bannerImages = [
  {
    src: "/images/thumbnails/12thfail.jpg",
    title: "12th fail",
    desc: "Description of 12th fail",
    driveFileId: "1QxvQcZ8TTJR7LVRQGdn8VtmaqZjBu03d" // 🔁 Replace with actual Google Drive File ID
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
  return (
    <div className="LandingPage">
      <Navbar />
      <HeroBanner bannerImages={bannerImages} /> {/* Use the HeroBanner component */}
      <Footer />
    </div>
  );
};

export default LandingPage;
