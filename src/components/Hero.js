import cv from '../assets/my-cv.pdf';

export default function Hero() {
  return (
    <div id="top" className="dot-grid min-h-screen flex items-center">
      <div className="max-w-content mx-auto px-6 pt-16">
        <p className="text-accent font-medium mb-4">Hi, my name is</p>
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white">
          Abdallah Moustafa.
        </h1>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-400 mt-2">
          Senior Front-End Developer.
        </h2>
        <p className="mt-6 max-w-xl text-lg text-gray-400">
          6+ years building high-performance web apps with React, Next.js &amp; TypeScript
          for enterprise, government, and IoT products.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <a href="#projects"
             className="px-6 py-3 rounded bg-accent text-ink font-semibold hover:opacity-90 transition-opacity">
            View my work
          </a>
          <a href={cv} download="Abdallah-Moustafa-CV.pdf"
             className="px-6 py-3 rounded border border-accent text-accent font-semibold hover:bg-accent hover:bg-opacity-10 transition-colors">
            Download CV
          </a>
        </div>
      </div>
    </div>
  );
}
