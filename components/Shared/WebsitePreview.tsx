"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";

interface WebsitePreviewProps {
  src: string;
  alt: string;
}

export default function WebsitePreview({ src, alt }: WebsitePreviewProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);
  const directionRef = useRef(1);
  const pausedRef = useRef(false);

  const [, forceRender] = useState(0); // only for UI sync if needed

  const scrollBy = (amount: number) => {
    const el = containerRef.current;
    if (!el) return;

    el.scrollTo({
      top: el.scrollTop + amount,
      behavior: "smooth",
    });
  };

  const startAutoScroll = () => {
    const step = () => {
      const el = containerRef.current;
      if (!el) return;

      if (!pausedRef.current) {
        const maxScroll = el.scrollHeight - el.clientHeight;

        el.scrollTop += directionRef.current * 0.6; // speed (increase = faster)

        if (el.scrollTop >= maxScroll) directionRef.current = -1;
        if (el.scrollTop <= 0) directionRef.current = 1;
      }

      rafRef.current = requestAnimationFrame(step);
    };

    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(step);
  };

  const stopAutoScroll = () => {
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }
  };

  useEffect(() => {
    startAutoScroll();

    return () => stopAutoScroll();
  }, []);

  const pause = () => {
    pausedRef.current = true;
  };

  const resume = () => {
    pausedRef.current = false;
  };

  const isTouchDevice =
    typeof window !== "undefined" &&
    ("ontouchstart" in window || navigator.maxTouchPoints > 0);

  return (
    <div
      className="relative h-[400px] overflow-hidden rounded-2xl bg-black group shadow-2xl"
      onMouseEnter={() => {
        if (!isTouchDevice) pause();
      }}
      onMouseLeave={() => {
        if (!isTouchDevice) resume();
      }}
      onTouchStart={pause}
      onTouchEnd={() => {
        setTimeout(resume, 1200);
      }}
    >
      {/* Controls */}
      <div className="absolute right-3 top-1/2 z-20 flex -translate-y-1/2 flex-col gap-2 opacity-0 transition group-hover:opacity-100">
        <div className="flex flex-col rounded-full border border-white/10 bg-white/10 backdrop-blur-xl shadow-xl overflow-hidden">
          <button
            onClick={() => scrollBy(-160)}
            className="flex h-11 w-11 items-center justify-center hover:bg-white/20 transition"
          >
            <ChevronUp className="text-cyan-300" size={18} />
          </button>

          <div className="h-[1px] bg-white/10" />

          <button
            onClick={() => scrollBy(160)}
            className="flex h-11 w-11 items-center justify-center hover:bg-white/20 transition"
          >
            <ChevronDown className="text-cyan-300" size={18} />
          </button>
        </div>
      </div>

      {/* Scroll area */}
      <div
        ref={containerRef}
        className="h-full overflow-y-auto scroll-smooth touch-pan-y"
        style={{ WebkitOverflowScrolling: "touch" }}
      >
        <Image
          src={src}
          alt={alt}
          width={1200}
          height={3000}
          className="w-full h-auto select-none pointer-events-none"
        />
      </div>

      {/* gradients */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-8 bg-gradient-to-b from-black/90 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-black/90 to-transparent" />
    </div>
  );
}
