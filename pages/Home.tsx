
import React from 'react';
import { Link } from 'react-router-dom';
import { ICONS, SVG_PATTERNS } from '../constants';

const Home: React.FC = () => {
  const metrics = [
    { label: "Anni di esperienza", value: "30+" },
    { label: "Clienti serviti", value: "100.000+" },
    { label: "Condomini gestiti", value: "2.000+" },
  ];

  const partners = ["Logo Partner 1", "Logo Partner 2", "Logo Partner 3", "Logo Partner 4", "Logo Partner 5"];

  return (
    <div className="bg-[#F6F8FC]">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0B1B3A] to-[#1e3a8a] py-24 lg:py-40">
        <div className="absolute inset-0 z-0 opacity-10">
          {SVG_PATTERNS.grid}
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center lg:text-left">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <span className="inline-block bg-blue-500/10 text-blue-300 text-xs font-bold uppercase tracking-widest py-2 px-4 rounded-full border border-blue-500/20">
                Innovazione & Risparmio
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-white leading-tight">
                Risparmio ed <span className="text-blue-400">Efficienza Energetica</span> al servizio della qualità
              </h1>
              <p className="text-lg sm:text-xl text-blue-100/80 max-w-2xl leading-relaxed">
                Soluzioni avanzate per impianti termici e riqualificazione energetica per condomini, aziende e famiglie in tutta Italia. Trasformiamo il calore in valore.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 justify-center lg:justify-start">
                <Link
                  to="/contatti"
                  className="bg-blue-600 text-white px-8 py-4 rounded-xl text-lg font-bold hover:bg-blue-700 transition-all shadow-xl shadow-blue-900/50 text-center"
                >
                  Richiedi consulenza gratuita
                </Link>
                <Link
                  to="/servizi"
                  className="bg-white/5 border border-white/20 text-white px-8 py-4 rounded-xl text-lg font-bold hover:bg-white/10 transition-all text-center backdrop-blur-sm"
                >
                  Scopri i servizi
                </Link>
              </div>
            </div>

            {/* Visual Element: CSS Abstract */}
            <div className="hidden lg:block relative h-96">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-600 rounded-full blur-[100px] opacity-20"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-blue-400/30 rounded-full animate-pulse"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-blue-200/20 rounded-full"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-blue-400">
                {React.cloneElement(ICONS.Energy as React.ReactElement, { className: "w-32 h-32 opacity-40" })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="bg-white py-12 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {metrics.map((m, idx) => (
              <div key={idx} className="text-center group p-6 rounded-2xl transition-all hover:bg-blue-50/50">
                <div className="text-4xl font-extrabold text-blue-600 mb-2 group-hover:scale-110 transition-transform">{m.value}</div>
                <div className="text-gray-500 font-semibold uppercase tracking-widest text-xs">{m.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="bg-[#0B1B3A] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-white text-center text-sm font-bold uppercase tracking-[0.2em] mb-12 opacity-50">I nostri Partner strategici</h2>
          <div className="flex flex-wrap justify-center items-center gap-12 lg:gap-24 opacity-40 grayscale hover:grayscale-0 transition-all">
            {partners.map((p, idx) => (
              <div key={idx} className="text-white font-bold text-xl tracking-tighter">
                {p}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-24 bg-[#F6F8FC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-blue-600 font-bold uppercase tracking-widest text-xs mb-4 block">Cosa Facciamo</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1B3A] mb-6">Soluzioni complete per ogni esigenza</h2>
            <p className="text-gray-600">Offriamo una gamma completa di servizi dedicati alla gestione del calore e alla sostenibilità degli edifici.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceCard 
              icon={ICONS.Heat} 
              title="Impianti Termici" 
              desc="Progettazione, installazione e riqualificazione di centrali termiche ad alta efficienza."
              link="/servizi/impianti-termici"
            />
            <ServiceCard 
              icon={ICONS.Energy} 
              title="Efficienza Energetica" 
              desc="Interventi mirati per ridurre i consumi e migliorare la classe energetica degli immobili."
              link="/servizi/efficienza-energetica"
            />
            <ServiceCard 
              icon={ICONS.Meter} 
              title="Contabilizzazione" 
              desc="Sistemi avanzati per la gestione dei consumi individuali e il risparmio garantito."
              link="/servizi/contabilizzazione-calore"
            />
          </div>

          <div className="mt-16 text-center">
            <Link to="/servizi" className="inline-flex items-center text-blue-600 font-bold hover:underline">
              Vedi tutti i servizi <span className="ml-2">{ICONS.ChevronRight}</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  desc: string;
  link: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, desc, link }) => (
  <div className="bg-white p-8 rounded-[20px] shadow-lg shadow-blue-900/5 hover:shadow-xl hover:-translate-y-2 transition-all group flex flex-col h-full border border-gray-100">
    <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-[#0B1B3A] mb-4">{title}</h3>
    <p className="text-gray-500 mb-8 flex-grow">{desc}</p>
    <Link to={link} className="text-blue-600 font-bold text-sm inline-flex items-center group-hover:translate-x-2 transition-transform">
      Scopri di più {ICONS.ChevronRight}
    </Link>
  </div>
);

export default Home;
