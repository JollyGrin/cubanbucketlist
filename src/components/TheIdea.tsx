'use client';

import { motion } from 'framer-motion';

export function TheIdea() {
  return (
    <section id="about" className="relative overflow-hidden bg-parchment py-20 md:py-32">
      {/* Decorative numeral background */}
      <div aria-hidden className="pointer-events-none absolute -right-10 top-10 select-none font-display text-[280px] font-light leading-none tracking-tighter text-ink/[0.04] md:-right-16 md:text-[420px]">
        II
      </div>

      <div className="relative mx-auto max-w-7xl px-5 md:px-10">
        <div className="grid items-start gap-10 md:grid-cols-12 md:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="md:col-span-5"
          >
            <div className="flex items-baseline gap-3 text-coral">
              <span className="section-numeral text-3xl md:text-4xl">II.</span>
              <span className="font-sans text-[11px] uppercase tracking-[0.32em]">The premise</span>
            </div>
            <h2 className="mt-3 font-display text-4xl font-light leading-[1.02] tracking-tight text-ink sm:text-5xl md:text-[64px]">
              We’re not another <br />
              <span className="italic text-terracotta" style={{ fontVariationSettings: '"SOFT" 100, "WONK" 1' }}>
                tour company.
              </span>
            </h2>

            <div className="mt-6 flex items-center gap-3 font-hand text-lg text-teal">
              <span className="inline-block h-px w-12 bg-teal/60" />
              from a newsletter, with a small black book
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:col-span-7"
          >
            <p className="drop-cap font-sans text-lg leading-[1.6] text-ink-soft md:text-xl md:leading-[1.55]">
              We started as a newsletter to share Cuba’s true hidden gems and
              introduce you to our network of remarkable locals — photographers,
              chefs, scuba instructors, mountain guides, mechanics who can rebuild
              a ’57 Chevy with a butter knife. Every story we publish, and every
              vote you cast, helps us build exactly what you want to experience —
              before anyone turns it into a brochure.
            </p>

            {/* Three notes — like margin scribbles */}
            <ul className="mt-10 grid gap-4 sm:grid-cols-3">
              {[
                { tag: 'No coaches.', body: 'Max group sizes of 3–12. Often just you and the local.' },
                { tag: 'Real cuts.', body: 'Locals get paid first, paid fairly. That’s the whole moat.' },
                { tag: 'No clichés.', body: 'No Varadero, no cigar-rolling photo ops. The other Cuba.' },
              ].map((n, i) => (
                <motion.li
                  key={n.tag}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.08 }}
                  className="paper-card relative rounded-2xl border border-ink/10 p-5 shadow-[2px_2px_0_0_rgba(27,24,20,0.06)]"
                  style={{ transform: `rotate(${[-1.2, 0.6, -0.4][i]}deg)` }}
                >
                  <span className="font-display text-lg font-semibold italic text-coral">{n.tag}</span>
                  <p className="mt-1 text-sm leading-relaxed text-ink-soft">{n.body}</p>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
