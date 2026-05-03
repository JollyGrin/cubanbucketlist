'use client';

import { Reveal5 } from './primitives';

export function TheIdea5() {
  return (
    <section id="about" className="relative overflow-hidden border-y-2 border-[var(--v5-ink)] py-20 md:py-28">
      {/* iridescent strip top + bottom */}
      <div aria-hidden className="absolute inset-x-0 top-0 h-2 v5-iridescent" />
      <div aria-hidden className="absolute inset-x-0 bottom-0 h-2 v5-iridescent" />

      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal5>
          <span className="inline-flex items-center gap-2 rounded-full border-2 border-[var(--v5-ink)] bg-white px-3 py-1.5 v5-mono text-base uppercase text-[var(--v5-ink)]">
            ✦ chapter 02 — the premise
          </span>
        </Reveal5>

        <Reveal5 delay={0.05}>
          <h2 className="mt-6 v5-display text-5xl leading-[0.85] sm:text-7xl md:text-[140px]">
            <span className="block text-[var(--v5-ink)]">we are not</span>
            <span className="block v5-chrome-text">a tour</span>
            <span className="block text-[var(--v5-ink)]">company.</span>
          </h2>
        </Reveal5>

        <div className="mt-12 grid gap-5 md:grid-cols-3 md:gap-6">
          {[
            { n: '01', t: 'started as a newsletter.', b: 'Stories, hidden gems, and the locals who make Cuba worth flying for.', tone: 'bg-[var(--v5-cyan)]' },
            { n: '02', t: 'you tell us what to build.', b: 'Every vote you cast helps us decide which experience becomes a real trip first.', tone: 'bg-[var(--v5-magenta)] text-white' },
            { n: '03', t: 'locals get paid first.', b: 'Fair, transparent splits. The photographers, chefs, and guides come before margin.', tone: 'bg-[var(--v5-yellow)]' },
          ].map((c, i) => (
            <Reveal5 key={c.n} delay={i * 0.08}>
              <div className={`relative rounded-3xl border-2 border-[var(--v5-ink)] ${c.tone} p-6`}
                style={{ boxShadow: '6px 6px 0 0 var(--v5-ink)' }}>
                <span className="v5-mono text-base uppercase opacity-75">№ {c.n}</span>
                <h3 className="mt-3 v5-display text-3xl leading-tight md:text-4xl">{c.t}</h3>
                <p className="mt-3 v5-mono text-base leading-relaxed">{c.b}</p>
              </div>
            </Reveal5>
          ))}
        </div>
      </div>
    </section>
  );
}
