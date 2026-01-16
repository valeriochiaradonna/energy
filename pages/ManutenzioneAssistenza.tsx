
import React from 'react';
import ServiceLayout from '../components/ServiceLayout';
import { ICONS } from '../constants';

const ManutenzioneAssistenza: React.FC = () => {
  return (
    <ServiceLayout title="Manutenzione & Assistenza" breadcrumb="Manutenzione" icon={ICONS.Maintenance}>
      <div className="grid lg:grid-cols-2 gap-16">
        <div>
          <h2 className="text-2xl font-bold text-[#0B1B3A] mb-6">Continuità e sicurezza garantita</h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            Un impianto ben mantenuto dura il doppio e consuma il 20% in meno. Offriamo contratti di manutenzione programmata e assistenza straordinaria per ogni tipologia di impianto termico.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-6 bg-white border border-gray-100 rounded-2xl shadow-sm">
              <h4 className="font-bold text-blue-600 mb-2">Ordinaria</h4>
              <p className="text-xs text-gray-500 italic">Pulizia, verifiche di legge, analisi fumi e bollino blu.</p>
            </div>
            <div className="p-6 bg-white border border-gray-100 rounded-2xl shadow-sm">
              <h4 className="font-bold text-blue-600 mb-2">Straordinaria</h4>
              <p className="text-xs text-gray-500 italic">Riparazione guasti, sostituzione componenti e urgenze.</p>
            </div>
          </div>
        </div>

        <div>
          <div className="bg-blue-50 border border-blue-200 p-8 md:p-12 rounded-[32px] text-center">
            <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce">
              {ICONS.Phone}
            </div>
            <h3 className="text-2xl font-bold text-[#0B1B3A] mb-4">Assistenza Urgente?</h3>
            <p className="text-gray-600 mb-8">Siamo operativi 24 ore su 24 per emergenze blocco caldaia o perdite idriche.</p>
            <a
              href="tel:+39061234567"
              className="inline-flex items-center bg-blue-600 text-white px-10 py-4 rounded-xl font-bold hover:bg-blue-700 transition-all text-lg shadow-xl shadow-blue-200"
            >
              Chiama Ora
            </a>
            <p className="mt-4 text-xs font-bold text-blue-500 uppercase tracking-widest">Risposta garantita in 120 minuti</p>
          </div>
        </div>
      </div>
    </ServiceLayout>
  );
};

export default ManutenzioneAssistenza;
