import { Certification } from '@/types';

export const certifications: Certification[] = [
  {
    id: 'aws-cloud',
    name: 'AWS Cloud Practitioner',
    issuer: 'Amazon Web Services',
    date: '2024',
    description:
      'Foundational understanding of AWS Cloud concepts, services, and terminology.',
  },
  {
    id: 'spring-professional',
    name: 'Spring Professional Certification',
    issuer: 'VMware / Broadcom',
    date: '2024',
    description:
      'Professional-level certification in Spring Framework, Spring Boot, and Spring ecosystem.',
  },
  {
    id: 'docker-essentials',
    name: 'Docker Essentials',
    issuer: 'Docker Inc.',
    date: '2023',
    description:
      'Containerization fundamentals, Docker Compose, and container orchestration basics.',
  },
  {
    id: 'kubernetes-fundamentals',
    name: 'Kubernetes Fundamentals',
    issuer: 'Cloud Native Computing Foundation',
    date: '2024',
    description:
      'Container orchestration, pod management, services, and Kubernetes architecture.',
  },
];
