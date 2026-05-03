import { Nav5 } from '@/components/v5/Nav5';
import { Hero5 } from '@/components/v5/Hero5';
import { TheIdea5 } from '@/components/v5/TheIdea5';
import { FeaturedExperiences5 } from '@/components/v5/FeaturedExperiences5';
import { VoteSection5 } from '@/components/v5/VoteSection5';
import { Journal5 } from '@/components/v5/Journal5';
import { Network5 } from '@/components/v5/Network5';
import { WhyUs5 } from '@/components/v5/WhyUs5';
import { Footer5 } from '@/components/v5/Footer5';

export default function V5Page() {
  return (
    <main className="v5-root relative">
      <Nav5 />
      <Hero5 />
      <TheIdea5 />
      <FeaturedExperiences5 />
      <VoteSection5 />
      <Journal5 />
      <Network5 />
      <WhyUs5 />
      <Footer5 />
    </main>
  );
}
