// src/Navbar.js

import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // We'll define this later

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          SkillupGrade
        </Link>
        <div className="menu-icon" onClick={toggleMenu}>
          <i className={isOpen ? "fas fa-times" : "fas fa-bars"} />
        </div>
        <ul className={isOpen ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/Dashboard" className="nav-links" onClick={toggleMenu}>
              Dashboard
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/Profile" className="nav-links" onClick={toggleMenu}>
              Profile
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/Gemini" className="nav-links" onClick={toggleMenu}>
              Career Copilot
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/Community" className="nav-links" onClick={toggleMenu}>
              Community
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/FindMentors" className="nav-links" onClick={toggleMenu}>
              Find Mentors
            </Link>
          </li>
          {/* <li className="nav-item">
            <Link to="/services" className="nav-links" onClick={toggleMenu}>
              Services
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-links" onClick={toggleMenu}>
              Contact
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-links" onClick={toggleMenu}>
              About
            </Link>
          </li> */}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
