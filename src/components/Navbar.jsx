import React, { useState } from 'react';
import './Navbar.css';
import { Menu, X, Play, Apple } from 'lucide-react';
import Logo from '../assets/CatatUang.png';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t, i18n } = useTranslation();

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
          <a href="#fitur" className="nav-link">{t('nav.features')}</a>
          <a href="#kenapa" className="nav-link">{t('nav.why')}</a>
          <a href="#cocok" className="nav-link">{t('nav.suitable')}</a>
          <a href="#langganan" className="nav-link">{t('nav.pricing')}</a>
          <a href="#benefits" className="nav-link">{t('nav.benefits')}</a>
          <a href="#testimoni" className="nav-link">{t('nav.testimonials')}</a>
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
          <div className="lang-switcher-flags">
            <button
              className={`lang-btn ${i18n.language === 'id' ? 'active' : ''}`}
              onClick={() => i18n.changeLanguage('id')}
              aria-label="Indonesian"
            >
              <img className='flag-style' src="https://flagcdn.com/w40/id.png" alt="ID" />
            </button>
            <button
              className={`lang-btn ${i18n.language === 'en' ? 'active' : ''}`}
              onClick={() => i18n.changeLanguage('en')}
              aria-label="English"
            >
              <img className='flag-style' src="https://flagcdn.com/w40/gb.png" alt="EN" />
            </button>
          </div>
        </div>

        <button className="mobile-menu-btn" onClick={toggleMenu} aria-label="Toggle menu">
          {isOpen ? <X size={24} color="var(--primary-text)" /> : <Menu size={24} color="var(--primary-text)" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="mobile-menu">
          <a href="#fitur" className="mobile-nav-link" onClick={toggleMenu}>{t('nav.features')}</a>
          <a href="#kenapa" className="mobile-nav-link" onClick={toggleMenu}>{t('nav.why')}</a>
          <a href="#cocok" className="mobile-nav-link" onClick={toggleMenu}>{t('nav.suitable')}</a>
          <a href="#langganan" className="mobile-nav-link" onClick={toggleMenu}>{t('nav.pricing')}</a>
          <a href="#benefits" className="mobile-nav-link" onClick={toggleMenu}>{t('nav.benefits')}</a>
          <a href="#testimoni" className="mobile-nav-link" onClick={toggleMenu}>{t('nav.testimonials')}</a>
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
            <div className="lang-switcher-flags">
              <button
                className={`lang-btn ${i18n.language === 'id' ? 'active' : ''}`}
                onClick={() => i18n.changeLanguage('id')}
                aria-label="Indonesian"
              >
                <img src="https://flagcdn.com/w40/id.png" className='flag-style' alt="ID" />
              </button>
              <button
                className={`lang-btn ${i18n.language === 'en' ? 'active' : ''}`}
                onClick={() => i18n.changeLanguage('en')}
                aria-label="English"
              >
                <img src="https://flagcdn.com/w40/gb.png" className='flag-style' alt="EN" />
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
