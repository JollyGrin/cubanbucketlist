'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { Experience } from '@/lib/data';
import { iconMap, HeartGlyph } from './icons';
import { Confetti } from './Confetti';

export function VoteCard({
  exp,
  signedIn,
  onPromptSignIn,
}: {
  exp: Experience;
  signedIn: boolean;
  onPromptSignIn: () => void;
}) {
  const Icon = iconMap[exp.icon];
  const [voted, setVoted] = useState(false);
  const [count, setCount] = useState(exp.votes);
  const [pop, setPop] = useState(false);
  const [confetti, setConfetti] = useState(false);

  const goal = exp.goal;
  const pct = Math.min(100, (count / goal) * 100);
  const milestone = count >= goal;

  const handleVote = () => {
    if (!signedIn) { onPromptSignIn(); return; }
    if (voted) return;
    setVoted(true);
    setCount((c) => c + 1);
    setPop(true);
    setTimeout(() => setPop(false), 600);
    if (count + 1 >= goal) {
      setConfetti(true);
      setTimeout(() => setConfetti(false), 1100);
    }
  };

  return (
    <article className="relative flex h-full w-full flex-col overflow-hidden rounded-[24px] border-2 border-ink bg-parchment-50 shadow-[5px_5px_0_0_var(--color-ink)]">
      {/* Color block top */}
      <div
        className="relative h-44 overflow-hidden border-b-2 border-ink md:h-52"
        style={{
          background: `linear-gradient(135deg, ${exp.palette.from} 0%, ${exp.palette.to} 100%)`,
        }}
      >
        <div
          aria-hidden
          className="absolute inset-0 opacity-25 mix-blend-overlay"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          }}
        />
        <div
          aria-hidden
          className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full opacity-30"
          style={{ background: `radial-gradient(circle, ${exp.palette.accent} 0%, transparent 60%)` }}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <Icon className="h-28 w-28" stroke={exp.palette.ink} accent={exp.palette.accent} />
        </div>

        {/* Live count chip */}
        <div className="absolute right-3 top-3 flex items-center gap-1.5 rounded-full border border-current bg-black/15 px-2.5 py-1 backdrop-blur-sm" style={{ color: exp.palette.ink }}>
          <span className="inline-flex h-1.5 w-1.5 animate-pulse rounded-full bg-current" />
          <span className="font-sans text-[10px] uppercase tracking-[0.18em]">live</span>
        </div>

        {/* Region tag */}
        <div className="absolute left-3 top-3" style={{ color: exp.palette.ink }}>
          <span
            className="inline-flex items-center gap-1.5 rounded-full border-2 border-current px-2.5 py-0.5 font-display text-[10px] uppercase tracking-[0.18em]"
            style={{ fontStyle: 'italic' }}
          >
            <span className="inline-block h-1.5 w-1.5 rounded-full" style={{ background: exp.palette.accent }} />
            {exp.region}
          </span>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-[22px] font-semibold leading-tight tracking-tight text-ink md:text-2xl">
          {exp.title}
        </h3>
        <p className="mt-1.5 line-clamp-2 text-sm leading-relaxed text-ink-soft">{exp.blurb}</p>

        {/* Progress */}
        <div className="mt-4">
          <div className="mb-1.5 flex items-baseline justify-between">
            <div className="flex items-baseline gap-2">
              <AnimatePresence mode="popLayout">
                <motion.span
                  key={count}
                  initial={{ y: -8, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 8, opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className="font-display text-2xl font-semibold tabular-nums text-ink"
                >
                  {count.toLocaleString()}
                </motion.span>
              </AnimatePresence>
              <span className="font-sans text-xs uppercase tracking-[0.18em] text-ink-muted">
                / {goal} to launch
              </span>
            </div>
            {milestone && (
              <motion.span
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="rounded-full border-2 border-teal bg-teal px-2 py-0.5 font-display text-[10px] uppercase tracking-[0.2em] text-parchment"
              >
                Funded ✓
              </motion.span>
            )}
          </div>
          <div className="h-2 w-full overflow-hidden rounded-full border border-ink/10 bg-parchment-200/60">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${pct}%` }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="h-full rounded-full"
              style={{
                background:
                  milestone
                    ? 'linear-gradient(90deg, #0E5F5A, #2C8C84)'
                    : `linear-gradient(90deg, ${exp.palette.accent}, ${exp.palette.from})`,
              }}
            />
          </div>
        </div>

        {/* Vote button */}
        <div className="relative mt-5">
          <Confetti show={confetti} />
          <button
            type="button"
            onClick={handleVote}
            aria-pressed={voted}
            className={`group relative flex w-full items-center justify-center gap-2 rounded-2xl border-2 border-ink py-3.5 font-sans text-sm font-semibold uppercase tracking-[0.16em] transition-all
              ${voted
                ? 'bg-teal text-parchment shadow-[2px_2px_0_0_var(--color-ink)]'
                : 'bg-coral text-parchment shadow-[3px_3px_0_0_var(--color-ink)] hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[5px_5px_0_0_var(--color-ink)] active:translate-x-[1px] active:translate-y-[1px] active:shadow-[1px_1px_0_0_var(--color-ink)]'}`}
          >
            <span className={`${pop ? 'heart-pop' : ''} inline-flex items-center justify-center`}>
              <HeartGlyph filled={voted} className={`h-5 w-5 ${voted ? 'text-parchment' : 'text-parchment'}`} />
            </span>
            {voted ? 'Voted' : 'Vote for this'}
            {voted && <span aria-hidden>✓</span>}
          </button>

          {!signedIn && (
            <p className="mt-2 text-center font-hand text-base text-ink-muted">
              add your email to vote ↑
            </p>
          )}
        </div>
      </div>
    </article>
  );
}
