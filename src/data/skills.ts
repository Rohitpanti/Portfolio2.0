import { Skill } from '@/types';

export const skills: Skill[] = [
  // Languages
  { name: 'Java', icon: 'FaJava', category: 'Languages', proficiency: 95, yearsOfExperience: 4, color: '#f89820' },
  { name: 'JavaScript', icon: 'SiJavascript', category: 'Languages', proficiency: 85, yearsOfExperience: 3, color: '#f7df1e' },
  { name: 'TypeScript', icon: 'SiTypescript', category: 'Languages', proficiency: 80, yearsOfExperience: 2, color: '#3178c6' },
  { name: 'Python', icon: 'SiPython', category: 'Languages', proficiency: 70, yearsOfExperience: 2, color: '#3776ab' },

  // Backend
  { name: 'Spring Boot', icon: 'SiSpringboot', category: 'Backend', proficiency: 92, yearsOfExperience: 4, color: '#6db33f' },
  { name: 'Spring MVC', icon: 'SiSpring', category: 'Backend', proficiency: 88, yearsOfExperience: 4, color: '#6db33f' },
  { name: 'Hibernate', icon: 'SiHibernate', category: 'Backend', proficiency: 85, yearsOfExperience: 3, color: '#59666c' },
  { name: 'Microservices', icon: 'FaCubes', category: 'Backend', proficiency: 90, yearsOfExperience: 3, color: '#00d4aa' },
  { name: 'REST APIs', icon: 'TbApi', category: 'Backend', proficiency: 95, yearsOfExperience: 4, color: '#61dafb' },
  { name: 'GraphQL', icon: 'SiGraphql', category: 'Backend', proficiency: 65, yearsOfExperience: 1, color: '#e10098' },
  { name: 'Apache Kafka', icon: 'SiApachekafka', category: 'Backend', proficiency: 80, yearsOfExperience: 2, color: '#231f20' },
  { name: 'Node.js', icon: 'SiNodedotjs', category: 'Backend', proficiency: 70, yearsOfExperience: 2, color: '#339933' },
  { name: 'WebSockets', icon: 'FaPlug', category: 'Backend', proficiency: 75, yearsOfExperience: 2, color: '#00d4ff' },

  // Frontend
  { name: 'React', icon: 'SiReact', category: 'Frontend', proficiency: 82, yearsOfExperience: 2, color: '#61dafb' },
  { name: 'Angular', icon: 'SiAngular', category: 'Frontend', proficiency: 70, yearsOfExperience: 2, color: '#dd0031' },
  { name: 'HTML5', icon: 'SiHtml5', category: 'Frontend', proficiency: 90, yearsOfExperience: 4, color: '#e34f26' },
  { name: 'CSS3', icon: 'SiCss3', category: 'Frontend', proficiency: 88, yearsOfExperience: 4, color: '#1572b6' },
  { name: 'Tailwind CSS', icon: 'SiTailwindcss', category: 'Frontend', proficiency: 85, yearsOfExperience: 2, color: '#06b6d4' },

  // Databases
  { name: 'PostgreSQL', icon: 'SiPostgresql', category: 'Databases', proficiency: 85, yearsOfExperience: 3, color: '#4169e1' },
  { name: 'MySQL', icon: 'SiMysql', category: 'Databases', proficiency: 82, yearsOfExperience: 3, color: '#4479a1' },
  { name: 'Oracle', icon: 'SiOracle', category: 'Databases', proficiency: 70, yearsOfExperience: 2, color: '#f80000' },
  { name: 'MongoDB', icon: 'SiMongodb', category: 'Databases', proficiency: 75, yearsOfExperience: 2, color: '#47a248' },
  { name: 'Redis', icon: 'SiRedis', category: 'Databases', proficiency: 72, yearsOfExperience: 2, color: '#dc382d' },

  // DevOps & Cloud
  { name: 'Docker', icon: 'SiDocker', category: 'DevOps & Cloud', proficiency: 82, yearsOfExperience: 3, color: '#2496ed' },
  { name: 'Kubernetes', icon: 'SiKubernetes', category: 'DevOps & Cloud', proficiency: 75, yearsOfExperience: 2, color: '#326ce5' },
  { name: 'AWS', icon: 'SiAmazonwebservices', category: 'DevOps & Cloud', proficiency: 78, yearsOfExperience: 2, color: '#ff9900' },
  { name: 'Azure', icon: 'SiMicrosoftazure', category: 'DevOps & Cloud', proficiency: 60, yearsOfExperience: 1, color: '#0078d4' },
  { name: 'Jenkins', icon: 'SiJenkins', category: 'DevOps & Cloud', proficiency: 80, yearsOfExperience: 3, color: '#d24939' },
  { name: 'CI/CD', icon: 'FaInfinity', category: 'DevOps & Cloud', proficiency: 85, yearsOfExperience: 3, color: '#00d4aa' },
  { name: 'Linux', icon: 'SiLinux', category: 'DevOps & Cloud', proficiency: 80, yearsOfExperience: 4, color: '#fcc624' },

  // Tools & Testing
  { name: 'Git', icon: 'SiGit', category: 'Tools & Testing', proficiency: 90, yearsOfExperience: 4, color: '#f05032' },
  { name: 'GitHub', icon: 'SiGithub', category: 'Tools & Testing', proficiency: 90, yearsOfExperience: 4, color: '#ffffff' },
  { name: 'Maven', icon: 'SiApachemaven', category: 'Tools & Testing', proficiency: 85, yearsOfExperience: 4, color: '#c71a36' },
  { name: 'Gradle', icon: 'SiGradle', category: 'Tools & Testing', proficiency: 75, yearsOfExperience: 2, color: '#02303a' },
  { name: 'JUnit', icon: 'FaVial', category: 'Tools & Testing', proficiency: 88, yearsOfExperience: 4, color: '#25a162' },
  { name: 'Mockito', icon: 'FaFlask', category: 'Tools & Testing', proficiency: 85, yearsOfExperience: 3, color: '#78c257' },
  { name: 'IntelliJ IDEA', icon: 'SiIntellijidea', category: 'Tools & Testing', proficiency: 90, yearsOfExperience: 4, color: '#000000' },
  { name: 'VS Code', icon: 'SiVisualstudiocode', category: 'Tools & Testing', proficiency: 88, yearsOfExperience: 4, color: '#007acc' },
  { name: 'Swagger', icon: 'SiSwagger', category: 'Tools & Testing', proficiency: 82, yearsOfExperience: 3, color: '#85ea2d' },
  { name: 'Prometheus', icon: 'SiPrometheus', category: 'Tools & Testing', proficiency: 72, yearsOfExperience: 2, color: '#e6522c' },
  { name: 'Grafana', icon: 'SiGrafana', category: 'Tools & Testing', proficiency: 72, yearsOfExperience: 2, color: '#f46800' },
];

export const skillCategories: string[] = [
  'All',
  'Languages',
  'Backend',
  'Frontend',
  'Databases',
  'DevOps & Cloud',
  'Tools & Testing',
];
