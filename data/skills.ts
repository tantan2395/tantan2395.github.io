import type { SkillCategory } from "@/lib/types";

export const skillCategories: SkillCategory[] = [
  {
    category: "Languages",
    skills: ["JavaScript", "TypeScript", "PHP", "Python", "Dart"]
  },
  {
    category: "Frameworks",
    skills: [
      "Node.js",
      "Laravel",
      "Django",
      "React",
      "Next.js",
      "Vue.js",
      "React Native",
      "Flutter",
      "Cypress"
    ]
  },
  {
    category: "Databases",
    skills: ["PostgreSQL", "MySQL", "MongoDB", "DynamoDB", "Firestore"]
  },
  {
    category: "Tools",
    skills: ["Git", "Docker", "Terraform"]
  },
  {
    category: "Cloud",
    skills: ["AWS"]
  }
];
