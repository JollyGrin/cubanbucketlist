import { Nav4 } from '@/components/v4/Nav4';
import { Hero4 } from '@/components/v4/Hero4';
import { TheIdea4 } from '@/components/v4/TheIdea4';
import { FeaturedExperiences4 } from '@/components/v4/FeaturedExperiences4';
import { VoteSection4 } from '@/components/v4/VoteSection4';
import { Journal4 } from '@/components/v4/Journal4';
import { Network4 } from '@/components/v4/Network4';
import { WhyUs4 } from '@/components/v4/WhyUs4';
import { Footer4 } from '@/components/v4/Footer4';

export default function V4Page() {
  return (
    <main className="v4-root relative overflow-hidden">
      <Nav4 />
      <Hero4 />
      <TheIdea4 />
      <FeaturedExperiences4 />
      <VoteSection4 />
      <Journal4 />
      <Network4 />
      <WhyUs4 />
      <Footer4 />
    </main>
  );
}
