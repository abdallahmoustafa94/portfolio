import { useReveal } from '../hooks/useReveal';

export default function Section({ id, num, title, children }) {
  const ref = useReveal();
  return (
    <section id={id} className="py-24">
      <div ref={ref} className="max-w-content mx-auto px-6">
        <div className="flex items-center gap-4 mb-12">
          {num && <span className="text-accent font-mono text-sm">{num}</span>}
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white whitespace-nowrap">
            {title}
          </h2>
          <span className="h-px flex-1 bg-gradient-to-r from-white to-transparent opacity-10" />
        </div>
        {children}
      </div>
    </section>
  );
}
