
import React from 'react';
import { Link } from 'react-router-dom';
import { ICONS, SVG_PATTERNS } from '../constants';

const ChiSiamo: React.FC = () => {
  const values = [
    { title: "Affidabilità", description: "Oltre 30 anni di presenza sul territorio garantiscono la solidità dei nostri interventi.", icon: ICONS.Shield },
    { title: "Qualità", description: "Utilizziamo solo componenti dei migliori brand europei e tecnici certificati.", icon: ICONS.Star },
    { title: "Sostenibilità", description: "Ogni nostro progetto mira a ridurre l'impatto ambientale delle abitazioni.", icon: ICONS.Energy },
    { title: "Trasparenza", description: "Preventivi chiari, senza costi nascosti e rendicontazione puntuale.", icon: ICONS.Check },
  ];

  return (
    <div className="bg-[#F6F8FC]">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0B1B3A] to-[#1e3a8a] py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">{SVG_PATTERNS.grid}</div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">Dal 1996 leader nell'efficienza energetica</h1>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto opacity-80">
            La nostra missione è guidare la transizione energetica attraverso competenza tecnica e innovazione costante.
          </p>
        </div>
      </section>

      {/* History */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-[#0B1B3A]">La Nostra Storia</h2>
              <p className="text-gray-600 leading-relaxed">
                Nata come piccola realtà artigianale nel cuore di Roma, Energy Therm SRLS è cresciuta decennio dopo decennio diventando un punto di riferimento per la gestione calore in tutto il centro Italia.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Oggi contiamo un team di oltre 50 professionisti specializzati, dai progettisti agli installatori, uniti dalla passione per l'eccellenza e dal desiderio di costruire un futuro più verde.
              </p>
              <div className="p-6 border-l-4 border-blue-600 bg-blue-50 rounded-r-2xl">
                <p className="text-blue-900 font-semibold italic">"Non vendiamo solo caldaie, costruiamo sistemi di benessere sostenibile per le generazioni future."</p>
              </div>
            </div>
            
            {/* Visual block */}
            <div className="relative aspect-video bg-gradient-to-br from-blue-600 to-blue-800 rounded-[40px] shadow-2xl overflow-hidden flex items-center justify-center group">
              <div className="absolute inset-0 opacity-20">{SVG_PATTERNS.dots}</div>
              <span className="text-white text-9xl font-black opacity-10 select-none">1996</span>
              <div className="absolute bottom-10 left-10 text-white">
                <div className="text-4xl font-bold mb-2">30+</div>
                <div className="text-xs uppercase tracking-widest font-bold text-blue-300">Anni di Attività</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#0B1B3A] mb-4">I Valori che ci guidano</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v, i) => (
              <div key={i} className="p-10 rounded-[32px] bg-[#F6F8FC] border border-gray-100 hover:shadow-xl hover:shadow-blue-900/5 transition-all group">
                <div className="w-12 h-12 bg-white text-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-sm">
                  {v.icon}
                </div>
                <h3 className="text-xl font-bold text-[#0B1B3A] mb-4">{v.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Callout */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#0B1B3A] rounded-[40px] p-12 md:p-20 relative overflow-hidden text-center text-white shadow-2xl">
            <div className="absolute inset-0 opacity-5">{SVG_PATTERNS.grid}</div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-extrabold mb-8">Pronto a parlarne con noi?</h2>
              <p className="text-blue-100/70 text-lg mb-12 max-w-xl mx-auto">I nostri esperti sono a tua disposizione per una prima consulenza tecnica gratuita.</p>
              <Link to="/contatti" className="bg-blue-600 text-white px-12 py-5 rounded-2xl font-bold text-xl hover:bg-blue-700 transition-all shadow-xl shadow-blue-900/50">
                Parla con un esperto
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ChiSiamo;
