import Hero from "@/components/Hero";
import Packages from "@/components/Packages";
import Services from "@/components/Services";
import StatsBanner from "@/components/StatsBanner";
// import Destinations from "@/components/Destinations";
import Reviews from "@/components/Reviews";
import CTA from "@/components/CTA";
import VehicleRental from "@/components/VehicleRental";

export default function Home() {
  return (
    <>
      <Hero />
      <Packages />
      <Services />
      <VehicleRental />
      {/* <Destinations /> */}
      <Reviews />
      <CTA />
      <StatsBanner/>
    </>
  );
}