import Image from "next/image";

export default function Banner() {
  return (
    <section className="w-full bg-[#f8f3e7] pt-20">
      <div className="max-w-7xl mx-auto px-4">
        
        <Image
          src="/banner.jpg"
          alt="Mahadev Tours Banner"
          width={1200}
          height={400}
          className="w-full rounded-xl shadow-md"
        />

      </div>
    </section>
  );
}