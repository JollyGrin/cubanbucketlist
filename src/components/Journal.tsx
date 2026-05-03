'use client';

import { motion } from 'framer-motion';
import { journal } from '@/lib/data';
import { SectionHeader } from './SectionHeader';

export function Journal() {
  return (
    <section id="journal" className="relative overflow-hidden bg-parchment py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <SectionHeader
          numeral="V."
          kicker="Latest from the journal"
          title="Field notes from the"
          italic="other Cuba."
          subtitle="Stories, hidden gems, and dispatches from the people who let us into their corner of the island."
        />

        {/* Mobile horizontal */}
        <div className="-mx-5 md:hidden">
          <div className="snap-x-mandatory no-scrollbar flex gap-4 overflow-x-auto px-5 pb-6">
            {journal.map((j, i) => (
              <div key={j.id} className="snap-start w-[80%] shrink-0">
                <JournalCard j={j} index={i} />
              </div>
            ))}
            <div className="w-2 shrink-0" aria-hidden />
          </div>
        </div>

        {/* Desktop grid */}
        <div className="hidden gap-6 md:grid md:grid-cols-3">
          {journal.map((j, i) => (
            <JournalCard key={j.id} j={j} index={i} />
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <a
            href="#newsletter"
            className="group inline-flex items-center gap-2 rounded-full border-2 border-ink px-5 py-2.5 font-sans text-[12px] font-semibold uppercase tracking-[0.2em] text-ink transition-all hover:bg-ink hover:text-parchment"
          >
            Get the next dispatch
            <span className="transition-transform group-hover:translate-x-0.5">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}

function JournalCard({ j, index }: { j: typeof journal[number]; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, delay: index * 0.08 }}
      className="group flex h-full flex-col overflow-hidden rounded-[20px] border-2 border-ink bg-parchment-50 transition-shadow hover:shadow-[6px_6px_0_0_var(--color-ink)]"
    >
      <div
        className="relative aspect-[5/3] overflow-hidden border-b-2 border-ink"
        style={{ background: `linear-gradient(135deg, ${j.palette.from} 0%, ${j.palette.to} 100%)` }}
      >
        {/* Big editorial number */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-display text-[140px] font-light italic leading-none text-parchment/85" style={{ fontVariationSettings: '"SOFT" 100' }}>
            {String(index + 1).padStart(2, '0')}
          </span>
        </div>
        <div
          aria-hidden
          className="absolute inset-0 opacity-25 mix-blend-overlay"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          }}
        />
        <div className="absolute left-3 top-3">
          <span className="inline-flex items-center gap-1.5 rounded-full border-2 border-parchment/80 bg-black/15 px-2.5 py-0.5 font-display text-[10px] uppercase tracking-[0.18em] text-parchment backdrop-blur-sm" style={{ fontStyle: 'italic' }}>
            {j.kicker}
          </span>
        </div>
        <div className="absolute right-3 bottom-3 font-hand text-base text-parchment/90">{j.date}</div>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-xl font-semibold leading-tight tracking-tight text-ink md:text-2xl">
          {j.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-ink-soft">{j.excerpt}</p>
        <div className="mt-auto pt-4">
          <span className="inline-flex items-center gap-1.5 font-sans text-[11px] uppercase tracking-[0.18em] text-coral">
            Read the dispatch
            <span aria-hidden className="transition-transform group-hover:translate-x-0.5">→</span>
          </span>
        </div>
      </div>
    </motion.article>
  );
}
