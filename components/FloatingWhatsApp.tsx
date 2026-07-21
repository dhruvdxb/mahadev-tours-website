import Link from "next/link";
import { MessageCircle } from "lucide-react";

export default function FloatingWhatsApp() {
  const whatsappMessage = encodeURIComponent("Hello Ajaybhai, I am looking for some travel information.");
  const whatsappLink = `https://wa.me/917802062340?text=${whatsappMessage}`;

  return (
    <Link
      href={whatsappLink}
      target="_blank"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg hover:bg-[#20bd5a] hover:scale-110 hover:shadow-xl transition-all duration-300 group"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-7 h-7 z-10" />
      
      {/* Subtle Ping Animation to draw attention */}
      <span className="absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-30 animate-ping" />
      
      {/* Tooltip on hover (Hidden on mobile) */}
      <span className="absolute right-16 bg-gray-900 text-white text-xs font-bold py-1.5 px-3 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
        Chat with us
      </span>
    </Link>
  );
}