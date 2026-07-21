import Link from "next/link";
import { MapPin, Phone, MessageCircle } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand & Intro */}
          <div className="flex flex-col">
            <Link href="/" className="text-2xl font-bold tracking-tight text-primary mb-4">
              Mahadev<span className="text-accent">.</span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Premium travel booking, religious tours, and luxury transport in Surat, Gujarat. Serving happy travelers since 2016.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="flex flex-col gap-3 text-sm text-muted-foreground">
              <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
              <li><Link href="/packages" className="hover:text-primary transition-colors">Tour Packages</Link></li>
              <li><Link href="/vehicles" className="hover:text-primary transition-colors">Our Vehicles</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Popular Tours */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Popular Tours</h4>
            <ul className="flex flex-col gap-3 text-sm text-muted-foreground">
              <li><Link href="/packages" className="hover:text-primary transition-colors">Maharashtra Jyotirlinga</Link></li>
              <li><Link href="/packages" className="hover:text-primary transition-colors">Statue of Unity Express</Link></li>
              <li><Link href="/packages" className="hover:text-primary transition-colors">Saputara Monsoon Special</Link></li>
              <li><Link href="/packages" className="hover:text-primary transition-colors">Ujjain Darshan</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Contact Us</h4>
            <ul className="flex flex-col gap-4 text-sm text-muted-foreground">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0" />
                <span>Near Jalaram Mandir Parking, Palanpur Jakatnaka, Surat, Gujarat</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <span>+91 78020 62340 (Ajaybhai Patel)</span>
              </li>
              <li className="flex items-center gap-3">
                <MessageCircle className="w-5 h-5 text-primary shrink-0" />
                <span>Available 24/7 on WhatsApp</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>© {currentYear} Mahadev Tour & Travels. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-primary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}