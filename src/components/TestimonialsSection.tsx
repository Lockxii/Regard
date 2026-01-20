import { Section } from '@/components/ui/Section';
import { Card, CardContent } from '@/components/ui/Card';

const testimonials = [
  {
    name: 'Sophie L.',
    quote: 'Enfin une app qui fait ce qu’elle dit.',
    testimonial: 'J’ai découvert que je payais encore pour deux services que je n’utilisais plus depuis des mois. L’application a été rentabilisée en 5 minutes.',
  },
  {
    name: 'Marc D.',
    quote: 'Simple, efficace, et pas anxiogène.',
    testimonial: 'Je déteste les apps de budget, mais Regard est différent. C’est juste un tableau de bord pour mes abonnements, et c’est exactement ce dont j’avais besoin.',
  },
  {
    name: 'Juliette R.',
    quote: 'Indispensable pour gérer les dépenses à deux.',
    testimonial: 'Avec mon conjoint, on ne savait jamais qui payait quoi. Maintenant, tout est au même endroit. Ça a simplifié notre gestion quotidienne.',
  },
];

export function TestimonialsSection() {
  return (
    <Section id="avis" className="bg-secondary">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-sm font-semibold uppercase text-primary">Témoignages</p>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold">
            Ce que nos utilisateurs en disent.
          </h2>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-background">
              <CardContent className="pt-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gray-200"></div>
                  <p className="font-semibold">{testimonial.name}</p>
                </div>
                <p className="font-bold text-lg">“{testimonial.quote}”</p>
                <p className="mt-2 text-foreground/80">{testimonial.testimonial}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
}
