import Section from './Section';
import ProjectCard from './ProjectCard';
import { projects } from '../data/projects';

function Grid({ heading, items }) {
  if (!items.length) return null;
  return (
    <div className="mb-14">
      <h3 className="text-lg font-semibold text-gray-300 mb-6 uppercase tracking-wider">{heading}</h3>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((p) => <ProjectCard key={p.slug} project={p} />)}
      </div>
    </div>
  );
}

export default function Projects() {
  const apps = projects.filter((p) => p.group === 'app');
  const sites = projects.filter((p) => p.group === 'site');
  const [flagship, ...restApps] = apps;
  return (
    <Section id="projects" num="02" title="Things I've built">
      <div className="mb-10">
        <ProjectCard project={flagship} featured />
      </div>
      <Grid heading="Apps & Platforms" items={restApps} />
      <Grid heading="Websites" items={sites} />
    </Section>
  );
}
