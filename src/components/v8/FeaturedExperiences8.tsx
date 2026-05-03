'use client';

import { motion } from 'framer-motion';
import { featured } from '@/lib/data';
import { iconMap } from '../icons';
import { FiligreeCorner, GoldSeal, OvalVignette, RibbonBanner, TobaccoGarland } from './Filigree';

export function FeaturedExperiences8() {
  return (
    <section
      id="experiences"
      className="relative v8-paper py-20 md:py-32"
    >
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }}
          className="text-center"
        >
          <p className="v8-display italic text-xs uppercase tracking-[0.45em] text-[var(--v8-crimson)]">— Sello № III — La Vitrina —</p>
          <h2 className="mt-4 v8-display text-5xl leading-[0.95] text-[var(--v8-ink)] sm:text-6xl md:text-8xl v8-emboss">
            VITOLAS DE LA <span className="italic text-[var(--v8-crimson)]">CASA</span>
          </h2>
          <p className="mt-2 v8-script v8-gold-text text-4xl md:text-6xl">— featured experiences —</p>
          <TobaccoGarland className="mx-auto mt-6 h-7 w-full max-w-md text-[var(--v8-gold-2)]" />
        </motion.div>

        {/* Mobile horizontal */}
        <div className="-mx-5 mt-12 md:hidden">
          <div className="snap-x-mandatory no-scrollbar flex gap-5 overflow-x-auto px-5 pb-6">
            {featured.map((exp, i) => (
              <div key={exp.id} className="snap-start w-[80%] shrink-0">
                <Card8 exp={exp} index={i} />
              </div>
            ))}
            <div className="w-2 shrink-0" aria-hidden />
          </div>
        </div>

        <div className="mt-14 hidden gap-8 md:grid md:grid-cols-2 lg:grid-cols-4">
          {featured.map((exp, i) => (
            <Card8 key={exp.id} exp={exp} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Card8({ exp, index }: { exp: typeof featured[number]; index: number }) {
  const Icon = iconMap[exp.icon];
  const ribbonTones: ('crimson' | 'emerald' | 'navy')[] = ['crimson', 'emerald', 'navy', 'crimson'];

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, delay: index * 0.07 }}
      whileHover={{ y: -6 }}
      className="v8-sheen v8-filigree relative flex h-full flex-col p-5"
    >
      {/* Corners */}
      <FiligreeCorner className="absolute -top-1 -left-1 h-10 w-10 z-[1]" />
      <FiligreeCorner className="absolute -top-1 -right-1 h-10 w-10 z-[1]" flip="x" />
      <FiligreeCorner className="absolute -bottom-1 -left-1 h-10 w-10 z-[1]" flip="y" />
      <FiligreeCorner className="absolute -bottom-1 -right-1 h-10 w-10 z-[1]" flip="xy" />

      {/* Vitola number */}
      <p className="text-center v8-display italic text-[10px] uppercase tracking-[0.4em] text-[var(--v8-crimson)]">
        — Vitola N. {String(index + 1).padStart(2, '0')} —
      </p>

      {/* Brand */}
      <p className="text-center v8-script v8-gold-shimmer text-3xl leading-tight md:text-4xl">
        Cuban
      </p>

      {/* Oval vignette with the icon */}
      <OvalVignette className="mt-2 aspect-[4/3] w-full">
        <div
          className="h-full w-full v8-vignette flex items-center justify-center"
          style={{ background: `linear-gradient(135deg, ${exp.palette.from} 0%, ${exp.palette.to} 100%)` }}
        >
          <div
            aria-hidden
            className="absolute inset-0 opacity-25 mix-blend-overlay"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
            }}
          />
          <Icon className="relative h-20 w-20 transition-transform duration-700 group-hover:scale-105" stroke={exp.palette.ink} accent={exp.palette.accent} />
        </div>
      </OvalVignette>

      {/* Ribbon banner with title */}
      <div className="mt-3 flex justify-center">
        <RibbonBanner tone={ribbonTones[index % 4]} className="h-8 max-w-full">
          <span className="v8-display italic text-[10px] uppercase tracking-[0.22em] truncate block">{exp.region}</span>
        </RibbonBanner>
      </div>

      <h3 className="mt-3 text-center v8-display italic text-lg leading-tight text-[var(--v8-ink)] v8-emboss md:text-xl">
        {exp.title}
      </h3>
      <p className="mt-2 text-center v8-body italic text-base leading-snug text-[var(--v8-ink)]/75">{exp.blurb}</p>

      <div className="mt-auto pt-4 flex items-center justify-between">
        <span className="v8-display italic text-[10px] uppercase tracking-[0.28em] text-[var(--v8-crimson)]">{exp.meta.split(' · ')[0]}</span>
        <GoldSeal className="h-9 w-9" label={`${index + 1}`} />
      </div>
    </motion.article>
  );
}
