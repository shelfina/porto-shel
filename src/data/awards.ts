export interface AwardItem {
  id: string;
  title: string;
  subtitle?: string;
  certificateUrl: string;
  badge?: string;
}

export interface CompetitionGroup {
  id: string;
  competitionName: string;
  organizer: string;
  date: string;
  awards: AwardItem[];
}

export interface OrganizationalAward {
  id: string;
  title: string;
  organization: string;
  date: string;
  imageUrl: string;
  fallbackImage: string;
  alt: string;
}

export const awardsSummaryBadge = "16 Awards · 2 Organizational Awards";

export const competitionGroups: CompetitionGroup[] = [
  {
    id: "uum-2026",
    competitionName: "International Business Plan Competition",
    organizer: "Setara Prisma Nusantara x MPP Universiti Utara Malaysia (UUM)",
    date: "Aug 2026",
    awards: [
      {
        id: "uum-1",
        title: "Grand Champion",
        subtitle: "International Business Plan Competition",
        certificateUrl: "https://drive.google.com/file/d/1dpoldXjJnIs-wGdD4DW2-m9Dc8qZ2J-j/view?usp=drive_link",
        badge: "Grand Champion",
      },
      {
        id: "uum-2",
        title: "Gold Medal (Health Sub-theme)",
        subtitle: "Medilink",
        certificateUrl: "https://drive.google.com/file/d/1YbVLt6Sh06kRNCyUCAFO8qCJVvGaNPQU/view?usp=drive_link",
        badge: "Gold Medal",
      },
      {
        id: "uum-3",
        title: "Gold Medal (Service Sub-theme)",
        subtitle: "Kerjain",
        certificateUrl: "https://drive.google.com/file/d/12ky1kf5DVHqTlwr-fpYCTg8MaQjV7dQ8/view?usp=drive_link",
        badge: "Gold Medal",
      },
      {
        id: "uum-4",
        title: "1st Runner-Up",
        subtitle: "Kerjain",
        certificateUrl: "https://drive.google.com/file/d/1xhZdcbNzQx0w_rXy46c6oXaf9sOXRuJN/view?usp=sharing",
        badge: "1st Runner-Up",
      },
      {
        id: "uum-5",
        title: "3rd Place Winner",
        subtitle: "Medilink",
        certificateUrl: "https://drive.google.com/file/d/1lyKi_iNcol5Qm5qFncq-c588KI5TkNIN/view?usp=drive_link",
        badge: "3rd Place",
      },
      {
        id: "uum-6",
        title: "Favorite Poster (Health Sub-theme)",
        subtitle: "Medilink",
        certificateUrl: "https://drive.google.com/file/d/1AMVQbGwjP_CIQscGMgi9oiMeR4Ve_1QX/view?usp=drive_link",
        badge: "Favorite Poster",
      },
      {
        id: "uum-7",
        title: "Favorite Poster (Service Sub-theme)",
        subtitle: "Kerjain",
        certificateUrl: "https://drive.google.com/file/d/1fFyWZdK2aouEsmz9TxLbfYYy0ByIFby5/view?usp=drive_link",
        badge: "Favorite Poster",
      },
    ],
  },
  {
    id: "ipb-2026",
    competitionName: "Idea Festival (IDF) 5 — Essay Competition",
    organizer: "IPB University x Sentosa Foundation",
    date: "Jun 2026",
    awards: [
      {
        id: "ipb-1",
        title: "Overall Champion",
        subtitle: "Essay Competition",
        certificateUrl: "https://drive.google.com/file/d/1Nwl62APUzIVSDzE0w4JDxMV6P0e-gJfR/view?usp=drive_link",
        badge: "Overall Champion",
      },
      {
        id: "ipb-2",
        title: "Best Paper",
        subtitle: "Amora Essay",
        certificateUrl: "https://drive.google.com/file/d/1My5z1RfBynZKbtuWSuk2m2FTy72iECj-/view?usp=drive_link",
        badge: "Best Paper",
      },
      {
        id: "ipb-3",
        title: "Gold Medal",
        subtitle: "Amora Essay",
        certificateUrl: "https://drive.google.com/file/d/1F5XV-B4K2YPbmSKOauZiHRTT6UhG4lDu/view?usp=drive_link",
        badge: "Gold Medal",
      },
      {
        id: "ipb-4",
        title: "2nd Place Winner",
        subtitle: "Amora Essay",
        certificateUrl: "https://drive.google.com/file/d/1hWbG4nYM4rzrLU5z4oSxi49jTDdlI0v3/view?usp=drive_link",
        badge: "2nd Place",
      },
    ],
  },
  {
    id: "canvas-2026",
    competitionName: "BMC Competition",
    organizer: "Canvas Indonesia",
    date: "Mar 2026",
    awards: [
      {
        id: "canvas-1",
        title: "3rd Runner-Up",
        subtitle: "Jelantiku (BMC Competition)",
        certificateUrl: "https://drive.google.com/file/d/1Xua50Lk4A8zz2isIMVtrizQ7uC4GtoXx/view?usp=drive_link",
        badge: "3rd Runner-Up",
      },
      {
        id: "canvas-2",
        title: "Best Pitch Deck",
        subtitle: "Jelantiku (BMC Competition)",
        certificateUrl: "https://drive.google.com/file/d/1AY96rIXgqmQ2-kHvIvypMR2RrTU4ordh/view?usp=drive_link",
        badge: "Best Pitch Deck",
      },
    ],
  },
  {
    id: "uin-2026",
    competitionName: "Dies Maulidiyah IX Business Plan Competition",
    organizer: "KSEI FPM FEBI UIN Madura",
    date: "Jul 2026",
    awards: [
      {
        id: "uin-1",
        title: "1st Place Winner",
        subtitle: "NgajiKidz (Business Plan Competition)",
        certificateUrl: "https://drive.google.com/file/d/1omB5vQhFJVObQ7tTvQRKXVaP0b39B0UZ/view?usp=drive_link",
        badge: "1st Place",
      },
    ],
  },
  {
    id: "unp-2026",
    competitionName: "Accounting Fest — BMC Competition",
    organizer: "Nusantara PGRI University Kediri",
    date: "Jan 2026",
    awards: [
      {
        id: "unp-1",
        title: "1st Place Winner",
        subtitle: "Cash Flow Radar (Accounting Fest, BMC Competition)",
        certificateUrl: "https://drive.google.com/file/d/1LORFbmn6papJOZAeeeynsbtkMFwEtong/view?usp=drive_link",
        badge: "1st Place (National)",
      },
    ],
  },
  {
    id: "umsida-2026",
    competitionName: "Greennovation — Business Plan Competition",
    organizer: "Muhammadiyah University of Sidoarjo (UMSIDA)",
    date: "Jan 2026",
    awards: [
      {
        id: "umsida-1",
        title: "3rd Place Winner",
        subtitle: "Amora (Greennovation, Business Plan Competition)",
        certificateUrl: "https://drive.google.com/file/d/1gXUTiGC_rORAwGF4PaS0CAWpkTSrODZM/view?usp=drive_link",
        badge: "3rd Place",
      },
    ],
  },
];

export const organizationalAwards: OrganizationalAward[] = [
  {
    id: "org-180dc",
    title: "Best Function Analyst Strategy and Growth (2nd Quarter)",
    organization: "180 Degrees Consulting Universitas Brawijaya",
    date: "Jul 2026",
    imageUrl: "https://i.imgur.com/CSw4ya0.jpg",
    fallbackImage: "/images/award-180dc.jpg",
    alt: "Best Function Analyst Strategy and Growth Certificate, 180DC UB",
  },
  {
    id: "org-bem",
    title: "Best Talent Growth Ministry Staff (3rd Period)",
    organization: "BEM Fakultas Ilmu Komputer Universitas Brawijaya",
    date: "Nov 2025",
    imageUrl: "https://i.imgur.com/kNDajKm.jpg",
    fallbackImage: "/images/award-bem.jpg",
    alt: "Best Talent Growth Ministry Staff Certificate, BEM FILKOM UB",
  },
];
