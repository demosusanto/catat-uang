import React from 'react';
import './Suitable.css';
import {
    Briefcase, GraduationCap, Home, Store
} from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Suitable = () => {
    const { t } = useTranslation();
    const suitableList = [
        {
            icon: <Briefcase size={24} color="var(--binance-yellow)" />,
            title: t('suitable.items.0.title'),
            description: t('suitable.items.0.description')
        },
        {
            icon: <GraduationCap size={24} color="var(--binance-yellow)" />,
            title: t('suitable.items.1.title'),
            description: t('suitable.items.1.description')
        },
        {
            icon: <Home size={24} color="var(--binance-yellow)" />,
            title: t('suitable.items.2.title'),
            description: t('suitable.items.2.description')
        },
        {
            icon: <Store size={24} color="var(--binance-yellow)" />,
            title: t('suitable.items.3.title'),
            description: t('suitable.items.3.description')
        }
    ];

    return (
        <section className="section-dark suitable-section" id="cocok">
            <div className="container-suitable">
                <div className="suitable-header">
                    <h2 className="text-display-secondary">
                        {t('suitable.title1')}<span className="text-accent">{t('suitable.title2')}</span>
                    </h2>
                    <p className="text-body-large suitable-subtitle">
                        {t('suitable.subtitle')}
                    </p>
                </div>

                <div className="suitable-grid">
                    {suitableList.map((suitableList, idx) => (
                        <div key={idx} className="suitable-card">
                            <div className="suitable-icon">{suitableList.icon}</div>
                            <h3 className="text-heading-2 suitable-title">{suitableList.title}</h3>
                            <p className="text-body suitable-desc">{suitableList.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Suitable;
