import React from 'react';
import './Features.css';
import {
  MessageSquare, Scan, Mic,
  ChartNoAxesCombined, FileText, Brain,
  Calendar, CalendarCog, CalendarDays,
  CloudBackup, Download, ShieldCheck
} from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Features = () => {
  const { t } = useTranslation();
  const featureList = [
    {
      icon: <MessageSquare size={32} color="var(--binance-yellow)" />,
      title: t('features.items.0.title'),
      description: t('features.items.0.description')
    },
    {
      icon: <Mic size={32} color="var(--binance-yellow)" />,
      title: t('features.items.1.title'),
      description: t('features.items.1.description')
    },
    {
      icon: <Scan size={32} color="var(--binance-yellow)" />,
      title: t('features.items.2.title'),
      description: t('features.items.2.description')
    },
    {
      icon: <ChartNoAxesCombined size={32} color="var(--binance-yellow)" />,
      title: t('features.items.3.title'),
      description: t('features.items.3.description')
    },
    {
      icon: <FileText size={32} color="var(--binance-yellow)" />,
      title: t('features.items.4.title'),
      description: t('features.items.4.description')
    },
    {
      icon: <Brain size={32} color="var(--binance-yellow)" />,
      title: t('features.items.5.title'),
      description: t('features.items.5.description')
    },
    {
      icon: <Calendar size={32} color="var(--binance-yellow)" />,
      title: t('features.items.6.title'),
      description: t('features.items.6.description')
    },
    {
      icon: <CalendarCog size={32} color="var(--binance-yellow)" />,
      title: t('features.items.7.title'),
      description: t('features.items.7.description')
    },
    {
      icon: <CalendarDays size={32} color="var(--binance-yellow)" />,
      title: t('features.items.8.title'),
      description: t('features.items.8.description')
    },
    {
      icon: <CloudBackup size={32} color="var(--binance-yellow)" />,
      title: t('features.items.9.title'),
      description: t('features.items.9.description')
    },
    {
      icon: <Download size={32} color="var(--binance-yellow)" />,
      title: t('features.items.10.title'),
      description: t('features.items.10.description')
    },
    {
      icon: <ShieldCheck size={32} color="var(--binance-yellow)" />,
      title: t('features.items.11.title'),
      description: t('features.items.11.description')
    }
  ];

  return (
    <section className="section-dark features-section" id="fitur">
      <div className="container">
        <div className="features-header">
          <h2 className="text-display-secondary">{t('features.title1')}<span className="text-accent">{t('features.title2')}</span></h2>
          <p className="text-body-large features-subtitle">
            {t('features.subtitle')}
          </p>
        </div>

        <div className="features-grid">
          {featureList.map((feature, idx) => (
            <div key={idx} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="text-heading-2 feature-title">{feature.title}</h3>
              <p className="text-body feature-desc">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
