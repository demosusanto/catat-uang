import React, { useState } from 'react';
import './PricingSection.css';
import qrisImg from '../assets/qris-img.jpeg';
import { useTranslation } from 'react-i18next';

const PricingSection = () => {
    const { t } = useTranslation();
    // State untuk menyimpan plan yang sedang dipilih (opsional, untuk efek klik)
    const [selectedPlan, setSelectedPlan] = useState('1m-manual');

    // State untuk modal pop-up
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [activePlanDetails, setActivePlanDetails] = useState(null);

    // Data list harga
    const plans = [
        {
            id: '1m-manual',
            title: t('pricing.plans.0.title'),
            desc: t('pricing.plans.0.desc'),
            originalPrice: 'Rp16,000',
            price: 'Rp12,000',
            period: t('pricing.plans.0.period'),
            isManual: true
        },
        {
            id: '6m-manual',
            title: t('pricing.plans.1.title'),
            desc: t('pricing.plans.1.desc'),
            originalPrice: 'Rp96,000',
            price: 'Rp60,000',
            period: t('pricing.plans.1.period'),
            isManual: true,
        },
        {
            id: '1y-manual',
            title: t('pricing.plans.2.title'),
            desc: t('pricing.plans.2.desc'),
            smallText: t('pricing.plans.2.smallText'),
            originalPrice: 'Rp180,000',
            price: 'Rp100,000',
            period: t('pricing.plans.2.period'),
            isManual: true,
        },
        {
            id: '1m-playstore',
            title: t('pricing.plans.3.title'),
            desc: t('pricing.plans.3.desc'),
            originalPrice: null,
            price: 'Rp16,000',
            period: t('pricing.plans.3.period'),
            isManual: false,
        },
        {
            id: '1y-playstore',
            title: t('pricing.plans.4.title'),
            desc: t('pricing.plans.4.desc'),
            smallText: t('pricing.plans.4.smallText'),
            originalPrice: 'Rp180,000',
            price: 'Rp140,000',
            period: t('pricing.plans.4.period'),
            isManual: false,
        },
    ];

    // Fungsi saat card diklik
    const handleCardClick = (plan) => {
        setSelectedPlan(plan.id);

        // Jika paket yang diklik adalah paket manual, buka modal QRIS
        if (plan.isManual) {
            setActivePlanDetails(plan);
            setIsModalOpen(true);
        } else {
            // Logic untuk Play Store (misal diarahkan ke link atau alert)
            alert(t('pricing.alert') + plan.title);
        }
    };

    return (
        <section className="pricing-section section-price" id="langganan">
            <div className="pricing-container">
                <div className="suitable-header">
                    <h2 className="text-display-secondary">
                        {t('pricing.title1')}<span className="text-accent">{t('pricing.title2')}</span>
                    </h2>
                    <p className="text-body-large suitable-subtitle">
                        {t('pricing.subtitle')}
                    </p>
                </div>
                <div className="pricing-grid">
                    {plans.map((plan) => (
                        <div
                            key={plan.id}
                            className="pricing-card selected"
                            onClick={() => handleCardClick(plan)}
                        >
                            <div className="card-left">
                                <h4 className="plan-title">{plan.title}</h4>
                                <p className="plan-desc">{plan.desc}</p>
                            </div>
                            <div className="card-right">
                                {plan.smallText && <span className="plan-small-text">{plan.smallText}</span>}
                                {plan.originalPrice && <span className="plan-strike">{plan.originalPrice}</span>}
                                <div className="plan-price-wrapper">
                                    <span className="plan-price">{plan.price}</span>
                                    <span className="plan-period">{plan.period}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>

            {/* --- MODAL POP-UP QRIS ---  */}
            {isModalOpen && (
                <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>

                        <button className="modal-close" onClick={() => setIsModalOpen(false)}>
                            &times;
                        </button>

                        <h3 className="modal-title">{t('pricing.modalTitle')}</h3>

                        {activePlanDetails && (
                            <p className="modal-desc">
                                {t('pricing.modalDesc1')}<strong>{activePlanDetails.title}</strong>{t('pricing.modalDesc2')}
                                <span className="modal-highlight-price"> {activePlanDetails.price}</span>
                            </p>
                        )}

                        <div className="qris-image-container">
                            <img src={qrisImg} alt="QRIS Pembayaran Catat Uang" className="qris-image" />
                        </div>

                        <p className="modal-instruction">
                            {t('pricing.modalInstruction')}
                        </p>

                        <button
                            className="modal-action-btn"
                            onClick={() => {
                                const phoneNumber = "62895387235555";
                                const message = t('pricing.waMessage', { plan: activePlanDetails.title });
                                window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
                                setIsModalOpen(false);
                            }}
                        >
                            {t('pricing.modalBtn')}
                        </button>

                    </div>
                </div>
            )}
        </section>
    );
};

export default PricingSection;