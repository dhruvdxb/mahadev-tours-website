import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp"; // 1. Import it here!

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mahadev Tours & Travels",
  description: "Premium travel experiences and spiritual journeys in Gujarat.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        
        {/* Your page content */}
        <div className="min-h-screen">
          {children}
        </div>
        
        <Footer />
        
        {/* 2. Place it here so it renders on every page! */}
        <FloatingWhatsApp />
        
      </body>
    </html>
  );
}