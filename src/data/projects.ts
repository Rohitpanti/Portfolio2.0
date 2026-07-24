import { Project } from '@/types';

export const projects: Project[] = [
  {
    id: 'enterprise-retail',
    title: 'Enterprise Retail Platforms',
    subtitle: 'Nike, Adidas & British Petroleum (BP)',
    description:
      'Enterprise OMS development using Java, Spring Boot, Microservices, leveraging Kafka, AWS, Docker, Kubernetes, and CI/CD pipelines.',
    longDescription:
      'Contributed to enterprise Order Management System (OMS) development for global retail brands. Built scalable microservices handling millions of transactions daily with a strong focus on reliability, monitoring (Grafana/Prometheus), and incident management (RCA). The platform powers order processing, inventory management, and fulfillment across distributed systems.',
    techStack: [
      'Java',
      'Spring Boot',
      'Microservices',
      'Apache Kafka',
      'AWS',
      'Docker',
      'Kubernetes',
      'CI/CD',
      'Grafana',
      'Prometheus',
    ],
    clients: ['Nike', 'Adidas', 'British Petroleum (BP)'],
    challenges: [
      'Handling millions of concurrent transactions across distributed systems',
      'Ensuring zero-downtime deployments for mission-critical retail operations',
      'Real-time event processing with guaranteed message delivery',
      'Monitoring and observability across hundreds of microservices',
    ],
    solutions: [
      'Event-driven architecture with Apache Kafka for async processing',
      'Kubernetes-based orchestration with auto-scaling policies',
      'Comprehensive CI/CD pipelines with automated rollback capabilities',
      'Prometheus + Grafana dashboards for real-time system observability',
    ],
    impact: [
      'Supported enterprise-scale operations for Fortune 500 clients',
      'Achieved 99.9% uptime for critical order processing workflows',
      'Reduced deployment time by 60% through CI/CD automation',
      'Improved system observability with 100+ monitoring dashboards',
    ],
    featured: true,
  },
  {
    id: 'retail-pos',
    title: 'Retail Point of Sale Systems',
    subtitle: 'KWIK TRIP & Circle K',
    description:
      'End-to-end development and optimization of microservices-based key modules in a scalable Retail POS system.',
    longDescription:
      'Contributing to the end-to-end development and optimization of microservices-based key modules in a scalable Retail POS system. Designed new features, fixed high-priority bugs, and enhanced overall system efficiency, performance, and reliability for major fuel and grocery retail chains across North America.',
    techStack: [
      'Java',
      'Spring Boot',
      'Hibernate',
      'PostgreSQL',
      'REST APIs',
      'WebSockets',
      'Jenkins',
      'JUnit',
      'Mockito',
      'Microservices',
    ],
    clients: ['KWIK TRIP', 'Circle K'],
    challenges: [
      'Processing thousands of POS transactions per minute with sub-second latency',
      'Complex business rules for loyalty, coupons, and fuel transactions',
      'Real-time communication between POS terminals and backend services',
      'Maintaining data consistency across distributed transaction flows',
    ],
    solutions: [
      'Optimized database queries reducing response times by 40%',
      'WebSocket-based real-time communication layer for instant updates',
      'Comprehensive unit testing with 85%+ code coverage',
      'Modular microservices architecture enabling independent deployments',
    ],
    impact: [
      'Served 1000+ retail locations across North America',
      'Reduced transaction processing latency by 40%',
      'Achieved 85%+ unit test coverage across all modules',
      'Zero critical production incidents over 6-month period',
    ],
    featured: true,
  },
];
