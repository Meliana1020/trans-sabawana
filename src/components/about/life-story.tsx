import Image from "next/image";

export default function LifeStory() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-neutral-950 px-5 py-10">
      <div className="w-full max-w-screen-lg mx-auto">
        <h2 className="mb-10 text-center text-4xl md:text-6xl font-bold text-zinc-500">
          Life Story <span className="text-white">Andri Rahmanto</span>
        </h2>

        {/* Section 1 */}
        <div className="flex flex-col md:flex-row items-center gap-8 w-full mb-5 p-5 bg-white rounded-xl shadow-xl">
          {/* Konten Teks */}
          <div className="w-full">
            <h2 className="text-3xl md:text-4xl font-bold text-red-950">
              Benih Impian Seorang Petani Muda
            </h2>
            <p className="mt-2 text-justify text-base text-red-950 leading-relaxed">
              Di tengah hiruk-pikuk anak muda yang sibuk mengejar tren, saya memilih jalan berbeda. 
              Saya tidak merokok, tidak menghamburkan uang untuk kesenangan sesaat. Saya lebih memilih 
              menanam impian, merawatnya dengan kerja keras, dan menyiraminya dengan keringat sendiri.
            </p>
            <p className="mt-1 text-justify text-red-950 leading-relaxed">
              Setiap pagi, saat embun masih menggantung di daun, tanganku sudah sibuk di ladang. Bukan hanya menanam hasil bumi, 
              tapi juga harapan. Saat teman-teman mengeluh soal pekerjaan, saya justru menikmati prosesnya—karena saya tahu, 
              suatu hari nanti, usaha ini akan berbuah manis.
            </p>
            <p className="mt-1 text-justify text-red-950 leading-relaxed">
              Hari demi hari berlalu, hingga akhirnya impian itu tergenggam. Lahan per lahan telah saya beli, 
              bukan sekadar sebidang tanah, tapi simbol dari perjuangan. Setiap pohon salak yang berbuah di sana 
              adalah saksi bisu dari tekad yang berani memilih jalan berbeda.
            </p>
            <p className="mt-1 font-bold text-red-950">
              Salam sukses untuk semua petani muda—tetap semangat menanam, merawat, dan memanen impian! 🌱💪
            </p>
          </div>

          {/* Gambar */}
          <div className="w-full max-w-[400px] mx-auto">
            <Image
              src="/salak.jpg"
              alt="Salak"
              width={400}
              height={300}
              className="rounded-xl shadow-lg object-cover w-full"
            />
          </div>
        </div>

        {/* Section 2 */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-8 w-full mb-5 p-5 bg-white rounded-xl shadow-xl">
          {/* Konten Teks */}
          <div className="w-full">
            <h2 className="text-3xl md:text-4xl font-bold text-green-900">
              Menakar Harapan dalam Timbangan Perjuangan
            </h2>
            <p className="mt-2 text-justify text-base text-green-900 leading-relaxed">
              Di saat banyak anak muda duduk di bangku kuliah, aku justru berdiri di antara karung beras dan tumpukan gula.
              Tanganku tak memegang pena, tapi menata kardus demi kardus, memastikan setiap barang siap dikirim ke toko-toko 
              di sudut Banjarnegara dan Wonosobo.
            </p>
            <p className="mt-1 text-justify text-green-900 leading-relaxed">
              Aku menolak tunduk pada gengsi. Aku memilih membuktikan bahwa sukses bukan soal gelar, tapi soal tekad. 
              Setiap perjalanan mengantar sembako adalah langkah kecil menuju impian besar. Setiap keringat yang menetes 
              adalah investasi untuk masa depan yang lebih baik.
            </p>
            <p className="mt-1 text-justify text-green-900 leading-relaxed">
              Aku percaya, jalan menuju keberhasilan tak selalu lurus, tapi selama kaki tetap melangkah, aku akan sampai di tujuan.
            </p>
            <p className="font-bold text-green-900">
              Jadilah pedagang muda yang penuh semangat, karena setiap transaksi adalah langkah menuju kesuksesan dan keberkahan! 💪
            </p>
          </div>

          {/* Gambar */}
          <div className="w-full max-w-[400px] mx-auto">
            <Image
              src="/beras.jpg"
              alt="Beras"
              width={400}
              height={300}
              className="rounded-xl shadow-lg object-cover w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
