import { useEffect, useRef } from 'react';

export function useReveal(delay = 0) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.classList.add('reveal');
    if (delay) el.style.transitionDelay = `${delay}ms`;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('reveal-visible');
          io.disconnect();
          // Clear the stagger delay once revealed so it never slows hover transitions
          if (delay) setTimeout(() => { el.style.transitionDelay = ''; }, delay + 900);
        }
      },
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [delay]);
  return ref;
}
