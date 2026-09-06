import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shelfina Khayla Anindita — Product Analyst & PM",
  description:
    "Personal portfolio of Shelfina Khayla Anindita — Product Analyst, Project Manager, and Business Strategist. Information Technology Education student at Brawijaya University.",
  keywords: [
    "Shelfina Khayla Anindita",
    "Product Analyst",
    "Project Manager",
    "Business Strategist",
    "Brawijaya University",
    "Portfolio",
  ],
  authors: [{ name: "Shelfina Khayla Anindita" }],
  openGraph: {
    title: "Shelfina Khayla Anindita — Product Analyst & PM",
    description:
      "Personal portfolio of Shelfina Khayla Anindita — Product Analyst, Project Manager, and Business Strategist.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shelfina Khayla Anindita — Product Analyst & PM",
    description:
      "Personal portfolio of Shelfina Khayla Anindita — Product Analyst, Project Manager, and Business Strategist.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="antialiased"
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap" rel="stylesheet" />
      </head>
      <body className="min-h-screen bg-dark text-white font-sans">
        {children}
      </body>
    </html>
  );
}
