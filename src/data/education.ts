export interface EducationItem {
  institution: string;
  faculty: string;
  program: string;
  period: string;
  gpa: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export const educationData: EducationItem = {
  institution: "Brawijaya University",
  faculty: "Faculty of Computer Science",
  program: "Information Technology Education",
  period: "2024 – Present",
  gpa: "3.93/4.0",
};

export const skillCategories: SkillCategory[] = [
  {
    title: "Technical & Development",
    skills: [
      "Java",
      "PHP",
      "JavaScript",
      "HTML/CSS",
      "SQL",
      "GitHub",
      "VS Code",
      "Enterprise Architect",
      "DBeaver",
      "Bizagi",
    ],
  },
  {
    title: "Product & UI/UX",
    skills: [
      "Figma",
      "Design Thinking",
      "User Centered Design",
      "User Research",
      "Product Roadmap Planning",
      "Feature Prioritization",
      "Software Development Lifecycle",
      "Notion",
      "Trello",
      "Jira",
      "Google Workspace",
    ],
  },
];
