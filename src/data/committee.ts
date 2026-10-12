export interface CommitteeItem {
  id: string;
  role: string;
  event: string;
  organization: string;
  year: string;
  category: "external" | "university";
  description: string;
}

export const committeeExperiences: CommitteeItem[] = [
  // External & National
  {
    id: "comm-180dc-lead",
    role: "Product Lead",
    event: "Mentoring Services",
    organization: "180DC UB",
    year: "2026",
    category: "external",
    description: "Product strategy, web user flows, TOR/MoUs, mentor recruitment, marketing briefs.",
  },
  {
    id: "comm-180dc-bootcamp",
    role: "Event Staff",
    event: "Consulting Bootcamp",
    organization: "180DC UB",
    year: "2026",
    category: "external",
    description: "Event concepts, technical guidelines, cue cards, interactive games, media asset requirements.",
  },
  {
    id: "comm-180dc-jadp",
    role: "Assessment Staff",
    event: "Junior Analyst Development Program",
    organization: "180DC UB",
    year: "2026",
    category: "external",
    description: "Group allocation, assessment forms, assignments, scoring, report cards.",
  },
  {
    id: "comm-isais-treasurer",
    role: "Treasurer",
    event: "Indonesian International Week",
    organization: "Indonesian Student Association for International Studies",
    year: "2026",
    category: "external",
    description: "Budgeting (RAB), cost forecasting, cash flow tracking in Google Sheets.",
  },
  {
    id: "comm-studentxceos",
    role: "Marketing and Communication Officer",
    event: "ProConnect",
    organization: "StudentxCEOs East Java",
    year: "2026",
    category: "external",
    description: "Marketing strategy and promotional outreach.",
  },

  // University (Brawijaya University)
  {
    id: "comm-mawapres",
    role: "Vice Head of Event",
    event: "MAWAPRES FILKOM UB",
    organization: "Brawijaya University",
    year: "2026",
    category: "university",
    description: "End-to-end event execution, timelines, cross-functional coordination.",
  },
  {
    id: "comm-artropolis",
    role: "Sponsorship & Fundraising Staff",
    event: "Artropolis",
    organization: "Brawijaya University",
    year: "2025",
    category: "university",
    description: "Secured funding and in-kind partnerships.",
  },
  {
    id: "comm-raja-brawijaya",
    role: "Field Coordinator Staff",
    event: "RAJA BRAWIJAYA",
    organization: "Brawijaya University",
    year: "2025",
    category: "university",
    description: "Crowd management and field operations for thousands of new students.",
  },
  {
    id: "comm-comparative-study",
    role: "Field Coordinator Staff",
    event: "Comparative Study",
    organization: "BEM FILKOM x BEM FISIP UB",
    year: "2025",
    category: "university",
    description: "Field coordination, technical readiness, logistics.",
  },
];

export const committeeClosingNote =
  "Active leadership across 20+ organizational & event committees (2022–2024)";
