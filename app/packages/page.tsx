import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { packages } from "@/data/data";

export default function Page() {
  return (
    <main className="bg-black text-white min-h-screen">
      <Navbar />

      <div className="pt-32 px-6 max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-yellow-400 mb-10">
          Tour Packages
        </h1>

        <div className="grid md:grid-cols-3 gap-6">
          {packages.map((pkg, i) => (
            <div
              key={i}
              className="border border-gray-800 p-6 rounded-xl"
            >
              <h3 className="text-xl font-semibold">{pkg.title}</h3>
              <p className="text-gray-400">{pkg.duration}</p>
              <p className="text-yellow-400 mt-2">{pkg.price}</p>

              <a
                href="https://wa.me/919XXXXXXXXX"
                className="mt-4 inline-block bg-green-500 px-4 py-2 rounded"
              >
                Book Now
              </a>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </main>
  );
}