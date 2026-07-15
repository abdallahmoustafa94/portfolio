import Section from './Section';
import ProjectCard from './ProjectCard';
import { projects } from '../data/projects';

function Grid({ heading, items }) {
  return (
    <div className="mb-12">
      <h3 className="text-2xl font-bold text-white mb-6">{heading}</h3>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((p) => <ProjectCard key={p.slug} project={p} />)}
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <Section id="projects" title="Projects">
      <Grid heading="Apps & Platforms" items={projects.filter((p) => p.group === 'app')} />
      <Grid heading="Websites" items={projects.filter((p) => p.group === 'site')} />
    </Section>
  );
}
