"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";
import {
  Code2,
  Smartphone,
  Globe,
  Rocket,
  Sparkles,
  ArrowRight,
} from "lucide-react";

export default function Hero() {
  const locale = useLocale();
  const t = useTranslations("HomePage");

  const isArabic = locale === "ar";

  const services = [
    {
      icon: Code2,
      title: t("Web Development"),
      desc: t("Modern and fast web apps"),
    },
    {
      icon: Smartphone,
      title: t("Mobile Apps"),
      desc: t("iOS & Android solutions"),
    },
    {
      icon: Globe,
      title: t("CRM Systems"),
      desc: t("Smart customer management"),
    },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black pt-24 pb-16 text-white lg:min-h-screen lg:flex lg:items-center">
      {/* Background Glow */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-[-100px] left-[-100px] h-[500px] w-[500px] rounded-full bg-purple-600/20 blur-3xl"
          animate={{ x: [0, 40, 0], y: [0, 30, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
        />

        <motion.div
          className="absolute bottom-[-120px] right-[-120px] h-[400px] w-[400px] rounded-full bg-blue-500/20 blur-3xl"
          animate={{ x: [0, -30, 0], y: [0, -40, 0] }}
          transition={{ duration: 12, repeat: Infinity }}
        />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* LEFT CONTENT */}
          <div className={isArabic ? "text-right" : "text-left"}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className={`mb-4 flex items-center gap-2 ${
                isArabic ? "justify-end" : "justify-start"
              }`}
            >
              <Sparkles className="text-yellow-400" size={18} />

              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-1 text-sm text-gray-300 backdrop-blur-md">
                {t("Software Development Company")}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl lg:text-6xl"
            >
              {t("Hero Title")}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className={`mt-6 max-w-xl text-base text-gray-300 sm:text-lg ${
                isArabic ? "mr-auto" : ""
              }`}
            >
              {t("Hero Description")}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2 }}
              className={`mt-8 flex flex-col gap-3 sm:flex-row ${
                isArabic ? "sm:justify-end" : "sm:justify-start"
              }`}
            >
              <Link
                href="#services"
                className="group flex w-full items-center justify-center gap-2 rounded-xl bg-purple-600 px-6 py-3 transition hover:bg-purple-700 sm:w-auto"
              >
                {t("Get Started")}

                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>

              <Link
                href="#contact"
                className="w-full rounded-xl border border-gray-600 px-6 py-3 text-center transition hover:border-white sm:w-auto"
              >
                {t("Contact Us")}
              </Link>
            </motion.div>

            {/* SERVICES */}
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-md transition hover:bg-white/10"
                >
                  <service.icon className="mb-3 text-purple-400" size={24} />

                  <h3 className="mb-1 font-semibold">{service.title}</h3>

                  <p className="text-sm text-gray-400">{service.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="order-first relative flex justify-center lg:order-last"
          >
            <div className="relative h-[280px] w-[280px] sm:h-[350px] sm:w-[350px] lg:h-[420px] lg:w-[420px]">
              <Image
                src="https://images.unsplash.com/photo-1555066931-4365d14bab8c"
                alt={t("Software Development Company")}
                fill
                priority
                className="rounded-3xl object-cover shadow-2xl"
              />

              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute right-0 top-0 rounded-xl border border-white/10 bg-black/70 p-3 backdrop-blur-md sm:-right-4 sm:-top-4 lg:-right-6 lg:-top-6"
              >
                <Rocket className="text-blue-400" size={28} />
              </motion.div>

              <motion.div
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="absolute bottom-0 left-0 rounded-xl border border-white/10 bg-black/70 p-3 backdrop-blur-md sm:-bottom-4 sm:-left-4 lg:-bottom-6 lg:-left-6"
              >
                <Sparkles className="text-yellow-400" size={28} />
              </motion.div>

              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity }}
                className="absolute left-1/2 top-3 -translate-x-1/2 rounded-xl border border-white/10 bg-black/70 px-3 py-2 backdrop-blur-md sm:top-6"
              >
                <p className="text-xs font-medium sm:text-sm">
                  {t("Web Development")}
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
