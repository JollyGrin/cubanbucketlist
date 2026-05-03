import { Nav8 } from '@/components/v8/Nav8';
import { Hero8 } from '@/components/v8/Hero8';
import { TheIdea8 } from '@/components/v8/TheIdea8';
import { FeaturedExperiences8 } from '@/components/v8/FeaturedExperiences8';
import { VoteSection8 } from '@/components/v8/VoteSection8';
import { Journal8 } from '@/components/v8/Journal8';
import { Network8 } from '@/components/v8/Network8';
import { WhyUs8 } from '@/components/v8/WhyUs8';
import { Footer8 } from '@/components/v8/Footer8';

export default function V8Page() {
  return (
    <main className="v8-root relative overflow-hidden">
      <Nav8 />
      <Hero8 />
      <TheIdea8 />
      <FeaturedExperiences8 />
      <VoteSection8 />
      <Journal8 />
      <Network8 />
      <WhyUs8 />
      <Footer8 />
    </main>
  );
}
