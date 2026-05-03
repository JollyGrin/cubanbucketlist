'use client';

import { motion } from 'framer-motion';
import { featured } from '@/lib/data';
import { iconMap } from '../icons';

const tones = [
  { bg: 'bg-[var(--v7-yellow)]', fg: 'text-[var(--v7-ink)]', shop: 'PANADERÍA', tilt: -2 },
  { bg: 'bg-[var(--v7-coral)]', fg: 'text-[var(--v7-cream)]', shop: 'CAFETERÍA', tilt: 1.5 },
  { bg: 'bg-[var(--v7-blue)]', fg: 'text-[var(--v7-cream)]', shop: 'TABAQUERÍA', tilt: -1 },
  { bg: 'bg-[var(--v7-cream)]', fg: 'text-[var(--v7-ink)]', shop: 'PELUQUERÍA', tilt: 1.8 },
];

export function FeaturedExperiences7() {
  return (
    <section
      id="experiences"
      className="relative overflow-hidden v7-wall-tex py-20 md:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }}
          className="flex flex-col items-start gap-3 mb-10"
        >
          <span className="v7-sign bg-[var(--v7-coral)] text-[var(--v7-cream)] inline-flex items-center gap-2 px-3 py-1.5 v7-body text-xs uppercase font-bold tracking-wider"
            style={{ ['--tilt' as string]: '-1.5deg' }}>
            ✺ AVISO № 03 — La Tienda
          </span>
          <h2 className="leading-[0.85] text-5xl sm:text-7xl md:text-[100px]">
            <span className="block v7-block text-[var(--v7-ink)] v7-ghost">VIAJES QUE</span>
            <span className="block v7-brush text-[var(--v7-coral)] -my-1 text-[60px] sm:text-7xl md:text-[140px]">la gente quiere</span>
            <span className="block v7-block text-[var(--v7-blue)] v7-ghost">DE VERDAD.</span>
          </h2>
        </motion.div>

        {/* Mobile horizontal */}
        <div className="-mx-5 md:hidden">
          <div className="snap-x-mandatory no-scrollbar flex gap-5 overflow-x-auto px-5 pb-6">
            {featured.map((exp, i) => (
              <div key={exp.id} className="snap-start w-[80%] shrink-0">
                <Card7 exp={exp} index={i} />
              </div>
            ))}
            <div className="w-2 shrink-0" aria-hidden />
          </div>
        </div>

        <div className="hidden mt-12 gap-8 md:grid md:grid-cols-2 lg:grid-cols-4">
          {featured.map((exp, i) => (
            <Card7 key={exp.id} exp={exp} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Card7({ exp, index }: { exp: typeof featured[number]; index: number }) {
  const Icon = iconMap[exp.icon];
  const tone = tones[index % tones.length];

  return (
    <motion.article
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, delay: index * 0.07 }}
      whileHover={{ y: -6, rotate: 0 }}
      className={`v7-sign ${tone.bg} ${tone.fg} group flex h-full flex-col`}
      style={{ ['--tilt' as string]: `${tone.tilt}deg` }}
    >
      {/* Shop sign header */}
      <div className="border-b-3 border-[var(--v7-ink)] bg-[var(--v7-ink)] text-[var(--v7-cream)] px-3 py-1.5 flex items-center justify-between">
        <span className="v7-brush text-xl">{tone.shop}</span>
        <span className="v7-body text-[10px] uppercase tracking-wider font-bold opacity-75">№ 0{index + 1}</span>
      </div>

      <div
        className="relative aspect-[4/3] overflow-hidden border-b-3 border-[var(--v7-ink)]"
        style={{ background: `linear-gradient(135deg, ${exp.palette.from} 0%, ${exp.palette.to} 100%)` }}
      >
        <div
          aria-hidden
          className="absolute inset-0 opacity-40 mix-blend-multiply"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.4' numOctaves='2'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          }}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <Icon className="h-24 w-24 transition-transform duration-500 group-hover:scale-110" stroke={exp.palette.ink} accent={exp.palette.accent} />
        </div>
        <span className="absolute left-2 top-2 v7-body text-[10px] uppercase tracking-wider font-bold border-2 border-[var(--v7-ink)] bg-[var(--v7-cream)] text-[var(--v7-ink)] px-1.5 py-0.5">
          {exp.region}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="v7-block text-xl leading-tight md:text-2xl">{exp.title}</h3>
        <p className="mt-2 v7-body text-sm font-medium leading-snug opacity-90">{exp.blurb}</p>

        <div className="mt-auto pt-4 flex items-center justify-between border-t-2 border-dashed border-[var(--v7-ink)]/40">
          <span className="v7-body text-[10px] uppercase tracking-wider font-bold opacity-75">{exp.meta.split(' · ')[0]}</span>
          <span className="v7-brush text-2xl">¡me apunto!</span>
        </div>
      </div>
    </motion.article>
  );
}
