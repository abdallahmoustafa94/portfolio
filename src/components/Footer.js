export default function Footer() {
  return (
    <footer className="border-t border-white border-opacity-5 py-12 bg-ink">
      <div className="max-w-content mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center md:items-start gap-2">
          <a href="#top" className="font-display font-extrabold text-lg tracking-wider text-white flex items-center gap-1">
            <span>AM</span>
            <span className="w-1.5 h-1.5 rounded-full bg-accent pulse-dot" />
          </a>
          <p className="text-xs text-gray-500 max-w-xs text-center md:text-left">
            Senior Front-End Developer crafting high-performance, accessible, and beautiful web solutions.
          </p>
        </div>
        <div className="flex items-center gap-6 text-xs text-gray-400 font-semibold">
          <a href="#about" className="hover:text-accent transition-colors">About</a>
          <a href="#experience" className="hover:text-accent transition-colors">Experience</a>
          <a href="#projects" className="hover:text-accent transition-colors">Projects</a>
          <a href="#skills" className="hover:text-accent transition-colors">Skills</a>
          <a href="#contact" className="hover:text-accent transition-colors">Contact</a>
        </div>
      </div>
      <div className="max-w-content mx-auto px-6 border-t border-white border-opacity-5 mt-8 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-600">
        <p>© {new Date().getFullYear()} Abdallah Moustafa. All rights reserved.</p>
        <p>Built with React &amp; Tailwind CSS</p>
      </div>
    </footer>
  );
}
