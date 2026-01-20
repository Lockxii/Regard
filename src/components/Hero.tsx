'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { DemoModal } from '@/components/DemoModal';

export function Hero() {
  const [showDemo, setShowDemo] = useState(false);

  return (
    <section className="relative pt-24 pb-12 md:pt-32 md:pb-16 overflow-hidden">
      <div className="absolute inset-0 grid-dots -z-10" />
      
      <div className="container mx-auto max-w-5xl px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          <div className="space-y-6">
            <div className="inline-block px-3 py-1 border-2 border-black bg-accent font-bold text-[10px] uppercase tracking-wider rotate-[-1deg] shadow-[2px_2px_0px_0px_black]">
               Nouveau : Résiliation en 1-clic
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black leading-none uppercase tracking-tighter">
              Maîtrisez vos <br /> <span className="text-primary italic">Dépenses.</span>
            </h1>
            
            <p className="text-base font-medium leading-relaxed max-w-md opacity-80">
              Regard centralise vos abonnements et vous protège contre les prélèvements surprises. Une gestion radicale pour une liberté totale.
            </p>
            
            <div className="flex flex-wrap gap-6 pt-4 items-center">
              <Button size="lg" onClick={() => document.getElementById('solutions')?.scrollIntoView({ behavior: 'smooth' })}>
                Scanner mes comptes
              </Button>
              <Button variant="ghost" onClick={() => setShowDemo(true)}>
                Voir la démo
              </Button>
            </div>
          </div>

          <div className="relative pt-8 lg:pt-0 pointer-events-none select-none" aria-hidden="true">
            {/* Static Preview Card */}
            <div className="brutal-card p-6 bg-white rotate-1 transform transition-transform hover:rotate-0">
               <div className="space-y-4">
                  <div className="flex justify-between items-center border-b-2 border-black pb-3">
                     <span className="font-black text-lg uppercase tracking-tight">Flux Actifs</span>
                     <div className="w-2 h-2 rounded-full bg-green-500" />
                  </div>
                  {[
                    { n: 'Netflix', p: '19,99€', c: 'bg-black text-white', s: 'Alerte demain' },
                    { n: 'Spotify', p: '10,99€', c: 'bg-green-400', s: 'Payé' },
                    { n: 'iCloud', p: '2,99€', c: 'bg-blue-400', s: 'Payé' },
                  ].map((sub, i) => (
                    <div key={i} className="flex justify-between items-center p-3 border-2 border-black bg-gray-50 shadow-[2px_2px_0px_0px_black]">
                      <div className="flex items-center gap-3">
                        <div className={`w-6 h-6 border-2 border-black flex items-center justify-center font-bold text-[10px] ${sub.c}`}>
                            {sub.n[0]}
                        </div>
                        <div>
                           <div className="font-black uppercase text-[10px]">{sub.n}</div>
                           <div className="text-[8px] font-bold opacity-50 uppercase">{sub.s}</div>
                        </div>
                      </div>
                      <span className="font-mono font-bold text-sm">{sub.p}</span>
                    </div>
                  ))}
                  <div className="bg-black text-white p-3 border-2 border-black flex justify-between items-center shadow-[4px_4px_0px_0px_#fbbf24]">
                     <span className="font-black uppercase text-xs">Total Mensuel</span>
                     <span className="font-mono font-bold text-lg text-accent">33,97 €</span>
                  </div>
               </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-3 -right-3 w-12 h-12 bg-primary border-2 border-black -z-10 rotate-12 shadow-[2px_2px_0px_0px_black]" />
            <div className="absolute -bottom-3 -left-3 w-16 h-16 bg-accent border-2 border-black -z-10 -rotate-12 shadow-[2px_2px_0px_0px_black]" />
          </div>

        </div>
      </div>
      
      <DemoModal isOpen={showDemo} onClose={() => setShowDemo(false)} />
    </section>
  );
}
