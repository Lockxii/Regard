'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Button, buttonVariants } from '@/components/ui/Button';
import { Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-4 left-0 right-0 z-50 px-4">
      <div className="container mx-auto max-w-5xl">
        <div className="brutal-card bg-white px-6 py-3 flex justify-between items-center relative z-20">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-black flex items-center justify-center rotate-3 shadow-[2px_2px_0px_0px_rgba(37,99,235,1)]">
               <div className="w-4 h-4 border-2 border-white rounded-sm" />
            </div>
            <span className="text-xl font-black uppercase tracking-tighter">Regard</span>
          </div>
          
          <nav className="hidden md:flex gap-8 font-bold uppercase text-[10px] tracking-widest">
            <a href="#solutions" className="hover:text-primary transition-colors">Solutions</a>
            <a href="#methode" className="hover:text-primary transition-colors">Méthode</a>
            <a href="#prix" className="hover:text-primary transition-colors">Tarifs</a>
          </nav>

          <div className="flex gap-4 items-center">
            <div className="hidden md:flex gap-4 items-center">
              <Link href="/dashboard" className={buttonVariants({ variant: 'ghost', size: 'sm' })}>Connexion</Link>
              <Button variant="primary" size="sm" onClick={() => document.getElementById('solutions')?.scrollIntoView({ behavior: 'smooth' })}>Essai Gratuit</Button>
            </div>
            
            <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-full left-4 right-4 mt-2 md:hidden"
            >
              <div className="brutal-card bg-white p-6 flex flex-col gap-6 text-center shadow-[4px_4px_0px_0px_black]">
                <nav className="flex flex-col gap-4 font-black uppercase text-xl tracking-tighter">
                  <a href="#solutions" onClick={() => setIsOpen(false)} className="hover:text-primary transition-colors">Solutions</a>
                  <a href="#methode" onClick={() => setIsOpen(false)} className="hover:text-primary transition-colors">Méthode</a>
                  <a href="#prix" onClick={() => setIsOpen(false)} className="hover:text-primary transition-colors">Tarifs</a>
                </nav>
                <div className="flex flex-col gap-3 pt-4 border-t-2 border-black">
                  <Link href="/dashboard" className={buttonVariants({ variant: 'ghost', size: 'default' })}>Connexion</Link>
                  <Button variant="primary" size="default" onClick={() => {
                    setIsOpen(false);
                    document.getElementById('solutions')?.scrollIntoView({ behavior: 'smooth' });
                  }}>Essai Gratuit</Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}