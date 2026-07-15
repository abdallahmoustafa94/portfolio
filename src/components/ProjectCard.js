import { HiExternalLink } from 'react-icons/hi';

function BrowserChrome({ url }) {
  const host = url.replace(/^https?:\/\//, '').replace(/\/.*$/, '');
  return (
    <div className="flex items-center gap-2 px-4 py-2.5 bg-white bg-opacity-5 border-b border-white border-opacity-5">
      <span className="w-2.5 h-2.5 rounded-full bg-red-400 bg-opacity-60" />
      <span className="w-2.5 h-2.5 rounded-full bg-yellow-400 bg-opacity-60" />
      <span className="w-2.5 h-2.5 rounded-full bg-green-400 bg-opacity-60" />
      <span className="ml-3 text-xs text-gray-500 font-mono truncate">{host}</span>
    </div>
  );
}

export default function ProjectCard({ project, featured = false }) {
  return (
    <a href={project.url} target="_blank" rel="noopener noreferrer"
       className={`card-glow group block bg-panel rounded-xl overflow-hidden border border-white border-opacity-5
                  hover:border-accent hover:border-opacity-40 transform hover:-translate-y-1 transition duration-200
                  ${featured ? 'md:grid md:grid-cols-2' : ''}`}>
      <div className="overflow-hidden">
        <BrowserChrome url={project.url} />
        <img src={project.image} alt={`${project.name} screenshot`} width="1440" height="900" loading="lazy"
             className={`w-full object-cover object-top group-hover:scale-105 transition-transform duration-500
                        ${featured ? 'h-56 md:h-full' : 'h-44'}`} />
      </div>
      <div className={featured ? 'p-8 flex flex-col justify-center' : 'p-5'}>
        {featured && (
          <p className="text-accent text-xs font-semibold uppercase tracking-widest mb-3">Featured</p>
        )}
        <h4 className={`text-white font-semibold flex items-center gap-2 ${featured ? 'text-2xl' : ''}`}>
          {project.name}
          <HiExternalLink className="text-gray-500 group-hover:text-accent transition-colors flex-shrink-0" />
        </h4>
        <p className={`mt-2 text-gray-400 leading-relaxed ${featured ? 'text-base mt-4' : 'text-sm'}`}>
          {project.description}
        </p>
        <ul className={`flex flex-wrap gap-2 ${featured ? 'mt-6' : 'mt-4'}`}>
          {project.tech.map((t) => (
            <li key={t} className="text-xs text-accent bg-accent bg-opacity-10 rounded-full px-3 py-1">{t}</li>
          ))}
        </ul>
      </div>
    </a>
  );
}
