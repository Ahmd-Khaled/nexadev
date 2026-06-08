"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X, Code2, PhoneCall } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import LanguageToggleButton from "./LanguageToggleButton";

export default function Header() {
  const [open, setOpen] = useState(false);

  const locale = useLocale();
  const t = useTranslations("HomePage");

  const isArabic = locale === "ar";

  const navItems = [
    { label: t("home"), href: "/" },
    { label: t("services"), href: "#services" },
    { label: t("projects"), href: "#projects" },
    { label: t("plans"), href: "#plans" },
    { label: t("about"), href: "#about" },
    { label: t("contact"), href: "#contact" },
  ];

  return (
    <header
      className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-black/60 backdrop-blur-md"
      dir={isArabic ? "rtl" : "ltr"}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 text-white">
          <Code2 className="h-6 w-6 text-cyan-400" />
          <span className="text-lg font-bold">
            Nexa
            <span className="text-cyan-400">Dev</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-gray-300 transition hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Right Actions (Desktop) */}
        <div className="hidden items-center gap-3 md:flex">
          <LanguageToggleButton />

          {/* Call Icon */}
          <a
            href="tel:+201000000000"
            className="relative flex h-10 w-10 items-center justify-center group"
          >
            {/* Ping */}
            <span className="absolute inline-flex h-10 w-10 animate-ping rounded-full bg-cyan-400/40" />

            {/* Icon */}
            <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-cyan-500 text-white shadow-lg transition hover:scale-110 active:scale-95 animate-bounce group-hover:animate-none">
              <PhoneCall className="h-4 w-4" />
            </div>
          </a>

          {/* Get Quote */}
          <Link
            href="#contact"
            className="rounded-xl bg-white px-4 py-2 text-sm font-medium text-black transition hover:bg-gray-200"
          >
            {t("getQuote")}
          </Link>
        </div>

        {/* Mobile Button */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-white">
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden border-t border-white/10 bg-black px-6 py-4"
        >
          <div className="flex flex-col gap-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-sm text-gray-300 hover:text-cyan-400 transition"
              >
                {item.label}
              </Link>
            ))}

            <div className="flex items-center justify-between gap-3 pt-3">
              <LanguageToggleButton />
              <Link
                href="#contact"
                onClick={() => setOpen(false)}
                className="rounded-xl bg-white px-4 py-2 text-sm font-medium text-black"
              >
                {t("getQuote")}
              </Link>

              <div className="flex items-center gap-3">
                {/* Mobile Call Icon */}
                <a
                  href="tel:+201000000000"
                  className="relative flex h-10 w-10 items-center justify-center"
                >
                  <span className="absolute inline-flex h-10 w-10 animate-ping rounded-full bg-cyan-400/40" />
                  <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-cyan-500 text-white animate-bounce">
                    <PhoneCall className="h-4 w-4" />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </header>
  );
}
