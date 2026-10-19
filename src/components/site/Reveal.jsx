import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Reveal({ children, y = 40, delay = 0, duration = 1, className = '', as: Tag = 'div' }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const ctx = gsap.context(() => {
      gsap.from(el, {
        y,
        opacity: 0,
        duration,
        delay,
        ease: 'power3.out',
        scrollTrigger: { trigger: el, start: 'top 88%', once: true }
      });
    });
    return () => ctx.revert();
  }, [y, delay, duration]);

  return <Tag ref={ref} className={className}>{children}</Tag>;
}

export function useStaggerRef(stagger = 0.12, opts = {}) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const ctx = gsap.context(() => {
      const items = el.querySelectorAll('[data-stagger]');
      gsap.from(items, {
        y: 40,
        opacity: 0,
        duration: 0.9,
        stagger,
        ease: 'power3.out',
        scrollTrigger: { trigger: el, start: 'top 80%', once: true },
        ...opts
      });
    }, el);
    return () => ctx.revert();
  }, [stagger]);
  return ref;
}