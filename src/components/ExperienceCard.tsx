'use client';

import { motion } from 'framer-motion';
import type { Experience } from '@/lib/data';
import { iconMap } from './icons';

export function ExperienceCard({
  exp,
  index = 0,
  onInterest,
}: {
  exp: Experience;
  index?: number;
  onInterest?: () => void;
}) {
  const Icon = iconMap[exp.icon];
  const tilt = (index % 2 === 0 ? -1 : 1) * (0.4 + (index % 3) * 0.3);

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6, rotate: 0 }}
      style={{ rotate: `${tilt}deg` }}
      className="group relative flex h-full flex-col overflow-hidden rounded-[20px] border-2 border-ink bg-parchment-50 shadow-[4px_4px_0_0_var(--color-ink)] transition-shadow hover:shadow-[8px_8px_0_0_var(--color-ink)]"
    >
      {/* Color block top with icon */}
      <div
        className="relative aspect-[4/3] overflow-hidden border-b-2 border-ink"
        style={{
          background: `linear-gradient(135deg, ${exp.palette.from} 0%, ${exp.palette.to} 100%)`,
        }}
      >
        {/* Texture overlay */}
        <div
          aria-hidden
          className="absolute inset-0 opacity-30 mix-blend-overlay"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          }}
        />
        {/* Sun arc */}
        <div
          aria-hidden
          className="absolute -bottom-12 -right-12 h-40 w-40 rounded-full opacity-30"
          style={{ background: `radial-gradient(circle, ${exp.palette.accent} 0%, transparent 60%)` }}
        />
        {/* Icon */}
        <div className="absolute inset-0 flex items-center justify-center">
          <Icon
            className="h-28 w-28 transition-transform duration-500 group-hover:scale-105 md:h-32 md:w-32"
            stroke={exp.palette.ink}
            accent={exp.palette.accent}
          />
        </div>
        {/* Region stamp */}
        <div className="absolute left-3 top-3">
          <span
            className="inline-flex items-center gap-1.5 rounded-full border-2 border-current px-2.5 py-0.5 font-display text-[10px] uppercase tracking-[0.18em]"
            style={{ color: exp.palette.ink, fontStyle: 'italic' }}
          >
            <span className="inline-block h-1.5 w-1.5 rounded-full" style={{ background: exp.palette.accent }} />
            {exp.region}
          </span>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-xl font-semibold leading-tight tracking-tight text-ink md:text-2xl">
          {exp.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-ink-soft">{exp.blurb}</p>

        <div className="mt-4 flex items-center gap-2 font-sans text-[11px] uppercase tracking-[0.18em] text-ink-muted">
          <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <circle cx="12" cy="12" r="9" />
            <path d="M12 7v5l3 2" />
          </svg>
          {exp.meta}
        </div>

        <button
          type="button"
          onClick={onInterest}
          className="mt-5 inline-flex items-center justify-between gap-2 rounded-full border-2 border-ink bg-mustard/0 px-4 py-2.5 font-sans text-[12px] font-semibold uppercase tracking-[0.18em] text-ink transition-colors hover:bg-mustard"
        >
          I’d love this
          <span className="transition-transform group-hover:translate-x-0.5">→</span>
        </button>
      </div>
    </motion.article>
  );
}
