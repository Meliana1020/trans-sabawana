import Image from "next/image";

export default function Armada() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-neutral-950">
      <div className="w-full px-10">
        <h2 className="mb-6 p-4 text-center items-center sm:text-6xl md:text-6xl lg:text-6xl text-4xl font-bold text-zinc-500">
          Armada <span className="text-white">Kami</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4">
  {[
    { src: "/calter-avanza.jpeg", alt: "Avanza" },
    { src: "/calter-grandmax.jpg", alt: "Grandmax" },
    { src: "/calter-elf-short.jpeg", alt: "Elf Short" },
    { src: "/calter-elf-long.jpeg", alt: "Elf Long" },
    { src: "/calter-bus-medium.jpeg", alt: "Bus Medium" },
  ].map((item, index) => (
    <div
      key={index}
      className="relative overflow-hidden rounded-xl group aspect-video"
    >
      <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-100 group-hover:opacity-0 transition-opacity duration-300 z-10">
        <span className="text-white font-bold text-xl lg:text-2xl p-2 text-center">
          {item.alt}
        </span>
      </div>

      {/* Image */}
      <Image
        src={item.src}
        alt={item.alt}
        width={600}
        height={400}
        className="w-full h-full object-cover brightness-50 group-hover:brightness-100 transition-all duration-300 ease-in-out transform group-hover:scale-105"
      />
    </div>
  ))}
</div>
      </div>
    </div>
  );
}
