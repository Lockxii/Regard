import { Section } from '@/components/ui/Section';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

export function PricingSection() {
  return (
    <Section id="tarifs">
      <div className="container mx-auto max-w-5xl px-4">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold">Un prix simple, sans surprise.</h2>
          <p className="mt-4 text-lg text-foreground/80">
            Le produit se rentabilise de lui-même dès le premier abonnement inutile que vous supprimez.
          </p>
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="flex flex-col">
            <CardHeader>
              <CardTitle>Gratuit</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
                <p className="text-4xl font-bold mb-4">0 €</p>
                <ul className="space-y-2 text-foreground/80">
                    <li>✓ Suivi de 5 abonnements</li>
                    <li>✓ Vue globale</li>
                    <li>✓ Alertes basiques</li>
                </ul>
            </CardContent>
            <CardFooter>
                <Button variant="outline" className="w-full">Commencer gratuitement</Button>
            </CardFooter>
          </Card>

          <Card className="border-primary flex flex-col ring-2 ring-primary">
             <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle>Regard Plus</CardTitle>
                <div className="px-3 py-1 text-xs font-semibold rounded-full bg-primary text-primary-foreground">POPULAIRE</div>
              </div>
            </CardHeader>
            <CardContent className="flex-grow">
                <p className="text-4xl font-bold mb-4">4,90 €<span className="text-lg font-medium text-foreground/60">/mois</span></p>
                <ul className="space-y-2 text-foreground/80">
                    <li>✓ Abonnements illimités</li>
                    <li>✓ Alertes personnalisées</li>
                    <li>✓ Résiliation guidée avancée</li>
                    <li>✓ Statistiques détaillées</li>
                </ul>
            </CardContent>
             <CardFooter>
                <Button className="w-full">Choisir Regard Plus</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </Section>
  );
}
