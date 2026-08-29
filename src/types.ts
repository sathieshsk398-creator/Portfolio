export interface Project {
  id: string;
  title: string;
  category: string;
  role: string;
  tagline: string;
  description: string;
  keyMetrics: {
    label: string;
    value: string;
    subtext?: string;
  }[];
  techStack: string[];
  features: string[];
  architecturalHighlights: string[];
  challengesSolved: string;
  status: string;
  demoUrl?: string;
  githubUrl?: string;
  highlightBadge?: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  type: string;
  summary: string;
  skills: string[];
  achievements: string[];
  impactMetric: string;
}

export interface Patent {
  id: string;
  title: string;
  applicationNo: string;
  jurisdiction: string;
  status: string;
  abstract: string;
  keyInnovations: string[];
  performanceMetrics: {
    metric: string;
    value: string;
  }[];
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  period: string;
  score: string;
  scoreLabel: string;
  location: string;
  focus: string;
  highlights: string[];
}

export interface SkillItem {
  name: string;
  category: 'Languages' | 'Frontend' | 'Backend & AI' | 'Databases & Tools';
  level: string;
  experienceContext: string;
  iconName: string;
  featured?: boolean;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  category: string;
  badgeText: string;
  credentialUrl?: string;
  highlights: string;
}

export interface MetricStat {
  id: string;
  value: number;
  suffix: string;
  prefix?: string;
  label: string;
  description: string;
  iconName: string;
}
