'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { experiences, trending } from '@/lib/data';
import { iconMap, InstagramGlyph, HeartGlyph } from '../icons';

const tileTones = [
  { bg: 'bg-[var(--v7-yellow)]', fg: 'text-[var(--v7-ink)]', t: -1.5 },
  { bg: 'bg-[var(--v7-coral)]', fg: 'text-[var(--v7-cream)]', t: 1 },
  { bg: 'bg-[var(--v7-blue)]', fg: 'text-[var(--v7-cream)]', t: -1 },
  { bg: 'bg-[var(--v7-cream)]', fg: 'text-[var(--v7-ink)]', t: 1.8 },
  { bg: 'bg-[var(--v7-blue-faded)]', fg: 'text-[var(--v7-cream)]', t: -0.5 },
  { bg: 'bg-[var(--v7-red)]', fg: 'text-[var(--v7-cream)]', t: 1.2 },
];

export function VoteSection7() {
  const [signedIn, setSignedIn] = useState(false);
  const [signing, setSigning] = useState(false);
  const [voted, setVoted] = useState<Record<string, boolean>>({});
  const [counts, setCounts] = useState<Record<string, number>>(
    Object.fromEntries(experiences.map((e) => [e.id, e.votes])),
  );

  const handleSignIn = async () => {
    if (signing || signedIn) return;
    setSigning(true);
    await new Promise((r) => setTimeout(r, 900));
    setSigning(false);
    setSignedIn(true);
  };

  const handleVote = (id: string) => {
    if (!signedIn) { handleSignIn(); return; }
    if (voted[id]) return;
    setVoted((v) => ({ ...v, [id]: true }));
    setCounts((c) => ({ ...c, [id]: c[id] + 1 }));
  };

  return (
    <section id="vote" className="relative overflow-hidden border-y-4 border-[var(--v7-ink)] bg-[var(--v7-blue)] text-[var(--v7-cream)] py-20 md:py-28">
      <div aria-hidden className="absolute inset-x-0 top-0 h-3 v7-stripes opacity-80" />
      <div aria-hidden className="absolute inset-x-0 bottom-0 h-3 v7-stripes opacity-80" />

      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }}
          className="v7-sign bg-[var(--v7-yellow)] text-[var(--v7-ink)] inline-flex items-center gap-2 px-3 py-1.5 v7-body text-xs uppercase font-bold tracking-wider"
          style={{ ['--tilt' as string]: '-1.5deg' }}
        >
          ✺ AVISO № 04 — La Votación
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="mt-6 leading-[0.85] text-5xl sm:text-7xl md:text-[120px]"
        >
          <span className="block v7-block text-[var(--v7-cream)] v7-ghost">¿CUÁL VIAJE</span>
          <span className="block v7-brush -my-1 text-[var(--v7-yellow)] text-[60px] sm:text-7xl md:text-[160px]">se hace primero?</span>
        </motion.h2>

        <p className="mt-6 max-w-3xl v7-body text-base leading-relaxed font-medium text-[var(--v7-cream)]/85 md:text-lg">
          Inicia sesión con Instagram, vota por los viajes que quieres ver convertidos en realidad.
          <span className="v7-brush text-[var(--v7-yellow)] text-2xl ml-2">los votantes entran primero.</span>
        </p>

        {/* Sign-in row */}
        <div className="mt-10">
          <AnimatePresence mode="wait">
            {!signedIn ? (
              <motion.button
                key="in" type="button" onClick={handleSignIn} disabled={signing}
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                className="v7-sign bg-[var(--v7-coral)] text-[var(--v7-cream)] inline-flex items-center gap-3 px-6 py-4 v7-block text-base hover:translate-y-[-2px] transition-transform"
                style={{ ['--tilt' as string]: '-1deg' }}
              >
                <InstagramGlyph className="h-5 w-5" />
                {signing ? 'CONECTANDO...' : 'ENTRA CON INSTAGRAM ✺'}
              </motion.button>
            ) : (
              <motion.div
                key="ok" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
                className="v7-sign bg-[var(--v7-yellow)] text-[var(--v7-ink)] inline-flex items-center gap-4 px-5 py-3"
                style={{ ['--tilt' as string]: '-1deg' }}
              >
                <span className="inline-flex h-10 w-10 items-center justify-center border-2 border-[var(--v7-ink)] bg-[var(--v7-coral)] text-[var(--v7-cream)]">
                  <InstagramGlyph className="h-5 w-5" />
                </span>
                <span className="flex flex-col leading-tight">
                  <span className="v7-body text-[10px] uppercase tracking-wider font-bold opacity-75">ENTRASTE COMO</span>
                  <span className="v7-brush text-3xl">@havana_in_amber</span>
                </span>
                <span className="v7-body text-xs uppercase tracking-wider font-bold border-2 border-[var(--v7-ink)] bg-[var(--v7-cream)] px-2 py-0.5">3 VOTOS HOY</span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Trending */}
        <div className="mt-12">
          <p className="mb-3 v7-brush text-3xl text-[var(--v7-yellow)]">↑ lo que está sonando</p>
          <ol className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {trending.map((t, i) => {
              const exp = experiences.find((e) => e.id === t.id)!;
              const Icon = iconMap[exp.icon];
              return (
                <li key={t.id} className="v7-sign bg-[var(--v7-cream)] text-[var(--v7-ink)] flex items-center gap-3 p-3" style={{ ['--tilt' as string]: `${[-1, 1, -0.5, 1.2][i]}deg` }}>
                  <span className="v7-block text-2xl text-[var(--v7-coral)] w-7">№{i+1}</span>
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center border-2 border-[var(--v7-ink)]"
                    style={{ background: `linear-gradient(135deg, ${exp.palette.from}, ${exp.palette.to})` }}>
                    <Icon className="h-7 w-7" stroke={exp.palette.ink} accent={exp.palette.accent} />
                  </span>
                  <span className="flex flex-col min-w-0 leading-tight">
                    <span className="v7-body text-[10px] uppercase tracking-wider font-bold text-[var(--v7-blue)]">{t.delta} nuevos</span>
                    <span className="truncate v7-block text-sm">{exp.title}</span>
                  </span>
                </li>
              );
            })}
          </ol>
        </div>

        {/* Vote tiles */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {experiences.map((exp, i) => {
            const Icon = iconMap[exp.icon];
            const isVoted = !!voted[exp.id];
            const count = counts[exp.id];
            const pct = Math.min(100, (count / exp.goal) * 100);
            const milestone = count >= exp.goal;
            const tone = tileTones[i % tileTones.length];
            return (
              <motion.article
                key={exp.id} id={`vote-${exp.id}`}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                whileHover={{ y: -4, rotate: 0 }}
                className={`v7-sign ${tone.bg} ${tone.fg} flex flex-col`}
                style={{ ['--tilt' as string]: `${tone.t}deg` }}
              >
                <div className="border-b-3 border-[var(--v7-ink)] bg-[var(--v7-ink)] text-[var(--v7-cream)] px-3 py-1.5 flex items-center justify-between">
                  <span className="v7-block text-xs">PUESTO №{String(i + 1).padStart(2, '0')}</span>
                  <span className="v7-brush text-base">{exp.region}</span>
                </div>

                <div
                  className="relative aspect-[5/3] overflow-hidden border-b-3 border-[var(--v7-ink)]"
                  style={{ background: `linear-gradient(135deg, ${exp.palette.from} 0%, ${exp.palette.to} 100%)` }}
                >
                  <div
                    aria-hidden
                    className="absolute inset-0 opacity-40 mix-blend-multiply"
                    style={{
                      backgroundImage:
                        "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.4' numOctaves='2'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
                    }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Icon className="h-24 w-24" stroke={exp.palette.ink} accent={exp.palette.accent} />
                  </div>
                  <span className="absolute right-2 top-2 v7-body text-[10px] uppercase tracking-wider font-bold border-2 border-[var(--v7-ink)] bg-[var(--v7-cream)] text-[var(--v7-ink)] px-1.5 py-0.5">
                    EN VIVO
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-5">
                  <h3 className="v7-block text-2xl leading-tight">{exp.title}</h3>
                  <p className="mt-2 v7-body text-sm font-medium leading-snug opacity-85 line-clamp-2">{exp.blurb}</p>

                  <div className="mt-4">
                    <div className="mb-1.5 flex items-baseline justify-between">
                      <div className="flex items-baseline gap-2">
                        <AnimatePresence mode="popLayout">
                          <motion.span
                            key={count}
                            initial={{ y: -8, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 8, opacity: 0 }}
                            className="v7-block text-3xl tabular-nums"
                          >
                            {count.toLocaleString()}
                          </motion.span>
                        </AnimatePresence>
                        <span className="v7-body text-xs uppercase tracking-wider font-bold opacity-75">/ {exp.goal} votos</span>
                      </div>
                      {milestone && (
                        <span className="v7-body text-[10px] uppercase tracking-wider font-bold border-2 border-[var(--v7-ink)] bg-[var(--v7-cream)] text-[var(--v7-ink)] px-1.5 py-0.5">
                          ¡VA! ✓
                        </span>
                      )}
                    </div>
                    <div className="h-3 w-full overflow-hidden border-2 border-[var(--v7-ink)] bg-[var(--v7-cream)]">
                      <motion.div
                        initial={{ width: 0 }} animate={{ width: `${pct}%` }}
                        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                        className="h-full bg-[var(--v7-ink)]"
                      />
                    </div>
                  </div>

                  <button
                    type="button" onClick={() => handleVote(exp.id)}
                    className={`mt-5 v7-sign inline-flex items-center justify-center gap-2 py-3 v7-block text-base transition-transform hover:translate-y-[-2px] ${
                      isVoted ? 'bg-[var(--v7-ink)] text-[var(--v7-yellow)]' : 'bg-[var(--v7-cream)] text-[var(--v7-ink)]'
                    }`}
                    style={{ ['--tilt' as string]: '0deg' }}
                  >
                    <HeartGlyph filled={isVoted} className="h-4 w-4" />
                    {isVoted ? 'VOTADO ✓' : signedIn ? 'VOTAR' : 'ENTRA Y VOTA'}
                  </button>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
