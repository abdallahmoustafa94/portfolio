import { useReveal } from '../hooks/useReveal';
import ScrambleText from './ScrambleText';

export default function Section({ id, num, title, children }) {
  const ref = useReveal();
  return (
    <section id={id} className="py-24 relative overflow-hidden">
      <div ref={ref} className="max-w-content mx-auto px-6 relative z-10">
        <div className="flex items-center gap-4 mb-14">
          {num && (
            <span 
              className="text-accent font-mono text-xs tracking-wider border border-accent border-opacity-20 px-2.5 py-1 rounded-md shadow-sm"
              style={{ backgroundColor: 'rgba(34, 211, 238, 0.07)' }}
            >
              {num}
            </span>
          )}
          <h2 className="text-3xl md:text-4xl font-display font-extrabold tracking-tight text-white whitespace-nowrap min-w-[200px]">
            <ScrambleText text={title} />
          </h2>
          <span className="h-px flex-1 bg-gradient-to-r from-white to-transparent opacity-5" />
        </div>
        {children}
      </div>
    </section>
  );
}
