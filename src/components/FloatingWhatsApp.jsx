import React from 'react';
import './FloatingWhatsApp.css';
import whatsappIcon from '../assets/whatsapp.svg';

const FloatingWhatsApp = () => {
    const phoneNumber = "62895387235555";
    const message = encodeURIComponent("Hi Admin Catat Uang 👋");

    return (
        <a
            href={`https://wa.me/${phoneNumber}?text=${message}`}
            target="_blank"
            rel="noopener noreferrer"
            className="floating-wa-button"
            aria-label="Chat on WhatsApp"
        >
            <img src={whatsappIcon} alt="WhatsApp" className="wa-icon-float" />
        </a>
    );
};

export default FloatingWhatsApp;