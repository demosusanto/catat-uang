import React from 'react';
import './Hero.css';
import Button from './Button';
import homescreen from '../assets/home-screen.webp';

const Hero = () => {
  return (
    <section className="section-light hero-section" id="hero">
      <div className="container hero-container">
        <div className="hero-content">
          <div className="mini-badge">
            <span className='text-body-small'>🚀 Gratis &amp; Tanpa Login</span>
          </div>
          <h1 className="text-display-hero hero-title">
            Kelola Keuangan <span className="text-accent">Lebih Pintar</span>
          </h1>
          <p className="text-body-large hero-subtitle">
            Catat pengeluaran, pemasukan, dan atur budget harian dengan mudah. Didukung AI untuk input transaksi lebih cepat.
          </p>
          <div className="hero-actions">
            <Button onClick={() => window.open('https://play.google.com/store/apps/details?id=com.catatuang.android')} variant="primary-pill" className="hero-btn">
              Download di Google Play
            </Button>
            <Button onClick={() => window.open('https://apps.apple.com/eg/app/catat-uang-keuangan-budget/id6759821839')} variant="secondary" className="hero-btn-outline">
              Download di App Store
            </Button>
          </div>
          <div className="text-mini">
            <span>Tersedia di Android & iOS • 5.000+ download</span>
          </div>
        </div>

        <div className="hero-visual">
          <div className="bg-golden-glow visual-glow"></div>
          <div className="mockup-container">
            {/* Placeholder for actual app screenshot */}

            <img className='homeScreenImg' src={homescreen} alt="image" />



            {/* <div className="mockup-screen">
              <div className="mockup-header">
                <div className="mockup-balance">
                  <span className="mockup-label">Total Balance</span>
                  <span className="mockup-amount">Rp 12.500.000</span>
                </div>
              </div>
              <div className="mockup-chart">
                <div className="chart-bar" style={{ height: '60%' }}></div>
                <div className="chart-bar" style={{ height: '80%' }}></div>
                <div className="chart-bar" style={{ height: '40%' }}></div>
                <div className="chart-bar" style={{ height: '100%', backgroundColor: 'var(--binance-yellow)' }}></div>
                <div className="chart-bar" style={{ height: '70%' }}></div>
              </div>
              <div className="mockup-transactions">
                <div className="mockup-tx">
                  <div className="tx-icon"></div>
                  <div className="tx-details">
                    <span className="tx-title">Groceries</span>
                    <span className="tx-time">Today, 10:24 AM</span>
                  </div>
                  <span className="tx-amount text-negative">-Rp 350.000</span>
                </div>
                <div className="mockup-tx">
                  <div className="tx-icon" style={{ backgroundColor: 'var(--crypto-green)' }}></div>
                  <div className="tx-details">
                    <span className="tx-title">Salary</span>
                    <span className="tx-time">Yesterday</span>
                  </div>
                  <span className="tx-amount text-positive">+Rp 8.000.000</span>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
