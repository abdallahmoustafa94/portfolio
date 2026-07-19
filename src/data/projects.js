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
  { slug: 'alrajhi', name: 'Al Rajhi Bank', group: 'site', url: 'https://www.alrajhibank.com.sa/en', image: alrajhi,
    description: 'Public website of the world’s largest Islamic bank — multilingual (AR/EN, RTL), accessible, high-traffic.',
    tech: ['React', 'i18n / RTL', 'Accessibility'] },
  { slug: 'alef', name: 'Alef 360 IoT Platform', group: 'app', url: 'https://disrupt-x.io/alef-360-iot-platform/', image: alef,
    description: 'Enterprise IoT platform for real-time monitoring and control of connected devices — live sensor dashboards, asset profiles, alarms, and reporting.',
    tech: ['React', 'Redux', 'WebSockets', 'Data Visualization'] },
  { slug: 'snc-ecs', name: 'SNC-ECS — National Commission for Education, Culture and Science', group: 'app', url: 'https://snc-ecs.moc.gov.sa/', image: sncEcs,
    description: 'E-services portal for the Saudi National Commission for Education, Culture and Science, under the Ministry of Culture — public-facing platform for accessing commission services and information.',
    tech: ['React', 'Next.js', 'TypeScript'] },
  { slug: 'wateen', name: 'Wateen', group: 'app', url: 'https://wateen.ai/en', image: wateen,
    description: 'AI-powered B2B marketplace and inventory management platform for hospitality and retail businesses — lets operators source from suppliers, track stock, and automate purchasing to cut costs.',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS'] },
  { slug: 'whispr', name: 'Whispr', group: 'app', url: 'https://trywhispr.com/', image: whispr,
    description: 'AI chatbot and customer support platform — trained on a business’s knowledge base to answer customers across the website widget, WhatsApp, Messenger, Instagram, and Slack from one shared inbox, with live voice calls and handoff to human agents.',
    tech: ['React', 'TypeScript'] },
  { slug: 'anatomi', name: 'Anatomi', group: 'app', url: 'https://goanatomi.ai/', image: anatomi,
    description: 'UX research and benchmarking tool for product teams — a repository of expert-reviewed user flows and ratings from banking, fintech, and telecom apps, used to compare usability against competitors before shipping new designs.',
    tech: ['Next.js', 'TypeScript'] },
  { slug: 'clix', name: 'Clix', group: 'app', url: 'https://www.goclix.ai/en/', image: clix,
    description: 'ZATCA-compliant e-invoicing platform for Saudi businesses — AI-assisted invoice creation with a dashboard for tracking invoices, drafts, clients, and collected tax.',
    tech: ['Next.js', 'TypeScript'] },
  { slug: 'sathiyasam', name: 'Sathiyasam', group: 'site', url: 'http://sathiyasam.com/', image: sathiyasam,
    description: 'Personal coaching site for a men’s self-development coach — program pages, podcast, book, and client success stories built around a "Work With Me" funnel.',
    tech: ['React', 'CSS'] },
  { slug: 'adamlanesmith', name: 'Adam Lane Smith', group: 'site', url: 'https://adamlanesmith.com/', image: adamlanesmith,
    description: 'Coaching brand site for a relationship and attachment-styles coach — course and program pages, a free attachment-style quiz, community signup, and seasonal promotional sales.',
    tech: ['React', 'CSS'] },
  { slug: 'naftalimoses', name: 'Naftali Moses', group: 'site', url: 'https://www.naftalimoses.com/', image: naftalimoses,
    description: 'Personal coaching brand site — program and about pages, client testimonials, and a "Get Coaching" contact funnel for an integrative coaching practice.',
    tech: ['React', 'CSS'] },
];
