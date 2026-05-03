'use client';

import { BlurReveal, TiltCard } from './primitives';

const values = [
  { n: '01', t: 'Real Cuba, real people.', b: 'Every experience starts in someone’s kitchen, workshop, or boat. No coaches, no resorts.', g: 'from-[var(--v4-violet)]/20 to-transparent' },
  { n: '02', t: 'Locals get paid first.', b: 'Fair, transparent splits with the people who carry the trip. Trust is the entire moat.', g: 'from-[var(--v4-cyan)]/20 to-transparent' },
  { n: '03', t: 'Stories worth telling.', b: 'You come back with a name in your contacts and one story your friends ask to hear twice.', g: 'from-[var(--v4-pink)]/20 to-transparent' },
];

export function WhyUs4() {
  return (
    <section className="relative border-t v4-rule py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <BlurReveal>
          <span className="v4-mono text-[10px] uppercase tracking-[0.32em] text-[var(--v4-violet)]">07 — principles</span>
          <h2 className="mt-3 max-w-3xl text-balance text-4xl font-medium tracking-[-0.02em] md:text-6xl">
            Three things we won’t compromise on.
          </h2>
        </BlurReveal>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {values.map((v, i) => (
            <BlurReveal key={v.n} delay={i * 0.08}>
              <TiltCard max={4}>
                <div className={`v4-glass relative overflow-hidden rounded-2xl p-7 bg-gradient-to-br ${v.g}`}>
                  <span className="v4-mono text-[10px] uppercase tracking-[0.32em] text-[var(--v4-cyan)]">{v.n}</span>
                  <h3 className="mt-4 text-2xl font-medium tracking-tight md:text-3xl">{v.t}</h3>
                  <p className="mt-3 text-base leading-relaxed text-white/70">{v.b}</p>
                </div>
              </TiltCard>
            </BlurReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
