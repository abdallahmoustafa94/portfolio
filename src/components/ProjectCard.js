import { HiExternalLink } from 'react-icons/hi';

export default function ProjectCard({ project }) {
  return (
    <a href={project.url} target="_blank" rel="noopener noreferrer"
       className="group block bg-panel rounded-xl overflow-hidden border border-white border-opacity-5
                  hover:border-accent hover:border-opacity-40 transform hover:-translate-y-1 transition duration-200">
      <div className="overflow-hidden">
        <img src={project.image} alt={`${project.name} screenshot`} width="1440" height="900" loading="lazy"
             className="w-full h-44 object-cover object-top group-hover:scale-105 transition-transform duration-300" />
      </div>
      <div className="p-5">
        <h4 className="text-white font-semibold flex items-center gap-2">
          {project.name}
          <HiExternalLink className="text-gray-500 group-hover:text-accent transition-colors" />
        </h4>
        <p className="mt-2 text-sm text-gray-400 leading-relaxed">{project.description}</p>
        <ul className="mt-4 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <li key={t} className="text-xs text-accent bg-accent bg-opacity-10 rounded-full px-3 py-1">{t}</li>
          ))}
        </ul>
      </div>
    </a>
  );
}
