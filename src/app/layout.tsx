import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Oracle AI - Life-First Business Design",
  description: "Get £1,250/day board-level insights for less than your monthly coffee budget. No buzzwords. No 4am hustle. Just clear answers to what actually matters.",
  keywords: "business coaching, AI advisor, board-level insights, life-first business, UK founders",
  openGraph: {
    title: "Oracle AI - Life-First Business Design",
    description: "Get £1,250/day board-level insights for less than your monthly coffee budget.",
    type: "website",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: "Oracle AI - Life-First Business Design",
    description: "Get £1,250/day board-level insights for less than your monthly coffee budget.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
