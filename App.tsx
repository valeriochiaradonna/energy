
import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import ServicesOverview from './pages/ServicesOverview';
import ImpiantiTermici from './pages/ImpiantiTermici';
import EfficienzaEnergetica from './pages/EfficienzaEnergetica';
import ContabilizzazioneCalore from './pages/ContabilizzazioneCalore';
import ManutenzioneAssistenza from './pages/ManutenzioneAssistenza';
import ChiSiamo from './pages/ChiSiamo';
import Contatti from './pages/Contatti';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <div className="flex flex-col min-h-screen">
        <ScrollToTop />
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/servizi" element={<ServicesOverview />} />
            <Route path="/servizi/impianti-termici" element={<ImpiantiTermici />} />
            <Route path="/servizi/efficienza-energetica" element={<EfficienzaEnergetica />} />
            <Route path="/servizi/contabilizzazione-calore" element={<ContabilizzazioneCalore />} />
            <Route path="/servizi/manutenzione-assistenza" element={<ManutenzioneAssistenza />} />
            <Route path="/chi-siamo" element={<ChiSiamo />} />
            <Route path="/contatti" element={<Contatti />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;
