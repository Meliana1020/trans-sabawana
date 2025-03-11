export default function About() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-neutral-950">
      <div className="w-full max-w-6xl px-5">
      <h2 className="mb-10 text-center items-center text-6xl font-bold text-zinc-500">
            Visi & Misi{" "}<span className="text-white">Trans Sabawana</span>
          </h2>
        <div className="mb-5 p-5 max-w-3xl bg-white rounded-xl shadow-xl">
          <h2 className="text-4xl font-bold text-red-950">
            Visi
          </h2>
          <p className="mt-2 text-justify text-base text-red-950">
            Visi kami adalah menjadi penyedia layanan perjalanan yang
            terpercaya, dengan komitmen untuk memberikan pengalaman yang aman,
            nyaman, dan menarik bagi setiap klien. Kami percaya bahwa perjalanan
            adalah cara terbaik untuk memperkaya hidup, memperluas wawasan, dan
            menciptakan hubungan yang lebih mendalam antar sesama.
          </p>
        </div>

        <div className="ml-auto max-w-3xl p-5 bg-white rounded-xl shadow-xl">
          <h2 className="text-4xl font-bold text-green-900">
            Misi
          </h2>
          <p className="text-justify text-base text-green-900 mt-2">
            Misi kami adalah untuk terus memperkenalkan destinasi-destinasi
            indah yang mungkin belum banyak dijelajahi, menawarkan paket wisata
            dengan harga yang kompetitif, dan menjamin kepuasan pelanggan
            melalui pelayanan yang ramah dan profesional.
          </p>
        </div>
      </div>
    </div>
  );
}
