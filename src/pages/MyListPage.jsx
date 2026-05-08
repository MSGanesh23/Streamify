import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import MovieSection from "../components/MovieSection";
import Footer from "../components/Footer";
// Importing Backend API from .env
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
import { useSidebar } from "../context/SidebarContext";

const MyListPage = () => {
  const { collapsed } = useSidebar();
  const [watchlist, setWatchlist] = useState([]);

  useEffect(() => {
    const username = localStorage.getItem("username"); // ✅ now using username
    fetch(`${API_BASE_URL}/api/watchlist?username=${username}`)
      .then((res) => res.json())
      .then((data) => setWatchlist(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className={`with-sidebar ${collapsed ? "collapsed" : ""}`}>
      <Navbar />
      <h2 style={{ margin: "20px" }}>My Watchlist</h2>
      <MovieSection title="My List" movies={watchlist} />
      <Footer />
    </div>
  );
};

export default MyListPage;
