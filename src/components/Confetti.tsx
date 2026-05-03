'use client';

import { motion, AnimatePresence } from 'framer-motion';

const colors = ['#E5613D', '#D9A441', '#0E5F5A', '#A8462C', '#F5EFE3'];

export function Confetti({ show }: { show: boolean }) {
  return (
    <AnimatePresence>
      {show && (
        <div className="pointer-events-none absolute inset-0 z-20 overflow-visible">
          {Array.from({ length: 22 }).map((_, i) => {
            const angle = (i / 22) * Math.PI * 2;
            const radius = 80 + Math.random() * 70;
            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;
            const color = colors[i % colors.length];
            const rot = Math.random() * 540 - 270;
            const size = 6 + Math.random() * 6;
            return (
              <motion.span
                key={i}
                initial={{ opacity: 1, x: 0, y: 0, rotate: 0, scale: 1 }}
                animate={{ opacity: 0, x, y, rotate: rot, scale: 0.6 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.9 + Math.random() * 0.4, ease: 'easeOut' }}
                style={{
                  position: 'absolute',
                  left: '50%',
                  top: '50%',
                  width: size,
                  height: size * (Math.random() > 0.4 ? 1 : 2),
                  background: color,
                  borderRadius: Math.random() > 0.5 ? 2 : 1,
                }}
              />
            );
          })}
        </div>
      )}
    </AnimatePresence>
  );
}
