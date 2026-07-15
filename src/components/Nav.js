import { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';

const links = [
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-ink bg-opacity-80 backdrop-filter backdrop-blur border-b border-white border-opacity-5">
      <nav className="max-w-content mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#top" className="font-bold text-lg tracking-tight text-white">
          AM<span className="text-accent">.</span>
        </a>
        <ul className="hidden md:flex items-center gap-8 text-sm text-gray-300">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="hover:text-accent transition-colors">{l.label}</a>
            </li>
          ))}
        </ul>
        <button className="md:hidden text-2xl text-gray-200" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <HiX /> : <HiMenu />}
        </button>
      </nav>
      {open && (
        <ul className="md:hidden px-6 pb-4 space-y-3 text-gray-200 bg-ink">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} onClick={() => setOpen(false)} className="block py-1">{l.label}</a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
