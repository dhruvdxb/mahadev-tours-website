import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <main className="bg-black text-white min-h-screen">
      <Navbar />

      <div className="pt-32 px-6 max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-yellow-400 mb-8">
          Contact Us
        </h1>

        <form className="space-y-4">
          <input
            type="text"
            placeholder="Name"
            className="w-full p-3 bg-black border border-gray-700 rounded"
          />

          <input
            type="text"
            placeholder="Phone"
            className="w-full p-3 bg-black border border-gray-700 rounded"
          />

          <textarea
            placeholder="Message"
            className="w-full p-3 bg-black border border-gray-700 rounded"
          />

          <button className="bg-yellow-400 text-black px-6 py-3 rounded">
            Submit
          </button>
        </form>

        <div className="mt-8">
          <p>📞 +91 XXXXX XXXXX</p>
          <p>📍 Gujarat, India</p>

          <a
            href="https://wa.me/919XXXXXXXXX"
            className="inline-block mt-4 bg-green-500 px-6 py-3 rounded"
          >
            Chat on WhatsApp
          </a>
        </div>
      </div>

      <Footer />
    </main>
  );
}