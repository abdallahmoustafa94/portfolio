import Section from './Section';
import Reveal from './Reveal';
import { skillGroups } from '../data/skills';

export default function Skills() {
  return (
    <Section id="skills" num="04" title="Skills & tools">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillGroups.map((g, i) => (
          <Reveal key={g.title} delay={(i % 3) * 110} className="glass-panel glass-panel-hover rounded-2xl p-6 border border-white border-opacity-5 flex flex-col">
            <h3 className="text-white font-display font-bold text-base mb-4 tracking-tight border-b border-white border-opacity-5 pb-2.5">
              {g.title}
            </h3>
            <ul className="flex flex-wrap gap-2.5 mt-auto">
              {g.items.map((s) => (
                <li key={s} 
                    className="text-xs font-semibold text-gray-300 bg-white bg-opacity-5 border border-white border-opacity-5 rounded-full px-3 py-1.5 hover:bg-accent hover:bg-opacity-10 hover:text-accent hover:border-accent hover:border-opacity-35 transition-all duration-200 cursor-default">
                  {s}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
