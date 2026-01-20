import { Section } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';

export function AnalyticsSection() {
  return (
    <Section id="analytics">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="text-center max-w-2xl mx-auto">
            <p className="text-sm font-semibold uppercase text-primary">Analytics</p>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold">
            Suivez vos économies en temps réel.
            </h2>
            <p className="mt-4 text-lg text-foreground/80">
            Voyez concrètement l&apos;impact de chaque résiliation sur votre budget mensuel et annuel.
            </p>
        </div>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 text-center">
            <div className="bg-secondary rounded-2xl p-6">
                <p className="text-3xl font-bold">18</p>
                <p className="text-sm text-foreground/80">Abonnements suivis</p>
            </div>
            <div className="bg-secondary rounded-2xl p-6">
                <p className="text-3xl font-bold">87,30 €</p>
                <p className="text-sm text-foreground/80">Coût mensuel avant</p>
            </div>
            <div className="bg-secondary rounded-2xl p-6">
                <p className="text-3xl font-bold text-green-600">45,80 €</p>
                <p className="text-sm text-foreground/80">Coût mensuel actuel</p>
            </div>
            <div className="bg-secondary rounded-2xl p-6">
                <p className="text-3xl font-bold text-green-600">498 €</p>
                <p className="text-sm text-foreground/80">Économies annuelles</p>
            </div>
        </div>

        <Card className="mt-12 p-6 md:p-8">
            <div className="flex justify-between items-center mb-6">
                <p className="font-semibold">Dépenses récurrentes</p>
                <div className="flex gap-4 text-sm font-medium text-foreground/60">
                    <button className="text-primary font-semibold">Tout</button>
                    <button>12 mois</button>
                    <button>3 mois</button>
                    <button>30 jours</button>
                </div>
            </div>
            <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
                <p className="text-sm text-gray-500">[ Courbe stylisée des dépenses ]</p>
            </div>
        </Card>
      </div>
    </Section>
  );
}
