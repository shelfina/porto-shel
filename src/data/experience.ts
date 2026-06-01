export interface ExperienceItem {
  id: number;
  title: string;
  organization: string;
  period: string;
  description: string;
}

export const experiences: ExperienceItem[] = [
  {
    id: 1,
    title: "Strategic & Growth Function Analyst",
    organization: "180 Degrees Consulting UB",
    period: "Feb 2026 – Present",
    description: "Analyzing growth strategies and providing data-driven consulting solutions for social impact organizations.",
  },
  {
    id: 2,
    title: "Product Manager Intern",
    organization: "Raion Community FILKOM",
    period: "Feb 2026 – Present",
    description: "Leading product development cycles, defining roadmaps, and coordinating cross-functional teams for community tech projects.",
  },
  {
    id: 3,
    title: "Expert Staff Talent Growth Ministry",
    organization: "SGE FILKOM",
    period: "2025 – 2026",
    description: "Developing talent growth initiatives and mentoring programs for students in the Faculty of Computer Science.",
  },
  {
    id: 4,
    title: "Vice Lead of Product & Business",
    organization: "DevGirls",
    period: "2025 – 2026",
    description: "Spearheading product strategy and business development initiatives for women-in-tech community platform.",
  },
  {
    id: 5,
    title: "Vice Head of Event",
    organization: "MAWAPRES FILKOM UB",
    period: "2026",
    description: "Coordinating and managing flagship university achievement competition events and logistics.",
  },
];
