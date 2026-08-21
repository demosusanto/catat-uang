import React, { useEffect, useState, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { ExternalLink, ArrowLeft, Copy, Check, Smartphone, Play, Apple } from 'lucide-react';
import logo from '../assets/CatatUangNoBG.png';
import './RedirectionPage.css';

const PLAY_STORE_URL = 'https://play.google.com/store/apps/details?id=com.catatuang.android';
const APP_STORE_URL = 'https://apps.apple.com/app/catat-uang-keuangan-budget/id6759821839';

// Helper to detect user's operating system
function detectOS() {
  if (typeof window === 'undefined' || !window.navigator) return 'desktop';
  const userAgent = navigator.userAgent || navigator.vendor || window.opera || '';

  // iOS detection (iPhone, iPad, iPod, or iPadOS Safari on Mac platform with touch)
  if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
    return 'ios';
  }
  if (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1) {
    return 'ios';
  }

  // Android detection
  if (/android/i.test(userAgent)) {
    return 'android';
  }

  return 'desktop';
}

export default function RedirectionPage() {
  const { t, i18n } = useTranslation();
  const [copied, setCopied] = useState(false);
  const [userOS, setUserOS] = useState('desktop');

  useEffect(() => {
    setUserOS(detectOS());
  }, []);

  // Compute the deep link target URL with custom schema catatuang://
  const deepLinkUrl = useMemo(() => {
    const pathname = window.location.pathname || '';
    const search = window.location.search || '';
    const hash = window.location.hash || '';

    // Check if an explicit target URL is passed in search query params
    const searchParams = new URLSearchParams(search);
    const explicitUrl = searchParams.get('url') || searchParams.get('target_url') || searchParams.get('deeplink');
    if (explicitUrl && explicitUrl.startsWith('catatuang://')) {
      return explicitUrl;
    }

    // Extract everything following /redirection/ or /redirection
    const subPath = pathname.replace(/^.*?\/redirection\/?/i, '');
    const cleanSubPath = subPath.replace(/^\/+/, '');

    if (cleanSubPath) {
      return `catatuang://${cleanSubPath}${search}${hash}`;
    }

    // If no subpath is provided, redirect to scheme root with search and hash
    return `catatuang://${search}${hash}`;
  }, []);

  const handleOpenApp = () => {
    window.location.href = deepLinkUrl;
  };

  const handleCopyLink = () => {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(deepLinkUrl).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
      });
    }
  };

  useEffect(() => {
    // Attempt automatic redirection upon loading
    const timer = setTimeout(() => {
      window.location.href = deepLinkUrl;
    }, 150);

    return () => clearTimeout(timer);
  }, [deepLinkUrl]);

  return (
    <div className="redirection-page">
      {/* Background ambient glowing orbs */}
      <div className="redirection-ambient-glow" />

      {/* Top bar header */}
      <header className="redirection-header">
        <a href="/" className="redirection-brand">
          <img src={logo} alt="Catat Uang" className="redirection-brand-logo" />
          <span className="redirection-brand-name">Catat Uang</span>
        </a>

        <button
          className="redirection-lang-btn"
          onClick={() => i18n.changeLanguage(i18n.language === 'id' ? 'en' : 'id')}
          aria-label="Change language"
        >
          {i18n.language === 'id' ? 'EN' : 'ID'}
        </button>
      </header>

      {/* Main card container */}
      <main className="redirection-main">
        <div className="redirection-card">
          {/* Animated App Icon */}
          <div className="redirection-icon-wrapper">
            <div className="redirection-pulse-ring" />
            <div className="redirection-pulse-ring delay" />
            <div className="redirection-icon-box">
              <img src={logo} alt="Catat Uang Icon" className="redirection-app-icon" />
            </div>
          </div>

          {/* Status and Title */}
          <div className="redirection-status-badge">
            <span className="redirection-status-dot" />
            <span>{t('redirection.status', 'Membuka Catat Uang...')}</span>
          </div>

          <h1 className="redirection-title">
            {t('redirection.title', 'Mengalihkan ke Aplikasi')}
          </h1>

          <p className="redirection-desc">
            {t(
              'redirection.desc',
              'Jika aplikasi Catat Uang tidak terbuka secara otomatis dalam beberapa detik, silakan klik tombol di bawah.'
            )}
          </p>

          {/* Primary Action Button */}
          <div className="redirection-actions">
            <a
              href={deepLinkUrl}
              onClick={handleOpenApp}
              className="redirection-btn-primary"
            >
              <Smartphone size={20} />
              <span>{t('redirection.openAppBtn', 'Buka di Aplikasi')}</span>
              <ExternalLink size={18} className="redirection-btn-arrow" />
            </a>

            {/* Deep link info & Copy option */}
            <div className="redirection-deeplink-box">
              <span className="redirection-deeplink-text" title={deepLinkUrl}>
                {deepLinkUrl}
              </span>
              <button
                type="button"
                className="redirection-copy-btn"
                onClick={handleCopyLink}
                title={t('redirection.copy', 'Salin Link')}
              >
                {copied ? <Check size={16} className="copied" /> : <Copy size={16} />}
                <span>{copied ? t('redirection.copied', 'Tersalin!') : t('redirection.copy', 'Salin')}</span>
              </button>
            </div>
          </div>

          {/* Fallback / App Store Section based on Detected OS */}
          <div className="redirection-fallback-card">
            <div className="redirection-fallback-content">
              <div className="redirection-fallback-text">
                <span className="redirection-fallback-title">
                  {t('redirection.notInstalledTitle', 'Belum punya aplikasi Catat Uang?')}
                </span>
                <span className="redirection-fallback-subtitle">
                  {userOS === 'ios'
                    ? t('redirection.notInstalledSubtitleIos', 'Download gratis di Apple App Store.')
                    : userOS === 'android'
                    ? t('redirection.notInstalledSubtitleAndroid', 'Download gratis di Google Play Store.')
                    : t('redirection.notInstalledSubtitleGeneral', 'Tersedia gratis di Google Play Store dan App Store.')}
                </span>
              </div>

              {/* Dynamic store buttons according to OS */}
              <div className="redirection-store-buttons">
                {userOS === 'android' && (
                  <a
                    href={PLAY_STORE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="redirection-btn-store is-primary-store"
                  >
                    <Play size={18} />
                    <span>{t('redirection.downloadPlayStore', 'Download di Google Play')}</span>
                  </a>
                )}

                {userOS === 'ios' && (
                  <a
                    href={APP_STORE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="redirection-btn-store is-primary-store"
                  >
                    <Apple size={18} />
                    <span>{t('redirection.downloadAppStore', 'Download di App Store')}</span>
                  </a>
                )}

                {userOS === 'desktop' && (
                  <div className="redirection-desktop-stores">
                    <a
                      href={PLAY_STORE_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="redirection-btn-store"
                    >
                      <Play size={18} />
                      <span>Google Play</span>
                    </a>
                    <a
                      href={APP_STORE_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="redirection-btn-store"
                    >
                      <Apple size={18} />
                      <span>App Store</span>
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Back to Home Link */}
          <a href="/" className="redirection-home-link">
            <ArrowLeft size={16} />
            <span>{t('redirection.backHome', 'Kembali ke Beranda')}</span>
          </a>
        </div>
      </main>

      <footer className="redirection-footer">
        <p>© {new Date().getFullYear()} Catat Uang. {t('footer.rights', 'All rights reserved.')}</p>
      </footer>
    </div>
  );
}
