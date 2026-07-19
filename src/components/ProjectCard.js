import { HiExternalLink } from 'react-icons/hi';
import SpotlightCard from './SpotlightCard';

function BrowserChrome({ url }) {
  const host = url.replace(/^https?:\/\//, '').replace(/\/.*$/, '');
  return (
    <div className="flex items-center gap-2 px-4 py-3 border-b border-white border-opacity-5" style={{ backgroundColor: 'rgba(255, 255, 255, 0.03)' }}>
      <span className="w-2.5 h-2.5 rounded-full bg-red-400 bg-opacity-50" />
      <span className="w-2.5 h-2.5 rounded-full bg-yellow-400 bg-opacity-50" />
      <span className="w-2.5 h-2.5 rounded-full bg-green-400 bg-opacity-50" />
      <span className="ml-3 text-gray-500 font-mono truncate tracking-wide" style={{ fontSize: '11px' }}>{host}</span>
    </div>
  );
}

export default function ProjectCard({ project, featured = false }) {
  return (
    <SpotlightCard as="a" href={project.url} target="_blank" rel="noopener noreferrer"
        className={`group block glass-panel rounded-2xl overflow-hidden hover:border-accent hover:border-opacity-35 transform hover:-translate-y-1.5 transition-all duration-400 hover:shadow-2xl hover:shadow-cyan-950/10
                  ${featured ? 'md:grid md:grid-cols-2' : ''}`}>
      <div className="overflow-hidden relative">
        <BrowserChrome url={project.url} />
        <img src={project.image} alt={`${project.name} screenshot`} width="1440" height="900" loading="lazy"
             className={`w-full h-auto group-hover:scale-[1.03] transition-transform duration-700 ease-out
                        ${featured ? 'md:h-full md:object-cover md:object-top' : ''}`} />
      </div>
      <div className={featured ? 'p-8 md:p-10 flex flex-col justify-center' : 'p-6'}>
        {featured && (
          <p className="text-accent font-bold uppercase mb-3" style={{ fontSize: '11px', letterSpacing: '0.2em' }}>Featured Case Study</p>
        )}
        <h4 className={`text-white font-display font-bold flex items-center gap-2 tracking-tight group-hover:text-accent transition-colors duration-300 ${featured ? 'text-2xl md:text-3xl' : 'text-lg md:text-xl'}`}>
          {project.name}
          <HiExternalLink className="text-gray-500 group-hover:text-accent transition-colors flex-shrink-0 text-lg" />
        </h4>
        <p className={`mt-3 text-gray-400 leading-relaxed font-normal ${featured ? 'text-base mt-4' : 'text-sm'}`}>
          {project.description}
        </p>
        <ul className={`flex flex-wrap gap-2 ${featured ? 'mt-6' : 'mt-5'}`}>
          {project.tech.map((t) => (
            <li key={t} 
                className="font-semibold tracking-wide text-accent bg-accent bg-opacity-5 border border-accent border-opacity-20 rounded-full px-3 py-1"
                style={{ fontSize: '10px' }}
            >
              {t}
            </li>
          ))}
        </ul>
      </div>
    </SpotlightCard>
  );
}
