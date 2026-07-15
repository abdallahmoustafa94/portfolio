import Section from './Section';
import { skillGroups } from '../data/skills';

export default function Skills() {
  return (
    <Section id="skills" num="03" title="Skills & tools">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillGroups.map((g) => (
          <div key={g.title} className="bg-panel rounded-xl p-5 border border-white border-opacity-5">
            <h3 className="text-white font-semibold mb-3">{g.title}</h3>
            <ul className="flex flex-wrap gap-2">
              {g.items.map((s) => (
                <li key={s} className="text-xs text-gray-300 bg-white bg-opacity-5 rounded-full px-3 py-1">{s}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
