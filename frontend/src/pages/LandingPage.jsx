import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import HeroBanner from '../components/HeroBanner';
import MovieSection from '../components/MovieSection';
import Footer from '../components/Footer';
import "../assets/css/LandingPage.css";

const bannerImages = [ 
  {
    src: "/images/thumbnails/12thfail.jpg",
    title: "12th fail",
    desc: "Description of 12th fail",
    driveFileId: "1QxvQcZ8TTJR7LVRQGdn8VtmaqZjBu03d"
  },
  {
    src: "/images/thumbnails/pushpa.jpg",
    title: "Pushpa",
    desc: "The Rise",
    driveFileId: "1alotGmc1i1mSNnYMmfCbZD_6bgm4LjF0"
  },
  {
    src: "/images/thumbnails/salaar.jpg",
    title: "Salaar",
    desc: "Salaar",
    driveFileId: "1bHOazYGkJcPRdCFIxz1mWDF7epvjyqOT"
  },
  {
    src: "/images/thumbnails/spiderman.jpg",
    title: "Ultimate Spider Man",
    desc: "Tales of Ultimate Spider Man",
    driveFileId: "1RkMo4lluZbyRegO-sgASy_Idwt7Gf2q8"
  },
  {
    src: "/images/thumbnails/mad.jpg",
    title: "MAD",
    desc: "Mad",
    driveFileId: "14r7QX8oEXL6h8QsMAMgc4WRSmDAbq3gz"
  },
  {
    src: "/images/thumbnails/mahanati.jpg",
    title: "Mahanati",
    desc: "Tale of a Heroin",
    driveFileId: "1rvF-uJki3rnmp2NzopE2V3TvYKojkHCw"
  },
  

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