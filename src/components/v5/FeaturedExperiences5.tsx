'use client';

import { motion } from 'framer-motion';
import { featured } from '@/lib/data';
import { iconMap } from '../icons';
import { Reveal5 } from './primitives';

const tones = [
  'bg-[var(--v5-cyan)]',
  'bg-[var(--v5-magenta)] text-white',
  'bg-[var(--v5-yellow)]',
  'bg-[var(--v5-mint)]',
];

export function FeaturedExperiences5() {
  return (
    <section id="experiences" className="relative overflow-hidden py-20 md:py-28">
      <div aria-hidden className="absolute inset-0 -z-10 v5-grid-dots" />

      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal5>
          <span className="inline-flex items-center gap-2 rounded-full border-2 border-[var(--v5-ink)] bg-white px-3 py-1.5 v5-mono text-base uppercase">✦ chapter 03 — featured</span>
        </Reveal5>
        <Reveal5 delay={0.05}>
          <h2 className="mt-6 v5-display text-5xl leading-[0.85] sm:text-7xl md:text-[120px]">
            <span className="block text-[var(--v5-ink)]">trips people are</span>
            <span className="block v5-chrome-text">falling in love</span>
            <span className="block text-[var(--v5-ink)]">with.</span>
          </h2>
        </Reveal5>

        {/* Mobile swipe */}
        <div className="-mx-5 mt-12 md:hidden">
          <div className="snap-x-mandatory no-scrollbar flex gap-5 overflow-x-auto px-5 pb-6">
            {featured.map((exp, i) => (
              <div key={exp.id} className="snap-start w-[80%] shrink-0">
                <Card5 exp={exp} index={i} />
              </div>
            ))}
            <div className="w-2 shrink-0" aria-hidden />
          </div>
        </div>

        {/* Desktop grid */}
        <div className="mt-12 hidden gap-6 md:grid md:grid-cols-2 lg:grid-cols-4">
          {featured.map((exp, i) => (
            <Card5 key={exp.id} exp={exp} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Card5({ exp, index }: { exp: typeof featured[number]; index: number }) {
  const Icon = iconMap[exp.icon];
  const tone = tones[index % tones.length];
  const tilt = (index % 2 === 0 ? -1 : 1) * (1 + (index % 3) * 0.5);

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, delay: index * 0.07 }}
      whileHover={{ y: -8, rotate: 0, scale: 1.02 }}
      style={{ rotate: `${tilt}deg`, boxShadow: '6px 6px 0 0 var(--v5-ink)' }}
      className={`group relative flex h-full flex-col overflow-hidden rounded-3xl border-2 border-[var(--v5-ink)] ${tone}`}
    >
      <div
        className="relative aspect-[4/3] overflow-hidden border-b-2 border-[var(--v5-ink)]"
        style={{ background: `linear-gradient(135deg, ${exp.palette.from} 0%, ${exp.palette.to} 100%)` }}
      >
        <div
          aria-hidden
          className="absolute inset-0 opacity-30 mix-blend-overlay"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          }}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <Icon className="h-28 w-28 transition-transform duration-500 group-hover:scale-110" stroke={exp.palette.ink} accent={exp.palette.accent} />
        </div>
        {/* Chrome shimmer sweep on hover */}
        <span aria-hidden className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/60 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
        <span className="absolute -right-2 -top-2 rotate-12 inline-flex items-center gap-1 rounded-2xl border-2 border-[var(--v5-ink)] bg-white px-2.5 py-1 v5-display text-base">
          ✦ hot
        </span>
        <span className="absolute left-3 bottom-3 rounded-md border-2 border-[var(--v5-ink)] bg-white px-2 py-0.5 v5-mono text-base">
          {exp.region}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="v5-display text-2xl leading-tight md:text-3xl">{exp.title}</h3>
        <p className="mt-2 v5-mono text-base leading-snug opacity-85">{exp.blurb}</p>

        <div className="mt-auto pt-4 flex items-center justify-between">
          <span className="v5-mono text-base opacity-75">{exp.meta.split(' · ')[0]}</span>
          <span className="v5-chrome-btn inline-flex items-center gap-1.5 rounded-full border-2 border-[var(--v5-ink)] px-4 py-2 v5-display text-base text-[var(--v5-ink)]">
            ✦ want
          </span>
        </div>
      </div>
    </motion.article>
  );
}
