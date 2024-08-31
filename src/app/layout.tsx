import type { Metadata } from "next";
import { Belleza, Josefin_Sans } from "next/font/google";
import "./globals.css";

const josefinSans = Josefin_Sans({ subsets: ["latin"], variable: "--font-josefin-sans", display: "swap" });

const belleza = Belleza({ subsets: ["latin"], variable: "--font-belleza", display: "swap", weight: ["400"] });

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
      <body className={`${josefinSans.className} ${belleza.variable} bg-gray-800`}>{children}</body>
    </html>
  );
}
