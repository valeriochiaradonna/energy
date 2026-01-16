
import React, { useState } from 'react';
import { ICONS, SVG_PATTERNS } from '../constants';

const Contatti: React.FC = () => {
  const [formState, setFormState] = useState({
    nome: '',
    email: '',
    telefono: '',
    messaggio: '',
    privacy: false
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Simulation
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="bg-[#F6F8FC] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-[#0B1B3A] mb-4">Contattaci</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">Hai una domanda o vuoi richiedere un preventivo? Compila il form o usa i nostri contatti diretti.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left: Form */}
          <div className="bg-white p-8 md:p-12 rounded-[32px] shadow-2xl shadow-blue-900/5 border border-gray-100">
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  {ICONS.Check}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Richiesta Inviata!</h3>
                <p className="text-gray-600">Grazie per averci contattato. Ti risponderemo entro 24 ore lavorative.</p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="mt-8 text-blue-600 font-bold hover:underline"
                >
                  Invia un altro messaggio
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <h3 className="text-2xl font-bold text-[#0B1B3A] mb-8">Richiedi un preventivo gratuito</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 block">Nome e Cognome</label>
                    <input 
                      required
                      type="text" 
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
                      placeholder="Mario Rossi"
                      value={formState.nome}
                      onChange={e => setFormState({...formState, nome: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 block">Telefono</label>
                    <input 
                      required
                      type="tel" 
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
                      placeholder="+39 333 1234567"
                      value={formState.telefono}
                      onChange={e => setFormState({...formState, telefono: e.target.value})}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 block">Email</label>
                  <input 
                    required
                    type="email" 
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
                    placeholder="mario.rossi@esempio.com"
                    value={formState.email}
                    onChange={e => setFormState({...formState, email: e.target.value})}
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 block">Messaggio</label>
                  <textarea 
                    required
                    rows={4}
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
                    placeholder="Descrivi brevemente la tua richiesta..."
                    value={formState.messaggio}
                    onChange={e => setFormState({...formState, messaggio: e.target.value})}
                  ></textarea>
                </div>

                <div className="flex items-start gap-3">
                  <input 
                    required
                    type="checkbox" 
                    id="privacy" 
                    className="mt-1 w-4 h-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
                    checked={formState.privacy}
                    onChange={e => setFormState({...formState, privacy: e.target.checked})}
                  />
                  <label htmlFor="privacy" className="text-xs text-gray-500 leading-relaxed">
                    Dichiaro di aver letto e accettato l'Informativa sulla Privacy. I dati verranno utilizzati esclusivamente per gestire la richiesta.
                  </label>
                </div>

                <button 
                  type="submit"
                  className="w-full bg-blue-600 text-white font-bold py-4 rounded-xl hover:bg-blue-700 transition-all shadow-xl shadow-blue-200 text-lg"
                >
                  Invia richiesta
                </button>
              </form>
            )}
          </div>

          {/* Right: Info boxes */}
          <div className="space-y-8">
            <div className="bg-[#0B1B3A] p-10 rounded-[32px] text-white relative overflow-hidden">
               <div className="absolute inset-0 opacity-10">{SVG_PATTERNS.grid}</div>
               <div className="relative z-10 space-y-8">
                  <h3 className="text-2xl font-bold mb-8">Contatti Diretti</h3>
                  
                  <div className="flex gap-6">
                    <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      {ICONS.Phone}
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-widest text-blue-400 font-bold mb-1">Telefono</p>
                      <a href="tel:+39061234567" className="text-xl font-bold hover:text-blue-400 transition-colors">+39 06 1234567</a>
                    </div>
                  </div>

                  <div className="flex gap-6">
                    <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-widest text-blue-400 font-bold mb-1">Email</p>
                      <a href="mailto:info@energytherm.it" className="text-xl font-bold hover:text-blue-400 transition-colors">info@energytherm.it</a>
                    </div>
                  </div>

                  <div className="flex gap-6">
                    <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-widest text-blue-400 font-bold mb-1">Sede Operativa</p>
                      <p className="text-xl font-bold">Via dell'Efficienza, 123<br />00100 Roma (RM)</p>
                    </div>
                  </div>

                  <div className="flex gap-6">
                    <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-widest text-blue-400 font-bold mb-1">Orari di apertura</p>
                      <p className="text-xl font-bold">Lun – Ven: 08:00 – 18:00</p>
                    </div>
                  </div>
               </div>
            </div>

            {/* Assistance Box */}
            <div className="bg-blue-600 p-8 rounded-[32px] text-white flex items-center justify-between gap-6 shadow-xl shadow-blue-200">
               <div>
                 <h4 className="font-bold text-xl mb-1">Emergenza Impianti?</h4>
                 <p className="text-blue-100 text-sm">Pronto intervento attivo ora</p>
               </div>
               <a href="tel:+39061234567" className="bg-white text-blue-600 p-4 rounded-2xl flex items-center justify-center hover:scale-110 transition-transform">
                 {ICONS.Phone}
               </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contatti;
