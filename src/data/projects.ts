export type ProjectCategory =
  | "All"
  | "UI/UX"
  | "Software"
  | "BMC"
  | "Business Plan"
  | "Essay"
  | "Community";

export interface ProjectItem {
  id: string;
  name: string;
  event: string;
  year: string;
  result?: string;
  category: Exclude<ProjectCategory, "All">;
  description: string;
}

export const projectCategories: ProjectCategory[] = [
  "All",
  "UI/UX",
  "Software",
  "BMC",
  "Business Plan",
  "Essay",
  "Community",
];

export const projectsData: ProjectItem[] = [
  // UI/UX
  {
    id: "woven",
    name: "WOVEN",
    event: "UI/UX Competition",
    year: "2026",
    category: "UI/UX",
    description:
      "Safety-first navigation app for women riders with safety-aware route recommendations (lighting & area activity), hands-free voice navigation via AI companion NARA, smart audio monitoring, and SOS emergency features.",
  },
  {
    id: "rebite",
    name: "ReBite",
    event: "T-Arts 3.0 Atma Jaya",
    year: "2026",
    result: "Top 4 Finalist",
    category: "UI/UX",
    description:
      "Food waste reduction app combining gamification and restaurant partnerships to redirect surplus food to consumers.",
  },

  // Software
  {
    id: "teamup",
    name: "TeamUp.id",
    event: "Innovate Tech Hackathon",
    year: "2026",
    category: "Software",
    description:
      "Web platform for forming competition teams via skill-matchmaking, with integrated mentoring session booking.",
  },
  {
    id: "chromalens",
    name: "ChromaLens",
    event: "Software Development Competition",
    year: "2026",
    category: "Software",
    description:
      "Color-blindness support mobile app with Ishihara test, real-time camera filter using LMS Daltonization, and tap-to-detect color identification.",
  },
  {
    id: "filkomcare",
    name: "FilkomCare",
    event: "Software Engineering Course Project",
    year: "2026",
    category: "Software",
    description:
      "Counseling and emergency support mobile app for FILKOM UB with panic button, counseling channel integration, scheduling, real-time status tracking, and university account login.",
  },

  // BMC
  {
    id: "tenangin",
    name: "TenangIn",
    event: "Future Founders League",
    year: "2026",
    result: "Top 10-20 Finalist",
    category: "BMC",
    description:
      "Academic and professional stress platform with an AI pre-diagnostic co-pilot, early warning system for self-harm risk, and hybrid chat (AI, peers, psychologists).",
  },
  {
    id: "cash-flow-radar",
    name: "Cash Flow Radar",
    event: "Accounting Fest UNP Kediri",
    year: "2026",
    result: "1st Place (National)",
    category: "BMC",
    description:
      "Real-time MSME finance dashboard with automated cash flow monitoring, early deficit warnings, forecasting, and bankable financial reports.",
  },
  {
    id: "jelantiku",
    name: "Jelantiku",
    event: "Canvas Indonesia",
    year: "2026",
    result: "3rd Runner-Up + Best Pitch Deck",
    category: "BMC",
    description:
      "Circular economy ecosystem for recycling used cooking oil from households and culinary businesses into biodiesel.",
  },
  {
    id: "sobataman",
    name: "SobatAman",
    event: "UBMCC",
    year: "2026",
    result: "Top 5 Finalist",
    category: "BMC",
    description:
      "AI-based companion platform for people with disabilities with multi-stage support worker verification, real-time family dashboard, AI recommendations, and matchmaking.",
  },
  {
    id: "edusell",
    name: "EduSell",
    event: "I-WEEK",
    year: "2026",
    result: "Finalist",
    category: "BMC",
    description:
      "Digital marketplace for Indonesian teachers to sell teaching materials, aligned with SDGs.",
  },

  // Business Plan
  {
    id: "medilink",
    name: "Medilink",
    event: "Setara Prisma Nusantara x UUM",
    year: "2026",
    result: "Grand Champion + Gold Medal + 3rd Place + Favorite Poster",
    category: "Business Plan",
    description:
      "AI and blockchain health ecosystem for hospital interoperability across Indonesia and ASEAN (AI symptom checker, smart appointment, blockchain medical records).",
  },
  {
    id: "kerjain",
    name: "Kerjain",
    event: "Setara Prisma Nusantara x UUM",
    year: "2026",
    result: "Grand Champion + Gold Medal + 1st Runner-Up + Favorite Poster",
    category: "Business Plan",
    description:
      "Job platform integrated with training and certification for informal workers (job listings, courses, skill assessment, digital certification, employer recruitment dashboard).",
  },
  {
    id: "amora-bp",
    name: "Amora",
    event: "Greennovation UMSIDA",
    year: "2026",
    result: "3rd Place",
    category: "Business Plan",
    description:
      "Sustainable beauty business plan focused on eco-friendly packaging and local Indonesian ingredients.",
  },
  {
    id: "ngajikidz",
    name: "NgajiKidz",
    event: "Dies Maulidiyah IX KSEI FPM UIN Madura",
    year: "2026",
    result: "1st Place",
    category: "Business Plan",
    description:
      "Sharia-based online Qur'an learning platform for children with market sizing, financial projections, and verified teacher structure.",
  },
  {
    id: "pondasi",
    name: "PONDASI",
    event: "NBPC Blitar",
    year: "2026",
    result: "Finalist",
    category: "Business Plan",
    description:
      "High-privacy support platform for teens and young couples on family crisis, violence, and marriage readiness with emergency alerts and AI crisis detection.",
  },

  // Essay
  {
    id: "amora-essay",
    name: "Amora Essay",
    event: "Idea Festival IPB x Sentosa Foundation",
    year: "2026",
    result: "Overall Champion + Best Paper + Gold Medal + 2nd Place",
    category: "Essay",
    description:
      "Academic essay on sustainable business practices in Indonesia's beauty industry via eco-friendly sourcing and packaging.",
  },

  // Publication & Community
  {
    id: "180dc-playbook",
    name: "180DC Playbook 1.0",
    event: "180 Degrees Consulting UB",
    year: "2026",
    result: "Lead Author",
    category: "Community",
    description:
      "Wrote 26 of 79 pages covering case analysis frameworks, presentation storyline formulation, and winning strategies.",
  },
  {
    id: "arktik",
    name: "ARKTIK",
    event: "Raion Hackjam",
    year: "2026",
    category: "Community",
    description:
      "All-in-one trip planner with flight/accommodation search, automatic cost calculation with real-time currency conversion, group expense splitting, diet filters, calendar sync.",
  },
  {
    id: "curhatfinder",
    name: "CurhatFinder",
    event: "Androzon",
    year: "2026",
    category: "Community",
    description:
      "Anonymous community peer-support platform for students to reduce stigma around seeking mental health and academic-pressure help.",
  },
  {
    id: "mbg-plus",
    name: "MBG+",
    event: "Raion Internship",
    year: "2026",
    category: "Community",
    description:
      "Website to digitally transform the government Free Nutritious Meals program (centralized management, monitoring, distribution).",
  },
];
