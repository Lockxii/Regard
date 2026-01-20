import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { FeaturesSection } from '@/components/FeaturesSection';
import { MethodSection } from '@/components/MethodSection';
import { PricingSection } from '@/components/PricingSection';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f8f9fa]">
      <Header />
      <Hero />
      <FeaturesSection />
      <MethodSection />
      <PricingSection />
      <Footer />
    </main>
  );
}
