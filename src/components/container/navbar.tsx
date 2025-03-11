"use client";

import { useState } from "react";
import Link from "next/link";
import { Home } from "@/data/navbar.data";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="fixed z-50 w-full bg-neutral-800 opacity-60">
      <div className="p-8 flex h-14 flex-row items-center justify-between">
        <div
          className="flex h-full cursor-pointer items-center justify-center text-white font-bold text-xl"
          onClick={scrollToTop}
        >
          TRANS SABAWANA
        </div>

        <header className="hidden md:flex items-center gap-6">
          {Home.map((item) => (
            <Link key={item.id} href={item.href}>
              <div className="text-white cursor-pointer hover:text-gray-300 focus:outline-1 focus:outline-white active:outline-white">{item.name}</div>
            </Link>
          ))}
        </header>

        <div className="md:hidden flex items-center">
          <button
            className="text-white focus:outline-none"
            onClick={toggleMenu}
          >
            {isMenuOpen ? (
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="flex flex-col items-center bg-neutral-900 py-4 space-y-4">
            {Home.map((item) => (
              <Link key={item.id} href={item.href}>
                <div className="text-white hover:text-gray-300" onClick={toggleMenu}>{item.name}</div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;