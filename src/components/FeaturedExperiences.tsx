'use client';

import { featured } from '@/lib/data';
import { SectionHeader } from './SectionHeader';
import { ExperienceCard } from './ExperienceCard';

export function FeaturedExperiences() {
  return (
    <section
      id="experiences"
      className="relative overflow-hidden bg-parchment-200/40 py-20 md:py-32"
    >
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <SectionHeader
          numeral="III."
          kicker="Featured this month"
          title="Experiences people are"
          italic="falling in love with."
          subtitle="A handful of the moments locals have let us in on. Tap one to tell us you’d love to live it — your interest decides what we build first."
        />

        {/* Mobile horizontal swipe */}
        <div className="-mx-5 md:hidden">
          <div className="snap-x-mandatory no-scrollbar flex gap-4 overflow-x-auto px-5 pb-6">
            {featured.map((exp, i) => (
              <div key={exp.id} className="snap-start w-[78%] shrink-0 first:pl-0">
                <ExperienceCard exp={exp} index={i} />
              </div>
            ))}
            <div className="w-2 shrink-0" aria-hidden />
          </div>
          <div className="px-5">
            <p className="font-hand text-base text-ink-muted">← swipe through the album →</p>
          </div>
        </div>

        {/* Desktop grid */}
        <div className="hidden gap-6 md:grid md:grid-cols-2 lg:grid-cols-4">
          {featured.map((exp, i) => (
            <ExperienceCard key={exp.id} exp={exp} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
