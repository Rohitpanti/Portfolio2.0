import { Achievement } from '@/types';

export const achievements: Achievement[] = [
  {
    id: 'experience',
    label: 'Years of Experience',
    value: 4,
    suffix: '+',
    icon: 'Briefcase',
    description: 'Building enterprise software systems',
  },
  {
    id: 'projects',
    label: 'Enterprise Projects',
    value: 6,
    suffix: '+',
    icon: 'FolderGit2',
    description: 'For Fortune 500 clients',
  },
  {
    id: 'clients',
    label: 'Global Clients Served',
    value: 5,
    suffix: '+',
    icon: 'Globe',
    description: 'Nike, Adidas, BP, KWIK TRIP, Circle K',
  },
  {
    id: 'uptime',
    label: 'System Uptime',
    value: 99.9,
    suffix: '%',
    icon: 'Activity',
    description: 'For critical production systems',
  },
  {
    id: 'technologies',
    label: 'Technologies Mastered',
    value: 40,
    suffix: '+',
    icon: 'Cpu',
    description: 'Across the full stack',
  },
  {
    id: 'locations',
    label: 'Retail Locations Served',
    value: 1000,
    suffix: '+',
    icon: 'MapPin',
    description: 'Across North America',
  },
];
