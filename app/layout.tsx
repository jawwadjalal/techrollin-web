import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google"; // Fonts import
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// app/layout.tsx mein Metadata object ko update karein
export const metadata = {
  title: "TechRollin | Enterprise AI Agents",
  description: "Autonomous AI solutions for modern enterprises.",
  robots: {
    index: false, // Crawlers ko index karne se rokta hai
    follow: false,
    nocache: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}