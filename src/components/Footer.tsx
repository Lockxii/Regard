export function Footer() {
  return (
    <footer className="py-16 bg-black text-white">
      <div className="container mx-auto max-w-5xl px-6">
        <div className="grid md:grid-cols-4 gap-12 border-b border-white/20 pb-12">
          <div className="col-span-2 space-y-4">
             <span className="text-2xl font-black uppercase tracking-tighter italic">Regard</span>
             <p className="text-xs font-bold opacity-60 max-w-xs leading-relaxed uppercase tracking-wider">
               Reprenez le contrôle de vos finances avec une clarté radicale.
             </p>
          </div>
          <div className="space-y-4">
             <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">Légal</h4>
             <ul className="text-[10px] font-bold uppercase space-y-2 opacity-60">
                <li className="hover:opacity-100 cursor-pointer">Confidentialité</li>
                <li className="hover:opacity-100 cursor-pointer">CGU</li>
             </ul>
          </div>
          <div className="space-y-4">
             <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">Contact</h4>
             <ul className="text-[10px] font-bold uppercase space-y-2 opacity-60">
                <li className="hover:opacity-100 cursor-pointer">Twitter / X</li>
                <li className="hover:opacity-100 cursor-pointer">Email</li>
             </ul>
          </div>
        </div>
        <div className="mt-8 flex justify-between items-center text-[8px] font-bold uppercase tracking-[0.3em] opacity-30">
           <span>© 2026 Regard</span>
           <span>Fait avec passion</span>
        </div>
      </div>
    </footer>
  );
}
