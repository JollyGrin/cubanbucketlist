import { Nav7 } from '@/components/v7/Nav7';
import { Hero7 } from '@/components/v7/Hero7';
import { TheIdea7 } from '@/components/v7/TheIdea7';
import { FeaturedExperiences7 } from '@/components/v7/FeaturedExperiences7';
import { VoteSection7 } from '@/components/v7/VoteSection7';
import { Journal7 } from '@/components/v7/Journal7';
import { Network7 } from '@/components/v7/Network7';
import { WhyUs7 } from '@/components/v7/WhyUs7';
import { Footer7 } from '@/components/v7/Footer7';

export default function V7Page() {
  return (
    <main className="v7-root relative overflow-hidden">
      <Nav7 />
      <Hero7 />
      <TheIdea7 />
      <FeaturedExperiences7 />
      <VoteSection7 />
      <Journal7 />
      <Network7 />
      <WhyUs7 />
      <Footer7 />
    </main>
  );
}
