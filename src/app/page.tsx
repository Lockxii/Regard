import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { FeaturesSection } from '@/components/FeaturesSection';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f8f9fa]">
      <Header />
      <Hero />
      <FeaturesSection />
      <Footer />
    </main>
  );
}
