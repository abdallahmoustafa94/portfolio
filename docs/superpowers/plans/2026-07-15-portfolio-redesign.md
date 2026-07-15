# Portfolio Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Modernize the existing CRA portfolio into a dark, typography-led single-page site with 10 project cards, senior-level content, and no dated dependencies.

**Architecture:** Keep CRA + craco + Tailwind (postcss7-compat 2.x). Replace the 4-route layout with one scrolling page assembled in `App.js` from focused section components. Project data lives in one data module; screenshots are static assets captured by a one-off script. Scroll-reveal is a tiny IntersectionObserver hook — no animation libraries.

**Tech Stack:** React 17, craco, Tailwind CSS 2 (compat), react-icons, headless Chrome (asset capture only).

## Global Constraints

- Do NOT migrate off CRA/craco/React 17 (user decision)
- Background `#0a0a0f`, accent `#22d3ee`, font Inter (spec: Visual System)
- No animation libraries; IntersectionObserver + CSS only
- No particles, Semantic UI, skill bars, typed text, carousels
- Project cards show NO company attribution
- Apps & Platforms listed before Websites, in spec order
- External links: `target="_blank" rel="noopener noreferrer"`
- Images: lazy-loaded with explicit `width`/`height`
- Working branch: `redesign-2026`. Commit after every task.
- Repo root: `/Users/abdallahmoustafa/portfolio`

---

### Task 1: Dependency cleanup + theme foundation

**Files:**
- Modify: `package.json`, `tailwind.config.js`, `src/index.css`, `public/index.html`

