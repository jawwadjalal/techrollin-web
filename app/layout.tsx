import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar"; 
import Footer from "@/components/Footer"; 

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
    // Next.js ko html aur body tags lazmi chahiye hote hain
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.className} bg-black text-white antialiased`}>
        
        {/* Navbar globally yahan rahegi */}
        <Navbar />
        
        {/* Main content area */}
        <main className="min-h-screen">
          {children}
        </main>

        {/* Footer globally yahan rahega */}
        <Footer />
        
      </body>
    </html>
  );
}