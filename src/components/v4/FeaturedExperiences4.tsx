'use client';

import { motion } from 'framer-motion';
import { featured } from '@/lib/data';
import { iconMap } from '../icons';
import { BlurReveal, TiltCard } from './primitives';

export function FeaturedExperiences4() {
  return (
    <section id="experiences" className="relative border-t v4-rule py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <BlurReveal>
          <span className="v4-mono text-[10px] uppercase tracking-[0.32em] text-[var(--v4-violet)]">03 — featured</span>
          <h2 className="mt-4 max-w-3xl text-balance text-4xl font-medium tracking-[-0.02em] md:text-6xl">
            Six trips in development. <span className="v4-serif italic font-normal text-[var(--v4-cyan)]">Members shape which one ships first.</span>
          </h2>
        </BlurReveal>

        {/* Mobile horizontal */}
        <div className="-mx-5 mt-12 md:hidden">
          <div className="snap-x-mandatory no-scrollbar flex gap-4 overflow-x-auto px-5 pb-6">
            {featured.map((exp, i) => (
              <div key={exp.id} className="snap-start w-[80%] shrink-0">
                <Card4 exp={exp} index={i} />
              </div>
            ))}
            <div className="w-2 shrink-0" aria-hidden />
          </div>
        </div>

        {/* Desktop bento — first card spans more */}
        <div className="mt-14 hidden gap-5 md:grid md:grid-cols-6 md:auto-rows-[260px]">
          <div className="md:col-span-4 md:row-span-2">
            <Card4 exp={featured[0]} index={0} large />
          </div>
          <div className="md:col-span-2"><Card4 exp={featured[1]} index={1} /></div>
          <div className="md:col-span-2"><Card4 exp={featured[2]} index={2} /></div>
          <div className="md:col-span-3"><Card4 exp={featured[3]} index={3} /></div>
          <div className="md:col-span-3 v4-glass rounded-2xl p-6 flex flex-col justify-between">
            <div>
              <p className="v4-mono text-[10px] uppercase tracking-[0.28em] text-[var(--v4-violet)]">+ 2 more in development</p>
              <p className="mt-2 v4-serif text-3xl italic text-[var(--v4-paper)]">your vote decides which.</p>
            </div>
            <a href="#vote" className="self-start inline-flex items-center gap-2 rounded-full bg-[var(--v4-paper)] px-4 py-2 text-[12px] font-medium text-[var(--v4-bg)]">
              Open the vote →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Card4({ exp, index, large = false }: { exp: typeof featured[number]; index: number; large?: boolean }) {
  const Icon = iconMap[exp.icon];
  return (
    <motion.div
      initial={{ opacity: 0, y: 22, filter: 'blur(8px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0)' }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: index * 0.07 }}
      className="h-full"
    >
      <TiltCard className="h-full" max={6}>
        <a href="#vote" className="group relative flex h-full flex-col overflow-hidden rounded-2xl v4-glass v4-glow-border">
          <div
            className="relative flex-1 overflow-hidden"
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
              <Icon className={`${large ? 'h-44 w-44' : 'h-24 w-24'} transition-transform duration-700 group-hover:scale-105`} stroke={exp.palette.ink} accent={exp.palette.accent} />
            </div>
            <div className="absolute left-4 top-4 v4-mono text-[10px] uppercase tracking-[0.22em]" style={{ color: exp.palette.ink }}>
              {exp.region}
            </div>
            <div className="absolute right-4 top-4 v4-mono text-[10px] uppercase tracking-[0.22em]" style={{ color: exp.palette.ink }}>
              {exp.meta.split(' · ')[0]}
            </div>
          </div>
          <div className="border-t v4-rule p-5">
            <h3 className={`${large ? 'text-3xl md:text-4xl' : 'text-lg md:text-xl'} font-medium tracking-tight text-[var(--v4-paper)]`}>{exp.title}</h3>
            {large && <p className="mt-2 max-w-md text-sm leading-relaxed text-white/65">{exp.blurb}</p>}
            <div className="mt-3 flex items-center justify-between">
              <span className="v4-mono text-[10px] uppercase tracking-[0.24em] text-[var(--v4-cyan)]">{exp.votes} interested</span>
              <span className="text-white/55 transition-transform group-hover:translate-x-0.5">→</span>
            </div>
          </div>
        </a>
      </TiltCard>
    </motion.div>
  );
}
