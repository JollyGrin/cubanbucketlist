'use client';

import { motion } from 'framer-motion';
import { journal } from '@/lib/data';
import { BlurReveal } from './primitives';

export function Journal4() {
  return (
    <section id="journal" className="relative border-t v4-rule py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <BlurReveal>
          <div className="flex items-end justify-between gap-6 border-b v4-rule pb-6">
            <div>
              <span className="v4-mono text-[10px] uppercase tracking-[0.32em] text-[var(--v4-violet)]">05 — archive</span>
              <h2 className="mt-3 text-balance text-4xl font-medium tracking-[-0.02em] md:text-6xl">
                Every dispatch we’ve sent.
              </h2>
            </div>
            <a href="#newsletter" className="v4-glass shrink-0 rounded-full px-4 py-2 text-[12px] font-medium hover:-translate-y-0.5 transition-transform">
              Get the next one →
            </a>
          </div>
        </BlurReveal>

        <ul className="mt-8 flex flex-col">
          {journal.map((j, i) => (
            <motion.li
              key={j.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, delay: i * 0.06 }}
              className="group grid items-center gap-4 border-b v4-rule py-6 transition-colors hover:bg-white/[0.02] md:grid-cols-12 md:py-8"
            >
              <span className="md:col-span-1 v4-mono text-[10px] uppercase tracking-[0.32em] text-white/40">{String(i + 1).padStart(2, '0')}</span>
              <span className="md:col-span-2 v4-mono text-[10px] uppercase tracking-[0.32em] text-[var(--v4-cyan)]">{j.kicker}</span>
              <h3 className="md:col-span-7 text-xl font-medium tracking-tight text-[var(--v4-paper)] md:text-2xl">
                {j.title}
              </h3>
              <span className="md:col-span-1 v4-mono text-[10px] uppercase tracking-[0.32em] text-white/55">{j.date}</span>
              <span className="md:col-span-1 inline-flex justify-end text-white/55 transition-transform group-hover:translate-x-1 group-hover:text-[var(--v4-paper)]">→</span>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
