import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-black text-white">
      <div className="grid w-full max-w-6xl grid-cols-1 md:grid-cols-2 gap-8 px-8 py-20">
        <div className="grid grid-cols-2 gap-4">
          {[
            { src: "/calter.jpg", alt: "Calter" },
            { src: "/travel4.jpg", alt: "Calter Grandmax" },
            { src: "/bus3.jpg", alt: "Calter Bus Medium" },
            { src: "/bus2.jpg", alt: "Calter Elf Long" },
          ].map((item, index) => (
            <div key={index} className="relative aspect-square w-full h-auto overflow-hidden rounded-xl bg-white group">
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="bg-white p-1 object-cover object-center rounded-xl transition-transform duration-300 group-hover:scale-105 brightness-50 group-hover:brightness-100"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
          ))}
        </div>

        <div className="flex flex-col justify-center">
          <h1 className="text-4xl font-bold uppercase text-white md:text-5xl">
            CALTER ARMADA
          </h1>
          <p className="mt-4 text-gray-300 text-lg">
            🚐 Layanan transportasi yang menyediakan kendaraan untuk disewa
            secara khusus oleh individu atau kelompok, baik dengan sopir maupun
            tanpa sopir. Digunakan untuk perjalanan pribadi, bisnis, wisata,
            atau kebutuhan lainnya yang membutuhkan fleksibilitas waktu dan
            rute.
          </p>
          <p className="text-lg text-grayy-300">
            Klik{" "}
            <span className="text-blue-800 font-bold cursor-pointer">
              <Link href="https://wa.me/6282135750670">di sini</Link>
            </span>{" "}
            jika anda ingin berdiskusi dengan kami
          </p>
          <p className="mt-2 text-gray-300 font-bold text-md">
            📲 Hubungi kami sekarang dan nikmati perjalanan terbaik! 🚀
          </p>
        </div>
      </div>
      <footer className="relative w-full bottom-6 text-center text-neutral-400 text-sm">
        © 2024 Meliana. All Rights Reserved
      </footer>
    </div>
  );
}
