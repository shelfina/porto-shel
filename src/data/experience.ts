export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  period: string;
  category: "organizational" | "volunteer";
  description: string;
  badge?: string;
}

export const organizationalExperience: ExperienceItem[] = [
  {
    id: "180dc-analyst",
    role: "Strategy & Growth Function Analyst",
    organization: "180 Degrees Consulting UB",
    period: "Feb 2026 – Present",
    category: "organizational",
    description:
      "Translates user insights into structured initiatives to scale 180DC's visibility and impact. Product Lead for Mentoring Services; co-authored 26 of 79 pages of the 180DC Playbook / Casebook 1.0 (analytical frameworks, deck storylines, winner deck analysis, judges' POV, mentor sourcing, winning competition strategies).",
    badge: "Best Function Analyst",
  },
  {
    id: "raion-pm",
    role: "Product Manager",
    organization: "Raion Community FILKOM",
    period: "Mar 2026 – Present",
    category: "organizational",
    description:
      "After advancing from intern to full-time, led product strategy and execution of mobile applications: feature prioritization, user journey optimization, aligning design and engineering teams.",
  },
  {
    id: "devgirls-director",
    role: "Director of Growth and Innovation",
    organization: "DevGirls FILKOM",
    period: "Mar 2026 – Present",
    category: "organizational",
    description:
      "Led growth and innovation initiatives overseeing cross-functional teams across UI/UX, Product & Business, and Software Development.",
  },
  {
    id: "raion-pm-intern",
    role: "Product Manager Intern",
    organization: "Raion Community FILKOM",
    period: "Feb 2026 – Mar 2026",
    category: "organizational",
    description:
      "Supported product development of a mobile app, from understanding user problems to assisting feature development.",
  },
  {
    id: "sge-staff",
    role: "Expert Staff of Talent Growth Ministry",
    organization: "SGE FILKOM",
    period: "2025 – 2026",
    category: "organizational",
    description:
      "Created 8 content pieces across IT, arts, and sports with 85,000+ reach; managed student talent data and achievements; distributed 120+ competition opportunities. Recognized as Best Ministry Staff (3rd Period).",
    badge: "Best Ministry Staff",
  },
  {
    id: "devgirls-vice-lead",
    role: "Vice Lead of Product & Business",
    organization: "DevGirls FILKOM",
    period: "2025 – 2026",
    category: "organizational",
    description:
      "Growth & Innovation Division; drives innovation and product development, runs monthly mentorship sessions, manages achievement data collection.",
  },
];

export const volunteerExperience: ExperienceItem[] = [
  {
    id: "lab-assistant",
    role: "Learning Technology Laboratory Assistant",
    organization: "Faculty of Computer Science UB",
    period: "Aug 2026 – Present",
    category: "volunteer",
    description:
      "Supports faculty-led research in learning technology: research activities, data collection, analysis, project development.",
  },
  {
    id: "db-assistant",
    role: "Database Practicum Assistant",
    organization: "Faculty of Computer Science UB",
    period: "Aug 2026 – Present",
    category: "volunteer",
    description:
      "Guides weekly lab sessions on ERD, EERD, SQL, relational modeling, normalization.",
  },
];
