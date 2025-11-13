"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

const banners: string[] = ["/banner1.jpg", "/banner2.jpg", "/banner3.jpg"];

export default function Carousel() {
  const [current, setCurrent] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % banners.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-64 md:h-96 overflow-hidden">
      {banners.map((banner, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image src={banner} alt={`Banner ${i}`} fill className="object-cover" />
        </div>
      ))}
    </div>
  );
}
