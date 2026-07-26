import React from 'react';
import './Why.css';
import {
    ChevronsUp, UserKey, GlobeOff, Gift
} from 'lucide-react';

const Why = () => {
    const whyList = [
        {
            icon: <ChevronsUp size={24} color="var(--pure-white)" />,
            title: "Ringan & Cepat",
            description: "Tidak perlu login, langsung pakai. Aplikasi berukuran kecil dan responsif."
        },
        {
            icon: <UserKey size={24} color="var(--pure-white)" />,
            title: "100% Privat",
            description: "Data tersimpan di perangkat. Tidak ada server yang menyimpan datamu."
        },
        {
            icon: <GlobeOff size={24} color="var(--pure-white)" />,
            title: "Bisa Offline",
            description: "Tidak perlu internet untuk mencatat. Cocok di mana saja, kapan saja."
        },
        {
            icon: <Gift size={24} color="var(--pure-white)" />,
            title: "Gratis Selamanya",
            description: "Fitur utama gratis tanpa batas. Premium hanya untuk menghilangkan iklan."
        }
    ];

    return (
        <section className="section-light why-section" id="kenapa">
            <div className="container-why">
                <div className="why-header">
                    <h2 className="text-display-secondary">
                        Kenapa <span className="text-accent">Catat Uang</span>?
                    </h2>
                    <p className="text-body-large why-subtitle">
                        Dibuat untuk siapa saja yang ingin mulai mengatur keuangan tanpa ribet.
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
