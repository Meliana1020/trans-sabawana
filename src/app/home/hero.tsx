import Image from "next/image";

export default function Hero() {
  const galleryItems = [
    {
      id: 1,
      title: "Gunung Rinjani",
      image: "/profile.jpg",
    },
    {
      id: 2,
      title: "Trip to",
      image: "/trip.jpg",
    },
    {
      id: 3,
      title: "Rental Equipment Outdoor",
      image: "/rentail.jpeg",
    },
    {
      id: 4,
      title: "Calter Armada",
      image: "/calter.jpg",
    },
  ];

  return (
    <div className="relative min-h-screen flex flex-col bg-neutral-900">
      <div className="absolute inset-0">
        <Image
          src="/bg.svg"
          alt="Background"
          layout="fill"
          objectFit="cover"
          className="brightness-50"
        />
      </div>

      <div className="relative z-10 flex flex-col lg:flex-row justify-between items-center w-full px-6 py-16 lg:py-24 max-w-7xl mx-auto">
        <div className="text-start lg:w-1/2">
          <h3 className="text-lg font-semibold text-neutral-400 uppercase">
            Explore The World
          </h3>
          <h1 className="mt-2 text-5xl md:text-6xl font-bold text-white leading-tight">
            It's time to travel
          </h1>
          <p className="text-5xl md:text-6xl font-bold text-white leading-tight">
            with Trans Sabawana
          </p>
          <p className="mt-4 text-neutral-300 text-lg max-w-md">
            Create the route you want to travel with us.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 w-full max-w-sm lg:max-w-md p-4 mt-8 lg:mt-0">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className="relative overflow-hidden rounded-2xl shadow-lg aspect-square group hover:scale-105 transition-transform duration-300"
            >
              <Image
                src={item.image}
                alt={item.title}
                layout="fill"
                objectFit="cover"
                quality={80}
              />
              <div className="absolute inset-0 bg-black/40 flex items-end p-3">
                <h3 className="text-white font-medium text-sm md:text-base">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      <footer className="relative w-full bottom-10 text-center text-neutral-400 text-sm">
        © 2024 Meliana. All Rights Reserved
      </footer>
    </div>
  );
}
