'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { experiences, trending } from '@/lib/data';
import { iconMap, InstagramGlyph } from './icons';
import { VoteCard } from './VoteCard';

export function VoteSection() {
  const [signedIn, setSignedIn] = useState(false);
  const [signingIn, setSigningIn] = useState(false);
  const username = '@havana_in_amber';

  const handleSignIn = async () => {
    if (signingIn || signedIn) return;
    setSigningIn(true);
    await new Promise((r) => setTimeout(r, 900));
    setSigningIn(false);
    setSignedIn(true);
  };

  return (
    <section
      id="vote"
      className="relative overflow-hidden bg-ink py-20 text-parchment md:py-32"
    >
      {/* Background glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-0 opacity-60"
        style={{
          background:
            'radial-gradient(ellipse 80% 50% at 50% 0%, rgba(217,164,65,0.18), transparent 60%), radial-gradient(ellipse 60% 50% at 90% 90%, rgba(229,97,61,0.20), transparent 60%), radial-gradient(ellipse 60% 50% at 10% 90%, rgba(14,95,90,0.30), transparent 60%)',
        }}
      />
      {/* Background numeral */}
      <div aria-hidden className="pointer-events-none absolute -left-10 top-10 select-none font-display text-[280px] font-light leading-none tracking-tighter text-parchment/[0.04] md:-left-12 md:text-[420px]">
        IV
      </div>

      <div className="relative mx-auto max-w-7xl px-5 md:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mb-10 max-w-3xl"
        >
          <div className="flex items-baseline gap-3 text-mustard">
            <span className="section-numeral text-3xl md:text-4xl">IV.</span>
            <span className="font-sans text-[11px] uppercase tracking-[0.32em]">
              Vote on what’s next
            </span>
          </div>
          <h2 className="mt-3 font-display text-3xl font-light leading-[1.05] tracking-tight sm:text-4xl md:text-6xl">
            Help shape the first real{' '}
            <span className="italic text-mustard" style={{ fontVariationSettings: '"SOFT" 100, "WONK" 1' }}>
              Cuban Bucket List
            </span>{' '}
            trips.
          </h2>
          <p className="mt-4 max-w-2xl font-sans text-base text-parchment/80 sm:text-lg">
            Sign in with Instagram to vote on the experiences you want us to turn into real packages.
            Top voted ideas get launched first — and voters get early access + special perks.
          </p>
        </motion.div>

        {/* Trending leaderboard */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="mb-8"
        >
          <div className="mb-3 flex items-center gap-2 font-sans text-[11px] uppercase tracking-[0.28em] text-mustard">
            <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 17 L9 11 L13 15 L21 7 M21 7 L15 7 M21 7 L21 13" />
            </svg>
            Trending this week
          </div>
          <div className="-mx-5 overflow-x-auto px-5 md:mx-0 md:px-0">
            <div className="flex gap-3 md:grid md:grid-cols-4 md:gap-4">
              {trending.map((t, i) => {
                const exp = experiences.find((e) => e.id === t.id)!;
                const Icon = iconMap[exp.icon];
                return (
                  <a
                    key={t.id}
                    href={`#vote-${exp.id}`}
                    className="group flex w-[78%] shrink-0 items-center gap-3 rounded-2xl border border-parchment/15 bg-parchment/5 p-3 transition-colors hover:border-mustard/40 hover:bg-parchment/10 md:w-auto"
                  >
                    <span
                      className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl"
                      style={{
                        background: `linear-gradient(135deg, ${exp.palette.from} 0%, ${exp.palette.to} 100%)`,
                      }}
                    >
                      <Icon className="h-7 w-7" stroke={exp.palette.ink} accent={exp.palette.accent} />
                    </span>
                    <span className="flex min-w-0 flex-col">
                      <span className="flex items-center gap-1.5">
                        <span className="font-display text-xs font-semibold tabular-nums text-mustard">#{i + 1}</span>
                        <span className="rounded-full bg-teal-light/15 px-1.5 py-px font-sans text-[10px] uppercase tracking-[0.16em] text-teal-light">
                          {t.delta}
                        </span>
                      </span>
                      <span className="truncate font-display text-sm font-semibold text-parchment">{exp.title}</span>
                    </span>
                  </a>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* Sign-in panel OR voted-in chip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.55, delay: 0.15 }}
          className="mb-8"
        >
          <AnimatePresence mode="wait">
            {!signedIn ? (
              <motion.div
                key="signin"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, y: -10 }}
                className="relative overflow-hidden rounded-3xl border-2 border-parchment/15 bg-gradient-to-br from-coral via-coral to-mustard p-6 text-parchment md:p-8"
              >
                <div className="flex flex-col items-start gap-5 md:flex-row md:items-center md:justify-between">
                  <div>
                    <p className="font-hand text-xl text-parchment/95">
                      Vote with your Instagram, get early access ↓
                    </p>
                    <p className="mt-1 max-w-xl font-sans text-sm text-parchment/85">
                      We don’t post anything. We just use it to make sure votes are real human votes.
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={handleSignIn}
                    disabled={signingIn}
                    className="group relative inline-flex w-full items-center justify-center gap-2.5 rounded-2xl border-2 border-ink bg-ink px-6 py-4 font-sans text-sm font-semibold uppercase tracking-[0.18em] text-parchment shadow-[3px_3px_0_0_var(--color-parchment)] transition-all hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[5px_5px_0_0_var(--color-parchment)] active:translate-x-[1px] active:translate-y-[1px] active:shadow-[1px_1px_0_0_var(--color-parchment)] disabled:opacity-80 md:w-auto animate-pulse-glow"
                  >
                    <InstagramGlyph className="h-5 w-5" />
                    {signingIn ? 'Connecting…' : 'Sign in with Instagram to vote'}
                  </button>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="signedin"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex flex-wrap items-center gap-3 rounded-3xl border-2 border-mustard/40 bg-parchment/5 p-5 text-parchment"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-tr from-coral via-mustard to-coral text-ink">
                  <InstagramGlyph className="h-5 w-5" />
                </span>
                <div className="flex flex-col leading-tight">
                  <span className="font-hand text-lg text-mustard">signed in as</span>
                  <span className="font-display text-xl font-semibold text-parchment">{username}</span>
                </div>
                <span className="ml-auto rounded-full border border-teal-light/40 bg-teal-light/10 px-3 py-1 font-sans text-[11px] uppercase tracking-[0.18em] text-teal-light">
                  3 votes available today
                </span>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Voting wall */}
        {/* Mobile: horizontal swipe (Stories/Reels feel) */}
        <div className="-mx-5 md:hidden">
          <div className="snap-x-mandatory no-scrollbar flex gap-4 overflow-x-auto px-5 pb-4">
            {experiences.map((exp) => (
              <div key={exp.id} id={`vote-${exp.id}`} className="snap-start w-[84%] shrink-0">
                <VoteCard exp={exp} signedIn={signedIn} onPromptSignIn={handleSignIn} />
              </div>
            ))}
            <div className="w-2 shrink-0" aria-hidden />
          </div>
          <div className="px-5 pt-3 text-parchment/70">
            <p className="font-hand text-base">← swipe to see them all →</p>
          </div>
        </div>

        {/* Desktop: 3-up grid */}
        <div className="hidden gap-6 md:grid md:grid-cols-2 lg:grid-cols-3">
          {experiences.map((exp) => (
            <div key={exp.id} id={`vote-${exp.id}`}>
              <VoteCard exp={exp} signedIn={signedIn} onPromptSignIn={handleSignIn} />
            </div>
          ))}
        </div>

        {/* Footer note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mx-auto mt-10 max-w-2xl text-center font-sans text-sm text-parchment/65"
        >
          Voted experiences hit their goal in front of you. The first to reach 500 gets built — and voters get the first dibs.
        </motion.p>
      </div>
    </section>
  );
}
