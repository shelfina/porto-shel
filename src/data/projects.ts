export type ProjectCategory = "All" | "BMC" | "UI/UX" | "Business Plan" | "Essay" | "Case Study";

export interface Project {
  id: number;
  name: string;
  category: ProjectCategory;
  competition: string;
  year: string;
  result: string;
  resultColor: "brand" | "amber" | "blue" | "purple" | "muted";
  description: string;
}

export const projects: Project[] = [
  {
    id: 1,
    name: "CashFlow Radar",
    category: "BMC",
    competition: "Accounting Fest 2026",
    year: "2026",
    result: "\uD83E\uDD47 Juara 1 (National)",
    resultColor: "brand",
    description: "Innovative financial management platform designed to streamline cash flow tracking for SMEs.",
  },
  {
    id: 2,
    name: "ReBite",
    category: "UI/UX",
    competition: "T-Arts 3.0 Atma Jaya 2026",
    year: "2026",
    result: "\uD83C\uDFC6 Top 4 Finalist",
    resultColor: "blue",
    description: "Food waste reduction app with gamified user experience and restaurant partnership model.",
  },
  {
    id: 3,
    name: "Amora",
    category: "Business Plan",
    competition: "Greennovation Unismuh Sidoarjo 2026",
    year: "2026",
    result: "\uD83E\uDD49 Juara 3",
    resultColor: "amber",
    description: "Sustainable beauty business plan focused on eco-friendly packaging and local ingredient sourcing.",
  },
  {
    id: 4,
    name: "PONDASI",
    category: "Business Plan",
    competition: "NBPC Blitar 2026",
    year: "2026",
    result: "\uD83C\uDF1F Finalist",
    resultColor: "blue",
    description: "Construction-tech business model addressing affordable housing solutions through innovative materials.",
  },
  {
    id: 5,
    name: "Amora Essay",
    category: "Essay",
    competition: "Ideafest Sentosa Foundation 2026",
    year: "2026",
    result: "Participant",
    resultColor: "muted",
    description: "Academic essay exploring sustainable business practices in the Indonesian beauty industry.",
  },
  {
    id: 6,
    name: "TenangIn",
    category: "BMC",
    competition: "Future Founders League 2026",
    year: "2026",
    result: "\uD83C\uDFC5 Top 10-20 Finalist",
    resultColor: "purple",
    description: "Mental health wellness platform combining AI-driven therapy matching with community support.",
  },
  {
    id: 7,
    name: "JELANTIKU",
    category: "BMC",
    competition: "Canvas Indonesia 2026",
    year: "2026",
    result: "\uD83C\uDFC6 Juara Harapan 1 + Best Pitch Deck",
    resultColor: "brand",
    description: "Used cooking oil recycling ecosystem with integrated collection network and biodiesel conversion.",
  },
  {
    id: 8,
    name: "NexaCRM",
    category: "Case Study",
    competition: "Raion Battlepass 2026",
    year: "2026",
    result: "\u2705 Passed to Intern",
    resultColor: "brand",
    description: "CRM case study analyzing customer relationship strategies and proposing data-driven solutions.",
  },
];

export const categories: ProjectCategory[] = ["All", "BMC", "UI/UX", "Business Plan", "Essay", "Case Study"];
