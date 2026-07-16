import { useState } from 'react';
import Section from './Section';
import ProjectCard from './ProjectCard';
import { projects } from '../data/projects';
import { 
  HiExternalLink, 
  HiChevronDown, 
  HiChevronRight, 
  HiX, 
  HiFolder, 
  HiFolderOpen, 
  HiDocumentText 
} from 'react-icons/hi';

const projectHighlights = {
  alef: {
    role: "Front-End Developer",
    challenge: "Rendering many real-time IoT device streams simultaneously without visual UI lag.",
    impact: "Built live dashboards with WebSocket/MQTT data streaming, interactive charts, and device-status visualizations that stay smooth under heavy load."
  },
  'snc-ecs': {
    role: "Senior Front-End Developer",
    challenge: "Delivering a cohesive, secure e-services platform for a government ministry.",
    impact: "Implemented multilingual AR/EN RTL support and strict WCAG accessibility rules across the platform."
  },
  wateen: {
    role: "Senior Front-End Developer",
    challenge: "Building complex B2B purchasing workflows with dynamic pricing and tax variations.",
    impact: "Designed an intuitive multi-step checkout console with resilient error handling and loading states."
  },
  whispr: {
    role: "Senior Front-End Developer",
    challenge: "Unifying cross-platform messaging APIs into a single shared inbox experience.",
    impact: "Built real-time messaging with optimistic UI updates so conversations feel instant."
  },
  anatomi: {
    role: "Front-End Developer",
    challenge: "Visualizing complex benchmarking comparisons without sacrificing load speed.",
    impact: "Used lazy loading and dynamic SVG rendering to keep first paint fast on data-heavy pages."
  },
  clix: {
    role: "Senior Front-End Developer",
    challenge: "Aligning invoice creation flows with Saudi Arabia's ZATCA e-invoicing compliance regulations.",
    impact: "Engineered automated validation schemas that catch invalid invoices before submission."
  },
  alrajhi: {
    role: "Front-End Developer",
    challenge: "Ensuring performance and WCAG compliance for a bank serving millions of daily visitors.",
    impact: "Created accessible modal and navigation components, improving screen reader flow across RTL pages."
  },
  sathiyasam: {
    role: "Front-End Developer",
    challenge: "Constructing a clear, low-friction course registration funnel.",
    impact: "Developed direct booking features that streamlined enrollment from first visit to sign-up."
  },
  adamlanesmith: {
    role: "Front-End Developer",
    challenge: "Building an interactive attachment-style quiz with instant visual grading.",
    impact: "Structured a client-side state machine that scores and presents results instantly."
  },
  naftalimoses: {
    role: "Front-End Developer",
    challenge: "Developing a highly visual, fast personal coaching portal.",
    impact: "Optimized image bundles and layout shifts for top Lighthouse performance scores."
  }
};

function RenderCodePane({ project }) {
  return (
    <pre className="font-mono text-[11px] leading-relaxed text-gray-400 select-none overflow-x-auto p-4 max-h-full">
      <code>
        <span className="text-gray-500">{"// Source: src/projects/"}{project.slug}{".tsx"}</span>{"\n"}
        <span className="text-purple-400">import</span> {"{"} <span className="text-accent">{project.tech.slice(0, 3).join(', ')}</span> {"}"} <span className="text-purple-400">from</span> <span className="text-green-300">&apos;design-system&apos;</span>;{"\n\n"}
        <span className="text-gray-500">{"/* Senior Front-End Architecture */"}</span>{"\n"}
        <span className="text-purple-400">const</span> <span className="text-yellow-300">ProjectDetails</span> = {"{"}{"\n"}
        {"  "}name: <span className="text-green-300">&quot;{project.name}&quot;</span>,{"\n"}
        {"  "}platform: <span className="text-green-300">&quot;{project.group === 'app' ? 'Web Application' : 'Responsive Website'}&quot;</span>,{"\n"}
        {"  "}metrics: <span className="text-green-300">&quot;Core Web Vitals Optimized&quot;</span>,{"\n"}
        {"  "}stack: [{"\n"}
        {project.tech.map((t, idx) => (
          <span key={t}>
            {"    "}<span className="text-green-300">&quot;{t}&quot;</span>
            {idx < project.tech.length - 1 ? ',' : ''}{"\n"}
          </span>
        ))}
        {"  "}]{"\n"}
        {"};"}{"\n\n"}
        <span className="text-purple-400">export default</span> <span className="text-yellow-300">ProjectDetails</span>;
      </code>
    </pre>
  );
}

