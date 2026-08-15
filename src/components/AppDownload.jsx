import React from 'react';
import './AppDownload.css';
import Button from './Button';
import { Apple, Play } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import catatuangImg from '../assets/CatatUang.png';

const AppDownload = () => {
  const { t } = useTranslation();
  return (
    <section className="section-light download-section">
      <div className="container">
        <div className="download-container">
          <div className="download-content">
            <h2 className="text-display-secondary download-title">
              {t('download.title1')}<span className="text-accent">{t('download.title2')}</span>{t('download.title3')}
            </h2>
            <p className="text-body-large download-subtitle">
              {t('download.subtitle')}
            </p>

            <div className="download-actions">
              <a href="https://play.google.com/store/apps/details?id=com.catatuang.android&hl=id" target="_blank" rel="noopener noreferrer">
                <Button variant="secondary" className="store-btn btn-hover">
                  <Play size={24} />
                  <div className="btn-text">
                    <span className="text-tiny">{t('download.getItOn')}</span>
                    <span className="text-body-bold">Google Play</span>
                  </div>
                </Button>
              </a>
              <a href="https://apps.apple.com/eg/app/catat-uang-keuangan-budget/id6759821839" target="_blank" rel="noopener noreferrer">
                <Button variant="secondary" className="store-btn">
                  <Apple size={24} />
                  <div className="btn-text">
                    <span className="text-tiny">{t('download.downloadOnThe')}</span>
                    <span className="text-body-bold">App Store</span>
                  </div>
                </Button>
              </a>
            </div>
          </div>

          <div className="download-qr desktop-only">
            <div className="qr-box">
              <img src={catatuangImg} alt="QR iOS" width={100} height={100} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppDownload;
