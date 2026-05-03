'use client';

import { motion } from 'framer-motion';

export function SectionHeader({
  numeral,
  kicker,
  title,
  italic,
  subtitle,
  align = 'left',
  tone = 'ink',
}: {
  numeral: string;
  kicker: string;
  title: string;
  italic?: string;
  subtitle?: string;
  align?: 'left' | 'center';
  tone?: 'ink' | 'parchment';
}) {
  const isCenter = align === 'center';
  const colorTitle = tone === 'parchment' ? 'text-parchment' : 'text-ink';
  const colorMuted = tone === 'parchment' ? 'text-parchment/70' : 'text-ink-muted';
  const colorKicker = tone === 'parchment' ? 'text-mustard' : 'text-coral';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`mb-10 flex flex-col gap-3 md:mb-14 ${isCenter ? 'items-center text-center' : 'items-start'}`}
    >
      <div className={`flex items-baseline gap-3 ${colorKicker}`}>
        <span className="section-numeral text-3xl md:text-4xl">{numeral}</span>
        <span className="font-sans text-[11px] uppercase tracking-[0.32em]">{kicker}</span>
      </div>
      <h2 className={`max-w-3xl font-display text-3xl font-light leading-[1.05] tracking-tight sm:text-4xl md:text-6xl ${colorTitle}`}>
        {title}{' '}
        {italic && (
          <span className="italic" style={{ fontVariationSettings: '"SOFT" 100' }}>
            {italic}
          </span>
        )}
      </h2>
      {subtitle && (
        <p className={`max-w-2xl font-sans text-base sm:text-lg ${colorMuted} ${isCenter ? 'text-center' : ''}`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
