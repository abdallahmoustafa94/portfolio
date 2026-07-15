import { useReveal } from '../hooks/useReveal';

export default function Section({ id, title, children }) {
  const ref = useReveal();
  return (
    <section id={id} className="py-20">
      <div ref={ref} className="max-w-content mx-auto px-6">
        <h2 className="text-sm font-semibold uppercase tracking-widest text-accent mb-8">
          {title}
        </h2>
        {children}
      </div>
    </section>
  );
}
