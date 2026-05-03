'use client';

import { motion } from 'framer-motion';
import { NewsletterForm2 } from './NewsletterForm2';
import { InstagramGlyph } from '../icons';

const cities = ['Habana', 'Trinidad', 'Viñales', 'Santiago', 'Baracoa', 'Cienfuegos', 'Camagüey', 'Granma'];

export function Footer2() {
  return (
    <footer className="relative border-t v2-rule bg-[var(--v2-ink)] text-[var(--v2-paper)]">
      <div className="overflow-hidden border-b v2-rule py-6">
        <div className="v2-marquee flex w-max items-center gap-12 whitespace-nowrap v2-display text-3xl italic text-white/55 md:text-5xl">
          {Array.from({ length: 2 }).map((_, dup) => (
            <span key={dup} className="flex items-center gap-12">
              {cities.map((c) => (
                <span key={`${dup}-${c}`} className="flex items-center gap-12">
                  {c}<span className="text-[var(--v2-saffron)]">·</span>
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-[1400px] px-5 py-20 md:px-12 md:py-28">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="grid items-end gap-12 md:grid-cols-12 md:gap-16"
        >
          <div className="md:col-span-7">
            <span className="v2-mono text-[10px] uppercase tracking-[0.32em] text-[var(--v2-saffron)]">One last thing</span>
            <h2 className="mt-4 v2-display text-5xl font-light leading-[0.95] tracking-[-0.02em] md:text-7xl">
              The good <br />
              <span className="italic text-[var(--v2-saffron)]">stuff lives</span> <br />
              in the newsletter.
            </h2>
          </div>
          <div className="md:col-span-5">
            <NewsletterForm2 id="footer" />
            <a href="#vote" className="mt-6 inline-flex items-center gap-3 v2-mono text-[10px] uppercase tracking-[0.32em] text-[var(--v2-saffron)] hover:text-white">
              <InstagramGlyph className="h-4 w-4" /> or jump straight to voting →
            </a>
          </div>
        </motion.div>

        <div className="mt-16 grid gap-6 border-t v2-rule pt-8 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-4">
            <span className="v2-display text-2xl italic">Cuban Bucket List</span>
            <p className="mt-2 v2-mono text-[10px] uppercase tracking-[0.28em] text-white/55">
              A travel publication · MMXXVI
            </p>
          </div>
          <ul className="md:col-span-4 grid grid-cols-2 gap-y-3 v2-mono text-[10px] uppercase tracking-[0.28em] text-white/55">
            <li><a className="hover:text-[var(--v2-saffron)]" href="#about">About</a></li>
            <li><a className="hover:text-[var(--v2-saffron)]" href="#journal">Journal</a></li>
            <li><a className="hover:text-[var(--v2-saffron)]" href="#experiences">Experiences</a></li>
            <li><a className="hover:text-[var(--v2-saffron)]" href="#vote">Vote</a></li>
            <li><a className="hover:text-[var(--v2-saffron)]" href="#network">Network</a></li>
            <li><a className="hover:text-[var(--v2-saffron)]" href="#newsletter">Subscribe</a></li>
          </ul>
          <div className="md:col-span-4 flex flex-col gap-2 md:items-end">
            <p className="v2-mono text-[10px] uppercase tracking-[0.28em] text-white/55">
              © 2026 Cuban Bucket List
            </p>
            <p className="v2-mono text-[10px] uppercase tracking-[0.28em] text-white/45">
              Operated under support-for-the-Cuban-people compliance
            </p>
            <p className="mt-2 v2-display text-xl italic text-[var(--v2-saffron)]">desde la isla</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
