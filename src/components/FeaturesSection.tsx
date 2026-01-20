'use client';

import { Search, BellRing, HandMetal, PieChart } from 'lucide-react';

const outils = [
  {
    nom: "Audit",
    desc: "Scan complet de vos transactions bancaires sécurisées.",
    icon: Search,
    color: "bg-blue-200"
  },
  {
    nom: "Rappel",
    desc: "Notifications précises avant chaque reconduction.",
    icon: BellRing,
    color: "bg-yellow-200"
  },
  {
    nom: "Action",
    desc: "Résiliez n'importe quel service depuis l'interface.",
    icon: HandMetal,
    color: "bg-rose-200"
  },
  {
    nom: "Bilan",
    desc: "Rapports d'économies mensuels et annuels.",
    icon: PieChart,
    color: "bg-emerald-200"
  }
];

export function FeaturesSection() {
  return (
    <section id="solutions" className="py-24 bg-white border-t-2 border-black">
      <div className="container mx-auto max-w-5xl px-6">
        <div className="mb-16">
          <h2 className="text-4xl font-black uppercase tracking-tighter">
            L'efficacité <br /> <span className="text-primary">sans compromis.</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {outils.map((o, i) => (
            <div key={i} className="brutal-card p-6 space-y-4">
              <div className={`w-12 h-12 border-2 border-black flex items-center justify-center ${o.color}`}>
                <o.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-black uppercase tracking-tight">{o.nom}</h3>
              <p className="text-xs font-bold leading-relaxed opacity-60">
                {o.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
