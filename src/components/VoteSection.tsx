'use client';

import { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { experiences, trending } from '@/lib/data';
import { iconMap } from './icons';
import { VoteCard } from './VoteCard';

export function VoteSection() {
  const [verified, setVerified] = useState(false);
  const [verifying, setVerifying] = useState(false);
  const [email, setEmail] = useState('');
  const [error, setError] = useState<string | null>(null);
  const emailInputRef = useRef<HTMLInputElement>(null);
  const signinRef = useRef<HTMLDivElement>(null);

  const verify = async () => {
    if (verifying || verified) return;
    if (!email.trim()) {
      setError('Drop your email first.');
      emailInputRef.current?.focus();
      return;
    }
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setError('That doesn’t look quite right.');
      emailInputRef.current?.focus();
      return;
    }
    setError(null);
    setVerifying(true);
    await new Promise((r) => setTimeout(r, 900));
    setVerifying(false);
    setVerified(true);
  };

  const onPromptVerify = () => {
    // scroll the sign-in panel into view + focus the input so the gating moment is obvious
    signinRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    setTimeout(() => emailInputRef.current?.focus(), 350);
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    verify();
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
            Drop your email to vote on the experiences you want us to turn into real packages.
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

        {/* Email-verify panel OR voting-as chip */}
        <motion.div
          ref={signinRef}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.55, delay: 0.15 }}
          className="mb-8 scroll-mt-24"
        >
          <AnimatePresence mode="wait">
            {!verified ? (
              <motion.div
                key="signin"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, y: -10 }}
                className="relative overflow-hidden rounded-3xl border-2 border-parchment/15 bg-gradient-to-br from-coral via-coral to-mustard p-6 text-parchment md:p-8"
              >
                <div className="flex flex-col items-start gap-5">
                  <div>
                    <p className="font-hand text-xl text-parchment/95">
                      Drop your email to start voting ↓
                    </p>
                    <p className="mt-1 max-w-2xl font-sans text-sm text-parchment/85">
                      We won’t email you unless you ask us to. Just used to make sure each vote is a real human.
                    </p>
                  </div>

                  <form onSubmit={onSubmit} className="w-full">
                    <div className="flex w-full flex-col gap-2 sm:flex-row sm:items-center sm:gap-0">
                      <label className="sr-only" htmlFor="vote-email">Email address</label>
                      <input
                        id="vote-email"
                        ref={emailInputRef}
                        type="email"
                        required
                        autoComplete="email"
                        placeholder="your@email.com"
                        value={email}
                        onChange={(e) => { setEmail(e.target.value); if (error) setError(null); }}
                        className="w-full flex-1 rounded-2xl border-2 border-ink bg-parchment-50 px-5 py-4 font-sans text-base text-ink placeholder:text-ink-muted focus:outline-none sm:rounded-r-none sm:border-r-0"
                      />
                      <button
                        type="submit"
                        disabled={verifying}
                        className="group inline-flex items-center justify-center gap-2 rounded-2xl border-2 border-ink bg-ink px-6 py-4 font-sans text-sm font-semibold uppercase tracking-[0.18em] text-parchment shadow-[3px_3px_0_0_var(--color-parchment)] transition-all hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[5px_5px_0_0_var(--color-parchment)] active:translate-x-[1px] active:translate-y-[1px] active:shadow-[1px_1px_0_0_var(--color-parchment)] disabled:opacity-80 sm:rounded-l-none sm:border-l-2 animate-pulse-glow"
                      >
                        {verifying ? (
                          <span className="inline-flex items-center gap-2">
                            <span className="h-3 w-3 animate-spin rounded-full border-2 border-parchment border-t-transparent" />
                            Verifying…
                          </span>
                        ) : (
                          <>
                            Start voting
                            <span className="transition-transform group-hover:translate-x-0.5">→</span>
                          </>
                        )}
                      </button>
                    </div>
                    {error && (
                      <p className="mt-2 inline-flex items-center gap-1.5 rounded-lg bg-ink/20 px-2 py-1 font-sans text-xs text-parchment">
                        <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                          <circle cx="12" cy="12" r="9" />
                          <path d="M12 7v5 M12 16v.5" />
                        </svg>
                        {error}
                      </p>
                    )}
                  </form>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="voting-as"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex flex-wrap items-center gap-3 rounded-3xl border-2 border-mustard/40 bg-parchment/5 p-5 text-parchment"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-tr from-coral via-mustard to-coral text-ink">
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12l5 5L20 7" />
                  </svg>
                </span>
                <div className="flex flex-col leading-tight">
                  <span className="font-hand text-lg text-mustard">voting as</span>
                  <span className="font-display text-xl font-semibold text-parchment break-all">{email}</span>
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
                <VoteCard exp={exp} signedIn={verified} onPromptSignIn={onPromptVerify} />
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
              <VoteCard exp={exp} signedIn={verified} onPromptSignIn={onPromptVerify} />
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
