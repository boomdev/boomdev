export type ProjectStatus =
  | 'Product'
  | 'Project'
  | 'Experiment'
  | 'Research note'
  | 'Content project'
  | 'AI project'
  | 'Home base';

export interface Project {
  name: string;
  url?: string;
  status: ProjectStatus;
  category: string;
  description: string;
}

export const projects: Project[] = [
  {
    name: 'Timesheeter',
    url: 'https://timesheeter.app/',
    status: 'Product',
    category: 'Productivity',
    description:
      'A lightweight tool for tracking time, work sessions, and operational effort.',
  },
  {
    name: 'Liberty Drives',
    url: 'https://libertydrives.com/',
    status: 'Project',
    category: 'Travel / road trips',
    description:
      'A road trip and itinerary project focused on helping people discover routes, ideas, and travel inspiration.',
  },
  {
    name: 'Scrnsht',
    url: 'https://scrnsht.app/',
    status: 'Product',
    category: 'Screenshots / utilities',
    description:
      'A simple utility project around screenshots, capture workflows, or visual documentation.',
  },
  {
    name: 'Marketing Cofounder',
    url: 'https://marketingcofounder.app/',
    status: 'Experiment',
    category: 'AI / marketing',
    description:
      'An AI-assisted marketing companion for founders who need practical guidance, planning, and execution support.',
  },
  {
    name: 'Clawkpit',
    url: 'https://clawkpit.com/',
    status: 'Product',
    category: 'Productivity / AI collaboration',
    description: 'A collaborative task and execution tool designed to work with AI assistants.',
  },
  {
    name: 'Tourbignellze',
    url: 'https://tourbignellze.top/',
    status: 'Research note',
    category: 'Enterprise AI',
    description:
      'A public research notebook on AI-native business software, enterprise memory, semantic ingestion, and personal agents for work.',
  },
  {
    name: 'Rolay',
    url: 'https://rolay.app/',
    status: 'Product',
    category: 'AI training',
    description:
      'Voice-first consultative selling roleplays with AI-generated feedback for sales practice and coaching.',
  },
  {
    name: 'Boomdev',
    url: 'https://boomdev.com/',
    status: 'Home base',
    category: 'Software lab',
    description:
      'The umbrella page for independent software initiatives, AI experiments, and practical tools.',
  },
  {
    name: 'Plans Maison',
    url: 'https://plans.maison/',
    status: 'Content project',
    category: 'Home planning / guides',
    description:
      'A practical content project around house plans, renovation, extensions, and common design decisions.',
  },
  {
    name: 'Oakify',
    url: 'https://oakify.ai/',
    status: 'AI project',
    category: 'AI / software',
    description:
      'An AI-oriented software initiative. Keep the public description intentionally concise until the project positioning is finalized.',
  },
];
