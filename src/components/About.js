import Section from './Section';
import mypic from '../assets/mypic.png';

const stats = [
  { value: '6+', label: 'Years of experience' },
  { value: '10+', label: 'Products shipped' },
  { value: '5', label: 'Industries served' },
];

export default function About() {
  return (
    <Section id="about" num="01" title="About me">
      <div className="grid md:grid-cols-3 gap-10 items-start">
        <div className="md:col-span-2 space-y-4 text-gray-300 leading-relaxed">
          <p>
            I&apos;m a Senior Front-End Developer with 6+ years of experience turning complex
            requirements into fast, accessible, maintainable web applications. I work primarily
            with React, Next.js, and TypeScript, and care deeply about performance — Core Web
            Vitals, bundle discipline, and interfaces that feel instant.
          </p>
          <p>
            I&apos;ve shipped products across enterprise, government, banking, and IoT domains:
            real-time monitoring dashboards, multilingual RTL platforms, and design systems used
            by multiple product teams. I lead code reviews, mentor engineers, and set front-end
            standards where I work.
          </p>
          <dl className="grid grid-cols-3 gap-4 pt-6">
            {stats.map((s) => (
              <div key={s.label} className="bg-panel rounded-xl border border-white border-opacity-5 p-5 text-center">
                <dt className="sr-only">{s.label}</dt>
                <dd className="text-3xl font-extrabold text-accent">{s.value}</dd>
                <dd className="mt-1 text-xs text-gray-500">{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>
        <img src={mypic} alt="Abdallah Moustafa" width="280" height="280" loading="lazy"
             className="rounded-xl border border-white border-opacity-10 justify-self-center" />
      </div>
    </Section>
  );
}
