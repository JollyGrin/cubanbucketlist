'use client';

import { motion } from 'framer-motion';

const values = [
  { n: '01', title: 'CUBA REAL · GENTE REAL', b: 'Cada viaje empieza en una cocina, un taller, o un barco. Sin guaguas turísticas.', bg: 'bg-[var(--v7-coral)] text-[var(--v7-cream)]', r: -1.5 },
  { n: '02', title: 'LOCALES PRIMERO', b: 'División justa y transparente — pagado antes de que arranque el viaje.', bg: 'bg-[var(--v7-yellow)] text-[var(--v7-ink)]', r: 1 },
  { n: '03', title: 'HISTORIAS QUE VALEN', b: 'Vuelves con un nombre en tus contactos y una historia que tus amigos te piden contar dos veces.', bg: 'bg-[var(--v7-blue)] text-[var(--v7-cream)]', r: -0.6 },
];

export function WhyUs7() {
  return (
    <section className="relative overflow-hidden v7-wall-tex py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }}
          className="flex flex-col items-start gap-3 mb-10"
        >
          <span className="v7-sign bg-[var(--v7-coral)] text-[var(--v7-cream)] inline-flex items-center gap-2 px-3 py-1.5 v7-body text-xs uppercase font-bold tracking-wider"
            style={{ ['--tilt' as string]: '-1.5deg' }}>
            ✺ AVISO № 07 — Por Qué
          </span>
          <h2 className="leading-[0.85] text-5xl sm:text-7xl md:text-[110px]">
            <span className="block v7-block text-[var(--v7-ink)] v7-ghost">TRES COSAS</span>
            <span className="block v7-brush text-[var(--v7-coral)] -my-1 text-[60px] sm:text-7xl md:text-[140px]">no negociamos.</span>
          </h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {values.map((v, i) => (
            <motion.div
              key={v.n}
              initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`v7-sign ${v.bg} relative p-7`}
              style={{ ['--tilt' as string]: `${v.r}deg` }}
            >
              <span className="v7-brush text-3xl opacity-80">№ {v.n}</span>
              <h3 className="mt-2 v7-block text-2xl leading-tight md:text-3xl">{v.title}</h3>
              <p className="mt-3 v7-body text-base font-medium leading-relaxed">{v.b}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
