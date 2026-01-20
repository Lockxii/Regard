'use client';

import Link from 'next/link';
import { Button, buttonVariants } from '@/components/ui/Button';

export function Header() {
  return (
    <header className="fixed top-4 left-0 right-0 z-50 px-4">
      <div className="container mx-auto max-w-5xl">
        <div className="brutal-card bg-white px-6 py-3 flex justify-between items-center">
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
            <Link href="/dashboard" className={buttonVariants({ variant: 'ghost', size: 'sm' })}>Connexion</Link>
            <Button variant="primary" size="sm" onClick={() => document.getElementById('solutions')?.scrollIntoView({ behavior: 'smooth' })}>Essai Gratuit</Button>
          </div>
        </div>
      </div>
    </header>
  );
}