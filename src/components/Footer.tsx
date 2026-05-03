'use client';

import { motion } from 'framer-motion';
import { Logo } from './Logo';
import { NewsletterForm } from './NewsletterForm';
import { InstagramGlyph } from './icons';

const cities = ['Havana', 'Trinidad', 'Viñales', 'Santiago', 'Baracoa', 'Cienfuegos', 'Camagüey', 'Granma'];

export function Footer() {
  return (
    <footer className="relative isolate overflow-hidden bg-teal-deep text-parchment">
      {/* Marquee strip */}
      <div className="overflow-hidden border-y border-parchment/15 py-4">
        <div className="marquee-track flex w-max items-center gap-10 whitespace-nowrap font-display text-2xl italic text-mustard md:text-4xl">
          {Array.from({ length: 2 }).map((_, dup) => (
            <span key={dup} className="flex items-center gap-10">
              {cities.map((c) => (
                <span key={`${dup}-${c}`} className="flex items-center gap-10">
                  <span style={{ fontVariationSettings: '"SOFT" 100' }}>{c}</span>
                  <span className="text-parchment/40">✻</span>
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>

      <div className="relative mx-auto max-w-7xl px-5 py-16 md:px-10 md:py-24">
        {/* Final newsletter CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="grid items-end gap-10 md:grid-cols-12 md:gap-16"
        >
          <div className="md:col-span-7">
            <span className="font-sans text-[11px] uppercase tracking-[0.32em] text-mustard">One last thing</span>
            <h2 className="mt-3 font-display text-4xl font-light leading-[1.05] tracking-tight md:text-6xl">
              The good stuff lives <br />
              <span className="italic text-mustard" style={{ fontVariationSettings: '"SOFT" 100, "WONK" 1' }}>
                in the newsletter.
              </span>
            </h2>
            <p className="mt-4 max-w-lg font-sans text-base text-parchment/80">
              Free, twice a month. New hidden gems, the locals behind them, and a heads up before each experience opens for booking.
            </p>
          </div>
          <div className="md:col-span-5">
            <NewsletterForm variant="footer" />
            <div className="mt-5 flex flex-col items-start gap-2 font-hand text-lg text-mustard">
              <a href="#vote" className="hover:text-parchment">→ or jump straight to voting</a>
              <a href="#join" className="hover:text-parchment">→ want to be involved? say hi</a>
            </div>
          </div>
        </motion.div>

        {/* Bottom row */}
        <div className="mt-16 flex flex-col items-start gap-6 border-t border-parchment/15 pt-8 md:flex-row md:items-center md:justify-between">
          <Logo />
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 font-sans text-[11px] uppercase tracking-[0.2em] text-parchment/70">
            <a href="#about" className="hover:text-parchment">About</a>
            <a href="#journal" className="hover:text-parchment">Journal</a>
            <a href="#experiences" className="hover:text-parchment">Experiences</a>
            <a href="#vote" className="text-mustard hover:text-mustard">Vote</a>
            <a href="#network" className="hover:text-parchment">Locals</a>
            <a href="#join" className="hover:text-parchment">Join us</a>
          </div>
          <div className="flex items-center gap-3">
            <SocialLink href="#" label="Instagram"><InstagramGlyph className="h-4 w-4" /></SocialLink>
            <SocialLink href="#" label="YouTube">
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4"><path d="M23 7s-.2-1.6-.8-2.3c-.8-.9-1.7-.9-2.1-1C16.9 3.4 12 3.4 12 3.4h0s-4.9 0-8.1.3c-.4 0-1.3.1-2.1 1C1.2 5.4 1 7 1 7S.8 8.9.8 10.7v1.6c0 1.9.2 3.7.2 3.7s.2 1.6.8 2.3c.8.9 1.9.9 2.4 1C5.9 19.6 12 19.7 12 19.7s4.9 0 8.1-.3c.4 0 1.3-.1 2.1-1 .6-.7.8-2.3.8-2.3s.2-1.9.2-3.7v-1.6C23.2 8.9 23 7 23 7zM10 14.4V8l6.2 3.2L10 14.4z"/></svg>
            </SocialLink>
            <SocialLink href="#" label="Email">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg>
            </SocialLink>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-start justify-between gap-2 font-sans text-[11px] text-parchment/55 md:flex-row md:items-center">
          <p>© 2026 CubanBucketList. All experiences operated under support-for-the-Cuban-people compliance.</p>
          <p className="font-hand text-base text-mustard">hecho con cariño desde la isla</p>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      aria-label={label}
      className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-parchment/30 text-parchment/80 transition-colors hover:border-mustard hover:text-mustard"
    >
      {children}
    </a>
  );
}
