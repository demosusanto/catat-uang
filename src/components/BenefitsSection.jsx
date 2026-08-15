import React from 'react';
import './BenefitsSection.css';
import { useTranslation } from 'react-i18next';

const BenefitsSection = () => {
    const { t } = useTranslation();
    const benefits = [
        {
            id: 1,
            title: t('benefits.items.0.title'),
            desc: t('benefits.items.0.desc'),
            icon: <svg viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"></line></svg>
        },
        {
            id: 2,
            title: t('benefits.items.1.title'),
            desc: t('benefits.items.1.desc'),
            icon: <svg viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
        },
        {
            id: 3,
            title: t('benefits.items.2.title'),
            desc: t('benefits.items.2.desc'),
            icon: <svg viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
        },
        {
            id: 4,
            title: t('benefits.items.3.title'),
            desc: t('benefits.items.3.desc'),
            icon: <svg viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>
        },
        {
            id: 5,
            title: t('benefits.items.4.title'),
            desc: t('benefits.items.4.desc'),
            icon: <svg viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>
        },
        {
            id: 6,
            title: t('benefits.items.5.title'),
            desc: t('benefits.items.5.desc'),
            icon: <svg viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path><line x1="7" y1="7" x2="7.01" y2="7"></line></svg>
        },
        {
            id: 7,
            title: t('benefits.items.6.title'),
            desc: t('benefits.items.6.desc'),
            icon: <svg viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2"></path><path d="M22 13v-2h-5a2 2 0 0 0-2 2v0a2 2 0 0 0 2 2h5z"></path></svg>
        },
        {
            id: 8,
            title: t('benefits.items.7.title'),
            desc: t('benefits.items.7.desc'),
            icon: <svg viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
        },
        {
            id: 9,
            title: t('benefits.items.8.title'),
            desc: t('benefits.items.8.desc'),
            icon: <svg viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path></svg>
        },
        {
            id: 10,
            title: t('benefits.items.9.title'),
            desc: t('benefits.items.9.desc'),
            icon: <svg viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="13" r="8"></circle><polyline points="12 9 12 13 14 15"></polyline><line x1="4.5" y1="3.5" x2="6.5" y2="5.5"></line><line x1="19.5" y1="3.5" x2="17.5" y2="5.5"></line></svg>
        },
        {
            id: 11,
            title: t('benefits.items.10.title'),
            desc: t('benefits.items.10.desc'),
            icon: <svg viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
        },
        {
            id: 12,
            title: t('benefits.items.11.title'),
            desc: t('benefits.items.11.desc'),
            icon: <svg viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22a10 10 0 1 1 0-20c2.76 0 5 2.24 5 5 0 2.1-1.32 3.96-3.21 4.68A2 2 0 0 0 12.5 14h1.92c2.73 0 5.17 1.95 5.51 4.66.19 1.5-.23 3.03-1.14 4.19-.88 1.13-2.14 1.77-3.6 1.77-1.1 0-2-.9-2-2v-1.45c0-.64-.47-1.17-1.1-1.17-.6 0-1.1.53-1.1 1.17V22z"></path><circle cx="7.5" cy="10.5" r="1.5"></circle><circle cx="10.5" cy="6.5" r="1.5"></circle><circle cx="14.5" cy="7.5" r="1.5"></circle></svg>
        },
        {
            id: 13,
            title: t('benefits.items.12.title'),
            desc: t('benefits.items.12.desc'),
            icon: <svg viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
        }
    ];

    return (
        <section className="benefits-section" id="benefits">
            <div className="benefits-container">
                <div className="suitable-header">
                    <h2 className="text-display-secondary">
                        {t('benefits.title1')}<span className="text-accent">{t('benefits.title2')}</span>
                    </h2>
                    <p className="text-body-large suitable-subtitle">
                        {t('benefits.subtitle')}
                    </p>
                </div>

                <div className="benefits-grid">
                    {benefits.map((benefit) => (
                        <div key={benefit.id} className="benefit-card">
                            <div className="benefit-icon-wrapper">
                                {benefit.icon}
                            </div>
                            <div className="benefit-content">
                                <h4 className="benefit-title">{benefit.title}</h4>
                                <p className="benefit-desc">{benefit.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default BenefitsSection;