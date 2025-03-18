import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../index.css";
import logo from "../assets/logo.png";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Close menu when navigating
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="JP Radiology Logo" />
      </div>

      {/* Hamburger Icon */}
      <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </div>

      {/* Navigation Menu */}
      <nav className={`nav ${isOpen ? "open" : ""}`}>
        <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")} onClick={closeMenu}>Home</NavLink>
        <NavLink to="/ct-center" className={({ isActive }) => (isActive ? "active" : "")} onClick={closeMenu}>CT Center</NavLink>
        <NavLink to="/mri-center" className={({ isActive }) => (isActive ? "active" : "")} onClick={closeMenu}>MRI Center</NavLink>
        <NavLink to="/pathology" className={({ isActive }) => (isActive ? "active" : "")} onClick={closeMenu}>Pathology</NavLink>
        <NavLink to="/doctors" className={({ isActive }) => (isActive ? "active" : "")} onClick={closeMenu}>Doctors & Team</NavLink>
        <NavLink to="/contact" className={({ isActive }) => (isActive ? "active" : "")} onClick={closeMenu}>Contact Us</NavLink>
        <NavLink to="/media" className={({ isActive }) => (isActive ? "active" : "")} onClick={closeMenu}>Media</NavLink>
      </nav>
    </header>
  );
};

export default Header;
