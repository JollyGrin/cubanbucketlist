'use client';

import { motion } from 'framer-motion';
import { NewsletterForm6 } from './NewsletterForm6';
import { ScallopBorder, DecoChevron } from './Deco';
import { InstagramGlyph } from '../icons';

const cities = ['HABANA', 'TRINIDAD', 'VIÑALES', 'SANTIAGO', 'BARACOA', 'CIENFUEGOS', 'CAMAGÜEY', 'GRANMA'];

export function Footer6() {
  return (
    <footer className="relative bg-[var(--v6-night)] text-[var(--v6-cream)] border-t-2 border-[var(--v6-marquee)]">
      <ScallopBorder className="absolute inset-x-0 top-0 h-3 w-full text-[var(--v6-marquee)]" />

      <div className="overflow-hidden border-y-2 border-[var(--v6-marquee)] bg-[var(--v6-night-2)] py-4">
        <div className="v6-marquee-x flex w-max items-center gap-10 whitespace-nowrap v6-display text-2xl text-[var(--v6-marquee)] md:text-4xl">
          {Array.from({ length: 2 }).map((_, dup) => (
            <span key={dup} className="flex items-center gap-10">
              {cities.map((c) => (
                <span key={`${dup}-${c}`} className="flex items-center gap-10">{c}<span className="text-[var(--v6-rose-gold)]">✦</span></span>
              ))}
            </span>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-5 py-20 md:px-10 md:py-28">
        <motion.div
          initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }}
          className="grid items-end gap-12 md:grid-cols-12 md:gap-16"
        >
          <div className="md:col-span-7">
            <span className="v6-display text-[10px] uppercase tracking-[0.45em] text-[var(--v6-marquee)]">FINALE</span>
            <h2 className="mt-3 v6-display text-5xl leading-[0.95] text-[var(--v6-cream)] md:text-7xl">
              ENCORE? <br />
              <span className="v6-script v6-gold text-7xl md:text-[140px] leading-tight">join the list.</span>
            </h2>
          </div>
          <div className="md:col-span-5">
            <NewsletterForm6 />
            <a href="#vote" className="mt-5 inline-flex items-center gap-2 v6-script text-2xl text-[var(--v6-marquee)]">
              <InstagramGlyph className="h-5 w-5" /> or vote on the next bill →
            </a>
          </div>
        </motion.div>

        <div className="mt-16 grid gap-6 border-t v6-rule pt-8 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-4 flex items-center gap-3">
            <DecoChevron className="h-5 w-12 text-[var(--v6-marquee)] v6-flicker" />
            <div className="flex flex-col leading-none">
              <span className="v6-display text-base text-[var(--v6-cream)]">CUBAN BUCKET LIST</span>
              <span className="v6-script text-base text-[var(--v6-rose-gold)]">a tropical revue</span>
            </div>
          </div>
          <ul className="md:col-span-4 grid grid-cols-2 gap-y-2 v6-display text-[10px] uppercase tracking-[0.32em] text-[var(--v6-cream)]/65">
            {['About', 'Bill', 'Vote', 'Cast', 'Notes', 'Reserve'].map((l) => (
              <li key={l}><a className="hover:text-[var(--v6-marquee)]" href={`#${l.toLowerCase()}`}>{l}</a></li>
            ))}
          </ul>
          <div className="md:col-span-4 md:text-right v6-display text-[10px] uppercase tracking-[0.28em] text-[var(--v6-cream)]/55">
            © 2026 · operated under support-for-the-Cuban-people compliance
          </div>
        </div>
      </div>
    </footer>
  );
}
