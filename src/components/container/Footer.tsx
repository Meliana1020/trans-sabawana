import React from "react";
import Link from "next/link";

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
          <p className="text-sm md:text-base">
            Desa Garunglor, Kec Sukoharjo, Kab Wonosobo.
          </p>
          <p className="text-sm md:text-base">
            <Link 
              href="https://wa.me/6282135750670" 
              className="hover:text-gray-300 transition-colors"
            >
              0821-3575-0670
            </Link>
          </p>
        </div>

        {/* Social Media Section */}
        <div className="space-y-4 md:space-y-6">
          <h3 className="text-lg font-semibold">Follow Us</h3>
          <div className="space-y-2">
            <p className="text-sm md:text-base">@Tiktok</p>
            <p className="text-sm md:text-base">andriraaa</p>
            <p className="text-sm md:text-base">@Instagram</p>
          </div>
        </div>

        {/* Navigation & Help Section */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          <div>
            <h3 className="mb-4 text-lg font-semibold md:mb-6">Navigasi</h3>
            <ul className="space-y-2 md:space-y-3">
              <li>
                <Link href="/" className="text-sm hover:text-gray-300 md:text-base">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm hover:text-gray-300 md:text-base">
                  About
                </Link>
              </li>
              <li>
                <Link href="/travel" className="text-sm hover:text-gray-300 md:text-base">
                  Travel
                </Link>
              </li>
              <li>
                <Link href="/calter" className="text-sm hover:text-gray-300 md:text-base">
                  Calter
                </Link>
              </li>
              <li>
                <Link href="/open-trip" className="text-sm hover:text-gray-300 md:text-base">
                  Open Trip
                </Link>
              </li>
              <li>
                <Link href="/galeri" className="text-sm hover:text-gray-300 md:text-base">
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
                  className="text-sm hover:text-gray-300 md:text-base"
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