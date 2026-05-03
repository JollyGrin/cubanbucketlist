'use client';

import { motion } from 'framer-motion';
import { network } from '@/lib/data';
import { SectionHeader } from './SectionHeader';

const toneMap = {
  teal: { from: '#0E5F5A', to: '#08443F', ink: '#FBF7EE' },
  coral: { from: '#E5613D', to: '#A8462C', ink: '#FBF7EE' },
  mustard: { from: '#D9A441', to: '#B0822A', ink: '#1B1814' },
  terracotta: { from: '#A8462C', to: '#7E3320', ink: '#FBF7EE' },
} as const;

export function Network() {
  return (
    <section id="network" className="relative overflow-hidden bg-parchment-200/40 py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <SectionHeader
          numeral="VI."
          kicker="The network"
          title="The remarkable people"
          italic="behind the magic."
          subtitle="Photographers, chefs, divers, mechanics, mountain guides. Most have been doing this their whole lives. We just opened the door."
        />

        {/* Marquee on desktop, swipe on mobile */}
        <div className="-mx-5 md:hidden">
          <div className="snap-x-mandatory no-scrollbar flex gap-4 overflow-x-auto px-5 pb-4">
            {network.map((p, i) => (
              <div key={p.id} className="snap-start w-[68%] shrink-0">
                <PersonCard p={p} index={i} />
              </div>
            ))}
            <div className="w-2 shrink-0" aria-hidden />
          </div>
        </div>

        <div className="hidden gap-6 md:grid md:grid-cols-3 lg:grid-cols-6">
          {network.map((p, i) => (
            <PersonCard key={p.id} p={p} index={i} />
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center gap-2 text-center">
          <p className="font-hand text-2xl text-teal">+ 38 more locals across 11 provinces</p>
          <p className="font-sans text-sm text-ink-muted">vetted personally · paid fairly · always credited</p>
        </div>
      </div>
    </section>
  );
}

function PersonCard({ p, index }: { p: typeof network[number]; index: number }) {
  const tone = toneMap[p.tone];
  const tilt = (index % 2 === 0 ? -1 : 1) * (0.4 + (index % 3) * 0.25);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      style={{ rotate: `${tilt}deg` }}
      whileHover={{ y: -4, rotate: 0 }}
      className="paper-card relative flex h-full flex-col items-center gap-3 rounded-[20px] border-2 border-ink p-5 text-center shadow-[3px_3px_0_0_var(--color-ink)]"
    >
      {/* Polaroid avatar */}
      <div
        className="relative flex h-24 w-24 items-center justify-center overflow-hidden rounded-full border-2 border-ink"
        style={{ background: `linear-gradient(135deg, ${tone.from}, ${tone.to})` }}
      >
        <div
          aria-hidden
          className="absolute inset-0 opacity-25 mix-blend-overlay"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          }}
        />
        <span className="font-display text-3xl font-semibold italic" style={{ color: tone.ink }}>
          {p.initials}
        </span>
      </div>
      <div className="flex flex-col gap-0.5">
        <span className="font-display text-base font-semibold text-ink">{p.name}</span>
        <span className="font-sans text-[11px] uppercase tracking-[0.16em] text-ink-muted">{p.role}</span>
      </div>
    </motion.div>
  );
}
