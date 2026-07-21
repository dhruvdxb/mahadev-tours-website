import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

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
    <html
      lang="en"
      className="scroll-smooth light"
      style={{ colorScheme: "light" }}
    >
      <body className={inter.className}>
        <Navbar />

        {/* Your page content */}
        <div className="min-h-screen">
          {children}
        </div>

        <Footer />

        {/* Floating WhatsApp Button */}
        <FloatingWhatsApp />
      </body>
    </html>
  );
}