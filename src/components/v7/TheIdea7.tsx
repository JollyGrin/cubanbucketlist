'use client';

import { motion } from 'framer-motion';

export function TheIdea7() {
  return (
    <section id="about" className="relative overflow-hidden border-y-4 border-[var(--v7-ink)] bg-[var(--v7-cream)] py-20 md:py-28">
      <div aria-hidden className="absolute inset-x-0 top-0 h-3 v7-stripes opacity-90" />
      <div aria-hidden className="absolute inset-x-0 bottom-0 h-3 v7-stripes opacity-90" />

      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }}
          className="v7-sign inline-flex items-center gap-2 bg-[var(--v7-blue)] text-[var(--v7-cream)] px-3 py-1.5 v7-body text-xs uppercase font-bold tracking-wider"
          style={{ ['--tilt' as string]: '-1deg' }}
        >
          ✺ AVISO № 02 — La Premisa
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }}
          className="mt-6 leading-[0.85] text-5xl sm:text-7xl md:text-[140px]"
        >
          <span className="block v7-block text-[var(--v7-ink)] v7-ghost">NO SOMOS</span>
          <span className="block v7-brush -my-1 text-[var(--v7-coral)] text-[60px] sm:text-7xl md:text-[170px]">una agencia</span>
          <span className="block v7-block text-[var(--v7-blue)] v7-ghost">DE TURISMO.</span>
        </motion.h2>

        <div className="mt-12 grid gap-5 md:grid-cols-3 md:gap-6">
          {[
            { n: '01', title: 'EMPEZAMOS COMO BOLETÍN.', b: 'Cartas quincenales con joyas escondidas y los locales que hacen de Cuba un secreto.', bg: 'bg-[var(--v7-coral)] text-[var(--v7-cream)]', r: -1.5 },
            { n: '02', title: 'TÚ DECIDES QUÉ HACEMOS.', b: 'Cada voto que emites ayuda a decidir cuál experiencia se convierte primero en viaje real.', bg: 'bg-[var(--v7-yellow)] text-[var(--v7-ink)]', r: 1 },
            { n: '03', title: 'LOS LOCALES PRIMERO.', b: 'División transparente y justa. Antes que el margen, los fotógrafos, chefs, y guías.', bg: 'bg-[var(--v7-blue)] text-[var(--v7-cream)]', r: -0.6 },
          ].map((c, i) => (
            <motion.div
              key={c.n}
              initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`v7-sign ${c.bg} p-6`}
              style={{ ['--tilt' as string]: `${c.r}deg` }}
            >
              <span className="v7-brush text-3xl opacity-80">№ {c.n}</span>
              <h3 className="mt-2 v7-block text-2xl leading-tight md:text-3xl">{c.title}</h3>
              <p className="mt-3 v7-body text-base leading-relaxed font-medium">{c.b}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
