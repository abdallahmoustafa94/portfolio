import Section from './Section';
import { HiMail } from 'react-icons/hi';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

export default function Contact() {
  return (
    <Section id="contact" num="04" title="Get in touch">
      <div className="text-center max-w-xl mx-auto">
        <h3 className="text-3xl md:text-4xl font-bold text-white">Let&apos;s work together.</h3>
        <p className="mt-4 text-gray-400">
          I&apos;m open to senior front-end opportunities. The fastest way to reach me is email —
          I usually reply within a day.
        </p>
        <a href="mailto:abdallahmoustafa1194@gmail.com"
           className="inline-block mt-8 px-8 py-3 rounded bg-accent text-ink font-semibold hover:opacity-90 transition-opacity">
          Say hello
        </a>
        <div className="mt-8 flex justify-center gap-6 text-2xl text-gray-400">
          <a href="mailto:abdallahmoustafa1194@gmail.com" aria-label="Email" className="hover:text-accent transition-colors"><HiMail /></a>
          <a href="https://www.linkedin.com/in/abdallah-moustafa-4ba357178/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-accent transition-colors"><FaLinkedin /></a>
          <a href="https://github.com/abdallahmoustafa94" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-accent transition-colors"><FaGithub /></a>
        </div>
      </div>
    </Section>
  );
}
