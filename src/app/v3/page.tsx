import { Nav3 } from '@/components/v3/Nav3';
import { Hero3 } from '@/components/v3/Hero3';
import { TheIdea3 } from '@/components/v3/TheIdea3';
import { FeaturedExperiences3 } from '@/components/v3/FeaturedExperiences3';
import { VoteSection3 } from '@/components/v3/VoteSection3';
import { Journal3 } from '@/components/v3/Journal3';
import { Network3 } from '@/components/v3/Network3';
import { WhyUs3 } from '@/components/v3/WhyUs3';
import { Footer3 } from '@/components/v3/Footer3';

export default function V3Page() {
  return (
    <main className="v3-root relative">
      <Nav3 />
      <Hero3 />
      <TheIdea3 />
      <FeaturedExperiences3 />
      <VoteSection3 />
      <Journal3 />
      <Network3 />
      <WhyUs3 />
      <Footer3 />
    </main>
  );
}
