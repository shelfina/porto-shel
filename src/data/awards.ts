export interface Award {
  id: number;
  title: string;
  event: string;
  result: string;
  type: "competition" | "organization";
  resultColor: "brand" | "amber" | "blue" | "purple";
}

export const awards: Award[] = [
  {
    id: 1,
    title: "CashFlow Radar",
    event: "Accounting Fest 2026",
    result: "Juara 1 (National)",
    type: "competition",
    resultColor: "brand",
  },
  {
    id: 2,
    title: "JELANTIKU",
    event: "Canvas Indonesia 2026",
    result: "Juara Harapan 1 + Best Pitch Deck",
    type: "competition",
    resultColor: "brand",
  },
  {
    id: 3,
    title: "Amora",
    event: "Greennovation Unismuh Sidoarjo 2026",
    result: "Juara 3",
    type: "competition",
    resultColor: "amber",
  },
  {
    id: 4,
    title: "ReBite",
    event: "T-Arts 3.0 Atma Jaya 2026",
    result: "Top 4 Finalist",
    type: "competition",
    resultColor: "blue",
  },
  {
    id: 5,
    title: "PONDASI",
    event: "NBPC Blitar 2026",
    result: "Finalist",
    type: "competition",
    resultColor: "blue",
  },
  {
    id: 6,
    title: "TenangIn",
    event: "Future Founders League 2026",
    result: "Top 10-20 Finalist",
    type: "competition",
    resultColor: "purple",
  },
  {
    id: 7,
    title: "Best Ministry Staff (3rd Period)",
    event: "SGE FILKOM UB",
    result: "Best Ministry Staff",
    type: "organization",
    resultColor: "brand",
  },
];

export const statsBar = {
  totalCompetitions: 13,
  podiumFinishes: 6,
  specialAwards: 2,
};
