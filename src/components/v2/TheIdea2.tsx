'use client';

import { motion } from 'framer-motion';

export function TheIdea2() {
  return (
    <section id="about" className="relative border-t v2-rule bg-[var(--v2-ink)] py-24 md:py-36">
      <div className="mx-auto max-w-[1400px] px-5 md:px-12">
        <div className="grid gap-12 md:grid-cols-12 md:gap-20">
          {/* Marginalia column */}
          <aside className="md:col-span-3">
            <div className="sticky top-32 flex flex-col gap-8 v2-mono text-[10px] uppercase tracking-[0.32em] text-white/45">
              <span>§ II — The premise</span>
              <div className="flex flex-col gap-1">
                <span className="text-[var(--v2-saffron)]">Editor</span>
                <span className="text-white/65">For the curious traveler</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-[var(--v2-saffron)]">Filed from</span>
                <span className="text-white/65">Habana → Granma</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-[var(--v2-saffron)]">Read time</span>
                <span className="text-white/65">2 minutes</span>
              </div>
            </div>
          </aside>

          {/* Body */}
          <div className="md:col-span-9">
            <motion.h2
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6 }}
              className="v2-display max-w-3xl text-5xl font-light leading-[0.95] tracking-[-0.02em] sm:text-6xl md:text-[88px]"
            >
              We are <span className="italic text-[var(--v2-saffron)]">not</span> another <br />
              tour company.
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-10 grid gap-8 md:grid-cols-2"
            >
              <p className="font-[var(--font-v2-body)] text-xl italic leading-[1.55] text-white/85 md:text-2xl">
                We started as a newsletter to share Cuba’s true hidden gems and to introduce you to
                a small network of remarkable locals — photographers, chefs, scuba instructors,
                mountain guides, mechanics who can rebuild a ’57 Chevy with a butter knife.
              </p>
              <p className="font-[var(--font-v2-body)] text-base leading-[1.7] text-white/65 md:text-lg">
                Every story we publish, and every vote you cast, helps us decide which of these
                experiences to turn into something real — first as a piece of writing, then,
                slowly, as a small group trip. Locals get paid first, paid fairly. That is the
                whole moat. <span className="text-[var(--v2-saffron)] not-italic v2-mono text-xs uppercase tracking-[0.28em]"> — The editors</span>
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-16 grid gap-px border v2-rule bg-white/[0.03] sm:grid-cols-3"
            >
              {[
                ['Group size', '3 – 12', 'most are 6 or fewer'],
                ['Local share', '70 – 85 %', 'paid before the trip runs'],
                ['Provinces', '11', 'across the whole island'],
              ].map(([label, big, small]) => (
                <div key={label} className="bg-[var(--v2-ink)] p-6 md:p-8">
                  <p className="v2-mono text-[10px] uppercase tracking-[0.28em] text-white/45">{label}</p>
                  <p className="v2-display mt-2 text-5xl font-light text-[var(--v2-paper)] md:text-6xl">{big}</p>
                  <p className="mt-1 v2-mono text-[10px] uppercase tracking-[0.24em] text-[var(--v2-saffron)]">{small}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
