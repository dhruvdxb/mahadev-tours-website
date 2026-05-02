export default function Services() {
    return (
      <section className="py-20 text-center">
        <h2 className="text-3xl font-bold text-yellow-400 mb-6">
          Our Services
        </h2>
  
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="border border-gray-800 p-6 rounded-xl">
            Bus Booking
          </div>
          <div className="border border-gray-800 p-6 rounded-xl">
            Tempo Traveller
          </div>
          <div className="border border-gray-800 p-6 rounded-xl">
            Car Rental
          </div>
        </div>
      </section>
    );
  }