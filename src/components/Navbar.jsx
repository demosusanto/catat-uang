import React, { useState } from 'react';
import './Navbar.css';
import { Menu, X, Play, Apple } from 'lucide-react';
import Logo from '../assets/CatatUang.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-left">
          {/* Mock Logo */}
          <a href='#hero'>
            <div className="navbar-logo">
              <img className='logo-mark' src={Logo} alt="Logo" width={32} height={32} />
              <span className="logo-text">Catat Uang</span>
            </div>
          </a>
        </div>

        <div className="navbar-center">
          <a href="#fitur" className="nav-link">Fitur</a>
          <a href="#kenapa" className="nav-link">Kenapa Catat Uang</a>
          <a href="#cocok" className="nav-link">Cocok Untuk</a>
        </div>

        <div className="navbar-right">
          <a href="https://play.google.com/store/apps/details?id=com.catatuang.android"
            target="_blank"
            rel="noopener noreferrer">
            <div className="store-badge">
              <Play size={20} /> Google Play
            </div>
          </a>
          <a href="https://apps.apple.com/eg/app/catat-uang-keuangan-budget/id6759821839"
            target="_blank"
            rel="noopener noreferrer">
            <div className="store-badge">
              <Apple size={20} /> App Store
            </div>
          </a>
        </div>

        <button className="mobile-menu-btn" onClick={toggleMenu} aria-label="Toggle menu">
          {isOpen ? <X size={24} color="var(--primary-text)" /> : <Menu size={24} color="var(--primary-text)" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="mobile-menu">
          <a href="#fitur" className="mobile-nav-link" onClick={toggleMenu}>Fitur</a>
          <a href="#kenapa" className="mobile-nav-link" onClick={toggleMenu}>Kenapa Catat Uang</a>
          <a href="#cocok" className="mobile-nav-link" onClick={toggleMenu}>Cocok Untuk</a>
          <div className="mobile-menu-badges">
            <a href="https://play.google.com/store/apps/details?id=com.catatuang.android"
              target="_blank"
              rel="noopener noreferrer"
              className="store-badge-link">
              <div className="store-badge">
                <Play size={20} /> Google Play
              </div>
            </a>
            <a href="https://apps.apple.com/eg/app/catat-uang-keuangan-budget/id6759821839"
              target="_blank"
              rel="noopener noreferrer"
              className="store-badge-link">
              <div className="store-badge">
                <Apple size={20} /> App Store
              </div>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
