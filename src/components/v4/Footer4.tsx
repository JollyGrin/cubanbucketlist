'use client';

import { BlurReveal } from './primitives';
import { NewsletterForm4 } from './NewsletterForm4';
import { InstagramGlyph } from '../icons';

export function Footer4() {
  return (
    <footer className="relative isolate border-t v4-rule v4-aurora py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <BlurReveal>
          <div className="grid items-end gap-10 md:grid-cols-12 md:gap-16">
            <div className="md:col-span-7">
              <span className="v4-mono text-[10px] uppercase tracking-[0.32em] text-[var(--v4-violet)]">one last thing</span>
              <h2 className="mt-3 text-balance text-5xl font-medium tracking-[-0.02em] md:text-7xl">
                The good stuff lives <span className="v4-serif italic font-normal text-[var(--v4-cyan)]">in the inbox.</span>
              </h2>
            </div>
            <div className="md:col-span-5">
              <NewsletterForm4 />
              <a href="#vote" className="mt-5 inline-flex items-center gap-2 v4-mono text-[10px] uppercase tracking-[0.32em] text-[var(--v4-cyan)] hover:text-[var(--v4-paper)]">
                <InstagramGlyph className="h-4 w-4" /> or jump straight to voting →
              </a>
            </div>
          </div>
        </BlurReveal>

        <div className="mt-16 grid gap-6 border-t v4-rule pt-8 md:grid-cols-12">
          <div className="md:col-span-4 flex items-center gap-2.5">
            <span className="relative inline-flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-[var(--v4-violet)] via-[var(--v4-pink)] to-[var(--v4-cyan)]">
              <span className="absolute inset-[2px] rounded-full bg-[var(--v4-bg)]" />
              <span className="relative font-medium text-[10px] tracking-wider">CB</span>
            </span>
            <div className="flex flex-col leading-tight">
              <span className="font-medium tracking-tight">Cuban Bucket List</span>
              <span className="v4-mono text-[10px] uppercase tracking-[0.22em] text-white/45">membership · est. 2026</span>
            </div>
          </div>
          <ul className="md:col-span-4 grid grid-cols-2 gap-y-2 v4-mono text-[10px] uppercase tracking-[0.28em] text-white/55">
            {['About', 'Journal', 'Trips', 'Vote', 'Network', 'Subscribe'].map((l) => (
              <li key={l}><a className="hover:text-[var(--v4-paper)]" href={`#${l.toLowerCase()}`}>{l}</a></li>
            ))}
          </ul>
          <div className="md:col-span-4 md:text-right v4-mono text-[10px] uppercase tracking-[0.28em] text-white/55">
            © 2026 Cuban Bucket List · operated under support-for-the-Cuban-people compliance
          </div>
        </div>
      </div>
    </footer>
  );
}
