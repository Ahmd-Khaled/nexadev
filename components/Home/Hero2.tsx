"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import {
  Rocket,
  Sparkles,
  Code2,
  Smartphone,
  LayoutDashboard,
  Brain,
} from "lucide-react";

export default function Hero2() {
  const t = useTranslations("HomePage");

  const services = [
    { icon: Code2, label: t("Web Development") },
    { icon: Smartphone, label: t("Mobile Apps") },
    { icon: LayoutDashboard, label: t("Dashboards") },
    { icon: Brain, label: t("AI Solutions") },
  ];

  const stats = [
    { value: "120+", label: t("Projects") },
    { value: "50+", label: t("Clients") },
    { value: "5+", label: t("Years") },
  ];

  return (
    <section className="relative pt-8 overflow-hidden bg-black text-white">
      {/* ================= BACKGROUND GLOW ================= */}
      <div className="absolute inset-0">
        <motion.div
          animate={{ x: [0, 80, 0], y: [0, 50, 0] }}
          transition={{ duration: 12, repeat: Infinity }}
          className="absolute left-[-120px] top-[-120px] h-[500px] w-[500px] rounded-full bg-blue-600/20 blur-3xl"
        />

        <motion.div
          animate={{ x: [0, -80, 0], y: [0, -60, 0] }}
          transition={{ duration: 14, repeat: Infinity }}
          className="absolute right-[-120px] bottom-[-120px] h-[500px] w-[500px] rounded-full bg-purple-600/20 blur-3xl"
        />

        <motion.div
          animate={{ x: [0, 50, 0], y: [0, -50, 0] }}
          transition={{ duration: 16, repeat: Infinity }}
          className="absolute left-1/2 top-1/3 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl"
        />
      </div>

      {/* ================= MAIN CONTAINER ================= */}
      <div className="container relative pt-10 z-10 mx-auto grid min-h-screen items-center gap-12 px-6 lg:grid-cols-2">
        {/* ================= LEFT SIDE ================= */}
        <div>
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-300 backdrop-blur-xl"
          >
            <Sparkles size={16} className="text-blue-400" />
            {t("Software Company")}
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl font-bold leading-tight md:text-7xl"
          >
            {t("Build")}{" "}
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-500 bg-clip-text text-transparent">
              {t("Digital Products")}
            </span>{" "}
            {t("That Scale")}
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 max-w-xl text-lg text-gray-400"
          >
            {t(
              "We build web apps, mobile apps, CRM systems, dashboards and AI solutions that help businesses grow faster.",
            )}
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <Link
              href="#contact"
              className="rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 font-medium transition hover:scale-105"
            >
              {t("Start Project")}
            </Link>

            <Link
              href="#projects"
              className="rounded-2xl border border-white/10 bg-white/5 px-6 py-3 font-medium backdrop-blur-xl transition hover:bg-white/10"
            >
              {t("View Projects")}
            </Link>
          </motion.div>

          {/* Service Chips */}
          <div className="mt-10 flex flex-wrap gap-3">
            {services.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + i * 0.1 }}
                className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-300 backdrop-blur-xl"
              >
                <s.icon size={16} className="text-blue-400" />
                {s.label}
              </motion.div>
            ))}
          </div>

          {/* Stats */}
          <div className="mt-10 grid grid-cols-3 gap-4">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + i * 0.1 }}
                className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center backdrop-blur-xl"
              >
                <h3 className="text-2xl font-bold text-white">{s.value}</h3>
                <p className="text-sm text-gray-400">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ================= RIGHT SIDE ================= */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          {/* Floating Cards */}
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute -left-6 top-10 z-20 rounded-2xl border border-white/10 bg-black/40 p-4 backdrop-blur-xl"
          >
            <p className="text-sm text-gray-400">{t("Clients")}</p>
            <h4 className="text-xl font-bold text-white">50+</h4>
          </motion.div>

          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="absolute bottom-6 right-0 z-20 rounded-2xl border border-white/10 bg-black/40 p-4 backdrop-blur-xl"
          >
            <p className="text-sm text-gray-400">{t("Projects")}</p>
            <h4 className="text-xl font-bold text-white">120+</h4>
          </motion.div>

          {/* Dashboard Image */}
          <div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-white/5 p-4 backdrop-blur-xl">
            <Image
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71"
              alt="Dashboard"
              width={800}
              height={600}
              className="rounded-[32px] object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
