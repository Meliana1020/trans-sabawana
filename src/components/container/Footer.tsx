import React from "react";
import Link from "next/link";
import { FaTiktok, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="w-full px-8 py-8 text-white bg-neutral-950 sm:px-6 lg:px-20 lg:py-10">
      <div className="container mx-auto grid grid-cols-1 gap-8 text-sm md:grid-cols-2 lg:grid-cols-4 xl:gap-12">
        {/* Logo Section */}
        <div className="flex flex-col items-center md:items-start">
          <p className="text-3xl font-bold text-center md:text-left lg:text-4xl xl:text-5xl">
            TRANS SABAWANA
          </p>
        </div>

        {/* Contact Section */}
        <div className="space-y-4 md:space-y-6">
          <h3 className="text-lg font-semibold">Trans Sabawana</h3>
          <p className="text-sm md:text-base text-gray-400 hover:text-gray-100 ">
            Desa Garunglor, Kec Sukoharjo, Kab Wonosobo.
          </p>
          <p className="text-sm md:text-base">
            <Link
              href="https://wa.me/6282135750670"
              className="text-gray-400 hover:text-gray-100 transition-colors group"
            >
              +628-213575-0670
            </Link>
          </p>
        </div>

        {/* Social Media Section */}
        <div className="space-y-4 md:space-y-6">
          <h3 className="text-lg font-semibold">Follow Us</h3>
          <div className="space-y-2">
            <Link
              href="http://www.tiktok.com/@andrirahmnt_"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-400 hover:text-gray-100  transition-colors group"
            >
              <FaTiktok className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span className="text-sm md:text-base">Tiktok</span>
            </Link>

            <Link
              href="https://instagram.com/andriraaa"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-400 hover:text-gray-100  transition-colors group"
            >
              <FaInstagram className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span className="text-sm md:text-base">Instagram</span>
            </Link>

            <Link
              href="https://youtube.com/@Andrirahmnt"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-400 hover:text-gray-100 transition-colors group"
            >
              <FaYoutube className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span className="text-sm md:text-base">YouTube</span>
            </Link>
          </div>
        </div>

        {/* Navigation & Help Section */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          <div>
            <h3 className="mb-4 text-lg font-semibold md:mb-6">Navigasi</h3>
            <ul className="space-y-2 md:space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-sm text-gray-400 hover:text-gray-100 md:text-base"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-sm text-gray-400 hover:text-gray-100  md:text-base"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/travel"
                  className="text-sm text-gray-400 hover:text-gray-100  md:text-base"
                >
                  Travel
                </Link>
              </li>
              <li>
                <Link
                  href="/calter"
                  className="text-sm text-gray-400 hover:text-gray-100 md:text-base"
                >
                  Calter
                </Link>
              </li>
              <li>
                <Link
                  href="/open-trip"
                  className="text-sm text-gray-400 hover:text-gray-100  md:text-base"
                >
                  Open Trip
                </Link>
              </li>
              <li>
                <Link
                  href="/galeri"
                  className="text-sm text-gray-400 hover:text-gray-100  md:text-base"
                >
                  Galeri
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold md:mb-6">Bantuan</h3>
            <ul className="space-y-2 md:space-y-3">
              <li>
                <Link
                  href="/hubungi-kami"
                  className="text-sm text-gray-400 hover:text-gray-100 md:text-base"
                >
                  Hubungi Kami
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
