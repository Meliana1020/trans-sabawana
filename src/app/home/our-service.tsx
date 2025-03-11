import ServiceCard from "@/components/container/service-card";

export default function OurService() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-neutral-950 ">
      <div className="w-full px-10">
        <h2 className="mb-6 p-4 text-center items-center text-6xl font-bold text-zinc-500">
          Layanan <span className="text-white">Kami</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 px-4 md:px-6 lg:px-8">
          <ServiceCard
            imageSrc="/travel1.jpeg"
            title="Travel"
            description="Layanan transportasi yang menyediakan perjalanan bagi individu atau kelompok..."
            link="/travel"
          />
          <ServiceCard
            imageSrc="/calter.jpg"
            title="Calter"
            description="Layanan transportasi yang menyediakan kendaraan untuk disewa secara khusus..."
            link="/calter"
          />
          <ServiceCard
            imageSrc="/trip.jpg"
            title="Open Trip"
            description="Perjalanan menyusuri rimba, menyentuh keindahan yang tak hanya tertangkap oleh mata..."
            link="/open-trip"
          />
        </div>
      </div>
    </div>
  );
}
