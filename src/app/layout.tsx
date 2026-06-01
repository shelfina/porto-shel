import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

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
      className={`${inter.variable} ${playfair.variable} antialiased`}
    >
      <body className="min-h-screen bg-dark text-white font-sans">
        {children}
      </body>
    </html>
  );
}
