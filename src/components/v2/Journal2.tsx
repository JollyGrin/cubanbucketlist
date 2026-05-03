'use client';

import { motion } from 'framer-motion';
import { journal } from '@/lib/data';

export function Journal2() {
  return (
    <section id="journal" className="relative border-t v2-rule bg-[var(--v2-ink)] py-24 md:py-36">
      <div className="mx-auto max-w-[1400px] px-5 md:px-12">
        <div className="mb-12 flex items-baseline justify-between border-b v2-rule pb-6">
          <span className="v2-mono text-[10px] uppercase tracking-[0.32em] text-[var(--v2-saffron)]">§ V — Archive</span>
          <span className="v2-mono text-[10px] uppercase tracking-[0.32em] text-white/45">{journal.length} dispatches</span>
        </div>

        <h2 className="v2-display max-w-3xl text-4xl font-light leading-[0.95] tracking-[-0.02em] sm:text-5xl md:text-7xl">
          Field notes from the <br />
          <span className="italic text-[var(--v2-saffron)]">other Cuba</span>.
        </h2>

        <ul className="mt-16 flex flex-col">
          {journal.map((j, i) => (
            <motion.li
              key={j.id}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="group grid items-start gap-4 border-t v2-rule py-8 md:grid-cols-12 md:gap-10 md:py-10"
            >
              <span className="md:col-span-1 v2-mono text-[10px] uppercase tracking-[0.32em] text-white/40">
                №{String(i + 1).padStart(2, '0')}
              </span>
              <span className="md:col-span-2 v2-mono text-[10px] uppercase tracking-[0.32em] text-[var(--v2-saffron)]">
                {j.kicker}
              </span>
              <h3 className="md:col-span-7 v2-display text-2xl font-light leading-tight text-[var(--v2-paper)] md:text-4xl">
                {j.title}
              </h3>
              <span className="md:col-span-1 v2-mono text-[10px] uppercase tracking-[0.32em] text-white/55">
                {j.date}
              </span>
              <span className="md:col-span-1 inline-flex justify-end">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[var(--v2-saffron)]/60 text-[var(--v2-saffron)] transition-colors group-hover:bg-[var(--v2-saffron)] group-hover:text-black">
                  →
                </span>
              </span>
              <p className="md:col-span-12 md:col-start-4 mt-2 max-w-3xl font-[var(--font-v2-body)] text-base italic leading-relaxed text-white/65">
                {j.excerpt}
              </p>
            </motion.li>
          ))}
          <li className="border-t v2-rule" aria-hidden />
        </ul>
      </div>
    </section>
  );
}
