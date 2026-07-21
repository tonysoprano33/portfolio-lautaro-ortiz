import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { LocaleProvider } from "@/components/LocaleProvider";
import { AnalyticsProvider } from "@/components/AnalyticsProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://lautaro-ortiz-portfolio.vercel.app"),
  applicationName: "Lautaro Ortiz Portfolio",
  title: {
    default: "Lautaro Ortiz | Internal Tools & Data Automation",
    template: "%s | Lautaro Ortiz",
  },
  description: "Portfolio de Lautaro Ortiz: análisis de problemas operativos, herramientas internas, automatización, dashboards y sistemas usados en operaciones reales.",
  openGraph: {
    title: "Lautaro Ortiz | Internal Tools & Data Automation",
    description: "Portfolio de Lautaro Ortiz: análisis de problemas operativos, herramientas internas, automatización, dashboards y sistemas usados en operaciones reales.",
    url: "https://lautaro-ortiz-portfolio.vercel.app/",
    siteName: "Lautaro Ortiz Portfolio",
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Lautaro Ortiz portfolio preview",
      },
    ],
  },
  authors: [{ name: "Lautaro Ortiz" }],
  creator: "Lautaro Ortiz",
  keywords: [
    "Lautaro Ortiz",
    "data analyst",
    "internal tools",
    "automation",
    "Next.js",
    "Python",
    "business intelligence",
    "Argentina",
  ],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                function getTheme() {
                  const stored = localStorage.getItem('theme');
                  if (stored === 'dark' || stored === 'light') return stored;
                  if (window.matchMedia('(prefers-color-scheme: dark)').matches) return 'dark';
                  return 'light';
                }
                const theme = getTheme();
                if (theme === 'dark') {
                  document.documentElement.classList.add('dark');
                } else {
                  document.documentElement.classList.remove('dark');
                }
              })();
            `,
          }}
        />
      </head>
      <body className="font-sans antialiased bg-background text-primary transition-colors duration-300">
        <Providers>
          <LocaleProvider>
            <AnalyticsProvider>{children}</AnalyticsProvider>
          </LocaleProvider>
        </Providers>
      </body>
    </html>
  );
}
