export interface Award {
  id: number;
  title: string;
  event: string;
  result: string;
  type: "competition" | "organization";
  resultColor: "brand" | "amber" | "blue" | "purple";
}

export const awards: Award[] = [
  // Competition Wins (16)
  {
    id: 1,
    title: "1st Runner Up International Business Plan Competition",
    event: "Setara Prisma Nusantara (Nusantara Muda) in Collaboration with Majlis Perwakilan Pelajar Universiti Utara Malaysia (MPP UUM) · Aug 2026",
    result: "1st Runner Up",
    type: "competition",
    resultColor: "amber"
  },
  {
    id: 2,
    title: "3rd Place Winner International Business Plan Competition",
    event: "Setara Prisma Nusantara (Nusantara Muda) in Collaboration with Majlis Perwakilan Pelajar Universiti Utara Malaysia (MPP UUM) · Aug 2026",
    result: "3rd Place Winner",
    type: "competition",
    resultColor: "blue"
  },
  {
    id: 3,
    title: "Favorite Poster International Business Plan Competition",
    event: "Setara Prisma Nusantara (Nusantara Muda) in Collaboration with Majlis Perwakilan Pelajar Universiti Utara Malaysia (MPP UUM) · Aug 2026",
    result: "Favorite Poster in the Health Sub-theme",
    type: "competition",
    resultColor: "purple"
  },
  {
    id: 4,
    title: "Favorite Poster International Business Plan Competition",
    event: "Setara Prisma Nusantara (Nusantara Muda) in Collaboration with Majlis Perwakilan Pelajar Universiti Utara Malaysia (MPP UUM) · Aug 2026",
    result: "Favorite Poster in the Service Sub-theme",
    type: "competition",
    resultColor: "purple"
  },
  {
    id: 5,
    title: "Gold Medal International Business Plan Competition",
    event: "Setara Prisma Nusantara (Nusantara Muda) in Collaboration with Majlis Perwakilan Pelajar Universiti Utara Malaysia (MPP UUM) · Aug 2026",
    result: "Gold Medal in the Service Sub-theme",
    type: "competition",
    resultColor: "brand"
  },
  {
    id: 6,
    title: "Gold Medal International Business Plan Competition",
    event: "Setara Prisma Nusantara (Nusantara Muda) in Collaboration with Majlis Perwakilan Pelajar Universiti Utara Malaysia (MPP UUM) · Aug 2026",
    result: "Gold Medal in the Health Sub-theme",
    type: "competition",
    resultColor: "brand"
  },
  {
    id: 7,
    title: "Grand Champion International Business Plan Competition",
    event: "Setara Prisma Nusantara (Nusantara Muda) in Collaboration with Majlis Perwakilan Pelajar Universiti Utara Malaysia (MPP UUM) · Aug 2026",
    result: "Grand Champion",
    type: "competition",
    resultColor: "brand"
  },
  {
    id: 8,
    title: "1st Place Winner Business Plan Competition",
    event: "Dies Maulidiyah IX KSEI FPM FEBI UIN MADURA · Jul 2026",
    result: "1st Place Winner",
    type: "competition",
    resultColor: "brand"
  },
  {
    id: 9,
    title: "2nd Place Winner Essay Competition",
    event: "Idea Festival (IDF) 5, organized by Bogor Science Club (BSC) IPB University and Sentosa Foundation · Jun 2026",
    result: "2nd Place Winner",
    type: "competition",
    resultColor: "amber"
  },
  {
    id: 10,
    title: "Best Paper Essay Competition",
    event: "Idea Festival (IDF) 5, organized by Bogor Science Club (BSC) IPB University and Sentosa Foundation · Jun 2026",
    result: "Best Paper",
    type: "competition",
    resultColor: "purple"
  },
  {
    id: 11,
    title: "Gold Medal Essay Competition",
    event: "Idea Festival (IDF) 5, organized by Bogor Science Club (BSC) IPB University and Sentosa Foundation · Jun 2026",
    result: "Gold Medal",
    type: "competition",
    resultColor: "brand"
  },
  {
    id: 12,
    title: "Overall Champion Essay Competition",
    event: "Idea Festival (IDF) 5, organized by Bogor Science Club (BSC) IPB University and Sentosa Foundation · Jun 2026",
    result: "Overall Champion",
    type: "competition",
    resultColor: "brand"
  },
  {
    id: 13,
    title: "3rd Runner Up BMC Competition",
    event: "Canvas Indonesia · Mar 2026",
    result: "3rd Runner Up",
    type: "competition",
    resultColor: "blue"
  },
  {
    id: 14,
    title: "Best Pitch Deck BMC Competition",
    event: "Canvas Indonesia · Mar 2026",
    result: "Best Pitch Deck",
    type: "competition",
    resultColor: "purple"
  },
  {
    id: 15,
    title: "1st Place Winner BMC Competition",
    event: "Nusantara PGRI University Kediri · Jan 2026",
    result: "1st Place Winner",
    type: "competition",
    resultColor: "brand"
  },
  {
    id: 16,
    title: "3rd Place Winner Business Plan Competition",
    event: "Muhammadiyah University of Sidoarjo · Jan 2026",
    result: "3rd Place Winner",
    type: "competition",
    resultColor: "blue"
  },
  // Organizational Honors (2)
  {
    id: 17,
    title: "Best Function Analyst Strategy and Growth (2nd Quarter)",
    event: "180 Degrees Consulting - Universitas Brawijaya · Jul 2026",
    result: "Best Function Analyst Strategy and Growth (2nd Quarter)",
    type: "organization",
    resultColor: "purple"
  },
  {
    id: 18,
    title: "Best Talent Growth Ministry Staff (3rd Period)",
    event: "BEM Fakultas Ilmu Komputer Universitas Brawijaya · Nov 2025",
    result: "Best Talent Growth Ministry Staff (3rd Period)",
    type: "organization",
    resultColor: "purple"
  }
];

export const statsBar = {
  totalCompetitions: 17,
  podiumFinishes: 8,
  specialAwards: 2,
};
