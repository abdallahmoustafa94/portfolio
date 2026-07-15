# Portfolio Redesign — Design Spec

**Date:** 2026-07-15
**Approach:** Modernize the existing CRA app in place (user decision — no framework migration). React 17 + craco + Tailwind stay; visuals and content are fully replaced.

## Goals

- "Wow" first impression for recruiters screening a senior front-end candidate
- Remove dated patterns: particles background, Semantic UI, skill bars, typed-text effects
- Content updated to match the 2026 CV (senior positioning, 6+ years)
- Showcase 10 real projects with screenshots and descriptions

## Structure

Single-page scroll replaces the 4-route layout. Sticky slim nav with anchor links.

Sections in order:
1. **Hero** — name, "Senior Front-End Developer", one-line positioning ("6+ years building high-performance web apps with React, Next.js & TypeScript"), CTAs: *View my work* (anchor to projects) and *Download CV* (new PDF replaces `src/assets/my-cv.pdf`)
2. **About** — short senior-positioned bio derived from CV summary
3. **Projects** — two sub-groups, apps first:
   - **Apps & Platforms:** Alef 360 IoT Platform, SNC-ECS (Ministry of Commerce), Wateen, Whispr, Anatomi, Clix
   - **Websites:** Al Rajhi Bank, Sathiyasam, Adam Lane Smith, Naftali Moses
   - Card = screenshot, name, 1–2 line description, tech chips, live link. No company attribution.
4. **Skills** — grouped chips (categories from CV, trimmed for web). No percentage bars.
5. **Contact** — email, LinkedIn, GitHub links. No form.
6. **Footer** — minimal.

## Visual System

- Background near-black `#0a0a0f`; light text; accent electric cyan `#22d3ee` used sparingly (links, hovers, section markers)
- Font: Inter (replaces Bison display font)
- Backdrop: static subtle dot-grid/gradient — no runtime animation cost, replaces particles
- Motion: sections fade/rise once on first scroll into view (IntersectionObserver + CSS transitions, no animation libraries); cards lift on hover
- Responsive: mobile-first, cards stack to single column

## Project Assets

- Screenshots captured via headless Chrome for 9 sites; Alef 360 screenshot supplied by user (drop into `src/assets/`) or pulled from disrupt-x.io if not supplied
- Descriptions drafted from scraping each site; user reviews/corrects
- Project URLs:
  - https://disrupt-x.io/alef-360-iot-platform/ (Alef 360)
  - https://snc-ecs.moc.gov.sa/
  - https://wateen.ai/en
  - https://trywhispr.com/
  - https://goanatomi.ai/
  - https://www.goclix.ai/en/
  - https://www.alrajhibank.com.sa/en
  - http://sathiyasam.com/
  - https://adamlanesmith.com/
  - https://www.naftalimoses.com/

## Dependency Cleanup

Remove: `react-particles-js`, `tsparticles`, `react-reveal`, `react-typed`, `moving-letters`, `react-animated-css`, `semantic-ui-css`, `semantic-ui-react`, `@brainhubeu/react-carousel`, `react-multi-carousel`, `swiper`.
Keep: `react`, `react-dom`, `react-icons`, `react-router-dom` (or drop routes for anchors if nothing else needs it), craco, Tailwind (2.x compat build).

## Error Handling & Quality

- Screenshot images: lazy-loaded, explicit width/height to avoid CLS, alt text per project
- External links: `rel="noopener noreferrer"`, open in new tab
- Semantic HTML (single h1 in hero, h2 per section), keyboard-navigable nav
- Verify: `yarn build` passes; manual check at mobile/tablet/desktop widths

## Out of Scope

- Framework migration (Next.js), blog, contact form backend, CMS, analytics
