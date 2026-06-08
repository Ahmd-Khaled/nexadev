"use client";

import { Globe, Loader2 } from "lucide-react";
import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import { setLocaleCookie } from "@/app/actions";
import { useState } from "react";

type Props = {
  className?: string;
};

export default function LanguageToggleButton({ className }: Props) {
  const locale = useLocale();
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const isArabic = locale === "ar";

  const toggleLanguage = async () => {
    if (loading) return;

    setLoading(true);

    try {
      const newLocale = locale === "en" ? "ar" : "en";

      if (newLocale === locale) return;

      await setLocaleCookie(newLocale);
      router.refresh();
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={toggleLanguage}
      disabled={loading}
      className={`
        cursor-pointer
        group relative flex items-center gap-2 rounded-full
        border border-white/10 bg-white/5 px-3 py-2
        text-sm text-gray-200 backdrop-blur-md
        transition-all duration-300
        hover:bg-white/10 hover:border-white/20
        active:scale-[0.97]
        disabled:opacity-60 disabled:cursor-not-allowed
        ${className}
      `}
    >
      {/* Icon */}
      <span className="relative flex items-center justify-center">
        {loading ? (
          <Loader2 className="h-4 w-4 animate-spin text-cyan-400" />
        ) : (
          <Globe
            className={`h-4 w-4 transition-transform group-hover:rotate-12 ${
              isArabic ? "text-gray-400" : "text-cyan-400"
            }`}
          />
        )}
      </span>

      {/* Label */}
      <span className="font-medium tracking-wide">
        {isArabic ? "EN" : "AR"}
      </span>

      {/* Active Indicator Dot */}
      <span
        className={`ml-1 h-2 w-2 rounded-full transition-all ${
          isArabic ? "bg-gray-400" : "bg-cyan-400"
        }`}
      />
    </button>
  );
}
