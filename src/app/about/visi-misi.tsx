export default function VisiMisi() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-stone-900 py-12 px-4 sm:px-6 lg:py-24">
      <div className="w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-8 text-center text-4xl font-bold text-zinc-500 md:mb-12 md:text-5xl lg:text-6xl">
          Visi & Misi{" "}
          <span className="block text-white sm:inline">Trans Sabawana</span>
        </h2>
        
        <div className="flex flex-col gap-6 md:gap-8">
          {/* Visi Card */}
          <div className="w-full p-4 bg-white rounded-xl shadow-md transition-all duration-300 hover:shadow-lg 
                         sm:p-6 md:max-w-[90%] lg:max-w-[85%] lg:p-8 mx-auto">
            <h2 className="text-2xl font-bold text-red-950 sm:text-3xl lg:text-4xl">
              Visi
            </h2>
            <p className="mt-3 text-sm text-justify text-red-950 sm:text-base sm:mt-4 md:text-lg">
              Visi kami adalah menjadi penyedia layanan perjalanan yang
              terpercaya, dengan komitmen untuk memberikan pengalaman yang aman,
              nyaman, dan menarik bagi setiap klien. Kami percaya bahwa perjalanan
              adalah cara terbaik untuk memperkaya hidup, memperluas wawasan, dan
              menciptakan hubungan yang lebih mendalam antar sesama.
            </p>
          </div>

          {/* Misi Card */}
          <div className="w-full p-4 bg-white rounded-xl shadow-md transition-all duration-300 hover:shadow-lg 
                         sm:p-6 md:max-w-[90%] lg:max-w-[85%] lg:p-8 md:ml-auto">
            <h2 className="text-2xl font-bold text-green-900 sm:text-3xl lg:text-4xl">
              Misi
            </h2>
            <p className="mt-3 text-sm text-justify text-green-900 sm:text-base sm:mt-4 md:text-lg">
              Misi kami adalah untuk terus memperkenalkan destinasi-destinasi
              indah yang mungkin belum banyak dijelajahi, menawarkan paket wisata
              dengan harga yang kompetitif, dan menjamin kepuasan pelanggan
              melalui pelayanan yang ramah dan profesional.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}