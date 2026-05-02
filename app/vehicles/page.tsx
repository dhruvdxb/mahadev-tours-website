import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const vehicles = [
  { name: "Bus", desc: "Best for large group travel" },
  { name: "Tempo Traveller", desc: "Comfort for group trips" },
  { name: "Car Rental", desc: "Flexible personal travel" },
];

export default function Page() {
  return (
    <main className="bg-black text-white min-h-screen">
      <Navbar />

      <div className="pt-32 px-6 max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-yellow-400 mb-10">
          Vehicles
        </h1>

        <div className="grid md:grid-cols-3 gap-6">
          {vehicles.map((v, i) => (
            <div
              key={i}
              className="border border-gray-800 p-6 rounded-xl"
            >
              <h3 className="text-xl font-semibold">{v.name}</h3>
              <p className="text-gray-400">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </main>
  );
}