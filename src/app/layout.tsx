import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { LocaleProvider } from "@/components/LocaleProvider";

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
  title: "Lautaro Ortiz | Data Analyst Portfolio",
  description: "Portfolio profesional de Lautaro Ortiz - Data Analyst & Business Intelligence Specialist",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased bg-background text-primary transition-colors duration-300">
        <Providers>
          <LocaleProvider>
            {children}
          </LocaleProvider>
        </Providers>
      </body>
    </html>
  );
}
