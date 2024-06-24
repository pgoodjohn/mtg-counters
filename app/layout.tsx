import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import 'mana-font/css/mana.min.css';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MTG Counters",
  description: "Life counters for Magic: The Gathering",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
