import { useEffect, useRef } from 'react';

/**
 * A hook that sets CSS variables `--tilt-x` and `--tilt-y` based on 
 * the mouse pointer offset from the element's center.
 * This creates a tactile, 3D card tilt effect.
 */
export function useTilt() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const handleMouseMove = (e) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left; // x coordinate inside element
      const y = e.clientY - rect.top;  // y coordinate inside element
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      // Calculate rotation angles (max 8 degrees tilt)
      const rotateX = -((y - centerY) / centerY) * 8;
      const rotateY = ((x - centerX) / centerX) * 8;

      el.style.setProperty('--tilt-x', `${rotateX}deg`);
      el.style.setProperty('--tilt-y', `${rotateY}deg`);
    };

    const handleMouseLeave = () => {
      // Smoothly return back to flat
      el.style.setProperty('--tilt-x', '0deg');
      el.style.setProperty('--tilt-y', '0deg');
    };

    el.addEventListener('mousemove', handleMouseMove);
    el.addEventListener('mouseleave', handleMouseLeave);
    
    return () => {
      el.removeEventListener('mousemove', handleMouseMove);
      el.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return ref;
}
