'use client';

import { motion } from 'framer-motion';
import { featured } from '@/lib/data';
import { iconMap } from '../icons';
import { Flourish } from './Cartouche';

export function FeaturedExperiences4() {
  return (
    <section
      id="experiences"
      className="relative border-t-2 border-[var(--v4-ink)] v4-parchment py-20 md:py-32"
    >
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }}
          className="mb-12 flex flex-col items-start gap-3 border-b-2 border-[var(--v4-ink)] pb-6"
        >
          <span className="v4-sc text-[10px] uppercase tracking-[0.32em] text-[var(--v4-crimson)]">Chap. III — Charts of the Isle</span>
          <h2 className="v4-display text-4xl leading-[1.02] text-[var(--v4-ink)] sm:text-5xl md:text-7xl">
            Voyages currently <em className="text-[var(--v4-crimson)]">in survey</em>.
          </h2>
          <Flourish className="h-3 w-56 text-[var(--v4-ink)]" />
        </motion.div>

        {/* Mobile horizontal */}
        <div className="-mx-5 md:hidden">
          <div className="snap-x-mandatory no-scrollbar flex gap-4 overflow-x-auto px-5 pb-6">
            {featured.map((exp, i) => (
              <div key={exp.id} className="snap-start w-[80%] shrink-0">
                <Card4 exp={exp} index={i} />
              </div>
            ))}
            <div className="w-2 shrink-0" aria-hidden />
          </div>
        </div>

        <div className="hidden gap-6 md:grid md:grid-cols-2 lg:grid-cols-4">
          {featured.map((exp, i) => (
            <Card4 key={exp.id} exp={exp} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Card4({ exp, index }: { exp: typeof featured[number]; index: number }) {
  const Icon = iconMap[exp.icon];
  const tilt = (index % 2 === 0 ? -1 : 1) * (0.5 + (index % 3) * 0.3);

  return (
    <motion.article
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, delay: index * 0.07 }}
      whileHover={{ y: -6, rotate: 0 }}
      style={{ rotate: `${tilt}deg` }}
      className="group relative flex h-full flex-col border-2 border-[var(--v4-ink)] bg-[var(--v4-vellum)]"
    >
      {/* corner pins */}
      <span aria-hidden className="absolute -left-1.5 -top-1.5 h-3 w-3 rounded-full border-2 border-[var(--v4-ink)] bg-[var(--v4-crimson)]" />
      <span aria-hidden className="absolute -right-1.5 -top-1.5 h-3 w-3 rounded-full border-2 border-[var(--v4-ink)] bg-[var(--v4-deep-blue)]" />

      <div
        className="relative aspect-[4/3] overflow-hidden border-b-2 border-[var(--v4-ink)]"
        style={{
          background: `linear-gradient(135deg, ${exp.palette.from} 0%, ${exp.palette.to} 100%)`,
        }}
      >
        {/* aged sepia overlay so colors read more period */}
        <div aria-hidden className="absolute inset-0 bg-[var(--v4-vellum)]/25 mix-blend-multiply" />
        <div
          aria-hidden
          className="absolute inset-0 opacity-40 mix-blend-overlay"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          }}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <Icon className="h-24 w-24 transition-transform duration-700 group-hover:scale-105" stroke={exp.palette.ink} accent={exp.palette.accent} />
        </div>
        <span className="absolute left-2 top-2 v4-sc text-[9px] uppercase tracking-[0.22em] bg-[var(--v4-vellum)] px-1.5 py-0.5 border border-[var(--v4-ink)]" style={{ color: 'var(--v4-ink)' }}>
          Lat. {exp.region}
        </span>
        <span className="absolute right-2 top-2 v4-sc text-[9px] uppercase tracking-[0.22em] bg-[var(--v4-vellum)] px-1.5 py-0.5 border border-[var(--v4-ink)]" style={{ color: 'var(--v4-ink)' }}>
          Pl. {String(index + 1).padStart(2, '0')}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="v4-display italic text-xl leading-tight text-[var(--v4-ink)] md:text-2xl">
          {exp.title}
        </h3>
        <p className="mt-2 v4-display text-base leading-relaxed text-[var(--v4-ink-soft)]">{exp.blurb}</p>

        <div className="mt-auto pt-4 flex items-center justify-between border-t border-dashed border-[var(--v4-ink)]/40">
          <span className="v4-sc text-[10px] uppercase tracking-[0.22em] text-[var(--v4-ink-soft)]">
            {exp.meta.split(' · ')[0]}
          </span>
          <span className="v4-display italic text-[var(--v4-crimson)] transition-transform group-hover:translate-x-0.5">
            mark me down →
          </span>
        </div>
      </div>
    </motion.article>
  );
}
