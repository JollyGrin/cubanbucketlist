import { Nav6 } from '@/components/v6/Nav6';
import { Hero6 } from '@/components/v6/Hero6';
import { TheIdea6 } from '@/components/v6/TheIdea6';
import { FeaturedExperiences6 } from '@/components/v6/FeaturedExperiences6';
import { VoteSection6 } from '@/components/v6/VoteSection6';
import { Journal6 } from '@/components/v6/Journal6';
import { Network6 } from '@/components/v6/Network6';
import { WhyUs6 } from '@/components/v6/WhyUs6';
import { Footer6 } from '@/components/v6/Footer6';

export default function V6Page() {
  return (
    <main className="v6-root relative overflow-hidden">
      <Nav6 />
      <Hero6 />
      <TheIdea6 />
      <FeaturedExperiences6 />
      <VoteSection6 />
      <Journal6 />
      <Network6 />
      <WhyUs6 />
      <Footer6 />
    </main>
  );
}
