'use client';

import { motion } from 'framer-motion';
import { featured } from '@/lib/data';
import { iconMap } from '../icons';
import { DecoChevron, MarqueeBulbBorder } from './Deco';

export function FeaturedExperiences6() {
  return (
    <section
      id="experiences"
      className="relative bg-[var(--v6-night)] py-20 md:py-32"
    >
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }}
          className="text-center"
        >
          <span className="v6-display text-[10px] uppercase tracking-[0.45em] text-[var(--v6-marquee)]">PROGRAM ✦ ACT III</span>
          <h2 className="mt-4 v6-display text-4xl leading-[0.95] text-[var(--v6-cream)] sm:text-6xl md:text-8xl">
            TONIGHT’S BILL
          </h2>
          <p className="mt-3 v6-script text-3xl v6-gold">— featured experiences —</p>
        </motion.div>

        {/* Mobile horizontal */}
        <div className="-mx-5 mt-12 md:hidden">
          <div className="snap-x-mandatory no-scrollbar flex gap-4 overflow-x-auto px-5 pb-6">
            {featured.map((exp, i) => (
              <div key={exp.id} className="snap-start w-[80%] shrink-0">
                <Card6 exp={exp} index={i} />
              </div>
            ))}
            <div className="w-2 shrink-0" aria-hidden />
          </div>
        </div>

        <div className="hidden mt-16 gap-8 md:grid md:grid-cols-2 lg:grid-cols-4">
          {featured.map((exp, i) => (
            <Card6 key={exp.id} exp={exp} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Card6({ exp, index }: { exp: typeof featured[number]; index: number }) {
  const Icon = iconMap[exp.icon];

  return (
    <motion.article
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, delay: index * 0.07 }}
      whileHover={{ y: -6 }}
      className="group relative flex h-full flex-col border-2 border-[var(--v6-marquee)] bg-[var(--v6-night-2)]"
    >
      {/* Marquee bulbs around top */}
      <MarqueeBulbBorder className="absolute inset-0 -m-1.5" />

      <div className="relative z-[1] flex items-center justify-between border-b-2 border-[var(--v6-marquee)] px-3 py-1.5 bg-[var(--v6-night)]">
        <span className="v6-display text-[10px] tracking-[0.32em] text-[var(--v6-marquee)]">ACT №{['I','II','III','IV'][index]}</span>
        <span className="v6-script text-base text-[var(--v6-rose-gold)]">{exp.region}</span>
      </div>

      <div
        className="relative aspect-[4/3] overflow-hidden border-b-2 border-[var(--v6-marquee)]"
        style={{ background: `linear-gradient(135deg, ${exp.palette.from} 0%, ${exp.palette.to} 100%)` }}
      >
        {/* Black vignette for cabaret feel */}
        <div aria-hidden className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[var(--v6-night)]/40" />
        <div
          aria-hidden
          className="absolute inset-0 opacity-30 mix-blend-overlay"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          }}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <Icon className="h-24 w-24 transition-transform duration-700 group-hover:scale-110" stroke={exp.palette.ink} accent={exp.palette.accent} />
        </div>
        {/* Gold sweep on hover */}
        <span aria-hidden className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-[var(--v6-marquee)]/40 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
      </div>

      <div className="flex flex-1 flex-col p-5 text-center">
        <h3 className="v6-display text-lg leading-tight text-[var(--v6-cream)] md:text-xl">{exp.title}</h3>
        <p className="mt-2 font-[var(--font-v6-body)] text-base italic leading-snug text-[var(--v6-cream)]/75">{exp.blurb}</p>

        <div className="mt-auto pt-4 flex items-center justify-center gap-2">
          <DecoChevron className="h-2.5 w-8 text-[var(--v6-rose-gold)]" />
          <span className="v6-display text-[10px] tracking-[0.32em] text-[var(--v6-marquee)]">{exp.meta.split(' · ')[0]}</span>
          <DecoChevron className="h-2.5 w-8 -scale-x-100 text-[var(--v6-rose-gold)]" />
        </div>
      </div>
    </motion.article>
  );
}
