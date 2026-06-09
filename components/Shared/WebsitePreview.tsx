"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ChevronUp, ChevronDown, LoaderCircle } from "lucide-react";
import { useTranslations } from "next-intl";

interface WebsitePreviewProps {
  src: string;
  alt: string;
}

export default function WebsitePreview({ src, alt }: WebsitePreviewProps) {
  const t = useTranslations("HomePage");

  const containerRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);
  const directionRef = useRef(1);
  const pausedRef = useRef(false);

  const [isLoaded, setIsLoaded] = useState(false);
  const [minimumDelayPassed, setMinimumDelayPassed] = useState(false);

  const showLoader = !isLoaded || !minimumDelayPassed;

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

        el.scrollTop += directionRef.current * 0.6;

        if (el.scrollTop >= maxScroll) {
          directionRef.current = -1;
        }

        if (el.scrollTop <= 0) {
          directionRef.current = 1;
        }
      }

      rafRef.current = requestAnimationFrame(step);
    };

    stopAutoScroll();
    rafRef.current = requestAnimationFrame(step);
  };

  const stopAutoScroll = () => {
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setMinimumDelayPassed(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!showLoader) {
      startAutoScroll();
    }

    return () => stopAutoScroll();
  }, [showLoader]);

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
      className="group relative h-[400px] overflow-hidden rounded-2xl bg-black shadow-2xl"
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
      {/* Loader */}
      {showLoader && (
        <div className="absolute inset-0 z-50 flex items-center justify-center bg-black">
          <div className="flex flex-col items-center gap-3">
            <LoaderCircle size={38} className="animate-spin text-cyan-400" />
            <span className="text-sm text-gray-400">{t("loading")}</span>
          </div>
        </div>
      )}

      {/* Controls */}
      <div className="absolute right-3 top-1/2 z-20 flex -translate-y-1/2 flex-col gap-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div className="flex flex-col overflow-hidden rounded-full border border-white/10 bg-white/10 shadow-xl backdrop-blur-xl">
          <button
            onClick={() => scrollBy(-160)}
            className="flex h-11 w-11 items-center justify-center transition hover:bg-white/20"
          >
            <ChevronUp className="text-cyan-300" size={18} />
          </button>

          <div className="h-px bg-white/10" />

          <button
            onClick={() => scrollBy(160)}
            className="flex h-11 w-11 items-center justify-center transition hover:bg-white/20"
          >
            <ChevronDown className="text-cyan-300" size={18} />
          </button>
        </div>
      </div>

      {/* Scroll Area */}
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
          priority={false}
          onLoad={() => setIsLoaded(true)}
          className={`h-auto w-full select-none pointer-events-none transition-opacity duration-500 ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
        />
      </div>

      {/* Top Gradient */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-8 bg-gradient-to-b from-black/90 to-transparent" />

      {/* Bottom Gradient */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-black/90 to-transparent" />
    </div>
  );
}
