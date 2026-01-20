import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';

export function FinalCTASection() {
  return (
    <Section className="text-center bg-secondary">
      <div className="container mx-auto max-w-2xl px-4">
        <h2 className="text-3xl md:text-4xl font-bold">
          Il est temps de reprendre le contrôle.
        </h2>
        <p className="mt-4 text-lg text-foreground/80">
          Créez votre compte, ajoutez vos premiers abonnements et voyez immédiatement combien vous pouvez économiser.
        </p>
        <div className="mt-8">
          <Button size="lg">Créer un compte</Button>
        </div>
        <p className="mt-4 text-sm text-foreground/60">
          Gratuit, sans carte bancaire.
        </p>
      </div>
    </Section>
  );
}
