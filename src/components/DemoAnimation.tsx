'use client';

import { motion } from 'framer-motion';
import { Trash2, MousePointer2 } from 'lucide-react';
import { useState, useEffect } from 'react';

export function DemoAnimation() {
  const [step, setStep] = useState(0);

  // Cycle d'animation
  useEffect(() => {
    const timer = setInterval(() => {
      setStep((s) => (s + 1) % 6);
    }, 2000); 
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full max-w-md mx-auto perspective-1000">
      {/* Fenêtre principale */}
      <div className="bg-white border-2 border-black shadow-[8px_8px_0px_0px_black] p-4 rotate-1 md:rotate-2 transition-transform hover:rotate-0">
        
        {/* Header de la fausse app */}
        <div className="flex justify-between items-center border-b-2 border-black pb-4 mb-4">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500 border border-black" />
            <div className="w-3 h-3 rounded-full bg-yellow-400 border border-black" />
          </div>
          <div className="text-xs font-black uppercase tracking-widest opacity-50">Mon Tableau de bord</div>
        </div>

        {/* Liste des abonnements */}
        <div className="space-y-3">
          {/* Item 1: Gardé */}
          <div className="flex justify-between items-center p-3 border-2 border-black bg-blue-50">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-blue-500 border-2 border-black flex items-center justify-center text-white font-bold">N</div>
              <div>
                <div className="font-bold text-sm">Netflix</div>
                <div className="text-[10px] uppercase font-bold opacity-50">Actif</div>
              </div>
            </div>
            <span className="font-mono font-bold">19.99€</span>
          </div>

          {/* Item 2: Cible de l'animation */}
          <motion.div 
            animate={{
              opacity: step >= 4 ? 0 : 1,
              height: step >= 4 ? 0 : 'auto',
              marginBottom: step >= 4 ? 0 : 12,
              borderColor: step === 3 ? '#ef4444' : '#000000',
              backgroundColor: step === 3 ? '#fee2e2' : '#fffbeb' // Rouge clair au click
            }}
            className="flex justify-between items-center p-3 border-2 bg-yellow-50 overflow-hidden"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-yellow-400 border-2 border-black flex items-center justify-center font-bold">G</div>
              <div>
                <div className="font-bold text-sm">Gym Club</div>
                <div className="text-[10px] uppercase font-bold opacity-50">Inutile</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
                <span className="font-mono font-bold">45.00€</span>
                <div className="bg-black text-white p-1 cursor-pointer">
                    <Trash2 size={12} />
                </div>
            </div>
          </motion.div>

          {/* Item 3: Gardé */}
          <div className="flex justify-between items-center p-3 border-2 border-black bg-green-50">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-green-500 border-2 border-black flex items-center justify-center text-white font-bold">S</div>
              <div>
                <div className="font-bold text-sm">Spotify</div>
                <div className="text-[10px] uppercase font-bold opacity-50">Actif</div>
              </div>
            </div>
            <span className="font-mono font-bold">12.99€</span>
          </div>
        </div>

        {/* Footer Total */}
        <div className="mt-4 pt-4 border-t-2 border-black flex justify-between items-center">
            <span className="font-black uppercase text-xs">Économies</span>
            <motion.div 
                key={step >= 4 ? 'saved' : 'normal'}
                initial={{ scale: 1.5, color: '#2563eb' }}
                animate={{ scale: 1, color: '#000000' }}
                className="font-mono font-black text-xl"
            >
                {step >= 4 ? '+45.00€' : '0.00€'}
            </motion.div>
        </div>

      </div>

      {/* Curseur animé */}
      <motion.div
        animate={{
            x: step === 0 ? 0 : step === 1 ? 180 : step === 2 ? 260 : step === 3 ? 260 : 50,
            y: step === 0 ? 300 : step === 1 ? 150 : step === 2 ? 150 : step === 3 ? 150 : 350,
            scale: step === 3 ? 0.8 : 1 // Click effect
        }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        className="absolute top-0 left-0 z-50 pointer-events-none drop-shadow-xl"
      >
        <MousePointer2 className="w-8 h-8 fill-black text-white stroke-[1px]" />
      </motion.div>
      
      {/* Badge Flottant "Succès" */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: step === 4 ? 1 : 0, opacity: step === 4 ? 1 : 0 }}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-green-500 border-2 border-black text-white font-black uppercase px-6 py-2 rotate-[-12deg] shadow-[4px_4px_0px_0px_black] z-40 whitespace-nowrap"
      >
        Résilier !
      </motion.div>

    </div>
  );
}
