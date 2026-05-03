'use client';

import { motion } from 'framer-motion';
import { featured } from '@/lib/data';
import { iconMap } from '../icons';

const stickerTones = [
  'bg-[var(--v3-pink)] text-white',
  'bg-[var(--v3-yellow)] text-[var(--v3-ink)]',
  'bg-[var(--v3-mint)] text-[var(--v3-ink)]',
  'bg-[var(--v3-orange)] text-white',
];

export function FeaturedExperiences3() {
  return (
    <section
      id="experiences"
      className="relative overflow-hidden bg-[var(--v3-paper)] py-20 md:py-28"
    >
      <div aria-hidden className="absolute inset-0 -z-10 v3-grid-bg" />

      <div className="mx-auto max-w-[1400px] px-5 md:px-12">
        <div className="mb-10 flex flex-col items-start gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border-2 border-[var(--v3-ink)] bg-[var(--v3-pink)] px-3 py-1.5 v3-mono text-xs font-bold uppercase tracking-wider text-white">
              ★ Chapter 03 — Featured
            </span>
            <h2 className="mt-4 v3-display text-5xl font-black uppercase leading-[0.85] tracking-[-0.01em] sm:text-6xl md:text-[110px]">
              EXPERIENCES <br />
              PEOPLE ARE <span className="bg-[var(--v3-yellow)] px-3">FALLING</span> <br />
              IN LOVE WITH.
            </h2>
          </div>
          <span className="rounded-full border-2 border-[var(--v3-ink)] bg-[var(--v3-paper)] px-4 py-2 v3-mono text-xs font-bold uppercase">
            ↓ swipe / scroll
          </span>
        </div>

        {/* Mobile swipe */}
        <div className="-mx-5 md:hidden">
          <div className="snap-x-mandatory no-scrollbar flex gap-5 overflow-x-auto px-5 pb-6">
            {featured.map((exp, i) => (
              <div key={exp.id} className="snap-start w-[80%] shrink-0">
                <Card3 exp={exp} index={i} />
              </div>
            ))}
            <div className="w-2 shrink-0" aria-hidden />
          </div>
        </div>

        <div className="hidden gap-6 md:grid md:grid-cols-2 lg:grid-cols-4">
          {featured.map((exp, i) => (
            <Card3 key={exp.id} exp={exp} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Card3({ exp, index }: { exp: typeof featured[number]; index: number }) {
  const Icon = iconMap[exp.icon];
  const tone = stickerTones[index % stickerTones.length];
  const tilt = (index % 2 === 0 ? -1 : 1) * (1 + (index % 3) * 0.5);

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, delay: index * 0.07 }}
      whileHover={{ y: -6, rotate: 0 }}
      style={{ rotate: `${tilt}deg` }}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border-2 border-[var(--v3-ink)] bg-[var(--v3-paper)] v3-shadow"
    >
      <div
        className="relative aspect-[4/3] overflow-hidden border-b-2 border-[var(--v3-ink)]"
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
        <span className={`absolute -right-2 -top-2 rotate-12 rounded-lg border-2 border-[var(--v3-ink)] px-2.5 py-1 v3-display text-base font-black uppercase ${tone}`}>
          ★ HOT
        </span>
        <span className="absolute left-3 bottom-3 rounded-md border-2 border-[var(--v3-ink)] bg-[var(--v3-paper)] px-2 py-0.5 v3-mono text-[10px] font-bold uppercase">
          {exp.region}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="v3-display text-2xl font-black uppercase leading-tight tracking-tight md:text-3xl">
          {exp.title}
        </h3>
        <p className="mt-2 v3-mono text-sm font-medium leading-relaxed text-[var(--v3-ink)]/75">{exp.blurb}</p>

        <div className="mt-4 flex items-center justify-between">
          <span className="v3-mono text-[10px] font-bold uppercase tracking-wider opacity-65">
            {exp.meta.split(' · ')[0]}
          </span>
          <button
            type="button"
            className="rounded-full border-2 border-[var(--v3-ink)] bg-[var(--v3-yellow)] px-4 py-2 v3-display text-sm font-black uppercase v3-shadow-sm transition-transform group-hover:-translate-y-0.5"
          >
            I WANT IT ★
          </button>
        </div>
      </div>
    </motion.article>
  );
}
