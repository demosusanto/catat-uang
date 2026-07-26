import React from 'react';
import './Features.css';
import {
  MessageSquare, Scan, Mic,
  ChartNoAxesCombined, FileText, Brain,
  Calendar, CalendarCog, CalendarDays,
  CloudBackup, Download, ShieldCheck
} from 'lucide-react';

const Features = () => {
  const featureList = [
    {
      icon: <MessageSquare size={32} color="var(--binance-yellow)" />,
      title: "AI Input Chat",
      description: "Catat transaksi cukup dengan mengetik seperti chat biasa."
    },
    {
      icon: <Mic size={32} color="var(--binance-yellow)" />,
      title: "Input Suara",
      description: "Bicara langsung, AI yang menerjemahkan jadi transaksi."
    },
    {
      icon: <Scan size={32} color="var(--binance-yellow)" />,
      title: "Scan Nota",
      description: "Foto struk belanja, otomatis tercatat di aplikasi."
    },
    {
      icon: <ChartNoAxesCombined size={32} color="var(--binance-yellow)" />,
      title: "Grafik Keuangan",
      description: "Pantau pengeluaran & pemasukan lewat grafik visual."
    },
    {
      icon: <FileText size={32} color="var(--binance-yellow)" />,
      title: "Laporan Lengkap",
      description: "Report harian, bulanan, dan tahunan siap kapan saja."
    },
    {
      icon: <Brain size={32} color="var(--binance-yellow)" />,
      title: "Insight Otomatis",
      description: "AI memberikan insight soal kebiasaan pengeluaranmu."
    },
    {
      icon: <Calendar size={32} color="var(--binance-yellow)" />,
      title: "Budget Bulanan",
      description: "Atur budget per kategori setiap bulan."
    },
    {
      icon: <CalendarCog size={32} color="var(--binance-yellow)" />,
      title: "Budget Custom",
      description: "Buat budget dengan tanggal mulai fleksibel."
    },
    {
      icon: <CalendarDays size={32} color="var(--binance-yellow)" />,
      title: "Reminder Harian",
      description: "Pengingat untuk catat transaksi setiap hari."
    },
    {
      icon: <CloudBackup size={32} color="var(--binance-yellow)" />,
      title: "Backup Google Drive",
      description: "Data aman di cloud, bisa restore kapan saja."
    },
    {
      icon: <Download size={32} color="var(--binance-yellow)" />,
      title: "Export PDF & Excel",
      description: "Download laporan untuk arsip pribadi atau usaha."
    },
    {
      icon: <ShieldCheck size={32} color="var(--binance-yellow)" />,
      title: "Private & Aman",
      description: "Tanpa login, offline, dilindungi PIN & biometrik."
    }
  ];

  return (
    <section className="section-dark features-section" id="fitur">
      <div className="container">
        <div className="features-header">
          <h2 className="text-display-secondary">Fitur Lengkap untuk <span className="text-accent">Keuanganmu</span></h2>
          <p className="text-body-large features-subtitle">
            Semua yang kamu butuhkan untuk mengelola keuangan harian, dalam satu aplikasi ringan.
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
