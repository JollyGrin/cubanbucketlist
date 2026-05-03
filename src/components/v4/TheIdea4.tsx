'use client';

import { BlurReveal } from './primitives';

export function TheIdea4() {
  return (
    <section id="about" className="relative border-t v4-rule py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid gap-12 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-4">
            <BlurReveal>
              <span className="v4-mono text-[10px] uppercase tracking-[0.32em] text-[var(--v4-violet)]">02 — premise</span>
              <h2 className="mt-4 text-balance text-4xl font-medium tracking-[-0.02em] md:text-6xl">
                Not a tour company. <span className="v4-serif italic font-normal text-[var(--v4-cyan)]">A standing invitation.</span>
              </h2>
            </BlurReveal>
          </div>
          <div className="md:col-span-8">
            <BlurReveal delay={0.1}>
              <p className="text-lg leading-relaxed text-white/75 md:text-xl">
                Cuban Bucket List is a small members-only publication. Twice a month we share a real
                story from the island and a chance to vote on which experience we should turn into a
                trip next. Locals get paid first. Members get the first invitation. Everyone else
                hears about it later.
              </p>
            </BlurReveal>

            <div className="mt-10 grid gap-px overflow-hidden rounded-2xl v4-glow-border md:grid-cols-3">
              {[
                { k: 'Group size', v: '3 – 12', s: 'most are 6 or fewer' },
                { k: 'Local share', v: '70 – 85%', s: 'paid before the trip' },
                { k: 'Provinces', v: '11', s: 'across the whole island' },
              ].map((c, i) => (
                <BlurReveal key={c.k} delay={0.15 + i * 0.06} className="bg-[var(--v4-bg-2)] p-6 md:p-7">
                  <p className="v4-mono text-[10px] uppercase tracking-[0.24em] text-white/45">{c.k}</p>
                  <p className="mt-2 text-4xl font-medium tracking-tight md:text-5xl">{c.v}</p>
                  <p className="mt-1 v4-mono text-[10px] uppercase tracking-[0.22em] text-[var(--v4-cyan)]">{c.s}</p>
                </BlurReveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
