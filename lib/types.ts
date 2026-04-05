export type NavItem = {
  label: string;
  href: string;
};

export type Highlight = {
  label: string;
  description: string;
};

export type SkillCategory = {
  category: string;
  skills: string[];
};

export type Certification = {
  name: string;
  issuer: string;
  issued: string;
  credentialUrl?: string;
};

export type Experience = {
  company: string;
  role: string;
  location: string;
  period: string;
  bullets: string[];
};

export type ProjectLink = {
  label: "Live Demo" | "Case Study" | "GitHub";
  href?: string;
};

export type Project = {
  title: string;
  role: string;
  period: string;
  summary: string;
  stack: string[];
  impact: string;
  tags: string[];
  links: ProjectLink[];
};
