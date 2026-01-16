
import React from 'react';
import ServiceLayout from '../components/ServiceLayout';
import { ICONS } from '../constants';

const ContabilizzazioneCalore: React.FC = () => {
  return (
    <ServiceLayout title="Contabilizzazione Calore" breadcrumb="Contabilizzazione" icon={ICONS.Meter}>
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-2xl font-bold text-[#0B1B3A] mb-6">Paga solo ciò che consumi</h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            La contabilizzazione del calore permette ai condomini di gestire autonomamente il proprio comfort, pagando esclusivamente in base ai consumi reali registrati in ogni singolo appartamento.
          </p>
          <div className="space-y-4">
            <h4 className="font-bold text-[#0B1B3A]">Soluzioni Tecnologiche:</h4>
            {[
              "Ripartitori di calore wireless",
              "Valvole termostatiche elettroniche",
              "Servizio di tele-lettura da remoto",
              "Software di ripartizione spese certificato"
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-[#0B1B3A] p-10 rounded-[32px] text-white relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-40 h-40 bg-blue-500 rounded-full blur-[80px] opacity-20"></div>
          <h3 className="text-xl font-bold mb-6">Conformità Normativa</h3>
          <p className="text-blue-100/70 text-sm leading-relaxed mb-8">
            I nostri sistemi sono pienamente conformi alla normativa UNI 10200 e al D.Lgs. 102/2014, garantendo precisione millimetrica e trasparenza totale nelle bollette condominiali.
          </p>
          <div className="flex flex-col gap-4">
             <div className="flex items-center gap-4 bg-white/5 p-4 rounded-xl border border-white/10">
               <span className="text-blue-400 font-bold">72h</span>
               <span className="text-xs uppercase tracking-wider text-blue-200">Tempo medio installazione per scala</span>
             </div>
             <div className="flex items-center gap-4 bg-white/5 p-4 rounded-xl border border-white/10">
               <span className="text-blue-400 font-bold">100%</span>
               <span className="text-xs uppercase tracking-wider text-blue-200">Monitoraggio digitale dei consumi</span>
             </div>
          </div>
        </div>
      </div>
    </ServiceLayout>
  );
};

export default ContabilizzazioneCalore;
