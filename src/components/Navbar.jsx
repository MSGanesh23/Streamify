import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { FiHome, FiHeart, FiLogOut, FiCreditCard, FiMenu, FiX } from "react-icons/fi";
import { useSidebar } from "../context/SidebarContext";
import "./../assets/css/Navbar.css";

const Navbar = () => {
  const { collapsed, toggle } = useSidebar();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    sessionStorage.clear();
    navigate("/");
  };

  const isActive = (path) => location.pathname === path;

  return (
    <nav className={`navbar ${collapsed ? "collapsed" : ""}`}>

      {/* ── Toggle button ── */}
      <button className="toggle-btn" onClick={toggle} aria-label="Toggle sidebar">
        {collapsed ? <FiMenu /> : <FiX />}
      </button>

      {/* ── Brand ── */}
      <div className="site-brand">
        {collapsed ? (
          <span className="brand-icon">S</span>
        ) : (
          <span className="brand-full">Streamify</span>
        )}
      </div>

      {/* ── Divider ── */}
      <div className="nav-divider" />

      {/* ── Menu ── */}
      <ul className="menu">
        <li>
          <Link
            to="/userDashboard"
            className={`nav-link ${isActive("/userDashboard") ? "active" : ""}`}
          >
            <span className="nav-icon"><FiHome /></span>
            {!collapsed && <span className="nav-label">Home</span>}
          </Link>
        </li>
        <li>
          <Link
            to="/my-list"
            className={`nav-link ${isActive("/my-list") ? "active" : ""}`}
          >
            <span className="nav-icon"><FiHeart /></span>
            {!collapsed && <span className="nav-label">My List</span>}
          </Link>
        </li>
      </ul>

      {/* ── Spacer ── */}
      <div style={{ flex: 1 }} />

      {/* ── Bottom actions ── */}
      <div className="sidebar-bottom">
        <button
          className={`nav-link ${isActive("/payment") ? "active" : ""}`}
          onClick={() => navigate("/payment")}
        >
          <span className="nav-icon"><FiCreditCard /></span>
          {!collapsed && <span className="nav-label">Subscription</span>}
        </button>

        <button className="nav-link logout" onClick={handleLogout}>
          <span className="nav-icon"><FiLogOut /></span>
          {!collapsed && <span className="nav-label">Logout</span>}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
