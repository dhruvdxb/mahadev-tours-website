// data/packages.ts

export type TourPackage = {
    id: number;
    title: string;
    description?: string;
    duration: string;
    departureDates?: string[];
    vehicle: string;
    inclusions: string[];
    price: {
      startingFrom: number;
      details: string;
      oldPrice?: number;
    };
    location: string;
    categories: string[];
    notes?: string;
    image: string;
    gallery?: string[];
    itinerary?: {
      day: string;
      title: string;
      details: string;
    }[];
  };
  
  export const tourPackages: TourPackage[] = [
    {
      id: 1,
      title: "Maharashtra Jyotirlinga (Grishneshwar, Bhimashankar & Trimbakeshwar)",
      duration: "3 Days",
      departureDates: ["July 30 (Thursday Night)"],
      vehicle: "Sleeper AC Bus",
      inclusions: ["Meals", "Stay", "Sightseeing"],
      price: { startingFrom: 5001, details: "Upper Berth", oldPrice: 6500 },
      location: "Maharashtra",
      categories: ["Religious"],
      image: "/Images/Maharashtra Jyotirlinga.png",
      gallery: [
        "/Images/Maharashtra Jyotirlinga.png",
        "/Images/Saurastra.png",
        "/Images/Ujjain-Omkareshwer.png"
      ],
      itinerary: [
        { day: "Day 0", title: "Overnight journey from Surat", details: "Board the sleeper AC bus at night and begin your spiritual journey towards Maharashtra." },
        { day: "Day 1", title: "Trimbakeshwar Darshan & Transfer", details: "Morning arrival, freshen up, and proceed for Trimbakeshwar Jyotirlinga darshan. Later, travel to the next destination and check-in to the hotel." },
        { day: "Day 2", title: "Grishneshwar & Bhimashankar", details: "Visit the remaining two holy Jyotirlingas. Evening return journey back to Surat." }
      ]
    },
    {
      id: 2,
      title: "Mayadevi Waterfall Monsoon Special",
      duration: "1 Day",
      departureDates: ["July 4 (Saturday)", "July 19 (Sunday)"],
      vehicle: "Seating Bus",
      inclusions: ["Tea", "Breakfast", "Meals"],
      price: { startingFrom: 900, details: "All Inclusive" },
      location: "Gujarat",
      categories: ["Monsoon", "Weekend Trip"],
      image: "/Images/Mayadevi Waterfall.png",
      gallery: [
        "/Images/Mayadevi Waterfall.png",
        "/Images/Padamdungari & Unai Nature Tour.png",
        "/Images/Vangan-Ankda Waterfall Tour.png"
      ],
      itinerary: [
        { day: "Day 1", title: "Morning Departure & Waterfall Visit", details: "Early morning departure. Enjoy breakfast on the way. Spend the day enjoying the lush green monsoon views and the majestic Mayadevi Waterfall. Return by evening." }
      ]
    },
    {
      id: 3,
      title: "Padamdungari & Unai Nature Tour",
      duration: "1 Day",
      departureDates: ["July 5 (Sunday)", "July 18 (Saturday)"],
      vehicle: "Seating Bus",
      inclusions: ["Transportation Only"],
      price: { startingFrom: 500, details: "Fare Only" },
      location: "Gujarat",
      categories: ["Monsoon", "Family"],
      image: "/Images/Padamdungari & Unai Nature Tour.png",
      gallery: ["/Images/Padamdungari & Unai Nature Tour.png", "/Images/Mayadevi Waterfall.png"],
      itinerary: [
        { day: "Day 1", title: "Nature Tour", details: "Explore the beautiful natural surroundings of Padamdungari and take a dip in the Unai hot springs." }
      ]
    },
    {
      id: 4,
      title: "Vangan-Ankda Waterfall Tour",
      duration: "1 Day",
      departureDates: ["July 11 (Saturday)", "July 26 (Sunday)"],
      vehicle: "Seating Bus",
      inclusions: ["Tea", "Breakfast", "Meals"],
      price: { startingFrom: 900, details: "All Inclusive" },
      location: "Gujarat",
      categories: ["Monsoon", "Weekend Trip"],
      image: "/Images/Vangan-Ankda Waterfall Tour.png",
      gallery: ["/Images/Vangan-Ankda Waterfall Tour.png"],
      itinerary: [
        { day: "Day 1", title: "Waterfall Exploration", details: "A full day of fun and trekking near the Vangan-Ankda waterfalls." }
      ]
    },
    {
      id: 5,
      title: "Saputara, Gira Waterfall & Waghai Garden One-Day Picnic",
      duration: "1 Day",
      departureDates: ["July 12 (Sunday)", "July 25 (Saturday)"],
      vehicle: "Seating Bus",
      inclusions: ["Transportation Only"],
      price: { startingFrom: 600, details: "Fare Only" },
      location: "Saputara, Gujarat",
      categories: ["Monsoon", "Family"],
      image: "/Images/Saputara, Gira Waterfall.png",
      gallery: ["/Images/Saputara, Gira Waterfall.png"],
      itinerary: [
        { day: "Day 1", title: "Saputara Sightseeing", details: "Visit Waghai Botanical Garden, witness the massive Gira Waterfall, and enjoy the hill station vibes at Saputara lake." }
      ]
    },
    {
      id: 6,
      title: "Statue of Unity, Harsiddhi Mata & Gumandev Darshan",
      duration: "1 Day",
      departureDates: ["July 26 (Sunday)"],
      vehicle: "Seating Bus",
      inclusions: ["Transportation Only"],
      price: { startingFrom: 600, details: "Fare Only" },
      location: "Kevadia, Gujarat",
      categories: ["Family", "Religious"],
      image: "/Images/Statue of Unity.png",
      gallery: ["/Images/Statue of Unity.png"],
      itinerary: [
        { day: "Day 1", title: "SOU & Temples", details: "Morning darshan at Gumandev and Harsiddhi Mata. Afternoon visit to the world's tallest statue, the Statue of Unity." }
      ]
    },
    {
      id: 7,
      title: "Ujjain & Omkareshwar Spiritual Tour",
      description: "Includes Mahakaleshwar, Kal Bhairav, Harsiddhi Ma, Baglamukhi, Sehore Kubereshwar Dham, Omkareshwar, and Mamleshwar.",
      duration: "3 Days (1 Night Ujjain)",
      departureDates: ["July 9 (Thursday)", "July 23 (Thursday)"],
      vehicle: "Sleeper AC Bus",
      inclusions: ["Tea/Breakfast", "Meals", "Stay"],
      price: { startingFrom: 5100, details: "Upper Berth" },
      notes: "Sightseeing at own cost.",
      location: "Madhya Pradesh",
      categories: ["Religious"],
      image: "/Images/Ujjain-Omkareshwer.png",
      gallery: ["/Images/Ujjain-Omkareshwer.png", "/Images/Maharashtra Jyotirlinga.png"],
      itinerary: [
        { day: "Day 1", title: "Journey to Ujjain", details: "Overnight journey from Surat." },
        { day: "Day 2", title: "Mahakaleshwar & Local Temples", details: "Visit Mahakaleshwar Jyotirlinga, Kal Bhairav, and Harsiddhi Mata. Night stay in Ujjain." },
        { day: "Day 3", title: "Omkareshwar & Return", details: "Travel to Omkareshwar for Jyotirlinga darshan. Evening departure for Surat." }
      ]
    },
    {
      id: 8,
      title: "Diu, Somnath & Dwarka Spiritual Tour",
      description: "Includes Somnath (1 Night), Dwarka (1 Night), Rukmini Temple, Bet Dwarka, Gopi Talav, Nageshwar.",
      duration: "3 Days",
      departureDates: ["July 9 (Thursday)", "July 23 (Thursday)"],
      vehicle: "Sleeper AC Bus",
      inclusions: ["Tea/Breakfast", "Meals", "Stay"],
      price: { startingFrom: 5100, details: "Upper Berth" },
      notes: "Sightseeing at own cost.",
      location: "Gujarat / Diu",
      categories: ["Religious"],
      image: "/Images/Saurastra.png",
      gallery: ["/Images/Saurastra.png", "/Images/Statue of Unity.png"],
      itinerary: [
        { day: "Day 1", title: "Somnath Darshan", details: "Arrival in Somnath. Jyotirlinga darshan and night stay." },
        { day: "Day 2", title: "Dwarka", details: "Travel to Dwarka. Visit Dwarkadhish Temple and local sightseeing. Night Stay." },
        { day: "Day 3", title: "Bet Dwarka & Return", details: "Visit Nageshwar Jyotirlinga, Rukmini Temple, and Bet Dwarka. Evening return journey." }
      ]
    }
  ];