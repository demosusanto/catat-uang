import React from 'react';
import Navbar from './components/Navbar';
// import TickerBar from './components/TickerBar';
import Hero from './components/Hero';
import Features from './components/Features';
import Why from './components/Why';
import Suitable from './components/Suitable';
import AppDownload from './components/AppDownload';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <Navbar />
      {/* <TickerBar /> */}
      <main>
        <Hero />
        <Features />
        <Why />
        <Suitable />
        <AppDownload />
      </main>
      <Footer />
    </div>
  );
}

export default App;
