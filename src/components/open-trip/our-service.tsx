"use client";
import { useState } from "react";
import ServiceCard from "@/components/container/service-card";
import Image from "next/image";

interface ServiceType {
  imageSrc: string;
  title: string;
  description: string;
  content: string;
}

export default function OurService() {
  const [selectedService, setSelectedService] = useState<ServiceType | null>(null);

  const services: ServiceType[] = [
    {
      imageSrc: "/private-trip1.jpeg",
      title: "Private Trip Gunung dan wisata Wonosobo",
      description:
        "Ingin mendaki gunung atau menjelajahi destinasi wisata tanpa ribet? Kami hadir untuk memberikan pengalaman private trip yang aman, nyaman, dan berkesan!",
      content: `
        Jelajahi Keindahan Alam dengan Private Trip Eksklusif!

        Ingin mendaki gunung atau menjelajahi destinasi wisata tanpa ribet? Kami hadir untuk memberikan pengalaman private trip yang aman, nyaman, dan berkesan!

        Kenapa Harus Kami?
        ✅ Private & Eksklusif – Hanya bersama grup Anda, tanpa orang asing.
        ✅ Guide Berpengalaman – Dipandu oleh tim profesional yang siap membantu.
        ✅ Fleksibel & Customizable – Rute dan itinerary bisa disesuaikan dengan keinginan.
        ✅ Peralatan & Logistik Lengkap – Tidak perlu repot, semua sudah kami siapkan.

        ⚡ Destinasi Pilihan:
        🏔 Pendakian gunung (Sindoro, Sumbinh, Prau, Bismo, Pakuwaja dll.)
        🏝 Wisata alam (pantai, air terjun, danau, dll.)
        🌿 Eksplorasi hidden gem yang jarang diketahui!

        Jangan lewatkan kesempatan untuk menikmati alam dengan tenang dan nyaman. Yuk, rencanakan perjalanan impianmu bersama kami!

        📩 Hubungi kami sekarang untuk info lebih lanjut dan reservasi!
      `,
    },
    {
      imageSrc: "/profile.jpg",
      title: "Porter Gunung",
      description:
        "Mau mendaki tanpa beban berat? Serahkan barang bawaanmu kepada porter profesional kami! Dengan pengalaman dan ketangguhan di medan gunung, kami siap membantu perjalananmu agar lebih nyaman dan menyenangkan.",
      content: `
        Jasa Porter Gunung – Pendakian Lebih Ringan & Nyaman!

        Mau mendaki tanpa beban berat? Serahkan barang bawaanmu kepada porter profesional kami! Dengan pengalaman dan ketangguhan di medan gunung, kami siap membantu perjalananmu agar lebih nyaman dan menyenangkan.  

        Kenapa Pakai Jasa Porter Kami?  
        ✅ Pendakian Lebih Ringan* – Fokus menikmati perjalanan tanpa terbebani carrier berat.  
        ✅ Porter Berpengalaman* – Terlatih, profesional, dan mengenal jalur dengan baik.  
        ✅ Aman & Terpercaya – Barang bawaan dijaga dengan baik hingga tujuan.  
        ✅ Fleksibel – Bisa sewa porter untuk barang pribadi atau logistik kelompok.  

        🏔 Tersedia untuk berbagai gunung populer!  
        📌 Gunung Sindoro, Sumbing, Prahu, Bismo, Pakuwaja dan lainnya.  

        Dengan porter, pendakian jadi lebih mudah dan nyaman! *Hubungi kami sekarang* untuk info lebih lanjut dan reservasi. 📩
      `,
    },
    {
      imageSrc: "/rentail.jpeg",
      title: "Rentail Equipment Outdoor",
      description:
        "Mau mendaki gunung atau camping tapi nggak punya perlengkapan? Jangan khawatir! Kami menyediakan *jasa rental peralatan outdoor* yang lengkap dan berkualitas, siap mendukung petualanganmu dengan nyaman dan aman.",
      content: `
        Sewa Peralatan Outdoor – Lengkap, Berkualitas, & Terjangkau!  

        Mau mendaki gunung atau camping tapi nggak punya perlengkapan? Jangan khawatir! Kami menyediakan *jasa rental peralatan outdoor* yang lengkap dan berkualitas, siap mendukung petualanganmu dengan nyaman dan aman.  

        Kenapa Sewa di Tempat Kami?  
        ✅ Peralatan Berkualitas – Terawat, bersih, dan siap pakai.  
        ✅ Harga Terjangkau – Lebih hemat dibanding beli sendiri.  
        ✅ Pilihan Lengkap – Tenda, sleeping bag, carrier, matras, kompor, dan lainnya.  
        ✅ Mudah & Praktis – Bisa booking online dan ambil di lokasi tertentu.  

        🏕 Cocok untuk:  
        ✔ Pendakian gunung  
        ✔ Camping keluarga atau komunitas  
        ✔ Kegiatan alam & survival  

        Jangan biarkan perlengkapan jadi hambatan untuk menikmati alam! *Hubungi kami sekarang* untuk cek ketersediaan dan reservasi. 📩
      `,
    },
  ];

  return (
    <div
      className={`flex flex-col items-center justify-center min-h-screen bg-neutral-950 ${
        selectedService ? "brightness-50" : ""
      } transition-all duration-300`}
    >
      <div className="w-full px-10">
        <h2 className="mb-6 p-4 text-center items-center text-4xl sm:text-6xl md:text-6xl lg:text-6xl font-bold text-zinc-500">
          Layanan <span className="text-white">Jejak Sabawana</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 px-4 md:px-6 lg:px-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              imageSrc={service.imageSrc}
              title={service.title}
              description={service.description}
              onClick={() => setSelectedService(service as ServiceType)}
            />
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedService && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div
            className="absolute inset-0"
            onClick={() => setSelectedService(null)}
          />

          <div className="relative bg-neutral-900 rounded-xl p-8 max-w-2xl w-full mx-4 shadow-xl max-h-[90vh] overflow-y-auto">
            <button
              className="absolute top-4 right-4 text-white hover:text-gray-300 text-2xl"
              onClick={() => setSelectedService(null)}
            >
              &times;
            </button>

            <div className="relative h-96 w-full mb-6 rounded-lg overflow-hidden">
              <Image
                src={selectedService.imageSrc}
                alt={selectedService.title}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>

            <h3 className="text-3xl font-bold text-white mb-4">
              {selectedService.title}
            </h3>

            <p className="text-gray-300 text-lg leading-relaxed whitespace-pre-line">
              {selectedService.content}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
