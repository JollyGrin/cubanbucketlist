'use client';

import { Reveal5 } from './primitives';

const values = [
  { n: '01', t: 'real cuba, real people', b: 'Every trip starts in someone’s kitchen, workshop, or boat. No coaches.', tone: 'bg-[var(--v5-magenta)] text-white' },
  { n: '02', t: 'locals paid first', b: 'Fair, transparent splits — before margin. The whole moat is trust.', tone: 'bg-[var(--v5-yellow)]' },
  { n: '03', t: 'stories worth telling', b: 'You come back with a name in your contacts and a story your friends ask to hear twice.', tone: 'bg-[var(--v5-mint)]' },
];

export function WhyUs5() {
  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      <div aria-hidden className="absolute inset-0 -z-10 v5-grid-dots" />

      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal5>
          <span className="inline-flex items-center gap-2 rounded-full border-2 border-[var(--v5-ink)] bg-white px-3 py-1.5 v5-mono text-base uppercase">✦ chapter 07 — why us</span>
        </Reveal5>
        <Reveal5 delay={0.05}>
          <h2 className="mt-6 v5-display text-5xl leading-[0.85] sm:text-7xl md:text-[120px]">
            <span className="block text-[var(--v5-ink)]">three things we</span>
            <span className="block v5-chrome-text">refuse</span>
            <span className="block text-[var(--v5-ink)]">to compromise.</span>
          </h2>
        </Reveal5>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {values.map((v, i) => (
            <Reveal5 key={v.n} delay={i * 0.08}>
              <div className={`relative rounded-3xl border-2 border-[var(--v5-ink)] p-7 ${v.tone}`}
                style={{ boxShadow: '6px 6px 0 0 var(--v5-ink)' }}
              >
                <span className="absolute -right-3 -top-3 v5-chrome-btn inline-flex h-12 w-12 items-center justify-center rounded-full border-2 border-[var(--v5-ink)] v5-display text-lg text-[var(--v5-ink)] rotate-12">
                  {v.n}
                </span>
                <h3 className="v5-display text-3xl leading-tight md:text-4xl">{v.t}</h3>
                <p className="mt-4 v5-mono text-base leading-relaxed">{v.b}</p>
              </div>
            </Reveal5>
          ))}
        </div>
      </div>
    </section>
  );
}
