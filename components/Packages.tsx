import { packages } from "@/data/data";

export default function Packages() {
  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold mb-10 text-yellow-400">
        Popular Packages
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        {packages.slice(0, 3).map((pkg, i) => (
          <div
            key={i}
            className="border border-gray-800 p-6 rounded-xl hover:border-yellow-400 transition"
          >
            <h3 className="text-xl font-semibold mb-2">{pkg.title}</h3>
            <p className="text-gray-400">{pkg.duration}</p>
            <p className="text-yellow-400 mt-2">{pkg.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
}