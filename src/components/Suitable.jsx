import React from 'react';
import './Suitable.css';
import {
    Briefcase, GraduationCap, Home, Store
} from 'lucide-react';

const Suitable = () => {
    const suitableList = [
        {
            icon: <Briefcase size={24} color="var(--binance-yellow)" />,
            title: "Pekerja",
            description: "Yang ingin lebih hemat dan tahu ke mana uang pergi."
        },
        {
            icon: <GraduationCap size={24} color="var(--binance-yellow)" />,
            title: "Mahasiswa",
            description: "Kontrol uang jajan dan belajar kelola keuangan sejak dini."
        },
        {
            icon: <Home size={24} color="var(--binance-yellow)" />,
            title: "Ibu Rumah Tangga",
            description: "Mengatur keuangan keluarga dengan rapi dan terstruktur."
        },
        {
            icon: <Store size={24} color="var(--binance-yellow)" />,
            title: "Freelancer & UMKM",
            description: "Catat keuangan usaha kecil dengan laporan siap export."
        }
    ];

    return (
        <section className="section-dark suitable-section" id="cocok">
            <div className="container-suitable">
                <div className="suitable-header">
                    <h2 className="text-display-secondary">
                        Cocok untuk <span className="text-accent">Siapa Saja</span>
                    </h2>
                    <p className="text-body-large suitable-subtitle">
                        Mulai kendalikan arus kas Anda, apa pun profesi Anda.
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
