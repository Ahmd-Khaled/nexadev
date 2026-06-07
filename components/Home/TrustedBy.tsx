"use client";

import Image from "next/image";

const clients = [
  "/clients/client1.png",
  "/clients/client2.png",
  "/clients/client3.png",
  "/clients/client4.png",
  "/clients/client5.png",
  "/clients/client6.png",
];

export default function TrustedBy() {
  return (
    <section className="py-20 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 text-center">
        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
          Trusted By Leading Companies
        </h2>

        <p className="mt-3 text-gray-500 dark:text-gray-400">
          We work with startups, enterprises, and global brands
        </p>

        {/* Logos */}
        <div className="mt-10 grid grid-cols-2 md:grid-cols-6 gap-6 items-center opacity-80">
          {clients.map((logo, i) => (
            <div key={i} className="flex justify-center">
              <Image
                src={logo}
                alt="client"
                width={120}
                height={60}
                className="h-10 w-auto grayscale hover:grayscale-0 transition"
              />
            </div>
          ))}
        </div>

        {/* Stats highlight */}
        <div className="mt-12 text-sm text-gray-500">
          100+ Projects Delivered • 50+ Clients Worldwide • 10+ Countries
        </div>
      </div>
    </section>
  );
}
