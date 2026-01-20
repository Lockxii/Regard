'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { LayoutDashboard, BellRing, Undo2, ArrowRight } from 'lucide-react';

const tabs = [
  {
    id: 'vue-globale',
    name: 'Vue globale',
    icon: LayoutDashboard,
    title: 'Dashboard Temps Réel',
    description: 'Une interface pensée pour la clarté. Visualisez instantanément la répartition de vos charges fixes par catégorie.',
    color: 'from-blue-500/20 to-cyan-500/20',
  },
  {
    id: 'alertes',
    name: 'Anticipation',
    icon: BellRing,
    title: 'Zéro Surprise',
    description: 'Notre algorithme prédit vos prélèvements à venir et vous notifie avant qu\'il ne soit trop tard pour agir.',
    color: 'from-orange-500/20 to-red-500/20',
  },
  {
    id: 'resiliation',
    name: 'Résiliation',
    icon: Undo2,
    title: 'Liberté Totale',
    description: 'Un clic pour lancer une procédure. On s\'occupe des formalités complexes pour vous faire gagner du temps.',
    color: 'from-purple-500/20 to-pink-500/20',
  },
];

export function TabbedSection() {
  const [activeTab, setActiveTab] = useState(tabs[0].id);
  const activeData = tabs.find(t => t.id === activeTab)!;

  return (
    <section id="comment-ca-marche" className="py-24 relative overflow-hidden">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="flex flex-col items-center mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            L'excellence opérationnelle.
          </h2>
          <p className="text-white/60 text-lg max-w-2xl">
            Conçu pour ceux qui exigent une maîtrise totale de leurs finances numériques sans y passer des heures.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Sidebar Nav */}
          <div className="lg:col-span-4 space-y-2">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={cn(
                    'w-full flex items-center gap-4 p-4 rounded-2xl transition-all duration-300 text-left group',
                    isActive 
                      ? 'glass border-white/20 shadow-xl' 
                      : 'hover:bg-white/5 border border-transparent'
                  )}
                >
                  <div className={cn(
                    'p-2 rounded-xl transition-colors',
                    isActive ? 'bg-primary text-white' : 'bg-white/5 text-white/40 group-hover:text-white'
                  )}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <div>
                    <p className={cn(
                      'font-bold transition-colors',
                      isActive ? 'text-white' : 'text-white/40 group-hover:text-white'
                    )}>
                      {tab.name}
                    </p>
                    {isActive && (
                      <motion.p 
                        layoutId="active-desc"
                        className="text-xs text-white/60 mt-1"
                      >
                        En savoir plus <ArrowRight className="inline h-3 w-3" />
                      </motion.p>
                    )}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Content Preview */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className={cn(
                  'bento-card min-h-[400px] flex flex-col justify-between overflow-hidden relative group bg-gradient-to-br',
                  activeData.color
                )}
              >
                <div className="relative z-10">
                  <h3 className="text-3xl font-bold mb-4">{activeData.title}</h3>
                  <p className="text-xl text-white/70 max-w-lg leading-relaxed">
                    {activeData.description}
                  </p>
                </div>

                <div className="mt-12 relative z-10 glass rounded-t-2xl border-b-0 p-1 translate-y-4 group-hover:translate-y-2 transition-transform duration-500">
                   {/* Fake Dashboard Header */}
                   <div className="flex items-center justify-between px-4 py-2 border-b border-white/5">
                      <div className="flex gap-1.5">
                        <div className="h-2 w-2 rounded-full bg-white/20" />
                        <div className="h-2 w-2 rounded-full bg-white/20" />
                        <div className="h-2 w-2 rounded-full bg-white/20" />
                      </div>
                      <div className="h-4 w-32 bg-white/5 rounded-full" />
                   </div>
                   {/* Fake Content */}
                   <div className="p-6 space-y-4">
                      <div className="grid grid-cols-3 gap-4">
                        <div className="h-20 bg-white/5 rounded-xl border border-white/5 animate-pulse" />
                        <div className="h-20 bg-white/5 rounded-xl border border-white/5 animate-pulse delay-75" />
                        <div className="h-20 bg-white/5 rounded-xl border border-white/5 animate-pulse delay-150" />
                      </div>
                      <div className="h-40 bg-white/5 rounded-xl border border-white/5" />
                   </div>
                </div>

                {/* Decorative background shapes */}
                <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-64 h-64 bg-white/5 rounded-full blur-3xl group-hover:bg-white/10 transition-colors" />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}