import { useState, useEffect } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';

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
  const [active, setActive] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scrollspy: highlight the nav link for the section in view
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        });
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );
    links.forEach((l) => {
      const el = document.getElementById(l.href.slice(1));
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);

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
          <ul className="hidden md:flex items-center gap-8 text-sm text-gray-300 font-medium">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href}
                   aria-current={active === l.href ? 'true' : undefined}
                   className={`relative py-2 transition-colors duration-200 group ${
                     active === l.href ? 'text-white' : 'hover:text-white'
                   }`}>
                  {l.label}
                  <span className={`absolute bottom-0 left-0 h-0.5 bg-accent transition-all duration-300 ${
                    active === l.href ? 'w-full' : 'w-0 group-hover:w-full'
                  }`} />
                </a>
              </li>
            ))}
          </ul>
          <a href="#contact"
             className="shimmer-btn hidden md:inline-flex px-5 py-2 rounded-lg border border-accent border-opacity-30 bg-accent bg-opacity-5 text-accent hover:bg-accent hover:text-ink hover:border-opacity-100 font-semibold text-xs tracking-wider uppercase transition-all duration-300">
            Let&apos;s Talk
          </a>
          <button className="md:hidden text-2xl text-gray-200 hover:text-accent transition-colors" onClick={() => setOpen(!open)} aria-label="Toggle menu" aria-expanded={open} aria-controls="mobile-menu">
            {open ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </nav>
      {open && (
        <ul className="md:hidden px-6 pb-6 pt-2 space-y-4 text-gray-200 bg-ink border-b border-white border-opacity-5" id="mobile-menu">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} onClick={() => setOpen(false)} className="block py-1 hover:text-accent font-medium text-lg">{l.label}</a>
            </li>
          ))}
          <li>
            <a href="#contact" onClick={() => setOpen(false)}
               className="inline-block w-full text-center py-2.5 rounded bg-accent text-ink font-semibold hover:opacity-90 transition-opacity">
              Let&apos;s Talk
            </a>
          </li>
        </ul>
      )}
    </header>
  );
}
