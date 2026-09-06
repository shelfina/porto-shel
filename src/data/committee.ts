export interface CommitteeItem {
  id: number;
  title: string;
  organization: string;
  period?: string;
  description: string;
}

export const externalCommittees: CommitteeItem[] = [
  {
    id: 1,
    title: "Product Lead – Mentoring Services",
    organization: "180 Degrees Consulting UB",
    period: "2026",
    description: "Led product strategy, created web user flows, drafted TOR/MoUs, and managed mentor recruitment and marketing briefs.",
  },
  {
    id: 2,
    title: "Event Staff – Consulting Bootcamp",
    organization: "180 Degrees Consulting UB",
    period: "2026",
    description: "Drafted event concepts, technical guidelines, cue cards, interactive games, and media asset requirements.",
  },
  {
    id: 3,
    title: "Treasurer – Indonesian International Week",
    organization: "Indonesian Student Association for International Studies",
    period: "2026",
    description: "Managed budgeting (RAB), operational cost forecasting, and cash flow tracking via Google Sheets.",
  },
  {
    id: 4,
    title: "Marketing and Communication Officer – ProConnect",
    organization: "StudentxCEOs East Java",
    period: "2026",
    description: "Executed marketing strategies and promotional outreach for networking events.",
  },
];

export const universityCommittees: CommitteeItem[] = [
  {
    id: 1,
    title: "Vice Head of Event – MAWAPRES",
    organization: "FILKOM UB",
    period: "2026",
    description: "Managed end-to-end event execution, timelines, and cross-functional team coordination using Google Workspace.",
  },
  {
    id: 2,
    title: "Sponsorship & Fundraising Staff – Artropolis",
    organization: "Brawijaya University",
    period: "2025",
    description: "Secured funding and in-kind partnerships through targeted sponsor outreach and stakeholder engagement.",
  },
  {
    id: 3,
    title: "Field Coordinator Staff – RAJA BRAWIJAYA",
    organization: "Brawijaya University",
    period: "2025",
    description: "Coordinated crowd management, participant flow, and field operations for thousands of new students.",
  },
  {
    id: 4,
    title: "Field Coordinator Staff – Comparative Study",
    organization: "BEM FILKOM and BEM FISIP UB",
    period: "2025",
    description: "Managed field coordination, technical readiness, and real-time logistics for inter-faculty organizational visits.",
  },
];

export const committeeSummary = "Active Leadership across 20+ Organizational & Event Committees (2022–2024)";
export const committeeBadge = "Master of Ceremony for the Technical Meeting and English Speech Competition – MAWAPRES FILKOM 2026";
