
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0B1B3A] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <span className="text-blue-400 font-extrabold text-xl uppercase tracking-wider">
              Energy Therm SRLS
            </span>
            <p className="text-gray-400 text-sm leading-relaxed">
              Leader nel settore dell'efficienza energetica e degli impianti termici dal 1996. Forniamo soluzioni sostenibili per condomini, aziende e privati.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="w-10 h-10 rounded-full bg-blue-900/50 flex items-center justify-center hover:bg-blue-600 transition-colors">
                <span className="sr-only">Facebook</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-blue-900/50 flex items-center justify-center hover:bg-blue-600 transition-colors">
                <span className="sr-only">LinkedIn</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
            </div>
          </div>

          {/* Servizi */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-white uppercase tracking-wide text-sm">Servizi</h4>
            <ul className="space-y-3">
              <li><Link to="/servizi/impianti-termici" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">Impianti Termici</Link></li>
              <li><Link to="/servizi/efficienza-energetica" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">Efficienza Energetica</Link></li>
              <li><Link to="/servizi/contabilizzazione-calore" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">Contabilizzazione</Link></li>
              <li><Link to="/servizi/manutenzione-assistenza" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">Manutenzione</Link></li>
            </ul>
          </div>

          {/* Azienda */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-white uppercase tracking-wide text-sm">Azienda</h4>
            <ul className="space-y-3">
              <li><Link to="/chi-siamo" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">Chi Siamo</Link></li>
              <li><Link to="/contatti" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">Contatti</Link></li>
              <li><Link to="/contatti" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">Lavora con noi</Link></li>
              <li><Link to="/contatti" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">Richiedi Preventivo</Link></li>
            </ul>
          </div>

          {/* Legale */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-white uppercase tracking-wide text-sm">Legale</h4>
            <ul className="space-y-3">
              <li><Link to="#" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">Privacy Policy</Link></li>
              <li><Link to="#" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">Cookie Policy</Link></li>
              <li><Link to="#" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">Note Legali</Link></li>
              <li className="text-gray-500 text-xs pt-4">
                Energy Therm SRLS<br />
                P.IVA: 12345678901<br />
                Sede Legale: Roma (RM)
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-blue-900/50 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-gray-500 text-xs uppercase tracking-widest">
          <p>© {new Date().getFullYear()} Energy Therm SRLS. Tutti i diritti riservati.</p>
          <p>Made with &hearts; in Italy</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