function RenderDescriptionPane({ project }) {
  const highlights = projectHighlights[project.slug] || {
    role: "Senior Front-End Developer",
    challenge: "Building high-performance user interfaces for modern web platforms.",
    impact: "Delivered scalable codebase architectures and optimized bundle parameters."
  };

  return (
    <div className="p-5 text-gray-300 font-sans space-y-5 h-full overflow-y-auto select-none">
      <div>
        <span className="text-[10px] font-bold uppercase tracking-wider text-accent border border-accent border-opacity-25 px-2.5 py-1 rounded shadow-sm" style={{ backgroundColor: 'rgba(34, 211, 238, 0.07)' }}>
          {highlights.role}
        </span>
      </div>

      <div className="space-y-4 pt-1">
        <div>
          <h5 className="text-white font-semibold text-[11px] uppercase tracking-wider text-gray-500 font-mono">🎯 The Challenge</h5>
          <p className="text-xs mt-1.5 text-gray-300 leading-relaxed font-normal">{highlights.challenge}</p>
        </div>

        <div>
          <h5 className="text-white font-semibold text-[11px] uppercase tracking-wider text-gray-500 font-mono">⚡ My Impact</h5>
          <p className="text-xs mt-1.5 text-gray-300 leading-relaxed font-normal">{highlights.impact}</p>
        </div>

        <div>
          <h5 className="text-white font-semibold text-[11px] uppercase tracking-wider text-gray-500 font-mono">🛠️ Core Stack</h5>
          <ul className="flex flex-wrap gap-2 mt-2.5">
            {project.tech.map((t) => (
              <li key={t} className="text-[10px] font-semibold text-gray-400 border border-white border-opacity-5 rounded-full px-2.5 py-1" style={{ backgroundColor: 'rgba(255, 255, 255, 0.03)' }}>
                {t}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  // Mobile Category Filter State
  const [activeTab, setActiveTab] = useState('all');

  // IDE Workspace States
  const [selectedSlug, setSelectedSlug] = useState('alef');
  const [openTabs, setOpenTabs] = useState(['alef']);
  const [appsExpanded, setAppsExpanded] = useState(true);
  const [sitesExpanded, setSitesExpanded] = useState(true);
  const [viewMode, setViewMode] = useState('doc'); // 'doc' (Markdown) or 'code' (TSX)

  const activeProject = projects.find(p => p.slug === selectedSlug) || projects[0];

  const handleOpenFile = (slug) => {
    setSelectedSlug(slug);
    if (!openTabs.includes(slug)) {
      setOpenTabs([...openTabs, slug]);
    }
  };

  const handleCloseTab = (slug, e) => {
    e.stopPropagation();
    if (openTabs.length === 1) return; // Keep at least one tab open
    
    const newTabs = openTabs.filter(t => t !== slug);
    setOpenTabs(newTabs);

    if (selectedSlug === slug) {
      setSelectedSlug(newTabs[newTabs.length - 1]);
    }
  };

  const appsList = projects.filter(p => p.group === 'app');
  const sitesList = projects.filter(p => p.group === 'site');

  const filteredProjects = projects.filter((p) => {
    if (activeTab === 'all') return true;
    return p.group === activeTab;
  });

  const flagship = filteredProjects[0];
  const restProjects = filteredProjects.slice(1);

  return (
    <Section id="projects" num="03" title="Things I've built">
      
      {/* ========================================================================= */}
      {/* DESKTOP/TABLET: Interactive IDE Project Console                           */}
      {/* ========================================================================= */}
      <div className="hidden md:grid grid-cols-12 glass-panel border border-white border-opacity-10 rounded-2xl overflow-hidden shadow-2xl w-full" style={{ height: '580px' }}>
        
        {/* Sidebar File Tree */}
        <div className="col-span-3 bg-black bg-opacity-35 border-r border-white border-opacity-5 flex flex-col h-full select-none">
          <div className="p-4 border-b border-white border-opacity-5 flex items-center justify-between">
            <span className="font-bold tracking-widest text-gray-500 uppercase font-mono" style={{ fontSize: '10px' }}>Workspace Explorer</span>
          </div>
          
          <div className="p-3 flex-1 overflow-y-auto font-mono text-gray-400 space-y-1" style={{ fontSize: '12px' }}>
            <div className="font-semibold text-gray-500 mb-1 flex items-center gap-1">
              <HiChevronDown className="text-gray-600" />
              <span>PROJECTS</span>
            </div>
            
            {/* Apps & Platforms Folder */}
            <div className="pl-2">
              <button 
                onClick={() => setAppsExpanded(!appsExpanded)}
                className="flex items-center gap-1.5 py-1 text-gray-300 hover:text-white w-full text-left"
              >
                {appsExpanded ? <HiChevronDown className="text-gray-500" /> : <HiChevronRight className="text-gray-500" />}
                {appsExpanded ? <HiFolderOpen className="text-accent text-sm" /> : <HiFolder className="text-accent text-sm" />}
                <span className="font-medium">apps</span>
              </button>
              
              {appsExpanded && (
                <div className="pl-4 border-l border-white border-opacity-5 ml-2.5 space-y-0.5">
                  {appsList.map(p => (
                    <button
                      key={p.slug}
                      onClick={() => handleOpenFile(p.slug)}
                      className={`flex items-center gap-1.5 py-1 w-full text-left transition-colors duration-150 ${
                        selectedSlug === p.slug ? 'text-accent font-semibold' : 'hover:text-gray-200'
                      }`}
                    >
                      <HiDocumentText className={selectedSlug === p.slug ? 'text-accent' : 'text-gray-500'} />
                      <span>{p.slug}{viewMode === 'doc' ? '.md' : '.tsx'}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Websites Folder */}
            <div className="pl-2 pt-1">
              <button 
                onClick={() => setSitesExpanded(!sitesExpanded)}
                className="flex items-center gap-1.5 py-1 text-gray-300 hover:text-white w-full text-left"
              >
                {sitesExpanded ? <HiChevronDown className="text-gray-500" /> : <HiChevronRight className="text-gray-500" />}
                {sitesExpanded ? <HiFolderOpen className="text-accent text-sm" /> : <HiFolder className="text-accent text-sm" />}
                <span className="font-medium">websites</span>
              </button>
              
              {sitesExpanded && (
                <div className="pl-4 border-l border-white border-opacity-5 ml-2.5 space-y-0.5">
                  {sitesList.map(p => (
                    <button
                      key={p.slug}
                      onClick={() => handleOpenFile(p.slug)}
                      className={`flex items-center gap-1.5 py-1 w-full text-left transition-colors duration-150 ${
                        selectedSlug === p.slug ? 'text-accent font-semibold' : 'hover:text-gray-200'
                      }`}
                    >
                      <HiDocumentText className={selectedSlug === p.slug ? 'text-accent' : 'text-gray-500'} />
                      <span>{p.slug}{viewMode === 'doc' ? '.md' : '.tsx'}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Workspace Code & Live Split Stage */}
        <div className="col-span-9 flex flex-col h-full bg-ink bg-opacity-20 overflow-hidden">
          {/* Editor Tabs Bar */}
          <div className="flex bg-black bg-opacity-20 border-b border-white border-opacity-5 overflow-x-auto select-none">
            {openTabs.map(tabSlug => {
              const tabProj = projects.find(p => p.slug === tabSlug);
              if (!tabProj) return null;
              const isActive = selectedSlug === tabSlug;
              return (
                <button
                  key={tabSlug}
                  onClick={() => setSelectedSlug(tabSlug)}
                  className={`flex items-center gap-2 px-4 py-2.5 border-r border-white border-opacity-5 font-mono transition-colors duration-150 ${
                    isActive 
                      ? 'bg-ink bg-opacity-40 text-accent border-t-2 border-t-accent font-medium' 
                      : 'text-gray-500 hover:bg-white hover:bg-opacity-5 hover:text-gray-300'
                  }`}
                  style={{ fontSize: '11px' }}
                >
                  <HiDocumentText className={isActive ? 'text-accent' : 'text-gray-600'} />
                  <span>{tabSlug}{viewMode === 'doc' ? '.md' : '.tsx'}</span>
                  <span 
                    onClick={(e) => handleCloseTab(tabSlug, e)}
                    className="p-0.5 rounded hover:bg-white hover:bg-opacity-10 text-gray-500 hover:text-white"
                  >
                    <HiX style={{ fontSize: '10px' }} />
                  </span>
                </button>
              );
            })}
          </div>

          {/* Double Pane Body Split */}
          <div className="flex-1 grid grid-cols-12 overflow-hidden" style={{ height: 'calc(100% - 37px)' }}>
            
            {/* Left Pane (Code / Markdown View Selector) */}
            <div className="col-span-5 border-r border-white border-opacity-5 flex flex-col h-full overflow-hidden">
              {/* Internal Tab Header Panel */}
              <div className="flex items-center justify-between px-4 py-2.5 border-b border-white border-opacity-5 select-none" style={{ backgroundColor: 'rgba(0, 0, 0, 0.15)' }}>
                <span className="font-mono text-gray-500 tracking-wider" style={{ fontSize: '10px' }}>
                  {viewMode === 'doc' ? `${activeProject.slug}.md (Preview)` : `${activeProject.slug}.tsx (TypeScript)`}
                </span>
                
                {/* Visual View Switch Toggle */}
                <div className="inline-flex p-0.5 rounded-lg border border-white border-opacity-5 bg-white bg-opacity-5">
                  <button
                    onClick={() => setViewMode('doc')}
                    className={`px-2.5 py-0.5 rounded-md text-[9px] font-mono font-bold transition-all duration-200 ${
                      viewMode === 'doc' ? 'bg-accent text-ink shadow-sm' : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    Doc
                  </button>
                  <button
                    onClick={() => setViewMode('code')}
                    className={`px-2.5 py-0.5 rounded-md text-[9px] font-mono font-bold transition-all duration-200 ${
                      viewMode === 'code' ? 'bg-accent text-ink shadow-sm' : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    Code
                  </button>
                </div>
              </div>

              {/* View Window Content */}
              <div className="flex-1 overflow-y-auto" style={{ backgroundColor: 'rgba(0, 0, 0, 0.08)' }}>
                <div key={`${activeProject.slug}-${viewMode}`} className="fade-swap h-full">
                  {viewMode === 'doc' ? (
                    <RenderDescriptionPane project={activeProject} />
                  ) : (
                    <RenderCodePane project={activeProject} />
                  )}
                </div>
              </div>
            </div>

            {/* Right Pane (Live Visual Review Window) */}
            <div className="col-span-7 p-6 flex flex-col justify-between h-full overflow-y-auto" style={{ backgroundColor: 'rgba(255, 255, 255, 0.01)' }}>
              <div key={activeProject.slug} className="fade-swap">
                {/* Mock browser address bar */}
                <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-black bg-opacity-35 border border-white border-opacity-5 mb-5 select-none">
                  <span className="w-2 h-2 rounded-full bg-red-400 bg-opacity-40" />
                  <span className="w-2 h-2 rounded-full bg-yellow-400 bg-opacity-40" />
                  <span className="w-2 h-2 rounded-full bg-green-400 bg-opacity-40" />
                  <span className="ml-3 text-gray-500 font-mono truncate tracking-wide flex-1" style={{ fontSize: '10px' }}>{activeProject.url}</span>
                </div>

                <div className="relative rounded-xl overflow-hidden border border-white border-opacity-5 h-44 shadow-lg group">
                  <img 
                    src={activeProject.image} 
                    alt={activeProject.name}
                    className="w-full h-full object-cover object-top group-hover:scale-102 transition-transform duration-500" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent opacity-60" />
                </div>

                <h4 className="text-2xl font-display font-extrabold text-white tracking-tight mt-5">
                  {activeProject.name}
                </h4>

                <p className="mt-2.5 text-gray-400 text-sm leading-relaxed font-normal">
                  {activeProject.description}
                </p>
              </div>

              <div className="pt-6">
                <a 
                  href={activeProject.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="shimmer-btn w-full py-3 rounded-xl bg-accent text-ink font-bold tracking-wide hover:shadow-lg hover:shadow-cyan-500/25 transition duration-300 flex items-center justify-center gap-2"
                >
                  <span>Launch Application</span>
                  <HiExternalLink className="text-lg" />
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* ========================================================================= */}
      {/* MOBILE ONLY: Classic Tab Selector and Glass Card Feed                     */}
      {/* ========================================================================= */}
      <div className="md:hidden space-y-6">
        <div className="flex justify-center mb-8">
          <div className="inline-flex p-1 rounded-2xl border border-white border-opacity-5 bg-white bg-opacity-5 backdrop-filter backdrop-blur-lg">
            {[
              { id: 'all', label: 'All Work' },
              { id: 'app', label: 'Apps' },
              { id: 'site', label: 'Sites' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-accent text-ink shadow-lg'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div key={activeTab} className="fade-swap space-y-6">
          {flagship && (
            <div className="mb-6">
              <ProjectCard project={flagship} featured />
            </div>
          )}

          {restProjects.length > 0 && (
            <div className="grid gap-6">
              {restProjects.map((p) => (
                <ProjectCard key={p.slug} project={p} />
              ))}
            </div>
          )}
        </div>
      </div>

    </Section>
  );
}
