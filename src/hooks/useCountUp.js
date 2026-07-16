import { useEffect, useRef, useState } from 'react';

// Animates a stat like '6+' or '40%' from 0 to its number when scrolled into view.
export function useCountUp(value, duration = 1400) {
  const match = String(value).match(/^(\d+)(.*)$/);
  const target = match ? parseInt(match[1], 10) : 0;
  const suffix = match ? match[2] : '';
  const [display, setDisplay] = useState(match ? `0${suffix}` : value);
  const ref = useRef(null);

  useEffect(() => {
    if (!match) return undefined;
    const el = ref.current;
    if (!el) return undefined;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced || !('IntersectionObserver' in window)) {
      setDisplay(`${target}${suffix}`);
      return undefined;
    }
    let raf;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();
        const start = performance.now();
        const tick = (now) => {
          const p = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - p, 3);
          setDisplay(`${Math.round(eased * target)}${suffix}`);
          if (p < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
      },
      { threshold: 0.5 }
    );
    io.observe(el);
    return () => {
      io.disconnect();
      if (raf) cancelAnimationFrame(raf);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [target, suffix, duration]);

  return [ref, display];
}
