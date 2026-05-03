'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';

export function MagneticChromeBtn({
  children,
  className = '',
  onClick,
  type = 'button',
  pull = 10,
}: {
  children: React.ReactNode;
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  type?: 'button' | 'submit';
  pull?: number;
}) {
  const ref = useRef<HTMLButtonElement>(null);
  const x = useSpring(0, { stiffness: 220, damping: 18 });
  const y = useSpring(0, { stiffness: 220, damping: 18 });
  const onMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const r = ref.current!.getBoundingClientRect();
    x.set(((e.clientX - (r.left + r.width / 2)) / (r.width / 2)) * pull);
    y.set(((e.clientY - (r.top + r.height / 2)) / (r.height / 2)) * pull);
  };
  return (
    <motion.button
      ref={ref}
      type={type}
      onClick={onClick}
      onMouseMove={onMove}
      onMouseLeave={() => { x.set(0); y.set(0); }}
      style={{ x, y }}
      className={className}
    >
      {children}
    </motion.button>
  );
}

export function GlitchText({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <span className={`v5-glitch inline-block ${className}`} data-text={typeof children === 'string' ? children : ''}>
      {children}
    </span>
  );
}

export function Counter5({ to, duration = 1.6, className }: { to: number; duration?: number; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let raf = 0;
    const start = performance.now();
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / (duration * 1000));
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(Math.round(to * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to, duration]);
  return <span ref={ref} className={className} style={{ fontVariantNumeric: 'tabular-nums' }}>{val.toLocaleString()}</span>;
}

export function Reveal5({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function ParallaxFollow({
  children,
  className = '',
  strength = 18,
}: { children: React.ReactNode; className?: string; strength?: number }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 60, damping: 20 });
  const sy = useSpring(y, { stiffness: 60, damping: 20 });
  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      x.set(((e.clientX - cx) / cx) * strength);
      y.set(((e.clientY - cy) / cy) * strength);
    };
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, [strength, x, y]);
  return <motion.div style={{ x: sx, y: sy }} className={className}>{children}</motion.div>;
}
