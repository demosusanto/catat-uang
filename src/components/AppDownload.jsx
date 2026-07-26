import React from 'react';
import './AppDownload.css';
import Button from './Button';
import { Apple, Play, QrCode } from 'lucide-react';
import qrAndroid from '../assets/QR_android.png';
import qrIOS from '../assets/QR_ios.png';

const AppDownload = () => {
  return (
    <section className="section-light download-section">
      <div className="container">
        <div className="download-container">
          <div className="download-content">
            <h2 className="text-display-secondary download-title">
              Mulai <span className="text-accent">Catat Keuanganmu</span> Sekarang
            </h2>
            <p className="text-body-large download-subtitle">
              Catat uang masuk & keluar = hidup lebih terarah. Install sekarang dan kendalikan keuanganmu.
            </p>

            <div className="download-actions">
              <a href="https://play.google.com/store/apps/details?id=com.catatuang.android&hl=id" target="_blank" rel="noopener noreferrer">
                <Button variant="secondary" className="store-btn btn-hover">
                  <Play size={24} />
                  <div className="btn-text">
                    <span className="text-tiny">GET IT ON</span>
                    <span className="text-body-bold">Google Play</span>
                  </div>
                </Button>
              </a>
              <a href="https://apps.apple.com/eg/app/catat-uang-keuangan-budget/id6759821839" target="_blank" rel="noopener noreferrer">
                <Button variant="secondary" className="store-btn">
                  <Apple size={24} />
                  <div className="btn-text">
                    <span className="text-tiny">Download on the</span>
                    <span className="text-body-bold">App Store</span>
                  </div>
                </Button>
              </a>
            </div>
          </div>

          <div className="download-qr desktop-only">
            <div className="qr-box">
              {/* <QrCode size={100} color="var(--ink)" /> */}
              <img src={qrAndroid} alt="QR Android" width={100} height={100} />
            </div>
            <p className="text-small qr-label">Scan to Download</p>
            <p className="text-tiny qr-sublabel">Android</p>
          </div>

          <div className="download-qr desktop-only">
            <div className="qr-box">
              {/* <QrCode size={100} color="var(--ink)" /> */}
              <img src={qrIOS} alt="QR iOS" width={100} height={100} />
            </div>
            <p className="text-small qr-label">Scan to Download</p>
            <p className="text-tiny qr-sublabel">iOS</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppDownload;
