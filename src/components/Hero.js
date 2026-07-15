import { HiChevronDown } from 'react-icons/hi';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import cv from '../assets/my-cv.pdf';

export default function Hero() {
  return (
    <div id="top" className="dot-grid aurora min-h-screen flex items-center relative">
      <div className="max-w-content mx-auto px-6 pt-16 w-full">
        <span className="inline-flex items-center gap-2 text-xs font-medium text-gray-300 border border-white border-opacity-10 bg-white bg-opacity-5 rounded-full px-4 py-1.5 mb-8">
          <span className="w-2 h-2 rounded-full bg-accent pulse-dot" />
          Available for senior front-end roles
        </span>
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-gradient leading-tight">
          Abdallah Moustafa.
        </h1>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-500 mt-2">
          I build fast, polished web apps.
        </h2>
        <p className="mt-6 max-w-xl text-lg text-gray-400 leading-relaxed">
          Senior Front-End Developer — 6+ years shipping high-performance products with
          <span className="text-gray-200"> React</span>,
          <span className="text-gray-200"> Next.js</span> &amp;
          <span className="text-gray-200"> TypeScript</span> for enterprise, government, and IoT.
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a href="#projects"
             className="px-7 py-3.5 rounded-lg bg-accent text-ink font-semibold hover:opacity-90 transform hover:-translate-y-0.5 transition duration-200">
            View my work
          </a>
          <a href={cv} download="Abdallah-Moustafa-CV.pdf"
             className="px-7 py-3.5 rounded-lg border border-white border-opacity-15 text-gray-200 font-semibold hover:border-accent hover:text-accent transition-colors duration-200">
            Download CV
          </a>
          <span className="hidden sm:block w-px h-8 bg-white bg-opacity-10 mx-2" />
          <div className="flex items-center gap-5 text-2xl text-gray-500">
            <a href="https://www.linkedin.com/in/abdallah-moustafa-4ba357178/" target="_blank" rel="noopener noreferrer"
               aria-label="LinkedIn" className="hover:text-accent transition-colors">
              <FaLinkedin />
            </a>
            <a href="https://github.com/abdallahmoustafa94" target="_blank" rel="noopener noreferrer"
               aria-label="GitHub" className="hover:text-accent transition-colors">
              <FaGithub />
            </a>
          </div>
        </div>
      </div>
      <a href="#about" aria-label="Scroll to about section"
         className="scroll-hint absolute bottom-8 left-1/2 -ml-4 text-3xl text-gray-600 hover:text-accent transition-colors">
        <HiChevronDown />
      </a>
    </div>
  );
}
