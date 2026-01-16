
import React from 'react';
import { Link } from 'react-router-dom';
import { ICONS } from '../constants';

const ServicesOverview: React.FC = () => {
  const allServices = [
    {
      id: 'impianti-termici',
      title: 'Impianti Termici',
      desc: 'Soluzioni chiavi in mano per riscaldamento centralizzato e autonomo.',
      bullets: ['Sostituzione caldaie', 'Pompe di calore', 'Centrali termiche'],
      icon: ICONS.Heat,
      path: '/servizi/impianti-termici'
    },
    {
      id: 'efficienza-energetica',
      title: 'Efficienza Energetica',
      desc: 'Riqualificazione globale per ridurre l\'impatto ambientale e le bollette.',
      bullets: ['Cofibentazioni', 'Certificazioni APE', 'Sistemi Ibridi'],
      icon: ICONS.Energy,
      path: '/servizi/efficienza-energetica'
    },
    {
      id: 'contabilizzazione',
      title: 'Contabilizzazione Calore',
      desc: 'Gestione intelligente dei consumi in condominio per una ripartizione equa.',
      bullets: ['Ripartitori radio', 'Valvole termostatiche', 'Lettura remota'],
      icon: ICONS.Meter,
      path: '/servizi/contabilizzazione-calore'
    },
    {
      id: 'manutenzione',
      title: 'Manutenzione & Assistenza',
      desc: 'Servizio di pronto intervento e programmi di manutenzione programmata.',
      bullets: ['Pronto intervento 24/7', 'Terzo Responsabile', 'Check-up periodici'],
      icon: ICONS.Maintenance,
      path: '/servizi/manutenzione-assistenza'
    },
  ];

  return (
    <div className="bg-[#F6F8FC] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#0B1B3A] mb-6">I nostri servizi</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Dalla progettazione alla manutenzione, offriamo soluzioni professionali per massimizzare il comfort e minimizzare i consumi.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {allServices.map((s) => (
            <div key={s.id} className="bg-white p-10 rounded-[24px] shadow-xl shadow-blue-900/5 border border-gray-100 flex flex-col md:flex-row gap-8 hover:shadow-2xl transition-all">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-2xl flex items-center justify-center">
                  {s.icon}
                </div>
              </div>
              <div className="flex-grow">
                <h3 className="text-2xl font-bold text-[#0B1B3A] mb-4">{s.title}</h3>
                <p className="text-gray-600 mb-6">{s.desc}</p>
                <ul className="space-y-3 mb-8">
                  {s.bullets.map((b, i) => (
                    <li key={i} className="flex items-center text-sm text-gray-500">
                      <span className="mr-2 text-blue-500">{ICONS.Check}</span> {b}
                    </li>
                  ))}
                </ul>
                <Link
                  to={s.path}
                  className="inline-block bg-blue-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-blue-700 transition-all text-sm shadow-lg shadow-blue-200"
                >
                  Dettagli Servizio
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesOverview;
