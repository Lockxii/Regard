import { Section } from '@/components/ui/Section';

export function VideoSection() {
  return (
    <Section className="text-center">
      <div className="container mx-auto max-w-4xl px-4">
        <h2 className="text-3xl md:text-4xl font-bold">
          Un aperçu en 2 minutes.
        </h2>
        <p className="mt-4 text-lg text-foreground/80">
          Découvrez comment Regard vous aide à reprendre le contrôle sur vos abonnements.
        </p>
        <div className="mt-8 bg-gray-900 rounded-2xl p-8 max-w-3xl mx-auto aspect-video flex items-center justify-center">
            <div className="bg-white/10 rounded-full h-20 w-20 flex items-center justify-center cursor-pointer hover:bg-white/20 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="white" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 3l14 9-14 9V3z"></path></svg>
            </div>
        </div>
        <p className="mt-6 text-sm text-foreground/80">
          Dashboard, timeline des prélèvements, alertes intelligentes, résiliation guidée.
        </p>
      </div>
    </Section>
  );
}
