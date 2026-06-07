"use client";

import { motion } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";

// React Icons
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import { FiArrowRight } from "react-icons/fi";
import { HiSparkles } from "react-icons/hi2";
import { Code2 } from "lucide-react";

export default function Footer() {
  const t = useTranslations("HomePage");
  const locale = useLocale();
  const isArabic = locale === "ar";

  const links = [
    { name: t("About Us"), href: "#about" },
    { name: t("Our Projects"), href: "#projects" },
    { name: t("Our Team"), href: "#team" },
    { name: t("Contact Us"), href: "#contact" },
  ];

  const services = [
    t("Web Development"),
    t("Mobile Apps"),
    t("CRM Systems"),
    t("Dashboards"),
  ];

  return (
    <footer className="relative overflow-hidden bg-black pt-24 text-white">
      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-purple-600/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-blue-600/10 blur-3xl" />
      </div>

      <div className="container relative z-10 mx-auto px-6">
        {/* TOP CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl border border-white/10 bg-white/5 p-10 text-center backdrop-blur-xl"
        >
          <div className="mb-4 flex items-center justify-center gap-2 text-purple-300">
            <HiSparkles size={18} />
            {t("Stay Connected")}
          </div>

          <h2 className="text-3xl font-bold md:text-4xl">
            {t("Let’s Build Something Amazing")}
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-gray-400">
            {t("Footer Description")}
          </p>

          {/* Newsletter */}
          <div className="mx-auto mt-8 flex max-w-md items-center overflow-hidden rounded-xl border border-white/10 bg-black/40">
            <HiMail className="ml-3 text-gray-400" size={20} />

            <input
              type="email"
              placeholder={t("Enter your email")}
              className="w-full bg-transparent px-3 py-3 text-sm outline-none"
            />

            <button className="flex items-center gap-2 bg-purple-600 px-4 py-3 text-sm hover:bg-purple-700">
              {t("Subscribe")}
              <FiArrowRight size={16} />
            </button>
          </div>
        </motion.div>

        {/* LINKS GRID */}
        <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 text-white">
              <Code2 className="h-6 w-6 text-blue-400" />
              <span className="text-lg font-bold">
                Nexa<span className="text-blue-400">Dev</span>
              </span>
            </Link>

            <p className="mt-3 text-sm text-gray-400">
              {t("Footer Short About")}
            </p>

            <div className="mt-5 flex gap-4 text-gray-400">
              <FaGithub
                className="cursor-pointer hover:text-white transition"
                size={20}
              />
              <FaLinkedin
                className="cursor-pointer hover:text-white transition"
                size={20}
              />
              <FaTwitter
                className="cursor-pointer hover:text-white transition"
                size={20}
              />
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="mb-4 font-semibold">{t("Quick Links")}</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              {links.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="hover:text-white">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-4 font-semibold">{t("Services")}</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              {services.map((s) => (
                <li key={s} className="hover:text-white">
                  {s}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 font-semibold">{t("Contact")}</h4>
            <p className="text-sm text-gray-400">
              {t("Email")}: support@nexadev.com
            </p>
            <p className="mt-2 text-sm text-gray-400">
              {t("Phone")}: +20 100 000 0000
            </p>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 py-6 text-sm text-gray-500 md:flex-row">
          <p>
            © {new Date().getFullYear()} NexaDev. {t("All Rights Reserved")}
          </p>

          <div className="flex gap-4">
            <span className="cursor-pointer hover:text-white">
              {t("Privacy Policy")}
            </span>
            <span className="cursor-pointer hover:text-white">
              {t("Terms")}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
