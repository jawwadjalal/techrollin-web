import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar"; 
import Footer from "@/components/Footer"; // Footer component ko yahan import kiya

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TechRollin | Enterprise AI & Autonomous Agent Systems",
  description: "Engineering the future of enterprise intelligence with custom AI agents and scalable software solutions.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // suppressHydrationWarning browser extensions ke errors ko khatam karega
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.className} bg-black text-white antialiased`}>
        
        {/* Navbar: Har page ke top par fixed rahegi */}
        <Navbar />
        
        {/* Main Content: Jahan aapke pages (Home, Services etc) render honge */}
        <main className="min-h-screen">
          {children}
        </main>

        {/* Footer: Har page ke niche khud-ba-khud nazar aayega */}
        <Footer />
        
      </body>
    </html>
  );
}