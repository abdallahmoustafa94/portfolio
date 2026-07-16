import { useEffect, useRef, useState } from 'react';
import { HiChevronDown } from 'react-icons/hi';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import cv from '../assets/my-cv.pdf';

function PerformanceRing({ value, label, delay = 0 }) {
  const radius = 24;
  const stroke = 3;
  const normalizedRadius = radius - stroke * 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const [shown, setShown] = useState(0);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setShown(value);
      return undefined;
    }
    const t = setTimeout(() => setShown(value), 700 + delay);
    return () => clearTimeout(t);
  }, [value, delay]);

  const strokeDashoffset = circumference - (shown / 100) * circumference;

  return (
    <div className="flex flex-col items-center gap-1.5">
      <div className="relative flex items-center justify-center">
        <svg height={radius * 2} width={radius * 2} className="transform -rotate-90">
          <circle
            stroke="rgba(255, 255, 255, 0.04)"
            fill="transparent"
            strokeWidth={stroke}
            r={normalizedRadius}
            cx={radius}
            cy={radius}
          />
          <circle
            stroke="#22d3ee"
            fill="transparent"
            strokeWidth={stroke}
            strokeDasharray={circumference + ' ' + circumference}
            style={{ strokeDashoffset }}
            strokeLinecap="round"
            r={normalizedRadius}
            cx={radius}
            cy={radius}
            className="transition-all duration-1000 ease-out"
          />
        </svg>
        <span className="absolute text-[10px] font-bold text-white font-mono">{value}</span>
      </div>
      <span className="text-[9px] font-bold tracking-wider text-gray-500 uppercase">{label}</span>
    </div>
  );
}

