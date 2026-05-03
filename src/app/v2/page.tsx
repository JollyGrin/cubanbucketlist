import { Nav2 } from '@/components/v2/Nav2';
import { Hero2 } from '@/components/v2/Hero2';
import { TheIdea2 } from '@/components/v2/TheIdea2';
import { FeaturedExperiences2 } from '@/components/v2/FeaturedExperiences2';
import { VoteSection2 } from '@/components/v2/VoteSection2';
import { Journal2 } from '@/components/v2/Journal2';
import { Network2 } from '@/components/v2/Network2';
import { WhyUs2 } from '@/components/v2/WhyUs2';
import { Footer2 } from '@/components/v2/Footer2';

export default function V2Page() {
  return (
    <main className="v2-root v2-grain relative">
      <Nav2 />
      <Hero2 />
      <TheIdea2 />
      <FeaturedExperiences2 />
      <VoteSection2 />
      <Journal2 />
      <Network2 />
      <WhyUs2 />
      <Footer2 />
    </main>
  );
}
