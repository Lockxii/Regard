'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X, Check, AlertCircle, Loader2 } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/Button';

export function DemoModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [step, setStep] = useState<'scanning' | 'detected' | 'action' | 'success'>('scanning');

  useEffect(() => {
    if (isOpen) {
      setStep('scanning');
      const t1 = setTimeout(() => setStep('detected'), 2000);
      const t2 = setTimeout(() => setStep('action'), 3500);
      const t3 = setTimeout(() => setStep('success'), 5000);
      
      return () => {
        clearTimeout(t1);
        clearTimeout(t2);
        clearTimeout(t3);
      };
    }
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={onClose}
          />
          
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }} 
            animate={{ scale: 1, opacity: 1 }} 
            exit={{ scale: 0.9, opacity: 0 }}
            className="relative w-full max-w-lg bg-white border-2 border-black shadow-[8px_8px_0px_0px_black] overflow-hidden"
          >
            {/* Header */}
            <div className="flex justify-between items-center p-4 border-b-2 border-black bg-gray-50">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500 border border-black" />
                <div className="w-3 h-3 rounded-full bg-yellow-400 border border-black" />
                <div className="w-3 h-3 rounded-full bg-green-500 border border-black" />
                <span className="ml-2 text-xs font-black uppercase tracking-widest opacity-50">Démo Live</span>
              </div>
              <button onClick={onClose} className="hover:bg-black hover:text-white p-1 transition-colors">
                <X size={20} />
              </button>
            </div>

            {/* Content */}
            <div className="p-6 min-h-[300px] flex flex-col justify-center">
              
              {step === 'scanning' && (
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 border-2 border-black mx-auto flex items-center justify-center bg-blue-100 animate-pulse">
                     <Loader2 className="w-8 h-8 animate-spin" />
                  </div>
                  <h3 className="text-xl font-black uppercase">Analyse des comptes...</h3>
                  <p className="text-sm font-medium opacity-60">Recherche d'abonnements oubliés</p>
                </div>
              )}

              {(step === 'detected' || step === 'action' || step === 'success') && (
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 border-2 border-black bg-white opacity-50">
                    <div className="flex items-center gap-3">
                       <div className="w-10 h-10 bg-black text-white flex items-center justify-center font-bold">N</div>
                       <span className="font-bold">Netflix</span>
                    </div>
                    <span className="font-mono font-bold">19.99€</span>
                  </div>

                  <motion.div 
                    initial={{ x: -10, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    className={`flex justify-between items-center p-4 border-2 border-black transition-colors duration-500 ${step === 'success' ? 'bg-gray-100 opacity-50' : 'bg-red-50'}`}
                  >
                    <div className="flex items-center gap-3">
                       <div className="w-10 h-10 bg-red-500 text-white border-2 border-black flex items-center justify-center font-bold">G</div>
                       <div>
                          <span className="font-bold block">Gym Club</span>
                          {step !== 'success' && <span className="text-[10px] font-black uppercase text-red-600 flex items-center gap-1"><AlertCircle size={10} /> Détecté comme inutile</span>}
                       </div>
                    </div>
                    
                    <div className="flex items-center gap-4">
                        <span className="font-mono font-bold">45.00€</span>
                        {step === 'action' && (
                            <motion.button 
                                initial={{ scale: 0.8 }}
                                animate={{ scale: 1 }}
                                className="bg-black text-white px-3 py-1 font-bold text-xs uppercase hover:bg-red-600 transition-colors"
                            >
                                Résilier
                            </motion.button>
                        )}
                        {step === 'success' && (
                            <div className="text-green-600 font-bold uppercase text-xs flex items-center gap-1">
                                <Check size={14} /> Résilié
                            </div>
                        )}
                    </div>
                  </motion.div>

                  <div className="flex justify-between items-center p-4 border-2 border-black bg-white opacity-50">
                    <div className="flex items-center gap-3">
                       <div className="w-10 h-10 bg-green-500 text-white border-2 border-black flex items-center justify-center font-bold">S</div>
                       <span className="font-bold">Spotify</span>
                    </div>
                    <span className="font-mono font-bold">12.99€</span>
                  </div>
                </div>
              )}

              {step === 'success' && (
                 <motion.div 
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="mt-6 text-center"
                 >
                    <div className="inline-block px-4 py-2 bg-green-400 border-2 border-black font-black uppercase transform rotate-2">
                        + 540€ / an économisés
                    </div>
                 </motion.div>
              )}

            </div>
            
            <div className="p-4 bg-gray-50 border-t-2 border-black text-center">
                <Button size="sm" variant="outline" onClick={() => setStep('scanning')}>Rejouer</Button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
