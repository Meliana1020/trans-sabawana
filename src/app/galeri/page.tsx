"use client";
import { useState, useRef } from "react";
import Image from "next/image";

export default function GalleryPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const videoRefs = useRef<{ [key: number]: HTMLVideoElement | null }>({});
  const [isPlaying, setIsPlaying] = useState<{ [key: number]: boolean }>({});

  const galleryItems = [
    {
      id: 1,
      title: "Open Trip",
      image: "/private-trip1.jpeg",
      tags: ["Pemandangan", "Pegunungan", "Alam"],
      type: "image",
    },
    {
      id: 2,
      title: "Gunung Merbabu",
      image: "/trip.jpg",
      tags: ["Jejaksabawana", "Kebersamaan", "Pendakian"],
      type: "image",
    },
    {
      id: 3,
      title: "Gunung Merbabu",
      image: "/trip2.jpg",
      tags: ["Kekeluargaan", "Pendakian", "Jejaksabawana"],
      type: "image",
    },
    {
      id: 4,
      title: "Gunung Merbabu",
      image: "/trip3.jpg",
      tags: ["Pendakian", "Kebersamaan", "Jejaksabawana"],
      type: "image",
    },
    {
      id: 5,
      title: "Petualangan Gunung Rinjani",
      image: "/profile.jpg",
      tags: ["Gunung", "Summit", "Rinjani"],
      type: "image",
    },
    {
      id: 6,
      title: "Petualangan",
      image: "/camping.jpeg",
      tags: ["Camping", "Kebersamaan", "Gunung"],
      type: "image",
    },
    {
      id: 7,
      title: "Petualangan Gunung Rinjani",
      image: "/gunung-rinjani.jpg",
      tags: ["Gunung", "Summit", "Rinjani"],
      type: "image",
    },
    {
      id: 8,
      title: "Gunung Rinjani",
      image: "/gunung-rinjani2.jpg",
      tags: ["Gunung", "Summit", "Rinjani"],
      type: "image",
    },
    {
      id: 9,
      title: "Gunung Rinjani",
      image: "/gunung-rinjani3.jpg",
      tags: ["Gunung", "Summit", "Rinjani"],
      type: "image",
    },
    {
      id: 10,
      title: "Gunung Lawu",
      image: "/opentrip1.jpg",
      tags: ["Pendakian", "Jejak Sabawana", "Kebersamaan"],
      type: "image",
    },
    {
      id: 11,
      title: "Air Terjun Rinjani Via Torean",
      image: "/opentrip2.jpg",
      tags: ["Pendakian", "Air terjun", "Pemandangan"],
      type: "image",
    },
    {
      id: 12,
      title: "Basecamp Gunung Lawu",
      image: "/opentrip3.jpg",
      tags: ["Kebersamaan", "Pendakian", ""],
      type: "image",
    },
    {
      id: 13,
      title: "Basecame Gunung Lawu",
      image: "/opentrip4.jpg",
      tags: ["Pendakian", "Jejaksabawana", "Kebersamaan"],
      type: "image",
    },
    {
      id: 14,
      title: "Danau Segara Anak",
      image: "/opentrip5.jpg",
      tags: ["Rinjani", "Jejaksabawana", "Petualangan"],
      type: "image",
    },
    {
      id: 15,
      title: "Gunung Lawu",
      image: "/opentrip6.jpg",
      tags: ["Jejaksabawana", "Gunung Lawu", "Pendakian"],
      type: "image",
    },
    {
      id: 16,
      title: "Laut Banyuwangi",
      image: "/opentrip7.jpg",
      tags: ["Perjalanan", "Jejaksabawana", "Keindahan"],
      type: "image",
    },
    {
      id: 17,
      title: "Rentail Equipment Outdoor",
      image: "/rentail-aquipment-outdoor.jpg",
      tags: ["Pendakian", "Rentail", "Equipment"],
      type: "image",
    },
    {
      id: 18,
      title: "Rentail Equipment Outdoor",
      image: "/rentail-aquipment-outdoor2.jpg",
      tags: ["Equipment", "Pendakian", "Kebersamaan"],
      type: "image",
    },
    {
      id: 19,
      title: "Rentail Equipment Outdoor",
      image: "/rentail-aquipment-outdoor3.jpg",
      tags: ["Pendakian", "Rentail", "Equipment"],
      type: "image",
    },
    {
      id: 21,
      title: "Video Antar Paket Sembako",
      video: "/sembako.mp4",
      tags: ["Pengusaha Muda", "Perjuangan"],
      type: "video",
    },
    {
      id: 22,
      title: "Video Travel Lane",
      video: "/travel.mp4",
      tags: ["Travel Lane"],
      type: "video",
    },
    {
      id: 23,
      title: "Video Travel Lane",
      video: "/travel2.mp4",
      tags: ["Jasa Travel", "kenyamanan"],
      type: "video",
    },
  ];

  const handleVideoClick = (itemId: number) => {
    const video = videoRefs.current[itemId];
    if (video) {
      if (video.paused) {
        video.play();
        setIsPlaying((prev) => ({ ...prev, [itemId]: true }));
      } else {
        video.pause();
        setIsPlaying((prev) => ({ ...prev, [itemId]: false }));
      }
    }
  };

  const handleVideoEnd = (itemId: number) => {
    setIsPlaying((prev) => ({ ...prev, [itemId]: false }));
  };

  const filteredItems = galleryItems.filter(
    (item) =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.tags.some((tag) =>
        tag.toLowerCase().includes(searchQuery.toLowerCase())
      )
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="relative group overflow-hidden rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105 cursor-pointer"
              onClick={() => item.type === "video" && handleVideoClick(item.id)}
            >
              <div className="relative ">
                {item.type === "image" ? (
                  <div className="h-60 sm:h-72 lg:h-80">
                    <Image
                      src={item.image as string}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                ) : (
                  <>
                    <div className="video h-90 sm:h-96 lg:h-[35rem]">
                      <video
                        ref={(el: HTMLVideoElement | null) => {
                          videoRefs.current[item.id] = el;
                        }}
                        src={item.video as string}
                        className="object-fill w-full  h-full"
                        onEnded={() => handleVideoEnd(item.id)}
                        onPlay={() =>
                          setIsPlaying((prev) => ({ ...prev, [item.id]: true }))
                        }
                        onPause={() =>
                          setIsPlaying((prev) => ({
                            ...prev,
                            [item.id]: false,
                          }))
                        }
                      />

                      <div
                        className={`absolute inset-0 flex items-center justify-center bg-black/30 transition-opacity ${
                          isPlaying[item.id]
                            ? "opacity-0 group-hover:opacity-100"
                            : "opacity-100"
                        }`}
                      >
                        <button className="p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors">
                          {isPlaying[item.id] ? (
                            // Pause Icon
                            <svg
                              className="w-12 h-12 text-white"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z"
                              />
                            </svg>
                          ) : (
                            // Play Icon
                            <svg
                              className="w-12 h-12 text-white"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                              />
                            </svg>
                          )}
                        </button>
                      </div>
                    </div>
                  </>
                )}
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 transition-opacity duration-300 group-hover:bg-black/60">
                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-lg md:text-2xl font-bold mb-2">
                    {item.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag, index) => (
                      <span
                        key={index}
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
          <p className="text-center text-white mt-8">
            Tidak ada hasil yang ditemukan.
          </p>
        )}
      </div>
    </div>
  );
}
