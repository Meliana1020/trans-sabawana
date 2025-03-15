import Image from "next/image";

export default function Content() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-neutral-950 px-5 py-10">
      <div className="flex flex-col md:flex-row items-center gap-8 max-w-screen-lg mx-auto">
        {/* Gambar */}
        <Image
          src="/profile4.jpg"
          alt="Illustration"
          width={400}
          height={100}
          className="w-full max-w-[400px] rounded-xl shadow-xl"
        />

        {/* Konten */}
        <div className="w-full border-2 border-zinc-400 rounded-xl shadow-xl p-5 text-center md:text-left">
          <h2 className="mb-4 text-4xl md:text-6xl font-bold text-zinc-400">Founder</h2>
          <p className="text-zinc-400 text-lg md:text-xl leading-relaxed text-justify">
            Andri Rahmanto, pemuda asal Wonosobo sebagai founder dari Trans Sabawana, mendirikan 
            Trans Sabawana dengan dedikasi dan kerja keras. Sembari menjalankan usaha sembako 
            dan bertani salak, ia merintis bisnis transportasi yang kini menawarkan tiga layanan utama: 
            <strong> Calter Armada</strong>, penyewaan kendaraan untuk berbagai kebutuhan; 
            <strong> Open Trip Adventure</strong>, perjalanan wisata bagi para pencinta alam; 
            dan <strong>Travel Lane</strong>, layanan travel antar kota yang mengutamakan kenyamanan dan ketepatan waktu. 
            Dengan komitmen terhadap kejujuran dan pelayanan terbaik, Trans Sabawana hadir sebagai solusi 
            perjalanan yang fleksibel, aman, dan terpercaya.
          </p>
        </div>
      </div>
    </div>
  );
}
