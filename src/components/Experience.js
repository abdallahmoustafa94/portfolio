import Section from './Section';
import { HiBriefcase, HiLocationMarker } from 'react-icons/hi';
import { experience } from '../data/experience';

export default function Experience() {
  return (
    <Section id="experience" num="02" title="Where I've worked">
      <ol className="relative border-l border-white border-opacity-10 ml-3 md:ml-6 space-y-12">
        {experience.map((job) => (
          <li key={job.company} className="relative pl-8 md:pl-12">
            {/* Timeline node */}
            <span
              className={`absolute rounded-full border-2 flex items-center justify-center ${
                job.current ? 'bg-accent border-accent' : 'bg-ink border-gray-600'
              }`}
              style={{ left: '-9px', top: '6px', width: '17px', height: '17px' }}
            >
              {job.current && <span className="w-full h-full rounded-full bg-accent pulse-dot" />}
            </span>

            <div className="glass-panel glass-panel-hover rounded-2xl p-6 md:p-8 border border-white border-opacity-5">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <h3 className="text-white font-display font-bold text-xl tracking-tight flex items-center gap-2.5">
                    <HiBriefcase className="text-accent text-lg flex-shrink-0" />
                    {job.role}
                  </h3>
                  <p className="mt-1.5 text-gray-300 font-semibold text-sm">
                    {job.company}
                    <span className="text-gray-500 font-normal inline-flex items-center gap-1 ml-3">
                      <HiLocationMarker className="text-xs" />
                      {job.location}
                    </span>
                  </p>
                </div>
                <span className={`font-mono text-xs tracking-wider px-3 py-1.5 rounded-md border ${
                  job.current
                    ? 'text-accent border-accent border-opacity-25'
                    : 'text-gray-400 border-white border-opacity-10'
                }`}
                style={job.current ? { backgroundColor: 'rgba(34, 211, 238, 0.07)' } : { backgroundColor: 'rgba(255, 255, 255, 0.03)' }}>
                  {job.period}
                </span>
              </div>

              <ul className="mt-5 space-y-2.5">
                {job.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-3 text-sm text-gray-400 leading-relaxed">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent bg-opacity-60 flex-shrink-0" />
                    {h}
                  </li>
                ))}
              </ul>

              <ul className="mt-5 flex flex-wrap gap-2">
                {job.tech.map((t) => (
                  <li key={t} className="text-xs font-semibold text-accent bg-accent bg-opacity-10 border border-accent border-opacity-15 rounded-full px-3 py-1">
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
