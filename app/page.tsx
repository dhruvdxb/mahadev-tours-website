import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Packages from "@/components/Packages";
import Services from "@/components/Services";
// import Banner from "@/components/Banner";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-gradient-to-b from-[#020617] via-[#020617] to-black text-white">
      <Navbar />
      <Hero />
      <Packages />
      <Services />
      <CTA />
      <Footer />
      {/* <Banner /> */}
    </main>
  );
}