
import React, { useState } from 'react';
import ServiceLayout from '../components/ServiceLayout';
import { ICONS } from '../constants';

const ImpiantiTermici: React.FC = () => {
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  const faqs = [
    { q: "Quali sono i vantaggi di una caldaia a condensazione?", a: "Le caldaie a condensazione recuperano il calore latente dei fumi di scarico, garantendo un risparmio energetico fino al 30% rispetto ai modelli tradizionali." },
    { q: "Quando è consigliato passare a una pompa di calore?", a: "È ideale per edifici con buon isolamento termico o in abbinamento a impianti radianti a pavimento, permettendo di eliminare l'uso del gas." },
    { q: "Offrite assistenza post-installazione?", a: "Assolutamente sì. Ogni nostra installazione include un pacchetto di manutenzione programmata per garantire la massima efficienza nel tempo." }
  ];

  return (
    <ServiceLayout title="Impianti Termici" breadcrumb="Impianti Termici" icon={ICONS.Heat}>
      <div className="grid lg:grid-cols-2 gap-16">
        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-[#0B1B3A] mb-6">Cosa facciamo</h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Energy Therm SRLS progetta e realizza impianti di riscaldamento ad alta tecnologia, ottimizzando la distribuzione del calore per ridurre sprechi e costi operativi.
            </p>
            <ul className="grid gap-4">
              {[
                "Installazione centrali termiche condominiali",
                "Sostituzione generatori di calore",
                "Sistemi di riscaldamento a pannelli radianti",
                "Integrazione solare termico",
                "Realizzazione impianti idrico-sanitari"
              ].map((text, i) => (
                <li key={i} className="flex items-center p-4 bg-gray-50 rounded-xl border border-gray-100">
                  <span className="mr-3">{ICONS.Check}</span>
                  <span className="text-gray-700 font-medium">{text}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-[#0B1B3A] mb-6">Come lavoriamo</h2>
            <div className="space-y-6">
              {[
                { step: "01", title: "Sopralluogo Tecnico", desc: "Analizziamo lo stato attuale del tuo impianto e le necessità energetiche." },
                { step: "02", title: "Progettazione Su Misura", desc: "Definiamo la soluzione tecnica più efficiente e il piano di ammortamento." },
                { step: "03", title: "Installazione Certificata", desc: "Tecnici specializzati eseguono il lavoro a regola d'arte con collaudo finale." }
              ].map((w, i) => (
                <div key={i} className="flex gap-6">
                  <div className="text-3xl font-extrabold text-blue-100 flex-shrink-0">{w.step}</div>
                  <div>
                    <h4 className="font-bold text-[#0B1B3A] text-lg mb-1">{w.title}</h4>
                    <p className="text-gray-500 text-sm">{w.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="pt-8">
            <h2 className="text-2xl font-bold text-[#0B1B3A] mb-6">Domande Frequenti</h2>
            <div className="space-y-3">
              {faqs.map((faq, i) => (
                <div key={i} className="border border-gray-100 rounded-xl overflow-hidden">
                  <button 
                    className={`w-full text-left p-5 font-bold transition-colors flex justify-between items-center ${activeFaq === i ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-50'}`}
                    onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                  >
                    {faq.q}
                    <span className={`transform transition-transform ${activeFaq === i ? 'rotate-180' : ''}`}>
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                    </span>
                  </button>
                  {activeFaq === i && (
                    <div className="p-5 text-gray-600 bg-white leading-relaxed text-sm">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </ServiceLayout>
  );
};

export default ImpiantiTermici;
