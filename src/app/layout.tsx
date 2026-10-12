import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
  weight: ["500", "600", "700", "800"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["400", "500", "600"],
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0B1020" },
    { media: "(prefers-color-scheme: light)", color: "#F7F8FF" },
  ],
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://shelfina-porto.vercel.app"),
  title: {
    default: "Shelfina Khayla Anindita — Product Analyst & PM",
    template: "%s | Shelfina Khayla Anindita",
  },
  description:
    "Portfolio of Shelfina Khayla Anindita — Product Manager, Product Analyst, System Analyst, and Business Strategist. Information Technology Education undergraduate at Brawijaya University with 16 competition awards.",
  keywords: [
    "Shelfina Khayla Anindita",
    "Shelfina",
    "Shel",
    "Product Manager",
    "Product Analyst",
    "System Analyst",
    "Business Strategy",
    "Brawijaya University",
    "FILKOM UB",
    "Portfolio",
    "180 Degrees Consulting",
  ],
  authors: [{ name: "Shelfina Khayla Anindita" }],
  creator: "Shelfina Khayla Anindita",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://shelfina-porto.vercel.app",
    title: "Shelfina Khayla Anindita — Product Analyst & PM",
    description:
      "Product Manager, Product Analyst, System Analyst, and Business Strategy. Information Technology Education undergraduate at Brawijaya University.",
    siteName: "Shelfina Khayla Anindita Portfolio",
    images: [
      {
        url: "https://i.imgur.com/6ZEKifj.jpg",
        width: 1200,
        height: 630,
        alt: "Shelfina Khayla Anindita",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shelfina Khayla Anindita — Product Analyst & PM",
    description:
      "Product Manager, Product Analyst, System Analyst, and Business Strategy. Information Technology Education undergraduate at Brawijaya University.",
    images: ["https://i.imgur.com/6ZEKifj.jpg"],
  },
  alternates: {
    canonical: "https://shelfina-porto.vercel.app",
  },
  robots: {
    index: true,
    follow: true,
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
      suppressHydrationWarning
      className={`${plusJakartaSans.variable} ${inter.variable}`}
    >
      <head>
        {/* Anti-flash theme initialization script */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const stored = localStorage.getItem('theme');
                  if (stored === 'light' || stored === 'dark') {
                    document.documentElement.setAttribute('data-theme', stored);
                  } else {
                    document.documentElement.setAttribute('data-theme', 'dark');
                  }
                } catch (e) {
                  document.documentElement.setAttribute('data-theme', 'dark');
                }
              })();
            `,
          }}
        />
      </head>
      <body>
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
