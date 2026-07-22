import Link from "next/link";
import { MapPin, Phone } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 py-12 border-t border-gray-800">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          
          {/* Column 1: Brand & Bio */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Mahadev Tour & Travels</h3>
            <p className="text-sm text-gray-400 max-w-sm leading-relaxed">
              Luxury travel booking, religious tours, and luxury transport in Surat, Gujarat. Experience the soul of India with expertly curated itineraries and comfortable sleeper coaches.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-primary transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/packages" className="hover:text-primary transition-colors">Explore Packages</Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">Our Vehicles</Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Contact Us</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center gap-3">
                <div className="bg-primary/20 p-2 rounded-full">
                  <Phone className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-white">Call or WhatsApp</p>
                  <p>+91 78020 62340 - Ajay Patel</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="bg-primary/20 p-2 rounded-full mt-1">
                  <MapPin className="w-4 h-4 text-primary" />
                </div>
                <div>
                  {/* Fixed: Removed <Address> tag that caused the error */}
                  <p className="font-semibold text-white">Office Address</p>
                  <p>SHOP NO. 2, MAHADEV TOUR AND TRAVELS, Darshan Society,Palanpur Jakatnaka - Canal Road<br />Surat, Gujarat</p>
                </div>
              </li>
            </ul>
          </div>
          
        </div>

        {/* Bottom Copyright Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-gray-500">
          <p>&copy; {currentYear} Mahadev Tour & Travels. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Designed for seamless travel experiences.</p>
        </div>
      </div>
    </footer>
  );
}