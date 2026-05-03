'use client';

import { motion } from 'framer-motion';
import { featured } from '@/lib/data';
import { iconMap } from '../icons';

export function FeaturedExperiences2() {
  return (
    <section
      id="experiences"
      className="relative border-t v2-rule bg-[var(--v2-ink)] py-24 md:py-36"
    >
      <div className="mx-auto max-w-[1400px] px-5 md:px-12">
        <div className="mb-12 flex items-baseline justify-between border-b v2-rule pb-6 md:mb-20">
          <span className="v2-mono text-[10px] uppercase tracking-[0.32em] text-[var(--v2-saffron)]">§ III — Featured</span>
          <span className="v2-mono text-[10px] uppercase tracking-[0.32em] text-white/45">04 stories</span>
        </div>

        <h2 className="v2-display max-w-3xl text-4xl font-light leading-[0.95] tracking-[-0.02em] sm:text-5xl md:text-7xl">
          Experiences <br />
          <span className="italic text-[var(--v2-saffron)]">already gathering</span> <br />
          interest.
        </h2>

        <div className="mt-16 flex flex-col">
          {featured.map((exp, i) => {
            const Icon = iconMap[exp.icon];
            return (
              <motion.a
                key={exp.id}
                href="#vote"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="group relative grid items-center gap-6 border-t v2-rule py-8 md:grid-cols-12 md:gap-10 md:py-12"
              >
                <span className="md:col-span-1 v2-mono text-[10px] uppercase tracking-[0.32em] text-white/40">
                  №{String(i + 1).padStart(2, '0')}
                </span>

                <div
                  className="md:col-span-3 relative aspect-[4/3] overflow-hidden border v2-rule"
                  style={{
                    background: `linear-gradient(135deg, ${exp.palette.from} 0%, ${exp.palette.to} 100%)`,
                  }}
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
                    <Icon className="h-20 w-20 transition-transform duration-700 group-hover:scale-105" stroke={exp.palette.ink} accent={exp.palette.accent} />
                  </div>
                </div>

                <div className="md:col-span-6 flex flex-col gap-3">
                  <span className="v2-mono text-[10px] uppercase tracking-[0.28em] text-white/45">
                    {exp.region}
                  </span>
                  <h3 className="v2-display text-2xl font-light leading-tight text-[var(--v2-paper)] md:text-4xl">
                    {exp.title}
                  </h3>
                  <p className="font-[var(--font-v2-body)] text-base italic leading-relaxed text-white/65 md:text-lg">
                    {exp.blurb}
                  </p>
                </div>

                <div className="md:col-span-2 flex items-center justify-between md:justify-end md:gap-4">
                  <span className="v2-mono text-[10px] uppercase tracking-[0.28em] text-white/45">
                    {exp.meta.split(' · ')[0]}
                  </span>
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-[var(--v2-saffron)] text-[var(--v2-saffron)] transition-all group-hover:bg-[var(--v2-saffron)] group-hover:text-black">
                    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
                  </span>
                </div>
              </motion.a>
            );
          })}
          <div className="border-t v2-rule" aria-hidden />
        </div>
      </div>
    </section>
  );
}
