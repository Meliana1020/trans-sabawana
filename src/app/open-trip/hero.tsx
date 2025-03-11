import Image from "next/image";

export default function Hero() {
  return (
    <div className="flex flex-col relative min-h-screen w-full justify-center items-ceter">
      <Image
        src="/gunung.jpg"
        alt="Background"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 brightness-50"
      />
      <div className="relative z-10 flex h-full flex-col justify-between px-8 py-20 text-white">
        <div className="flex flex-grow flex-col items-center justify-center text-center">
          <h1 className="text-6xl font-bold mb-3">JEJAK SABAWANA</h1>
          <p className="text-lg text-justify">
            Di tanah sejuk Wonosobo lahirlah Open Trip yang bernama Jejak
            Sabawana, sebuah nama yang berbisik dari rimbunnya makna.
            Terinspirasi dari kota Wonosobo, Wonosobo (bahasa Jawa:
            ꦏꦧꦸꦥꦠꦺꦤ꧀​ꦮꦤꦱꦧ, translit. Kabupatèn Wanasaba). Namanya terurai
            menjadi Saba-Wana. Saba yang berarti mendatangi, dan Wana yang
            berarti hutan. Jejak Sabawana adalah perjalanan menyusuri rimba,
            menyentuh keindahan yang tak hanya tertangkap oleh mata, tetapi juga
            terukir di hati. Bukan sekadar langkah yang tertinggal di tanah,
            melainkan jejak kenangan memori abadi yang tak dapat dibekukan oleh
            lensa, hanya dapat dirasakan oleh jiwa.
          </p>
        </div>

      </div>
      <footer className="relative w-full bottom-10 text-center text-neutral-400 text-sm">
        © 2024 Meliana. All Rights Reserved
      </footer>
    </div>
  );
}
