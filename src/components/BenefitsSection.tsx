import { Section } from '@/components/ui/Section';

const benefits = [
    {
      title: 'Pour les particuliers dépassés',
      description: 'Si vous avez l’impression de payer pour des services que vous n’utilisez même plus, Regard est fait pour vous. Retrouvez la clarté en quelques minutes.',
    },
    {
      title: 'Pour les couples et colocations',
      description: 'Partagez la charge mentale des abonnements communs. Voyez qui paie quoi et centralisez tout pour une gestion simplifiée à deux ou plus.',
    },
    {
      title: 'Pour ceux qui n’aiment pas la finance',
      description: 'Pas de graphiques complexes ni de jargon bancaire. Regard se concentre sur une seule chose : vos abonnements, de la manière la plus simple possible.',
    },
     {
      title: 'Pour les digital natives',
      description: 'Vous multipliez les services en ligne ? Regard vous aide à garder une trace de tous vos essais gratuits et abonnements pour ne plus jamais payer par oubli.',
    },
  ];

export function BenefitsSection() {
  return (
    <Section id="comment-ca-marche" className="bg-secondary">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="text-center max-w-2xl mx-auto">
            <h2 className="mt-2 text-3xl md:text-4xl font-bold">
            Conçu pour la vraie vie.
            </h2>
            <p className="mt-4 text-lg text-foreground/80">
            Regard s&apos;adapte à vos besoins, que vous soyez seul, en couple ou simplement à la recherche de simplicité.
            </p>
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
                <div key={index} className="bg-background p-8 rounded-2xl">
                    <h3 className="text-xl font-bold">{benefit.title}</h3>
                    <p className="mt-2 text-foreground/80">{benefit.description}</p>
                </div>
            ))}
        </div>
      </div>
    </Section>
  );
}
