import React from 'react';
import './Why.css';
import {
    ChevronsUp, UserKey, GlobeOff, Gift
} from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Why = () => {
    const { t } = useTranslation();
    const whyList = [
        {
            icon: <ChevronsUp size={24} color="var(--pure-white)" />,
            title: t('why.items.0.title'),
            description: t('why.items.0.description')
        },
        {
            icon: <UserKey size={24} color="var(--pure-white)" />,
            title: t('why.items.1.title'),
            description: t('why.items.1.description')
        },
        {
            icon: <GlobeOff size={24} color="var(--pure-white)" />,
            title: t('why.items.2.title'),
            description: t('why.items.2.description')
        },
        {
            icon: <Gift size={24} color="var(--pure-white)" />,
            title: t('why.items.3.title'),
            description: t('why.items.3.description')
        }
    ];

    return (
        <section className="section-light why-section" id="kenapa">
            <div className="container-why">
                <div className="why-header">
                    <h2 className="text-display-secondary">
                        {t('why.title1')}<span className="text-accent">{t('why.title2')}</span>{t('why.title3')}
                    </h2>
                    <p className="text-body-large why-subtitle">
                        {t('why.subtitle')}
                    </p>
                </div>

                <div className="why-grid">
                    {whyList.map((whylist, idx) => (
                        <div key={idx} className="why-card">
                            <div className="why-icon">{whylist.icon}</div>
                            <h3 className="text-heading-2 why-title">{whylist.title}</h3>
                            <p className="text-body why-desc">{whylist.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Why;
