
import React from 'react';
import { Link } from 'react-router-dom';
import { ICONS, SVG_PATTERNS } from '../constants';

interface ServiceLayoutProps {
  title: string;
  breadcrumb: string;
  children: React.ReactNode;
  icon: React.ReactNode;
}

const ServiceLayout: React.FC<ServiceLayoutProps> = ({ title, breadcrumb, children, icon }) => {
  return (
    <div className="bg-[#F6F8FC] min-h-screen">
      {/* Breadcrumb & Hero */}
      <div className="bg-[#0B1B3A] pt-12 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">{SVG_PATTERNS.dots}</div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <nav className="flex mb-8 text-xs font-bold uppercase tracking-widest text-blue-400">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2 text-gray-600">/</span>
            <Link to="/servizi" className="hover:text-white transition-colors">Servizi</Link>
            <span className="mx-2 text-gray-600">/</span>
            <span className="text-gray-400">{breadcrumb}</span>
          </nav>
          <div className="flex flex-col md:flex-row md:items-center gap-6">
            <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center text-white">
              {icon}
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold text-white">{title}</h1>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 mb-20">
        <div className="bg-white rounded-[24px] shadow-2xl shadow-blue-900/10 p-8 md:p-12 lg:p-16 relative z-20">
          {children}

          {/* Final CTA */}
          <div className="mt-20 p-10 bg-blue-50 rounded-3xl border border-blue-100 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
            <div>
              <h3 className="text-2xl font-bold text-[#0B1B3A] mb-2">Pronto a migliorare il tuo impianto?</h3>
              <p className="text-gray-600">Richiedi un preventivo personalizzato senza impegno.</p>
            </div>
            <Link
              to="/contatti"
              className="whitespace-nowrap bg-blue-600 text-white px-10 py-4 rounded-xl font-bold hover:bg-blue-700 transition-all shadow-xl shadow-blue-200"
            >
              Richiedi Preventivo
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceLayout;
