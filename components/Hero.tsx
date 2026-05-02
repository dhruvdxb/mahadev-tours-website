export default function Hero() {
    return (
      <section className="py-32 text-center bg-white">
        
        <h1 className="text-5xl md:text-6xl font-bold text-black mb-4">
          Mahadev Tours & Travels
        </h1>
  
        <p className="text-gray-500 text-lg mb-8">
          Safe Journey • Comfortable Stay • Memorable Yatra
        </p>
  
        <div className="flex justify-center gap-4">
          <a
            href="https://wa.me/919998653276"
            className="bg-green-500 text-white px-6 py-3 rounded-lg"
          >
            Book Now
          </a>
  
          <a
            href="/packages"
            className="border border-gray-300 px-6 py-3 rounded-lg"
          >
            View Packages
          </a>
        </div>
  
      </section>
    );
  }