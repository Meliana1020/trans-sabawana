'use client';
import { useState } from 'react';
import Image from 'next/image';

export default function GalleryPage() {
  const [searchQuery, setSearchQuery] = useState('');

  const galleryItems = [
    { id: 1, title: "Petualangan Gunung Sindoro", image: "/private-trip1.jpeg", tags: ["Pendakian", "Sunrise", "Camping"] },
    { id: 2, title: "Wisata Pantai Selatan", image: "/trip.jpg", tags: ["Pantai", "Sunset", "Kuliner"] },
    { id: 3, title: "Tour Kota Tua Median", image: "/trip2.jpg", tags: ["Sejarah", "Arsitektur", "Museum"] },
    { id: 4, title: "Wisata Pantai Selatan", image: "/trip3.jpg", tags: ["Pantai", "Sunset", "Kuliner"] },
    { id: 5, title: "Tour Kota Tua Median", image: "/profile.jpg", tags: ["Sejarah", "Arsitektur", "Museum"] },
    { id: 6, title: "Wisata Pantai Selatan", image: "/camping.jpeg", tags: ["Pantai", "Sunset", "Kuliner"] },
  ];

  const filteredItems = galleryItems.filter(item =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-neutral-900 py-20">
      <div className="container mx-auto px-5">
        {/* Search Bar */}
        <div className="flex justify-center mb-8">
          <input
            type="text"
            placeholder="Cari destinasi..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full max-w-md px-4 py-2 text-lg text-white bg-neutral-800 border border-neutral-700 rounded-lg focus:outline-none focus:border-white transition-all"
          />
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div 
              key={item.id}
              className="relative group overflow-hidden rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105"
            >
              {/* Image */}
              <div className="relative h-60 sm:h-72 lg:h-80">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 transition-opacity duration-300 group-hover:bg-black/60">
                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-lg md:text-2xl font-bold mb-2">{item.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span 
                        key={tag}
                        className="px-3 py-1 bg-white/20 rounded-full text-sm backdrop-blur-sm"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Jika tidak ada hasil */}
        {filteredItems.length === 0 && (
          <p className="text-center text-white mt-8">Tidak ada hasil yang ditemukan.</p>
        )}
      </div>
    </div>
  );
}
