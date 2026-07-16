import Section from './Section';
import mypic from '../assets/mypic.png';

const stats = [
  { value: '6+', label: 'Years experience' },
  { value: '40%', label: 'Faster page loads' },
  { value: '40%', label: 'Fewer production bugs' },
  { value: '25%', label: 'Faster feature delivery' },
];

export default function About() {
  return (
    <Section id="about" num="01" title="About me">
      <div className="grid md:grid-cols-3 gap-12 items-center">
        <div className="md:col-span-2 space-y-5 text-gray-300 leading-relaxed">
          <p className="text-lg">
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
          <dl className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6">
            {stats.map((s) => (
              <div key={s.label} className="glass-panel glass-panel-hover rounded-2xl p-5 text-center border border-white border-opacity-5">
                <dt className="sr-only">{s.label}</dt>
                <dd className="text-3xl md:text-4xl font-extrabold text-accent font-display">{s.value}</dd>
                <dd 
                  className="mt-2 sm:text-xs font-semibold uppercase tracking-wider text-gray-500 leading-snug"
                  style={{ fontSize: '10px' }}
                >
                  {s.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>
        
        <div className="relative group justify-self-center mt-8 md:mt-0">
          <div className="absolute inset-0 bg-gradient-to-tr from-accent to-indigo-500 rounded-3xl opacity-20 blur-xl group-hover:opacity-45 group-hover:scale-105 transition-all duration-500" />
          <div className="relative rounded-3xl overflow-hidden border border-white border-opacity-10 bg-panel p-2 shadow-2xl">
            <img src={mypic} alt="Abdallah Moustafa" width="280" height="280" loading="lazy"
                 className="rounded-2xl grayscale hover:grayscale-0 transform group-hover:scale-102 transition-all duration-500 object-cover w-64 h-64 md:w-72 md:h-72" />
          </div>
        </div>
      </div>

      {/* Core Philosophy Grid Addition */}
      <div className="mt-20 pt-12 border-t border-white border-opacity-5">
        <h4 className="text-xs font-bold tracking-[0.2em] text-accent uppercase mb-8 text-center font-mono">My Development Philosophy</h4>
        <div className="grid sm:grid-cols-3 gap-6">
          <div className="glass-panel rounded-2xl p-6 border border-white border-opacity-5 hover:border-accent hover:border-opacity-25 transition-all duration-300">
            <span className="text-2xl text-accent">⚡</span>
            <h5 className="text-white font-display font-bold text-lg mt-4 mb-2">Performance-First</h5>
            <p className="text-gray-400 text-sm leading-relaxed">Focusing on minimal bundle footprints, server-side streaming rendering, and excellent Web Vitals to keep loads instant.</p>
          </div>
          <div className="glass-panel rounded-2xl p-6 border border-white border-opacity-5 hover:border-accent hover:border-opacity-25 transition-all duration-300">
            <span className="text-2xl text-accent">🛡️</span>
            <h5 className="text-white font-display font-bold text-lg mt-4 mb-2">Clean Architecture</h5>
            <p className="text-gray-400 text-sm leading-relaxed">Authoring structured, type-safe TypeScript codebases with modular hooks and dry components that scale seamlessly.</p>
          </div>
          <div className="glass-panel rounded-2xl p-6 border border-white border-opacity-5 hover:border-accent hover:border-opacity-25 transition-all duration-300">
            <span className="text-2xl text-accent">🎨</span>
            <h5 className="text-white font-display font-bold text-lg mt-4 mb-2">Design & Usability</h5>
            <p className="text-gray-400 text-sm leading-relaxed">Translating Figma designs into pixel-perfect, accessible interactive interfaces with fluid movement and typography.</p>
          </div>
        </div>
      </div>
    </Section>
  );
}
