export interface Project {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  category: 'AI/ML' | 'Web Development' | 'Creative Tech' | 'Data Analytics' | 'IoT & Embedded';
  year: string;
  shortDescription: string;
  image: string;
  tags: string[];
  githubUrl: string;
  liveDemoUrl: string;
  featured: boolean;
  caseStudy: {
    problem: string;
    goal: string;
    solution: string;
    developmentProcess: string[];
    challenges: string[];
    result: string;
    metrics?: string[];
    technologies: string[];
    screenshots: string[];
  };
}

export interface SkillItem {
  name: string;
  level: string; // e.g., 'Advanced', 'Proficient', 'Exploring'
  category: 'Programming' | 'Web Development' | 'AI / Machine Learning' | 'Databases' | 'Cloud' | 'Data Analytics' | 'Tools';
  highlight?: boolean;
  description: string;
  iconName?: string;
}

export interface Achievement {
  id: string;
  number: string;
  title: string;
  category: 'Academic' | 'Certification' | 'Internship' | 'Project' | 'Competition' | 'Milestone' | 'Technical';
  description: string;
  year: string;
  issuer?: string;
  credentialUrl?: string;
}

export interface Statistic {
  label: string;
  value: number;
  suffix: string;
  description: string;
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  duration: string;
  location: string;
  type: string;
  responsibilities: string[];
  technologies: string[];
  achievements: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  duration: string;
  specialization: string;
  grade?: string;
  highlights: string[];
}

export interface ServiceItem {
  number: string;
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
  icon: string;
}

export interface JourneyMilestone {
  id?: string;
  year: string;
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  image?: string;
}

export interface PersonalInterest {
  category: string;
  title: string;
  description: string;
  icon: string;
  tags: string[];
}

export interface Testimonial {
  id: string;
  quote: string;
  person: string;
  role: string;
  company: string;
  avatar: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
  handle: string;
}

export interface LanguageItem {
  language: string;
  proficiency: string;
  level: string;
}
