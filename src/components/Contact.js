import { useState } from 'react';
import Section from './Section';
import { HiMail, HiCheck } from 'react-icons/hi';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import SpotlightCard from './SpotlightCard';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // 'idle', 'success'

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    const subject = encodeURIComponent(`Portfolio inquiry from ${formData.name}`);
    const body = encodeURIComponent(`${formData.message}\n\n— ${formData.name} (${formData.email})`);
    window.location.href = `mailto:abdallahmoustafa1194@gmail.com?subject=${subject}&body=${body}`;
    setStatus('success');
  };

  return (
    <Section id="contact" num="05" title="Get in touch">
      <div className="grid lg:grid-cols-5 gap-12 items-start font-sans">
        {/* Left Column: Direct Info Cards */}
        <div className="lg:col-span-2 space-y-6">
          <div className="reveal-item reveal-fade-up" style={{ transitionDelay: '50ms' }}>
            <h3 className="text-3xl sm:text-4xl font-display font-black text-white leading-tight">
              Let&apos;s work together.
            </h3>
            <p className="mt-4 text-gray-400 leading-relaxed max-w-md">
              Have a project in mind or just want to connect? My inbox is always open. Let&apos;s build something exceptional.
            </p>
          </div>

          <div className="space-y-4 pt-4">
            <SpotlightCard 
              as="a" 
              href="mailto:abdallahmoustafa1194@gmail.com"
              className="reveal-item reveal-fade-up group flex items-center gap-4 p-4 rounded-xl border border-white border-opacity-5 bg-white bg-opacity-5 hover:border-accent hover:border-opacity-25 hover:bg-opacity-10 transition-all duration-300"
              style={{ transitionDelay: '100ms' }}
            >
              <span className="w-12 h-12 rounded-lg flex items-center justify-center bg-accent bg-opacity-10 text-accent text-xl group-hover:bg-accent group-hover:text-ink transition-all duration-300">
                <HiMail />
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">Email me directly</p>
                <p className="text-sm font-medium text-white mt-0.5 truncate">abdallahmoustafa1194@gmail.com</p>
              </div>
            </SpotlightCard>

            <SpotlightCard 
              as="a" 
              href="https://www.linkedin.com/in/abdallah-moustafa-4ba357178/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="reveal-item reveal-fade-up group flex items-center gap-4 p-4 rounded-xl border border-white border-opacity-5 bg-white bg-opacity-5 hover:border-accent hover:border-opacity-25 hover:bg-opacity-10 transition-all duration-300"
              style={{ transitionDelay: '180ms' }}
            >
              <span className="w-12 h-12 rounded-lg flex items-center justify-center bg-accent bg-opacity-10 text-accent text-xl group-hover:bg-accent group-hover:text-ink transition-all duration-300">
                <FaLinkedin />
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">LinkedIn Profile</p>
                <p className="text-sm font-medium text-white mt-0.5">abdallah-moustafa-4ba357178</p>
              </div>
            </SpotlightCard>

            <SpotlightCard 
              as="a" 
              href="https://github.com/abdallahmoustafa94" 
              target="_blank" 
              rel="noopener noreferrer"
              className="reveal-item reveal-fade-up group flex items-center gap-4 p-4 rounded-xl border border-white border-opacity-5 bg-white bg-opacity-5 hover:border-accent hover:border-opacity-25 hover:bg-opacity-10 transition-all duration-300"
              style={{ transitionDelay: '260ms' }}
            >
              <span className="w-12 h-12 rounded-lg flex items-center justify-center bg-accent bg-opacity-10 text-accent text-xl group-hover:bg-accent group-hover:text-ink transition-all duration-300">
                <FaGithub />
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">GitHub Profile</p>
                <p className="text-sm font-medium text-white mt-0.5">github.com/abdallahmoustafa94</p>
              </div>
            </SpotlightCard>
          </div>
        </div>

        {/* Right Column: Premium Contact Form */}
        <SpotlightCard 
          className="reveal-item reveal-fade-up lg:col-span-3 glass-panel rounded-2xl p-6 sm:p-8 border border-white border-opacity-5"
          style={{ transitionDelay: '200ms' }}
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="flex flex-col space-y-2">
                <label htmlFor="name" className="text-xs font-semibold uppercase tracking-wider text-gray-400">Your Name</label>
                <input
                  id="name"
                  type="text"
                  required
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="premium-input text-sm"
                />
              </div>
              <div className="flex flex-col space-y-2">
                <label htmlFor="email" className="text-xs font-semibold uppercase tracking-wider text-gray-400">Email Address</label>
                <input
                  id="email"
                  type="email"
                  required
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="premium-input text-sm"
                />
              </div>
            </div>

            <div className="flex flex-col space-y-2">
              <label htmlFor="message" className="text-xs font-semibold uppercase tracking-wider text-gray-400">Message</label>
              <textarea
                id="message"
                required
                rows="5"
                placeholder="Hi Abdallah, I'd love to chat about an upcoming project..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="premium-input text-sm resize-none"
              />
            </div>

            {status === 'success' && (
              <div className="flex items-center gap-3 p-4 rounded-xl bg-green-500 bg-opacity-10 border border-green-500 border-opacity-25 text-green-400 font-semibold text-sm transition-all duration-300">
                <span className="w-6 h-6 rounded-full bg-green-400 bg-opacity-20 flex items-center justify-center text-lg"><HiCheck /></span>
                <span>Your email app should open with the message ready — just hit send.</span>
              </div>
            )}
            <button
              type="submit"
              className="shimmer-btn w-full py-4 rounded-xl bg-accent text-ink font-bold tracking-wide hover:shadow-lg transition duration-300 flex items-center justify-center gap-2.5"
            >
              <span>Send Message</span>
            </button>
          </form>
        </SpotlightCard>
      </div>
    </Section>
  );
}
