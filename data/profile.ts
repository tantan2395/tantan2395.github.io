import type { Highlight, NavItem } from "@/lib/types";

export const profile = {
  name: "Jonathan Cantora",
  title: "Full Stack Software Developer",
  location: "Negros Occ, Philippines",
  email: "tantancantora@gmail.com",
  tagline:
    "Senior full-stack engineer with 10+ years building scalable web and mobile systems, leading cross-functional teams, and delivering critical products under tight timelines.",
  summary:
    "I build and scale production software across fintech, healthcare, telecom, SaaS, and commerce. My work spans architecture, implementation, and team leadership, with deep strength in backend-heavy full-stack delivery using React, Node.js, TypeScript, PostgreSQL, and AWS.",
  resumePath: "/resume/Jonathan-Cantora-RESUME.pdf",
  github: "https://github.com/tantan2395",
  navItems: [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" }
  ] satisfies NavItem[],
  strengths: [
    {
      label: "10+ Years Experience",
      description:
        "A decade of shipping business-critical software in high-pressure delivery environments."
    },
    {
      label: "Full-Stack & Mobile",
      description:
        "Hands-on across web, backend APIs, mobile apps, and platform architecture."
    },
    {
      label: "AWS & Scalable Systems",
      description:
        "Designed cloud-based systems for large uploads and mission-critical workflows."
    },
    {
      label: "Team Leadership",
      description:
        "Led cross-functional squads of 5–10 engineers to deliver production outcomes."
    }
  ] satisfies Highlight[]
};
