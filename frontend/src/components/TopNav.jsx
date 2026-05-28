import React, { useState, useEffect, useRef } from "react";
import { useNavigate, Link, useLocation } from "react-router-dom";
import { useSidebar } from "../context/SidebarContext";
import "./../assets/css/TopNav.css";

const TopNav = () => {
  const { collapsed } = useSidebar();
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const profileRef = useRef(null);

  // Sync search with URL
  useEffect(() => {
    const query = new URLSearchParams(location.search).get("q") || "";
    setSearchTerm(query);
  }, [location.search]);

  // Debounce search navigation
  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchTerm.trim() !== "") {
        navigate(`/search?q=${encodeURIComponent(searchTerm.trim())}`);
      }
    }, 500);
    return () => clearTimeout(timer);
  }, [searchTerm, navigate]);

  // Close profile menu on outside click
  useEffect(() => {
    const handleClick = (e) => {
      if (profileRef.current && !profileRef.current.contains(e.target)) {
        setIsProfileMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    sessionStorage.clear();
    navigate("/");
  };

  const username = localStorage.getItem("username") || "User";
  const initials = username.charAt(0).toUpperCase();

  return (
    <div className={`topnav ${collapsed ? "collapsed" : ""}`}>
      {/* ── Search Bar ── */}
      <div className="search-group">
        <svg viewBox="0 0 24 24" aria-hidden="true" className="search-icon">
          <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z" />
        </svg>
        <input
          id="query"
          className="search-input"
          type="search"
          placeholder="Search movies..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* ── Right side ── */}
      <div className="topnav-right">
        {/* Profile avatar */}
        <div className="profile-container" ref={profileRef}>
          <button
            className="profile-avatar"
            onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
            aria-label="Profile menu"
          >
            {initials}
          </button>

          {isProfileMenuOpen && (
            <div className="profile-menu">
              <div className="profile-menu-header">
                <div className="profile-menu-avatar">{initials}</div>
                <div>
                  <div className="profile-menu-name">{username}</div>
                  <div className="profile-menu-role">Member</div>
                </div>
              </div>
              <div className="profile-menu-divider" />
              <ul>
                <li>
                  <button onClick={() => { navigate("/payment"); setIsProfileMenuOpen(false); }}>
                    💳 Subscription
                  </button>
                </li>
                <li>
                  <button className="logout-item" onClick={handleLogout}>
                    🚪 Logout
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TopNav;
