
import React from 'react';
import ServiceLayout from '../components/ServiceLayout';
import { ICONS } from '../constants';

const EfficienzaEnergetica: React.FC = () => {
  return (
    <ServiceLayout title="Efficienza Energetica" breadcrumb="Efficienza Energetica" icon={ICONS.Energy}>
      <div className="max-w-4xl mx-auto space-y-16">
        <section>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#0B1B3A] mb-6">Massimizza il valore del tuo immobile</h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              La riqualificazione energetica non è solo un dovere etico, ma un investimento economico che aumenta il valore di mercato e riduce drásticamente i costi di gestione.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Diagnosi", desc: "Analisi approfondita dei ponti termici e delle dispersioni." },
              { title: "APE", desc: "Rilascio certificazione di Attestazione Prestazione Energetica." },
              { title: "Incentivi", desc: "Consulenza su detrazioni fiscali e incentivi statali." }
            ].map((item, i) => (
              <div key={i} className="p-8 bg-blue-50/50 rounded-2xl border border-blue-100 text-center">
                <div className="text-blue-600 font-bold mb-3 uppercase tracking-widest text-xs">{item.title}</div>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-gray-50 p-10 rounded-3xl border border-gray-100">
          <h2 className="text-2xl font-bold text-[#0B1B3A] mb-8 text-center">Principali Benefici</h2>
          <div className="grid sm:grid-cols-2 gap-8">
            {[
              "Risparmio in bolletta fino al 40%",
              "Migliore comfort abitativo estate/inverno",
              "Aumento della classe energetica",
              "Riduzione emissioni di CO2 nell'ambiente"
            ].map((benefit, i) => (
              <div key={i} className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-white shadow-sm rounded-full flex items-center justify-center text-blue-600 font-bold">
                  {i + 1}
                </div>
                <p className="text-gray-700 font-medium pt-2">{benefit}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </ServiceLayout>
  );
};

export default EfficienzaEnergetica;
