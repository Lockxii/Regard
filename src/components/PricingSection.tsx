import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { Check } from 'lucide-react';

export function PricingSection() {
  return (
    <Section id="prix" className="py-24 bg-white border-t-2 border-black">
      <div className="container mx-auto max-w-5xl px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tighter">
            Un prix simple, <br /><span className="text-primary">sans surprise.</span>
          </h2>
          <p className="mt-4 text-base font-bold uppercase tracking-wide opacity-60">
            Rentabilisé dès la première résiliation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto items-center">
          
          {/* Free Plan */}
          <div className="brutal-card p-8 flex flex-col h-full bg-gray-50 border-2 border-black">
            <div className="mb-6">
              <h3 className="text-2xl font-black uppercase tracking-tight">Gratuit</h3>
              <div className="mt-4 flex items-baseline">
                 <span className="text-4xl font-black">0 €</span>
              </div>
              <p className="mt-2 text-xs font-bold uppercase opacity-60">Pour découvrir</p>
            </div>
            
            <ul className="space-y-4 mb-8 flex-grow">
                {['Suivi de 5 abonnements', 'Vue globale', 'Alertes basiques'].map((feat, i) => (
                    <li key={i} className="flex items-center gap-3 font-bold text-sm">
                        <div className="w-5 h-5 bg-black text-white flex items-center justify-center">
                            <Check className="w-3 h-3" strokeWidth={4} />
                        </div>
                        {feat}
                    </li>
                ))}
            </ul>
            
            <Button variant="outline" className="w-full border-2 border-black hover:bg-black hover:text-white transition-colors uppercase font-black tracking-wider">
                Commencer
            </Button>
          </div>

          {/* Pro Plan */}
          <div className="p-8 flex flex-col h-full bg-black text-white border-2 border-black shadow-[8px_8px_0px_0px_black] transform md:-translate-y-4 relative transition-transform hover:-translate-y-5">
             <div className="absolute top-0 right-0 bg-accent text-black text-[10px] font-black uppercase px-3 py-1 border-l-2 border-b-2 border-black">
                Populaire
             </div>
             
             <div className="mb-6">
              <h3 className="text-2xl font-black uppercase tracking-tight text-white">Regard Plus</h3>
              <div className="mt-4 flex items-baseline text-white">
                 <span className="text-4xl font-black">4,90 €</span>
                 <span className="ml-2 text-sm font-bold opacity-80">/mois</span>
              </div>
              <p className="mt-2 text-xs font-bold uppercase opacity-80">Liberté totale</p>
            </div>
            
             <ul className="space-y-4 mb-8 flex-grow">
                {['Abonnements illimités', 'Alertes personnalisées', 'Résiliation automatique', 'Support prioritaire'].map((feat, i) => (
                    <li key={i} className="flex items-center gap-3 font-bold text-sm">
                        <div className="w-5 h-5 bg-white text-black flex items-center justify-center border border-black">
                            <Check className="w-3 h-3" strokeWidth={4} />
                        </div>
                        {feat}
                    </li>
                ))}
            </ul>

             <Button className="w-full bg-white text-black border-2 border-black hover:bg-accent hover:border-black hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none shadow-[4px_4px_0px_0px_black] transition-all uppercase font-black tracking-wider">
                Choisir Regard Plus
            </Button>
          </div>

        </div>
      </div>
    </Section>
  );
}

