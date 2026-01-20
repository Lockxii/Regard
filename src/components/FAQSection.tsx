'use client';

import { useState } from 'react';
import { Section } from '@/components/ui/Section';
import { Plus, Minus } from 'lucide-react';
import { cn } from '@/lib/utils';

const faqs = [
  {
    question: 'Qu’est-ce que Regard ?',
    answer: 'Regard est une application web qui vous permet de centraliser, suivre et gérer tous vos abonnements (streaming, logiciels, salles de sport, etc.) en un seul endroit pour mieux maîtriser vos dépenses récurrentes.',
  },
  {
    question: 'Est-ce que Regard est gratuit ?',
    answer: 'Oui, Regard propose un plan gratuit qui vous permet de suivre jusqu\'à 5 abonnements. Pour un suivi illimité et des fonctionnalités avancées comme les alertes personnalisées, nous proposons un plan "Regard Plus".',
  },
  {
    question: 'Dois-je connecter mon compte bancaire ?',
    answer: 'Non. Regard fonctionne sans aucune connexion à votre compte bancaire. Vous ajoutez manuellement vos abonnements, ce qui garantit que vos informations financières sensibles restent privées.',
  },
  {
    question: 'Mes données sont-elles sécurisées ?',
    answer: 'Absolument. Comme nous ne nous connectons pas à vos comptes bancaires, vos données sensibles ne sont jamais exposées. Les informations que vous entrez sont stockées de manière sécurisée.',
  },
  {
    question: 'Puis-je utiliser Regard en couple ou en colocation ?',
    answer: 'Oui, Regard est très utile pour suivre les abonnements partagés. Vous pouvez créer un compte partagé ou simplement utiliser un seul compte pour centraliser les dépenses récurrentes du foyer.',
  },
   {
    question: 'Comment vous contacter ?',
    answer: 'Vous pouvez nous envoyer un message directement via le formulaire de contact disponible sur notre site. Nous répondons généralement en moins de 24 heures.',
  },
];

interface FAQItemProps {
  faq: {
    question: string;
    answer: string;
  };
  isOpen: boolean;
  onToggle: () => void;
}

const FAQItem = ({ faq, isOpen, onToggle }: FAQItemProps) => (
    <div className="border-b py-6">
        <button onClick={onToggle} className="w-full flex justify-between items-center text-left">
            <h3 className="text-lg font-semibold">{faq.question}</h3>
            {isOpen ? <Minus className="h-5 w-5" /> : <Plus className="h-5 w-5" />}
        </button>
        <div
            className={cn(
            'overflow-hidden transition-all duration-300 ease-in-out',
            isOpen ? 'max-h-96 mt-4' : 'max-h-0'
            )}
        >
            <p className="text-foreground/80">{faq.answer}</p>
        </div>
    </div>
);


export function FAQSection() {
    const [openFAQ, setOpenFAQ] = useState<number | null>(0);

    const handleToggle = (index: number) => {
        setOpenFAQ(openFAQ === index ? null : index);
    };

  return (
    <Section id="faq">
      <div className="container mx-auto max-w-4xl px-4">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold">Encore des questions ?</h2>
          <p className="mt-4 text-lg text-foreground/80">Nous avons les réponses.</p>
        </div>

        <div className="mt-12">
            {faqs.map((faq, index) => (
                <FAQItem 
                    key={index}
                    faq={faq}
                    isOpen={openFAQ === index}
                    onToggle={() => handleToggle(index)}
                />
            ))}
        </div>
      </div>
    </Section>
  );
}
