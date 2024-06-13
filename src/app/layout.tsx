import type { Metadata } from "next";
import { Great_Vibes, Josefin_Sans } from "next/font/google";
import "./globals.css";

const josefinSans = Josefin_Sans({ subsets: ["latin"], variable: "--font-josefin-sans", display: "swap" });

const greatVibes = Great_Vibes({ subsets: ["latin"], variable: "--font-great-vibes", display: "swap", weight: ["400"] });

export const metadata: Metadata = {
  title: "Akbar & Syifa - Wedding Invie",
  description: "Wedding invitation of Akbar & Syifa",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${josefinSans.className} ${greatVibes.variable} bg-accent`}>{children}</body>
    </html>
  );
}
