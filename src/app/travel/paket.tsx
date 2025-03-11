import Image from "next/image";

export default function Paket() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12 bg-white">
      <h2 className="text-4xl md:text-5xl lg:text-6xl text-zinc-800 font-bold text-center mb-10">
        Pengiriman Paket Cepat & Amanah
      </h2>
      <div className="flex flex-col md:flex-row items-center justify-center gap-12">
        <div className="flex-1 flex justify-center">
          <Image
            src="/paket.jpeg"
            alt="peket"
            className="w-full max-w-sm md:max-w-md lg:max-w-lg"
          />
        </div>
        <div className="flex-1 text-zinc-900">
          <ul className="space-y-4 text-lg">
            <li className="flex items-start gap-2">
              <span className="text-green-500 text-2xl">✅</span>
              <div>
                <b>Mudah & Praktis</b>
                <p className="text-zinc-700">
                  Tanpa ribet, proses pengiriman yang simpel dan efisien.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-500 text-2xl">✅</span>
              <div>
                <b>Layanan Jemput Paket</b>
                <p className="text-zinc-700">
                  Kami langsung mengambil paket di rumah Anda.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-500 text-2xl">✅</span>
              <div>
                <b>Keamanan Terjamin</b>
                <p className="text-zinc-700">
                  Pengiriman dilakukan dengan penuh tanggung jawab dan amanah.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <p className="mt-12 text-center text-yellow-500 font-semibold text-lg">
        ⚠️ Note: Tersedia setiap hari!
      </p>
    </div>
  );
}
