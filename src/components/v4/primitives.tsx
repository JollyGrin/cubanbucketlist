'use client';

import { useEffect, useRef, useState } from 'react';
import {
  motion,
  useInView,
  useMotionValue,
  useSpring,
  useTransform,
  type MotionValue,
} from 'framer-motion';

/* ---------- Cursor spotlight ---------- */
export function CursorSpotlight() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      el.style.setProperty('--mx', `${e.clientX - rect.left}px`);
      el.style.setProperty('--my', `${e.clientY - rect.top}px`);
    };
    const parent = el.parentElement;
    parent?.addEventListener('mousemove', onMove);
    return () => parent?.removeEventListener('mousemove', onMove);
  }, []);
  return <div ref={ref} className="v4-spot" aria-hidden />;
}

/* ---------- Magnetic button ---------- */
export function MagneticButton({
  children,
  className = '',
  onClick,
  type = 'button',
  pull = 14,
  ariaLabel,
}: {
  children: React.ReactNode;
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  type?: 'button' | 'submit';
  pull?: number;
  ariaLabel?: string;
}) {
  const ref = useRef<HTMLButtonElement>(null);
  const x = useSpring(0, { stiffness: 220, damping: 18 });
  const y = useSpring(0, { stiffness: 220, damping: 18 });

  const onMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const r = ref.current!.getBoundingClientRect();
    const px = (e.clientX - (r.left + r.width / 2)) / (r.width / 2);
    const py = (e.clientY - (r.top + r.height / 2)) / (r.height / 2);
    x.set(px * pull);
    y.set(py * pull);
  };
  const onLeave = () => { x.set(0); y.set(0); };

  return (
    <motion.button
      ref={ref}
      type={type}
      aria-label={ariaLabel}
      onClick={onClick}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ x, y }}
      className={className}
    >
      {children}
    </motion.button>
  );
}

/* ---------- Tilt card ---------- */
export function TiltCard({ children, className = '', max = 8 }: { children: React.ReactNode; className?: string; max?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rx = useSpring(useTransform(y, [-1, 1], [max, -max]), { stiffness: 140, damping: 14 });
  const ry = useSpring(useTransform(x, [-1, 1], [-max, max]), { stiffness: 140, damping: 14 });

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const r = ref.current!.getBoundingClientRect();
    x.set((e.clientX - (r.left + r.width / 2)) / (r.width / 2));
    y.set((e.clientY - (r.top + r.height / 2)) / (r.height / 2));
  };
  const onLeave = () => { x.set(0); y.set(0); };

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ rotateX: rx, rotateY: ry, transformStyle: 'preserve-3d', perspective: 800 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ---------- Scroll blur reveal ---------- */
export function BlurReveal({
  children,
  delay = 0,
  className = '',
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, filter: 'blur(14px)', y: 18 }}
      whileInView={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ---------- Animated number counter ---------- */
export function Counter({ to, duration = 1.4, format = (n: number) => n.toLocaleString(), className }: { to: number; duration?: number; format?: (n: number) => string; className?: string }) {
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
  return <span ref={ref} className={`v4-tab ${className ?? ''}`}>{format(val)}</span>;
}

/* ---------- Typewriter ---------- */
export function Typewriter({ items, className }: { items: string[]; className?: string }) {
  const [i, setI] = useState(0);
  const [text, setText] = useState('');
  const [phase, setPhase] = useState<'typing' | 'pause' | 'deleting'>('typing');

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    const target = items[i];
    if (phase === 'typing') {
      if (text.length < target.length) {
        timer = setTimeout(() => setText(target.slice(0, text.length + 1)), 32);
      } else {
        timer = setTimeout(() => setPhase('pause'), 1400);
      }
    } else if (phase === 'pause') {
      timer = setTimeout(() => setPhase('deleting'), 600);
    } else {
      if (text.length > 0) {
        timer = setTimeout(() => setText(text.slice(0, -1)), 18);
      } else {
        setI((n) => (n + 1) % items.length);
        setPhase('typing');
      }
    }
    return () => clearTimeout(timer);
  }, [text, phase, i, items]);

  return (
    <span className={className}>
      {text}
      <span className="v4-caret" aria-hidden />
    </span>
  );
}

export function useInViewProgress(target: React.RefObject<HTMLElement>): MotionValue<number> {
  const mv = useMotionValue(0);
  useEffect(() => {
    const el = target.current;
    if (!el) return;
    const onScroll = () => {
      const r = el.getBoundingClientRect();
      const p = 1 - Math.max(0, Math.min(1, r.top / window.innerHeight));
      mv.set(p);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [target, mv]);
  return mv;
}
