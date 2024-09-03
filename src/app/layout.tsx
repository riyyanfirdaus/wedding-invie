import type { Metadata } from "next";
import { Belleza, Josefin_Sans } from "next/font/google";
import "./globals.css";
import { photoGallery } from "@/constants/gallery";

const josefinSans = Josefin_Sans({ subsets: ["latin"], variable: "--font-josefin-sans", display: "swap" });

const belleza = Belleza({ subsets: ["latin"], variable: "--font-belleza", display: "swap", weight: ["400"] });

export const metadata: Metadata = {
  title: "The Wedding of Syifa & Akbar - Wedding Invie",
  description: "Undangan Pernikahan Syifa & Akbar",
  openGraph: {
    title: "The Wedding of Syifa & Akbar - Wedding Invie",
    description: "Undangan Pernikahan Syifa & Akbar",
    url: "https://syifaakbar-wedding-invie.vercel.app/",
    siteName: "Wedding Invie",
    type: "website",
    images: [
      {
        url: "https://res.cloudinary.com/devyan/image/upload/v1725339852/Syifa%20Akbar%20Wedding/og-img_yt2voi.jpg",
        secureUrl: "https://res.cloudinary.com/devyan/image/upload/v1725339852/Syifa%20Akbar%20Wedding/og-img_yt2voi.jpg",
        width: 260,
        height: 500,
        alt: "Syifa & Akbar Wedding",
        type: "image/png",
      },
    ],
  },
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
