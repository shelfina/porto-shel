export interface ProfileData {
  name: string;
  nickname: string;
  tagline: string;
  descriptor: string;
  aboutText: string;
  highlightChips: string[];
  gpa: string;
  contacts: {
    whatsapp: string;
    email: string;
    linkedin: string;
  };
  photos: {
    hero: {
      url: string;
      fallback: string;
      alt: string;
    };
    about: {
      url: string;
      fallback: string;
      alt: string;
    };
  };
}

export const profileData: ProfileData = {
  name: "Shelfina Khayla Anindita",
  nickname: "Shel",
  tagline: "Product Manager, Product Analyst, System Analyst, and Business Strategy",
  descriptor: "Information Technology Education undergraduate, Brawijaya University",
  aboutText:
    "Information Technology Education undergraduate at Brawijaya University with a strong focus on Product Management, Project Management, System Analysis, and Business Strategy. Proven track record in leading product initiatives, driving cross-functional collaboration, and winning national and international business competitions. Experienced in translating market and user insights into product strategies, user flows, financial models, and go-to-market roadmaps.",
  highlightChips: [
    "Product Management",
    "System Analysis",
    "Business Strategy",
  ],
  gpa: "3.93/4.0",
  contacts: {
    whatsapp: "https://wa.me/+6281336171455",
    email: "shelfinakhayla_@student.ub.ac.id",
    linkedin: "https://www.linkedin.com/in/shelfina-khayla-anindita",
  },
  photos: {
    // Direct Imgur image URL. If this fails to load, place local image at /public/images/hero-photo.jpg
    hero: {
      url: "https://i.imgur.com/6ZEKifj.jpg",
      fallback: "/images/hero-photo.jpg",
      alt: "Shelfina Khayla Anindita in Brawijaya University alma mater jacket",
    },
    // Direct Imgur image URL. If this fails to load, place local image at /public/images/about-photo.jpg
    about: {
      url: "https://i.imgur.com/rebOFPG.jpg",
      fallback: "/images/about-photo.jpg",
      alt: "Shelfina Khayla Anindita formal portrait in Brawijaya University alma mater jacket",
    },
  },
};
