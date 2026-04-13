import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/logo.png"; // make sure this path is correct

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = () => {
    setOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-container">

        {/* LOGO (Clickable) */}
        <Link to="/" className="logo">
          <img src={logo} alt="Analytics Avenue Logo" />
          
        </Link>

        {/* DESKTOP MENU */}
        <div className="nav-links">
          <NavLink to="/programs" className={({ isActive }) => isActive ? "active-link" : ""}>
            Programs
          </NavLink>

          <NavLink to="/curriculum" className={({ isActive }) => isActive ? "active-link" : ""}>
            Curriculum
          </NavLink>

          <NavLink to="/projects" className={({ isActive }) => isActive ? "active-link" : ""}>
            Projects
          </NavLink>

          <NavLink to="/reviews" className={({ isActive }) => isActive ? "active-link" : ""}>
            Reviews
          </NavLink>

          <NavLink to="/contact" className={({ isActive }) => isActive ? "active-link" : ""}>
            Contact
          </NavLink>

          <button className="cta-btn">Enroll Now</button>
        </div>

        {/* MOBILE ICON */}
        <div className="menu-icon" onClick={() => setOpen(!open)}>
          {open ? (
            <span style={{ fontSize: "24px" }}>✖</span>
          ) : (
            <span style={{ fontSize: "24px" }}>☰</span>
          )}
        </div>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="mobile-menu">
          <NavLink to="/programs" onClick={handleLinkClick}>Programs</NavLink>
          <NavLink to="/curriculum" onClick={handleLinkClick}>Curriculum</NavLink>
          <NavLink to="/projects" onClick={handleLinkClick}>Projects</NavLink>
          <NavLink to="/reviews" onClick={handleLinkClick}>Reviews</NavLink>
          <NavLink to="/contact" onClick={handleLinkClick}>Contact</NavLink>

          <button className="cta-btn" style={{ marginTop: "10px" }}>
            Enroll Now
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;