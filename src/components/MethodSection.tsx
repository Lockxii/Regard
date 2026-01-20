'use client';

import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

const steps = [
  {
    step: "01",
    title: "Connexion",
    desc: "Connectez votre banque en toute sécurité. Nous n'avons accès qu'en lecture seule."
  },
  {
    step: "02",
    title: "Analyse",
    desc: "Nos algorithmes détectent automatiquement tous vos abonnements récurrents."
  },
  {
    step: "03",
    title: "Nettoyage",
    desc: "Sélectionnez ce que vous voulez garder. Résiliez le reste en un clic."
  }
];

export function MethodSection() {
  return (
    <section id="methode" className="py-24 bg-accent border-t-2 border-black">
      <div className="container mx-auto max-w-5xl px-6">
        <div className="mb-16">
          <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tighter">
            Simple comme <br /> <span className="text-white text-shadow-black">Bonjour.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
           {/* Connecting line for desktop */}
           <div className="hidden md:block absolute top-12 left-0 w-full h-1 bg-black -z-10 transform -translate-y-1/2" />

          {steps.map((s, i) => (
            <div key={i} className="relative bg-white border-2 border-black p-6 shadow-[4px_4px_0px_0px_black] rotate-1 hover:rotate-0 transition-transform">
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-black text-white font-black text-xl w-12 h-12 flex items-center justify-center border-2 border-white rounded-full">
                {s.step}
              </div>
              <h3 className="mt-6 text-xl font-black uppercase tracking-tight text-center">{s.title}</h3>
              <p className="mt-2 text-sm font-medium text-center opacity-80 leading-relaxed">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
             <Link href="/dashboard" className="inline-flex items-center gap-2 font-black uppercase tracking-widest border-b-2 border-black pb-1 hover:text-primary cursor-pointer hover:border-primary transition-all">
                Commencer maintenant <ArrowRight className="w-4 h-4" />
             </Link>
        </div>
      </div>
    </section>
  );
}