export default function Hero() {
  const tiltRef = useRef(null);

  const handleTilt = (e) => {
    const el = tiltRef.current;
    if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = `perspective(900px) rotateX(${(-y * 5).toFixed(2)}deg) rotateY(${(x * 6).toFixed(2)}deg)`;
  };

  const resetTilt = () => {
    if (tiltRef.current) tiltRef.current.style.transform = '';
  };

  return (
    <div id="top" className="dot-grid aurora min-h-screen flex items-center relative overflow-hidden">
      {/* Background Animated Ambient Lights */}
      <div className="glow-orb glow-orb-1 w-72 h-72 md:w-96 md:h-96 top-1/4 left-5 md:left-24" />
      <div className="glow-orb glow-orb-2 w-80 h-80 bottom-10 right-5 md:right-32" style={{ width: '500px', height: '500px' }} />

      <div className="max-w-content mx-auto px-6 pt-24 md:pt-16 w-full relative z-10">
        <div className="grid md:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* Left Column: Heading Copy */}
          <div className="md:col-span-7 flex flex-col items-start">
            <span className="hero-enter hero-d-1 inline-flex items-center gap-2 text-xs font-semibold text-gray-200 border border-white border-opacity-5 bg-white bg-opacity-5 backdrop-filter backdrop-blur-md rounded-full px-4 py-2 mb-8 shadow-sm hover:border-accent hover:border-opacity-20 transition duration-300">
              <span className="w-2.5 h-2.5 rounded-full bg-accent pulse-dot" />
              Available for senior front-end roles
            </span>
            
            <p className="hero-enter hero-d-2 font-display font-bold text-xs text-accent uppercase mb-3" style={{ letterSpacing: '0.25em' }}>
              React.js · Next.js · TypeScript
            </p>
            
            <h1 className="hero-enter hero-d-3 text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight font-display" style={{ lineHeight: '1.05' }}>
              <span className="text-gradient">Abdallah Moustafa</span>
              <span className="text-accent">.</span>
            </h1>
            
            <h2 className="hero-enter hero-d-4 text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-gray-500 mt-4 leading-tight font-display">
              I build fast, polished web apps.
            </h2>
            
            <p className="hero-enter hero-d-5 mt-8 max-w-xl text-base text-gray-400 leading-relaxed">
              Senior Front-End Developer — 6+ years shipping high-performance products with
              <span className="text-gray-200 font-medium"> React</span>,
              <span className="text-gray-200 font-medium"> Next.js</span> &amp;
              <span className="text-gray-200 font-medium"> TypeScript</span> for enterprise, government, and IoT.
            </p>
            
            <div className="hero-enter hero-d-6 mt-12 flex flex-wrap items-center gap-5">
              <a href="#projects"
                 className="shimmer-btn px-8 py-4 rounded-xl bg-accent text-ink font-bold tracking-wide hover:shadow-lg hover:shadow-cyan-500/25 transform hover:-translate-y-0.5 transition duration-300">
                View my work
              </a>
              <a href={cv} download="Abdallah-Moustafa-CV.pdf"
                 className="px-8 py-4 rounded-xl border border-white border-opacity-10 bg-white bg-opacity-5 hover:bg-opacity-10 text-gray-200 font-bold hover:border-accent hover:text-accent hover:border-opacity-30 transition-all duration-300">
                Download CV
              </a>
              
              <span className="hidden sm:block w-px h-8 bg-white bg-opacity-10 mx-2" />
              
              <div className="flex items-center gap-4 text-xl text-gray-400">
                <a href="https://www.linkedin.com/in/abdallah-moustafa-4ba357178/" target="_blank" rel="noopener noreferrer"
                   aria-label="LinkedIn" 
                   className="w-12 h-12 rounded-xl flex items-center justify-center border border-white border-opacity-5 bg-white bg-opacity-5 backdrop-filter backdrop-blur hover:bg-accent hover:bg-opacity-10 hover:text-accent hover:border-accent hover:border-opacity-25 transition-all duration-300">
                  <FaLinkedin />
                </a>
                <a href="https://github.com/abdallahmoustafa94" target="_blank" rel="noopener noreferrer"
                   aria-label="GitHub" 
                   className="w-12 h-12 rounded-xl flex items-center justify-center border border-white border-opacity-5 bg-white bg-opacity-5 backdrop-filter backdrop-blur hover:bg-accent hover:bg-opacity-10 hover:text-accent hover:border-accent hover:border-opacity-25 transition-all duration-300">
                  <FaGithub />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Premium Dev Console Widget */}
          <div className="hero-enter-right hero-d-5 hidden md:block md:col-span-5 relative group"
               onMouseMove={handleTilt} onMouseLeave={resetTilt}>
            {/* Glowing neon background aura for the console */}
            <div className="absolute inset-0 bg-gradient-to-tr from-accent via-indigo-500 to-pink-500 rounded-3xl opacity-10 blur-2xl group-hover:opacity-20 transition-all duration-500" />

            <div ref={tiltRef} className="tilt-card relative glass-panel rounded-2xl border border-white border-opacity-10 p-6 shadow-2xl overflow-hidden">
              {/* Terminal Window Header */}
              <div className="flex items-center gap-1.5 border-b border-white border-opacity-5 pb-4 mb-5">
                <span className="w-2.5 h-2.5 rounded-full bg-red-400 bg-opacity-50" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-400 bg-opacity-50" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-400 bg-opacity-50" />
                <span className="ml-2.5 font-mono text-gray-500 tracking-wider" style={{ fontSize: '10px' }}>developer-profile.json</span>
              </div>

              {/* Mock code JSON content */}
              <div className="font-mono text-gray-300 space-y-1.5 leading-relaxed" style={{ fontSize: '11px' }}>
                <p><span className="text-pink-400">&quot;role&quot;</span>: <span className="text-accent">&quot;Senior Front-End Developer&quot;</span>,</p>
                <p><span className="text-pink-400">&quot;experience&quot;</span>: <span className="text-accent">&quot;6+ years&quot;</span>,</p>
                <p><span className="text-pink-400">&quot;coreFocus&quot;</span>: [<span className="text-indigo-300">&quot;Next.js&quot;</span>, <span className="text-indigo-300">&quot;TypeScript&quot;</span>, <span className="text-indigo-300">&quot;Core Web Vitals&quot;</span>],</p>
                <p><span className="text-pink-400">&quot;architecture&quot;</span>: <span className="text-accent">&quot;Clean Code &amp; Scalability&quot;</span>,</p>
                <p><span className="text-pink-400">&quot;performanceTarget&quot;</span>: <span className="text-green-400">100</span></p>
              </div>

              {/* Horizontal rule separator */}
              <div className="my-6 border-t border-white border-opacity-5" />

              {/* Lighthouse Score Circular Meters */}
              <div>
                <p className="font-bold tracking-widest text-gray-400 uppercase mb-4 font-mono" style={{ fontSize: '10px' }}>Performance Audit</p>
                <div className="grid grid-cols-4 gap-3 border border-white border-opacity-5 rounded-xl p-4" style={{ backgroundColor: 'rgba(255, 255, 255, 0.02)' }}>
                  <PerformanceRing value={100} label="Perf" delay={0} />
                  <PerformanceRing value={100} label="Access" delay={150} />
                  <PerformanceRing value={100} label="Best" delay={300} />
                  <PerformanceRing value={100} label="SEO" delay={450} />
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
      
      <a href="#about" aria-label="Scroll to about section"
         className="scroll-hint absolute bottom-8 left-1/2 -ml-4 text-3xl text-gray-600 hover:text-accent transition-colors duration-250">
        <HiChevronDown />
      </a>
    </div>
  );
}