**Interfaces:**
- Produces: Tailwind tokens `bg-ink` (#0a0a0f), `bg-panel` (#111116), `text-accent`/`bg-accent`/`border-accent` (#22d3ee), font `font-sans` = Inter; CSS classes `.reveal`, `.reveal-visible`, `.dot-grid` used by all later tasks.

- [ ] **Step 1: Remove dead dependencies**

```bash
cd /Users/abdallahmoustafa/portfolio
yarn remove react-particles-js tsparticles react-reveal react-typed moving-letters react-animated-css semantic-ui-css semantic-ui-react @brainhubeu/react-carousel react-multi-carousel swiper react-router-dom
```
Expected: package.json no longer lists any of these. (If `yarn` fails on the old lockfile, run `npm uninstall <same list>` instead.)

- [ ] **Step 2: Replace `tailwind.config.js`**

```js
module.exports = {
  purge: ['./src/**/*.{js,jsx}', './public/index.html'],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        ink: '#0a0a0f',
        panel: '#111116',
        accent: '#22d3ee',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      maxWidth: { content: '72rem' },
    },
  },
  variants: { extend: {} },
  plugins: [],
}
```

- [ ] **Step 3: Replace `src/index.css`**

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

html { scroll-behavior: smooth; }
body { background-color: #0a0a0f; color: #e4e4e7; }

.dot-grid {
  background-image: radial-gradient(rgba(255, 255, 255, 0.06) 1px, transparent 1px);
  background-size: 28px 28px;
}

.reveal {
  opacity: 0;
  transform: translateY(24px);
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}
.reveal-visible { opacity: 1; transform: translateY(0); }

@media (prefers-reduced-motion: reduce) {
  html { scroll-behavior: auto; }
  .reveal { opacity: 1; transform: none; transition: none; }
}
```

- [ ] **Step 4: Update `public/index.html`** — inside `<head>`: set title and description, add Inter, remove any Semantic UI/old font links:

```html
<title>Abdallah Moustafa — Senior Front-End Developer</title>
<meta name="description" content="Senior Front-End Developer with 6+ years of experience building high-performance web apps with React, Next.js & TypeScript." />
<meta name="theme-color" content="#0a0a0f" />
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
```

- [ ] **Step 5: Verify build still compiles** — old pages still import removed packages, so temporarily stub `src/App.js`:

```jsx
function App() {
  return <div className="min-h-screen bg-ink text-accent font-sans p-10">theme ok</div>;
}
export default App;
```

Run: `yarn build`
Expected: `Compiled successfully` (warnings OK). If old page files break the build because of removed imports, delete them now: `git rm src/pages/*.js src/components/Nav.js src/components/Footer.js` (they are all replaced in later tasks).

- [ ] **Step 6: Commit**

```bash
git add -A && git commit -m "chore: remove dated deps, add dark theme foundation"
```

---

### Task 2: Capture project screenshots + copy

**Files:**
- Create: `src/assets/projects/` (10 JPEG/PNG screenshots), `scratch/shoot.sh` (throwaway, not committed if preferred)

**Interfaces:**
- Produces: `src/assets/projects/<slug>.jpg` for slugs: `alef`, `snc-ecs`, `wateen`, `whispr`, `anatomi`, `clix`, `alrajhi`, `sathiyasam`, `adamlanesmith`, `naftalimoses`. Also scraped `<title>`/`<meta name="description">` text per site for Task 3 copy.

- [ ] **Step 1: Alef 360 screenshot** — check `~/Downloads` and `~/Desktop` for a user-supplied dashboard image (user pasted one in chat; they were asked to save it). If found, copy to `src/assets/projects/alef.jpg`. If not, screenshot `https://disrupt-x.io/alef-360-iot-platform/` and crop/keep the platform imagery.

- [ ] **Step 2: Screenshot the other 9 sites with headless Chrome**

```bash
mkdir -p src/assets/projects
CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
shoot() { "$CHROME" --headless --disable-gpu --hide-scrollbars --window-size=1440,900 --screenshot="src/assets/projects/$1.png" "$2"; }
shoot snc-ecs https://snc-ecs.moc.gov.sa/
shoot wateen https://wateen.ai/en
shoot whispr https://trywhispr.com/
shoot anatomi https://goanatomi.ai/
shoot clix https://www.goclix.ai/en/
shoot alrajhi https://www.alrajhibank.com.sa/en
shoot sathiyasam http://sathiyasam.com/
shoot adamlanesmith https://adamlanesmith.com/
shoot naftalimoses https://www.naftalimoses.com/
```
Expected: 9 PNGs ~1440×900. Open each; re-shoot any that captured a cookie wall or blank page (add `--virtual-time-budget=10000` to allow JS rendering). Convert to compressed JPEG ≤200KB each with `sips -s format jpeg -s formatOptions 70`.

- [ ] **Step 3: Scrape copy for descriptions** — for each URL, fetch `<title>` and meta description (e.g. `curl -sL <url> | grep -oiE '<title>[^<]*|name="description" content="[^"]*'`). Save the raw text to `scratch/site-copy.txt` for Task 3.

- [ ] **Step 4: Commit**

```bash
git add src/assets/projects && git commit -m "assets: project screenshots"
```

---

### Task 3: Project + skills data modules

**Files:**
- Create: `src/data/projects.js`, `src/data/skills.js`

**Interfaces:**
- Produces: `projects` — array of `{ slug, name, group: 'app'|'site', url, description, tech: string[], image }` (image = imported asset), apps first. `skillGroups` — array of `{ title, items: string[] }`.

- [ ] **Step 1: Write `src/data/projects.js`** — use the drafts below, but where Task 2's scraped copy describes the product more accurately, refine the description (1–2 lines, plain language, no marketing fluff):

```js
import alef from '../assets/projects/alef.jpg';
import sncEcs from '../assets/projects/snc-ecs.jpg';
import wateen from '../assets/projects/wateen.jpg';
import whispr from '../assets/projects/whispr.jpg';
import anatomi from '../assets/projects/anatomi.jpg';
import clix from '../assets/projects/clix.jpg';
import alrajhi from '../assets/projects/alrajhi.jpg';
import sathiyasam from '../assets/projects/sathiyasam.jpg';
import adamlanesmith from '../assets/projects/adamlanesmith.jpg';
import naftalimoses from '../assets/projects/naftalimoses.jpg';

export const projects = [
  { slug: 'alef', name: 'Alef 360 IoT Platform', group: 'app', url: 'https://disrupt-x.io/alef-360-iot-platform/', image: alef,
    description: 'Enterprise IoT platform for real-time monitoring and control of connected devices — live sensor dashboards, asset profiles, alarms, and reporting.',
    tech: ['React', 'Redux', 'WebSockets', 'Data Visualization'] },
  { slug: 'snc-ecs', name: 'SNC-ECS — Ministry of Commerce', group: 'app', url: 'https://snc-ecs.moc.gov.sa/', image: sncEcs,
    description: 'Government e-services platform for the Saudi Ministry of Commerce.',
    tech: ['React', 'Next.js', 'TypeScript'] },
  { slug: 'wateen', name: 'Wateen', group: 'app', url: 'https://wateen.ai/en', image: wateen,
    description: 'AI-powered enterprise platform.', // refine from scraped copy
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS'] },
  { slug: 'whispr', name: 'Whispr', group: 'app', url: 'https://trywhispr.com/', image: whispr,
    description: 'AI-powered product.', // refine from scraped copy
    tech: ['React', 'TypeScript'] },
  { slug: 'anatomi', name: 'Anatomi', group: 'app', url: 'https://goanatomi.ai/', image: anatomi,
    description: 'AI platform.', // refine from scraped copy
    tech: ['Next.js', 'TypeScript'] },
  { slug: 'clix', name: 'Clix', group: 'app', url: 'https://www.goclix.ai/en/', image: clix,
    description: 'AI platform.', // refine from scraped copy
    tech: ['Next.js', 'TypeScript'] },
  { slug: 'alrajhi', name: 'Al Rajhi Bank', group: 'site', url: 'https://www.alrajhibank.com.sa/en', image: alrajhi,
    description: 'Public website of the world’s largest Islamic bank — multilingual (AR/EN, RTL), accessible, high-traffic.',
    tech: ['React', 'i18n / RTL', 'Accessibility'] },
  { slug: 'sathiyasam', name: 'Sathiyasam', group: 'site', url: 'http://sathiyasam.com/', image: sathiyasam,
    description: 'Marketing website.', // refine from scraped copy
    tech: ['React', 'CSS'] },
  { slug: 'adamlanesmith', name: 'Adam Lane Smith', group: 'site', url: 'https://adamlanesmith.com/', image: adamlanesmith,
    description: 'Personal brand and content site.', // refine from scraped copy
    tech: ['React', 'CSS'] },
  { slug: 'naftalimoses', name: 'Naftali Moses', group: 'site', url: 'https://www.naftalimoses.com/', image: naftalimoses,
    description: 'Personal website.', // refine from scraped copy
    tech: ['React', 'CSS'] },
];
```

**Refinement rule:** every `// refine from scraped copy` comment MUST be resolved using `scratch/site-copy.txt` before commit — the final file contains no comments and no generic one-liners like "AI platform."

- [ ] **Step 2: Write `src/data/skills.js`**

```js
export const skillGroups = [
  { title: 'Languages', items: ['JavaScript (ES6+)', 'TypeScript', 'HTML5', 'CSS3'] },
  { title: 'Frameworks', items: ['React.js', 'Next.js', 'Redux Toolkit', 'RTK Query', 'React Query', 'Zustand'] },
  { title: 'Styling & UI', items: ['Tailwind CSS', 'Sass/SCSS', 'Styled Components', 'Material UI', 'shadcn/ui', 'RTL & i18n'] },
  { title: 'Testing', items: ['Jest', 'React Testing Library', 'Cypress', 'Playwright'] },
  { title: 'Performance & Web', items: ['Core Web Vitals', 'Lighthouse', 'SEO', 'Accessibility (WCAG)', 'PWA'] },
  { title: 'APIs & Data', items: ['REST', 'GraphQL', 'WebSockets', 'OAuth/JWT'] },
  { title: 'Tooling', items: ['Git', 'GitHub Actions (CI/CD)', 'Webpack', 'Vite', 'Storybook', 'Vercel', 'Turborepo'] },
];
```

- [ ] **Step 3: Verify** — Run: `yarn build`. Expected: compiles (data modules unused yet is fine).

- [ ] **Step 4: Commit**

```bash
git add src/data && git commit -m "feat: project and skills data"
```

---

### Task 4: Reveal hook, Nav, Footer

**Files:**
- Create: `src/hooks/useReveal.js`, `src/components/Nav.js`, `src/components/Footer.js`, `src/components/Section.js`

**Interfaces:**
- Consumes: theme tokens from Task 1.
- Produces: `useReveal()` → `ref` to spread on a container (adds `.reveal`, toggles `.reveal-visible` on first intersection); `<Section id title>` wrapper (renders `<section id>` with h2 + reveal); `<Nav />`; `<Footer />`.

- [ ] **Step 1: Write `src/hooks/useReveal.js`**

```js
import { useEffect, useRef } from 'react';

export function useReveal() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.classList.add('reveal');
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('reveal-visible');
          io.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return ref;
}
```

- [ ] **Step 2: Write `src/components/Section.js`**

```jsx
import { useReveal } from '../hooks/useReveal';

export default function Section({ id, title, children }) {
  const ref = useReveal();
  return (
    <section id={id} className="py-20">
      <div ref={ref} className="max-w-content mx-auto px-6">
        <h2 className="text-sm font-semibold uppercase tracking-widest text-accent mb-8">
          {title}
        </h2>
        {children}
      </div>
    </section>
  );
}
```

- [ ] **Step 3: Write `src/components/Nav.js`** (replaces old router nav; anchor links, mobile menu)

```jsx
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
```

- [ ] **Step 4: Write `src/components/Footer.js`**

```jsx
export default function Footer() {
  return (
    <footer className="border-t border-white border-opacity-5 py-8 text-center text-sm text-gray-500">
      © {new Date().getFullYear()} Abdallah Moustafa — Built with React & Tailwind CSS
    </footer>
  );
}
```

- [ ] **Step 5: Verify** — mount `<Nav />` and `<Footer />` in the stub `App.js`, run `yarn start`, confirm sticky nav renders, mobile menu toggles at narrow width. Then `yarn build` → `Compiled successfully`.

- [ ] **Step 6: Commit**

```bash
git add src/hooks src/components && git commit -m "feat: nav, footer, section wrapper, reveal hook"
```

---

### Task 5: Hero + About

**Files:**
- Create: `src/components/Hero.js`, `src/components/About.js`
- Replace: `src/assets/my-cv.pdf` with `/Users/abdallahmoustafa/Abdallah-Moustafa-Senior-Frontend-Developer-CV.pdf`

**Interfaces:**
- Consumes: `Section`, theme tokens.
- Produces: `<Hero />` (full-viewport, id="top"), `<About />` (renders inside `Section id="about"`).

- [ ] **Step 1: Copy the new CV**

```bash
cp /Users/abdallahmoustafa/Abdallah-Moustafa-Senior-Frontend-Developer-CV.pdf src/assets/my-cv.pdf
```

- [ ] **Step 2: Write `src/components/Hero.js`**

```jsx
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
```

- [ ] **Step 3: Write `src/components/About.js`**

```jsx
import Section from './Section';
import mypic from '../assets/mypic.png';

export default function About() {
  return (
    <Section id="about" title="About">
      <div className="grid md:grid-cols-3 gap-10 items-start">
        <div className="md:col-span-2 space-y-4 text-gray-300 leading-relaxed">
          <p>
            I&apos;m a Senior Front-End Developer with 6+ years of experience turning complex
            requirements into fast, accessible, maintainable web applications. I work primarily
            with React, Next.js, and TypeScript, and care deeply about performance — Core Web
            Vitals, bundle discipline, and interfaces that feel instant.
          </p>
          <p>
            I&apos;ve shipped products across enterprise, government, banking, and IoT domains:
            real-time monitoring dashboards, multilingual RTL platforms, and design systems used
            by multiple product teams. I lead code reviews, mentor engineers, and set front-end
            standards where I work.
          </p>
        </div>
        <img src={mypic} alt="Abdallah Moustafa" width="280" height="280" loading="lazy"
             className="rounded-xl border border-white border-opacity-10 justify-self-center" />
      </div>
    </Section>
  );
}
```

- [ ] **Step 4: Verify** — add both to stub `App.js`, `yarn start`: hero fills viewport, CV downloads on click, About text renders. `yarn build` passes.

- [ ] **Step 5: Commit**

```bash
git add -A && git commit -m "feat: hero and about sections with new CV"
```

---

### Task 6: Projects section

**Files:**
- Create: `src/components/ProjectCard.js`, `src/components/Projects.js`

**Interfaces:**
- Consumes: `projects` from `src/data/projects.js`, `Section`.
- Produces: `<Projects />` (renders `Section id="projects"` with Apps & Platforms grid then Websites grid).

- [ ] **Step 1: Write `src/components/ProjectCard.js`**

```jsx
import { HiExternalLink } from 'react-icons/hi';

export default function ProjectCard({ project }) {
  return (
    <a href={project.url} target="_blank" rel="noopener noreferrer"
       className="group block bg-panel rounded-xl overflow-hidden border border-white border-opacity-5
                  hover:border-accent hover:border-opacity-40 transform hover:-translate-y-1 transition duration-200">
      <div className="overflow-hidden">
        <img src={project.image} alt={`${project.name} screenshot`} width="1440" height="900" loading="lazy"
             className="w-full h-44 object-cover object-top group-hover:scale-105 transition-transform duration-300" />
      </div>
      <div className="p-5">
        <h4 className="text-white font-semibold flex items-center gap-2">
          {project.name}
          <HiExternalLink className="text-gray-500 group-hover:text-accent transition-colors" />
        </h4>
        <p className="mt-2 text-sm text-gray-400 leading-relaxed">{project.description}</p>
        <ul className="mt-4 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <li key={t} className="text-xs text-accent bg-accent bg-opacity-10 rounded-full px-3 py-1">{t}</li>
          ))}
        </ul>
      </div>
    </a>
  );
}
```

- [ ] **Step 2: Write `src/components/Projects.js`**

```jsx
import Section from './Section';
import ProjectCard from './ProjectCard';
import { projects } from '../data/projects';

function Grid({ heading, items }) {
  return (
    <div className="mb-12">
      <h3 className="text-2xl font-bold text-white mb-6">{heading}</h3>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((p) => <ProjectCard key={p.slug} project={p} />)}
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <Section id="projects" title="Projects">
      <Grid heading="Apps & Platforms" items={projects.filter((p) => p.group === 'app')} />
      <Grid heading="Websites" items={projects.filter((p) => p.group === 'site')} />
    </Section>
  );
}
```

- [ ] **Step 3: Verify** — add to `App.js`, `yarn start`: 6 app cards then 4 site cards, screenshots visible, hover lift works, links open in new tab. `yarn build` passes.

- [ ] **Step 4: Commit**

```bash
git add src/components && git commit -m "feat: projects section with screenshot cards"
```

---

### Task 7: Skills + Contact

**Files:**
- Create: `src/components/Skills.js`, `src/components/Contact.js`

**Interfaces:**
- Consumes: `skillGroups` from `src/data/skills.js`, `Section`.
- Produces: `<Skills />`, `<Contact />`.

- [ ] **Step 1: Write `src/components/Skills.js`**

```jsx
import Section from './Section';
import { skillGroups } from '../data/skills';

export default function Skills() {
  return (
    <Section id="skills" title="Skills">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillGroups.map((g) => (
          <div key={g.title} className="bg-panel rounded-xl p-5 border border-white border-opacity-5">
            <h3 className="text-white font-semibold mb-3">{g.title}</h3>
            <ul className="flex flex-wrap gap-2">
              {g.items.map((s) => (
                <li key={s} className="text-xs text-gray-300 bg-white bg-opacity-5 rounded-full px-3 py-1">{s}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
```

- [ ] **Step 2: Write `src/components/Contact.js`**

```jsx
import Section from './Section';
import { HiMail } from 'react-icons/hi';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

export default function Contact() {
  return (
    <Section id="contact" title="Contact">
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
```

- [ ] **Step 3: Verify** — `yarn start`: chips render grouped, contact links correct. `yarn build` passes.

- [ ] **Step 4: Commit**

```bash
git add src/components && git commit -m "feat: skills and contact sections"
```

---

### Task 8: Final assembly + cleanup + verification

**Files:**
- Replace: `src/App.js`
- Delete: `src/pages/` (all), `src/App.css`, `src/logo.svg`, `src/assets/fonts/`, old `src/assets/p-1.png`…`p-5.png`, `src/assets/mypic.JPG` (keep `mypic.png`)
- Modify: `public/manifest.json` (name/theme color), `src/index.js` (remove router/App.css imports if present)

**Interfaces:**
- Consumes: every component from Tasks 4–7.

- [ ] **Step 1: Write final `src/App.js`**

```jsx
import Nav from './components/Nav';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="font-sans antialiased">
      <Nav />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
```

- [ ] **Step 2: Clean `src/index.js`** — ensure it only imports `./index.css` and `./App`; remove `BrowserRouter` and `App.css` references. Delete dead files:

```bash
git rm -r --ignore-unmatch src/pages src/App.css src/logo.svg src/assets/fonts src/assets/p-1.png src/assets/p-2.png src/assets/p-3.png src/assets/p-4.png src/assets/p-5.png src/assets/mypic.JPG
```

- [ ] **Step 3: Update `public/manifest.json`** — `"name": "Abdallah Moustafa — Senior Front-End Developer"`, `"short_name": "Abdallah M."`, `"theme_color": "#0a0a0f"`, `"background_color": "#0a0a0f"`.

- [ ] **Step 4: Full verification**

Run: `yarn build`
Expected: `Compiled successfully`, no import warnings for deleted files.

Then `yarn start` and check: (a) hero → contact scroll flow with reveals firing once; (b) responsive at 375px, 768px, 1280px (nav collapses, grids stack); (c) all 10 cards have images and correct links; (d) CV downloads; (e) no console errors.

- [ ] **Step 5: Commit**

```bash
git add -A && git commit -m "feat: assemble single-page portfolio, remove legacy pages"
```

- [ ] **Step 6: User review checkpoint** — show the user the running site (or screenshots) and the drafted project descriptions for correction BEFORE any push. Do not push to origin without explicit user approval.
