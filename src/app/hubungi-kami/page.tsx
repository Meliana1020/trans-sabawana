import {
  FaWhatsapp,
  FaInstagram,
  FaEnvelope,
  FaTiktok,
  FaYoutube,
  FaMapMarkerAlt,
} from "react-icons/fa";
import Link from "next/link";

export default function ContactUs() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-neutral-900 text-white px-6 py-16">
      <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
        Hubungi Kami
      </h2>

      <div className="w-full max-w-lg flex flex-col gap-6">
        {/* WhatsApp */}
        <Link
          href="https://wa.me/6282135750670"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 bg-emerald-500 px-4 py-2 rounded-xl shadow-md hover:bg-emerald-700 transition"
        >
          <FaWhatsapp className="text-2xl" />
          <span className="text-lg font-medium"> +62{" "} 821-3575-0670</span>
        </Link>

        {/* Instagram */}
        <Link
          href="https://www.instagram.com/andriraaa/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 bg-pink-500 px-4 py-2 rounded-xl shadow-md hover:bg-pink-700 transition"
        >
          <FaInstagram className="text-2xl" />
          <span className="text-lg font-medium">@Andriraaa</span>
        </Link>

        {/* tiktok */}
        <Link
          href="http://www.tiktok.com/@andrirahmnt_"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 bg-slate-600 px-4 py-2 rounded-xl shadow-md hover:bg-slate-500 transition"
        >
          <FaTiktok className="text-2xl" />
          <span className="text-lg font-medium">@Andriraaa</span>
        </Link>

        {/* youtube */}
        <Link
          href="https://youtube.com/@Andrirahmnt"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 bg-red-700 px-4 py-2 rounded-xl shadow-md hover:bg-red-500 transition"
        >
          <FaYoutube className="text-2xl" />
          <span className="text-lg font-medium">Andrirahmnt_</span>
        </Link>

        {/* Email */}
        <Link
          href="mailto:andrirahmanto69@gmail.com"
          className="flex items-center gap-4 bg-yellow-500 px-4 py-2 rounded-xl shadow-md hover:bg-yellow-700 transition"
        >
          <FaEnvelope className="text-2xl" />
          <span className="text-lg font-medium">andrirahmanto69@gmail.com</span>
        </Link>

        {/* Lokasi */}
        <Link
          href="https://www.google.com/maps/place/Trans+Sabawana+Jasa+Travel+Wonosobo+%7C+Carter+Armada+%7C+Open+Trip+Wonosobo/@-7.3632048,109.8024524,17z/data=!4m7!3m6!1s0x2e7aa75df894ebf7:0x805efebf07d3ca13!4b1!8m2!3d-7.3631942!4d109.803815!16s%2Fg%2F11x18pg7b7?entry=ttu&g_ep=EgoyMDI1MDMxNy4wIKXMDSoASAFQAw%3D%3D"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 bg-blue-600 px-4 py-2 rounded-xl shadow-md hover:bg-blue-700 transition"
        >
          <FaMapMarkerAlt className="text-2xl" />
          <span className="text-lg font-medium">Desa Garunglor, Kec Sukoharjo, Kab Wonosobo.</span>
        </Link>
      </div>
    </div>
  );
}
