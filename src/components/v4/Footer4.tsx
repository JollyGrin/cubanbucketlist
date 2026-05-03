'use client';

import { motion } from 'framer-motion';
import { NewsletterForm4 } from './NewsletterForm4';
import { CompassRose, Flourish } from './Cartouche';
import { InstagramGlyph } from '../icons';

export function Footer4() {
  return (
    <footer className="relative border-t-2 border-[var(--v4-ink)] v4-parchment text-[var(--v4-ink)]">
      <div className="mx-auto max-w-7xl px-5 py-20 md:px-10 md:py-28">
        <motion.div
          initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }}
          className="grid items-end gap-12 md:grid-cols-12 md:gap-16"
        >
          <div className="md:col-span-7">
            <span className="v4-sc text-[10px] uppercase tracking-[0.32em] text-[var(--v4-crimson)]">Final Chapter</span>
            <h2 className="mt-3 v4-display text-5xl leading-[0.98] text-[var(--v4-ink)] md:text-7xl">
              The good stuff travels <em className="text-[var(--v4-crimson)]">by post.</em>
            </h2>
            <Flourish className="mt-6 h-3 w-56 text-[var(--v4-ink)]" />
          </div>
          <div className="md:col-span-5">
            <NewsletterForm4 />
            <a href="#vote" className="mt-5 inline-flex items-center gap-2 v4-hand text-2xl text-[var(--v4-deep-blue)]">
              <InstagramGlyph className="h-5 w-5" /> or seal a vote at once →
            </a>
          </div>
        </motion.div>

        <div className="mt-16 grid gap-6 border-t-2 border-[var(--v4-ink)] pt-8 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-4 flex items-center gap-3">
            <CompassRose className="h-10 w-10 text-[var(--v4-ink)]" spinning />
            <div className="flex flex-col leading-tight">
              <span className="v4-display italic text-xl text-[var(--v4-ink)]">Cuban Bucket List</span>
              <span className="v4-sc text-[10px] tracking-[0.28em] text-[var(--v4-ink-soft)]">CARTA MARINA · MMXXVI</span>
            </div>
          </div>
          <ul className="md:col-span-4 grid grid-cols-2 gap-y-2 v4-sc text-[10px] uppercase tracking-[0.28em] text-[var(--v4-ink-soft)]">
            {['About', 'Charts', 'Vote', 'Logbook', 'Ports', 'Subscribe'].map((l) => (
              <li key={l}><a className="hover:text-[var(--v4-crimson)]" href={`#${l.toLowerCase()}`}>{l}</a></li>
            ))}
          </ul>
          <div className="md:col-span-4 md:text-right v4-sc text-[10px] uppercase tracking-[0.28em] text-[var(--v4-ink-soft)]">
            © 2026 Cuban Bucket List · Operated under support-for-the-Cuban-people compliance
          </div>
        </div>
      </div>
    </footer>
  );
}
