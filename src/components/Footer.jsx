import React from 'react';
import './Footer.css';
import Logo from '../assets/CatatUangNoBG.png';
import instagram from '../assets/instagram.svg';
import threads from '../assets/threads.svg';
import tiktok from '../assets/tiktok.svg';
import whatsapp from '../assets/whatsapp.svg';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();
  const phoneNumber = "62895387235555"; // Use country code without +
  const message = encodeURIComponent(t('footer.waMessage'));
  return (
    <footer className="footer section-dark">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="footer-logo">
              {/* <div className="logo-mark">
              </div> */}
              <img src={Logo} alt="Logo" width={32} height={32} />
              <span className="logo-text text-pure-white">Catat Uang</span>
            </div>
            <p className="footer-desc text-caption-semibold">
              {t('footer.tagline')}
            </p>
            <div className="footer-socials">
              <a href="https://www.instagram.com/catat.uang" target="_blank" rel="noopener noreferrer" className="social-link"><img src={instagram} alt="Logo" width={24} height={24} /></a>
              <a href="https://www.threads.com/@catat.uang" target="_blank" rel="noopener noreferrer" className="social-link"><img src={threads} alt="Logo" width={24} height={24} /></a>
              <a href="https://www.tiktok.com/@catat.uang" target="_blank" rel="noopener noreferrer" className="social-link"><img src={tiktok} alt="Logo" width={24} height={24} /></a>
              <a href={`https://wa.me/${phoneNumber}?text=${message}`} target="_blank" rel="noopener noreferrer" className="social-link"><img src={whatsapp} alt="Logo" width={21} height={21} /></a>
            </div>
          </div>

          {/* <div className="footer-links">
            <h4 className="footer-heading text-caption-semibold">About Us</h4>
            <a href="#" className="footer-link text-caption">Careers</a>
            <a href="#" className="footer-link text-caption">Press</a>
            <a href="#" className="footer-link text-caption">Community</a>

          </div> */}

          {/* <div className="footer-links">
            <h4 className="footer-heading text-caption-semibold">Products</h4>
            <a href="#" className="footer-link text-caption">Budgeting</a>
            <a href="#" className="footer-link text-caption">Expense Tracking</a>
            <a href="#" className="footer-link text-caption">Pro Version</a>
          </div> */}

          {/* <div className="footer-links">
            <h4 className="footer-heading text-caption-semibold">Support</h4>
            <a href="#" className="footer-link text-caption">Help Center</a>
            <a href="#" className="footer-link text-caption">Contact Us</a>
            <a href="#" className="footer-link text-caption">Fees</a>
          </div> */}
        </div>

        <div className="footer-bottom">
          <p className="text-muted">© 2026 Catat Uang. {t('footer.rights')}</p>
          <div className="footer-legal">
            <a href="https://wind-dingo-22a.notion.site/Privacy-Policy-Catat-Uang-23462b57056480c7b347d52b75c11c5d" target='_blank' rel="noopener noreferrer" className="text-muted">Privacy Policy</a>
            <a href="https://play.google.com/store/apps/details?id=com.catatuang.android"
              target="_blank"
              rel="noopener noreferrer" className="text-muted">Google Play</a>
            <a href="https://apps.apple.com/eg/app/catat-uang-keuangan-budget/id6759821839"
              target="_blank"
              rel="noopener noreferrer" className="text-muted">App Store</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
