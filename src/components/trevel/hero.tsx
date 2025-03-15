import Image from "next/image";
import Link from "next/link";

const imageData = [
  { id: 1, src: "/travel1.jpg", alt: "Travel scene 1" },
  { id: 2, src: "/travel4.jpg", alt: "Travel scene 2" },
  { id: 3, src: "/travel3.jpg", alt: "Travel scene 3" },
  { id: 4, src: "/calter-elf-short.jpeg", alt: "Travel scene 4" },
];

export default function Hero() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-black text-white">
      <div className="grid w-full max-w-6xl grid-cols-1 md:grid-cols-2 gap-8 px-8 py-20">
        
        <div className="grid grid-cols-2 gap-4">
          {imageData.map((item) => (
            <div
              key={item.id}
              className="relative aspect-square w-full h-auto overflow-hidden rounded-xl bg-white group"
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
               sizes="(max-width: 768px) 100vw, 33vw"
                className="bg-white p-1 object-cover object-center rounded-xl transition-transform duration-300 group-hover:scale-105 brightness-50 group-hover:brightness-100"
              />
            </div>
          ))}
        </div>

        <div className="flex flex-col justify-center">
          <h1 className="text-4xl font-bold uppercase text-white md:text-5xl">
            TRAVEL LANE
          </h1>
          <p className="mt-4 text-gray-300 text-lg text-justify">
            🚐 Travel Lane hadir sebagai solusi perjalanan nyaman dan terpercaya
            untuk Anda yang ingin bepergian dengan mudah, cepat, dan tanpa
            ribet. Kami melayani perjalanan dalam & luar pulau, serta
            menyediakan layanan pengiriman paket dengan sistem express 1 hari
            sampai!
          </p>
          <p className="text-lg text-gray-300">
            Klik{" "}
            <span className="text-blue-800 font-bold cursor-pointer">
              <Link href="https://wa.me/6282135750670">di sini</Link>
            </span>{" "}
            jika anda ingin berdiskusi dengan kami dan lakukan reservasi
          </p>
          <p className="mt-4 text-gray-300 font-bold text-md">
            💬 Mau perjalanan santai tanpa ribet? Travel Lane jawabannya!
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