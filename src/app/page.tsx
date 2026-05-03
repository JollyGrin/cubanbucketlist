import { Nav } from '@/components/Nav';
import { Hero } from '@/components/Hero';
import { TheIdea } from '@/components/TheIdea';
import { FeaturedExperiences } from '@/components/FeaturedExperiences';
import { VoteSection } from '@/components/VoteSection';
import { Journal } from '@/components/Journal';
import { Network } from '@/components/Network';
import { JoinUs } from '@/components/JoinUs';
import { WhyUs } from '@/components/WhyUs';
import { Footer } from '@/components/Footer';

export default function Page() {
  return (
    <main className="grain relative font-sans">
      <Nav />
      <Hero />
      <TheIdea />
      <FeaturedExperiences />
      <VoteSection />
      <Journal />
      <Network />
      <JoinUs />
      <WhyUs />
      <Footer />
    </main>
  );
}
