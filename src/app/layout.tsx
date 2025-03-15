import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/container/navbar";
import Footer from "@/components/container/Footer";

export const metadata: Metadata = {
  title: "Trans Sabawana",
  description: "Layanan Transportasi Terabaik Wonosobo sampai nusantara. Travel Lane , Calter Armada, dan Open Trip",
  icons: {
    icon: '/calter.jpg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className=""
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
