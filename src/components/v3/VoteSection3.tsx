'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { experiences, trending } from '@/lib/data';
import { iconMap, InstagramGlyph, HeartGlyph } from '../icons';

const tileTones = [
  'bg-[var(--v3-pink)] text-white',
  'bg-[var(--v3-yellow)] text-[var(--v3-ink)]',
  'bg-[var(--v3-mint)] text-[var(--v3-ink)]',
  'bg-[var(--v3-orange)] text-white',
  'bg-[var(--v3-blue)] text-white',
  'bg-[var(--v3-lime)] text-[var(--v3-ink)]',
];

export function VoteSection3() {
  const [signedIn, setSignedIn] = useState(false);
  const [signing, setSigning] = useState(false);

  const handleSignIn = async () => {
    if (signing || signedIn) return;
    setSigning(true);
    await new Promise((r) => setTimeout(r, 900));
    setSigning(false);
    setSignedIn(true);
  };

  return (
    <section id="vote" className="relative overflow-hidden border-t-2 border-[var(--v3-ink)] bg-[var(--v3-ink)] py-20 text-[var(--v3-paper)] md:py-28">
      {/* Tape strip */}
      <div className="overflow-hidden border-y-2 border-[var(--v3-yellow)] bg-[var(--v3-yellow)] py-2">
        <div className="v3-tape flex w-max items-center gap-8 whitespace-nowrap v3-display text-xl font-black uppercase text-[var(--v3-ink)] md:text-2xl">
          {Array.from({ length: 2 }).map((_, dup) => (
            <span key={dup} className="flex items-center gap-8">
              {Array.from({ length: 8 }).map((_, j) => (
                <span key={j} className="flex items-center gap-8">
                  ★ VOTE NOW ★ VOTE NOW ★ HELP US BUILD ★ VOTE NOW
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-[1400px] px-5 pt-16 md:px-12 md:pt-24">
        <span className="inline-flex items-center gap-2 rounded-full border-2 border-[var(--v3-paper)] bg-[var(--v3-pink)] px-3 py-1.5 v3-mono text-xs font-bold uppercase tracking-wider text-white">
          ★ Chapter 04 — The Vote
        </span>

        <h2 className="mt-6 v3-display text-5xl font-black uppercase leading-[0.85] tracking-[-0.01em] sm:text-7xl md:text-[140px]">
          WHICH ONE <br />
          GETS BUILT <br />
          <span className="text-[var(--v3-yellow)]">FIRST?</span>
        </h2>

        <p className="mt-6 max-w-2xl v3-mono text-base font-medium leading-relaxed text-white/85 md:text-lg">
          Sign in with Instagram to vote on the experiences you want us to turn into real packages.
          Top voted = launched first. <span className="text-[var(--v3-yellow)] font-black">Voters get the first invite.</span>
        </p>

        {/* Signin / signed */}
        <div className="mt-8">
          <AnimatePresence mode="wait">
            {!signedIn ? (
              <motion.button
                key="in"
                onClick={handleSignIn}
                disabled={signing}
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                className="group inline-flex items-center gap-3 rounded-2xl border-2 border-[var(--v3-paper)] bg-gradient-to-tr from-[var(--v3-pink)] via-[var(--v3-orange)] to-[var(--v3-yellow)] px-6 py-4 v3-display text-2xl font-black uppercase text-white v3-shadow-pink animate-pulse-glow"
              >
                <InstagramGlyph className="h-6 w-6" />
                {signing ? 'CONNECTING…' : 'SIGN IN WITH INSTAGRAM ★'}
              </motion.button>
            ) : (
              <motion.div
                key="ok"
                initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-4 rounded-2xl border-2 border-[var(--v3-yellow)] bg-white/5 px-5 py-3"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg border-2 border-[var(--v3-paper)] bg-gradient-to-tr from-[var(--v3-pink)] to-[var(--v3-yellow)] text-[var(--v3-ink)]">
                  <InstagramGlyph className="h-5 w-5" />
                </span>
                <div className="flex flex-col leading-tight">
                  <span className="v3-mono text-[10px] font-bold uppercase tracking-wider text-[var(--v3-yellow)]">SIGNED IN AS</span>
                  <span className="v3-display text-2xl font-black uppercase">@HAVANA_IN_AMBER</span>
                </div>
                <span className="ml-auto rounded-full border-2 border-[var(--v3-lime)] bg-[var(--v3-lime)] px-3 py-1 v3-mono text-[10px] font-bold uppercase text-[var(--v3-ink)]">
                  3 VOTES TODAY
                </span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Trending tiles */}
        <div className="mt-12">
          <p className="mb-3 v3-mono text-xs font-bold uppercase tracking-wider text-[var(--v3-yellow)]">
            ↑ TRENDING THIS WEEK
          </p>
          <div className="-mx-5 overflow-x-auto px-5 md:mx-0 md:px-0">
            <div className="flex gap-3 md:grid md:grid-cols-4 md:gap-4">
              {trending.map((t, i) => {
                const exp = experiences.find((e) => e.id === t.id)!;
                const Icon = iconMap[exp.icon];
                return (
                  <a
                    key={t.id}
                    href={`#vote-${exp.id}`}
                    className="flex w-[80%] shrink-0 items-center gap-3 rounded-2xl border-2 border-[var(--v3-paper)] bg-white/5 p-3 transition-colors hover:bg-white/10 md:w-auto"
                  >
                    <span
                      className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border-2 border-[var(--v3-ink)]"
                      style={{ background: `linear-gradient(135deg, ${exp.palette.from}, ${exp.palette.to})` }}
                    >
                      <Icon className="h-7 w-7" stroke={exp.palette.ink} accent={exp.palette.accent} />
                    </span>
                    <span className="flex min-w-0 flex-col">
                      <span className="flex items-center gap-1.5">
                        <span className="v3-display text-base font-black text-[var(--v3-yellow)]">#{i + 1}</span>
                        <span className="rounded border border-[var(--v3-lime)] bg-[var(--v3-lime)]/15 px-1.5 py-px v3-mono text-[10px] font-bold uppercase text-[var(--v3-lime)]">
                          {t.delta}
                        </span>
                      </span>
                      <span className="truncate v3-display text-sm font-black uppercase">{exp.title}</span>
                    </span>
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Voting wall — colorful tile grid */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {experiences.map((exp, i) => (
            <VoteTile3
              key={exp.id}
              exp={exp}
              tone={tileTones[i % tileTones.length]}
              signedIn={signedIn}
              onPromptSignIn={handleSignIn}
            />
          ))}
        </div>

        <p className="mt-10 max-w-2xl v3-mono text-sm font-medium leading-relaxed text-white/65">
          ★ FIRST EXPERIENCE TO 500 VOTES GETS BUILT THIS QUARTER. VOTERS GET DIBS BEFORE THE REST OF THE LIST.
        </p>
      </div>
    </section>
  );
}

function VoteTile3({
  exp,
  tone,
  signedIn,
  onPromptSignIn,
}: {
  exp: typeof experiences[number];
  tone: string;
  signedIn: boolean;
  onPromptSignIn: () => void;
}) {
  const Icon = iconMap[exp.icon];
  const [voted, setVoted] = useState(false);
  const [count, setCount] = useState(exp.votes);
  const [floats, setFloats] = useState<number[]>([]);
  const pct = Math.min(100, (count / exp.goal) * 100);
  const milestone = count >= exp.goal;

  const handleVote = () => {
    if (!signedIn) { onPromptSignIn(); return; }
    if (voted) return;
    setVoted(true);
    setCount((c) => c + 1);
    const id = Date.now();
    setFloats((f) => [...f, id]);
    setTimeout(() => setFloats((f) => f.filter((x) => x !== id)), 900);
  };

  return (
    <article
      id={`vote-${exp.id}`}
      className={`relative flex flex-col overflow-hidden rounded-2xl border-2 border-[var(--v3-ink)] v3-shadow ${tone}`}
    >
      <div className="relative aspect-[5/3] overflow-hidden border-b-2 border-[var(--v3-ink)]"
        style={{ background: `linear-gradient(135deg, ${exp.palette.from} 0%, ${exp.palette.to} 100%)` }}
      >
        <div
          aria-hidden
          className="absolute inset-0 opacity-30 mix-blend-overlay"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          }}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <Icon className="h-24 w-24" stroke={exp.palette.ink} accent={exp.palette.accent} />
        </div>
        <span className="absolute right-3 top-3 inline-flex items-center gap-1.5 rounded-md border-2 border-[var(--v3-ink)] bg-white px-2 py-0.5 v3-mono text-[10px] font-bold uppercase text-[var(--v3-ink)]">
          <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-[var(--v3-pink)]" /> LIVE
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="v3-display text-2xl font-black uppercase leading-tight">
          {exp.title}
        </h3>
        <p className="mt-2 v3-mono text-sm font-medium leading-relaxed opacity-85 line-clamp-2">{exp.blurb}</p>

        <div className="mt-4">
          <div className="mb-1.5 flex items-baseline justify-between">
            <div className="flex items-baseline gap-2">
              <AnimatePresence mode="popLayout">
                <motion.span
                  key={count}
                  initial={{ y: -8, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 8, opacity: 0 }}
                  className="v3-display text-3xl font-black tabular-nums"
                >
                  {count.toLocaleString()}
                </motion.span>
              </AnimatePresence>
              <span className="v3-mono text-[10px] font-bold uppercase opacity-75">/ {exp.goal} TO LAUNCH</span>
            </div>
            {milestone && (
              <span className="rounded border-2 border-[var(--v3-ink)] bg-[var(--v3-lime)] px-1.5 py-0.5 v3-mono text-[10px] font-bold uppercase text-[var(--v3-ink)]">
                FUNDED ✓
              </span>
            )}
          </div>
          <div className="h-3 w-full overflow-hidden rounded-full border-2 border-[var(--v3-ink)] bg-white/40">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${pct}%` }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="h-full rounded-full bg-[var(--v3-ink)]"
            />
          </div>
        </div>

        <div className="relative mt-5">
          {floats.map((id) => (
            <span key={id} className="v3-float-up pointer-events-none absolute left-1/2 top-0 v3-display text-2xl font-black text-[var(--v3-pink)]">
              +1 ♥
            </span>
          ))}
          <button
            type="button"
            onClick={handleVote}
            className={`flex w-full items-center justify-center gap-2 rounded-xl border-2 border-[var(--v3-ink)] py-3 v3-display text-lg font-black uppercase v3-shadow-sm transition-transform hover:-translate-y-0.5 active:translate-y-0 ${
              voted ? 'bg-[var(--v3-ink)] text-[var(--v3-yellow)]' : 'bg-[var(--v3-paper)] text-[var(--v3-ink)]'
            }`}
          >
            <HeartGlyph filled={voted} className="h-5 w-5" />
            {voted ? 'VOTED ✓' : 'VOTE ♥'}
          </button>
        </div>
      </div>
    </article>
  );
}
