import { useState, useEffect } from 'react';

const links = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = links.map(l => document.querySelector(l.href)).filter(Boolean);
      const probe = window.scrollY + window.innerHeight * 0.35;
      let current = '';
      sections.forEach(s => {
        if (s.offsetTop <= probe) current = s.id;
      });
      // At the very bottom of the page, always highlight the last section
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2) {
        current = sections.length ? sections[sections.length - 1].id : current;
      }
      setActiveSection(current);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock scroll when mobile menu is active
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-ink bg-opacity-75 backdrop-filter backdrop-blur-lg border-b border-white border-opacity-5 py-3 shadow-lg shadow-black/20' 
        : 'bg-transparent py-5 border-b border-transparent'
    }`}>
      <nav className="max-w-content mx-auto px-6 flex items-center justify-between">
        <a href="#top" className="font-display font-extrabold text-xl tracking-wider text-white flex items-center gap-1.5 group">
          <span>AM</span>
          <span className="w-1.5 h-1.5 rounded-full bg-accent pulse-dot" />
        </a>
        <div className="flex items-center gap-8">
          <ul className="hidden md:flex items-center gap-8 text-sm font-medium">
            {links.map((l) => {
              const isActive = activeSection === l.href.substring(1);
              return (
                <li key={l.href}>
                  <a href={l.href} className={`relative py-2 transition-colors duration-200 group ${
                    isActive ? 'text-accent font-semibold' : 'text-gray-300 hover:text-white'
                  }`}>
                    {l.label}
                    <span className={`absolute bottom-0 left-0 h-0.5 bg-accent transition-all duration-300 ${
                      isActive ? 'w-full' : 'w-0 group-hover:w-full'
                    }`} />
                  </a>
                </li>
              );
            })}
          </ul>
          <a href="#contact"
             className="shimmer-btn hidden md:inline-flex px-5 py-2 rounded-lg border border-accent border-opacity-30 bg-accent bg-opacity-5 text-accent hover:bg-accent hover:text-ink hover:border-opacity-100 font-semibold text-xs tracking-wider uppercase transition-all duration-300">
            Let&apos;s Talk
          </a>
          
          {/* Animated Hamburger Button Toggle */}
          <button 
            className="md:hidden relative z-50 w-8 h-8 flex flex-col justify-center items-center focus:outline-none" 
            onClick={() => setOpen(!open)} 
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <div className="relative w-6 h-4 flex flex-col justify-between items-center">
              <span className={`w-full h-0.5 bg-gray-200 rounded transition-all duration-300 absolute ${open ? 'rotate-45 bg-accent' : '-translate-y-1.5'}`} />
              <span className={`w-full h-0.5 bg-gray-200 rounded transition-all duration-300 absolute ${open ? 'opacity-0 scale-0' : ''}`} />
              <span className={`w-full h-0.5 bg-gray-200 rounded transition-all duration-300 absolute ${open ? '-rotate-45 bg-accent' : 'translate-y-1.5'}`} />
            </div>
          </button>
        </div>
      </nav>
      
      {/* Frosted Glass Overlay mobile menu */}
      {open && (
        <div className="md:hidden fixed inset-0 z-40 bg-ink bg-opacity-95 flex flex-col justify-center items-center px-10 animate-menu-in">
          {/* Ambient Glow Orbs */}
          <div className="glow-orb glow-orb-1 w-64 h-64 top-10 left-10" />
          <div className="glow-orb glow-orb-2 w-72 h-72 bottom-10 right-10" />
          
          <ul className="space-y-8 text-center relative z-10 w-full font-display">
            {links.map((l, idx) => {
              const num = String(idx + 1).padStart(2, '0');
              return (
                <li key={l.href} className="overflow-hidden">
                  <a 
                    href={l.href} 
                    onClick={() => setOpen(false)} 
                    className="block font-extrabold text-4xl text-white hover:text-accent transition-colors duration-300 transform animate-hero-fade"
                    style={{ animationDelay: `${idx * 100}ms`, opacity: 0 }}
                  >
                    <span className="text-accent text-lg font-mono font-medium mr-4">{num}</span>
                    {l.label}
                  </a>
                </li>
              );
            })}
            <li className="pt-6 overflow-hidden">
              <a 
                href="#contact" 
                onClick={() => setOpen(false)}
                className="inline-block px-10 py-4 rounded-xl bg-accent text-ink font-bold tracking-wider hover:opacity-90 transition-opacity transform animate-hero-fade"
                style={{ animationDelay: `${links.length * 100}ms`, opacity: 0 }}
              >
                Let&apos;s Talk
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
