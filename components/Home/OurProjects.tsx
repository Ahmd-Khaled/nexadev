"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";
import {
  Smartphone,
  LayoutDashboard,
  Globe,
  Layers,
  Boxes,
  Monitor,
} from "lucide-react";
import Image from "next/image";

type Category =
  | "apps"
  | "crm"
  | "dashboards"
  | "websites"
  | "landing"
  | "portfolio";

export default function OurProjects() {
  const t = useTranslations("HomePage");
  const locale = useLocale();
  const isArabic = locale === "ar";

  const [active, setActive] = useState<Category>("apps");

  const tabs = [
    { key: "apps", label: t("Apps"), icon: Smartphone },
    { key: "crm", label: t("CRM"), icon: Boxes },
    { key: "dashboards", label: t("Dashboards"), icon: LayoutDashboard },
    { key: "websites", label: t("Websites"), icon: Globe },
    { key: "landing", label: t("Landing Pages"), icon: Monitor },
    { key: "portfolio", label: t("Portfolio"), icon: Layers },
  ] as const;

  const projects: Record<Category, any[]> = {
    apps: [
      {
        title: t("Food Delivery App"),
        desc: t("Mobile app for restaurants and delivery tracking"),
        img: "https://images.unsplash.com/photo-1523473827536-2a64d0d367a7",
      },
      {
        title: t("Fitness App"),
        desc: t("Workout tracking and AI coaching system"),
        img: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438",
      },
    ],
    crm: [
      {
        title: t("Sales CRM System"),
        desc: t("Manage leads, clients, and sales pipeline"),
        img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
      },
    ],
    dashboards: [
      {
        title: t("Admin Dashboard"),
        desc: t("Analytics and real-time data monitoring"),
        img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
      },
    ],
    websites: [
      {
        title: t("Company Website"),
        desc: t("Corporate modern website with CMS"),
        img: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d",
      },
    ],
    landing: [
      {
        title: t("Product Landing Page"),
        desc: t("High conversion landing page design"),
        img: "https://images.unsplash.com/photo-1558655146-9f40138edfeb",
      },
    ],
    portfolio: [
      {
        title: t("Creative Portfolio"),
        desc: t("Developer portfolio with animations"),
        img: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d",
      },
    ],
  };

  return (
    <section className="relative bg-black py-24 text-white">
      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-purple-600/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-blue-600/10 blur-3xl" />
      </div>

      <div className="container relative z-10 mx-auto px-6">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold md:text-5xl">
            {t("Our Projects")}
          </h2>
          <p className="mt-4 text-gray-400">
            {t("Explore our latest digital solutions")}
          </p>
        </motion.div>

        {/* TABS */}
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActive(tab.key)}
              className={`flex items-center gap-2 rounded-full border px-5 py-2 text-sm transition ${
                active === tab.key
                  ? "border-purple-500 bg-purple-500/20 text-white"
                  : "border-white/10 bg-white/5 text-gray-300 hover:bg-white/10"
              }`}
            >
              <tab.icon size={16} />
              {tab.label}
            </button>
          ))}
        </div>

        {/* PROJECT GRID */}
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="wait">
            {projects[active].map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 30 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md"
              >
                <div className="relative h-52 overflow-hidden">
                  {/* <img
                    src={project.img}
                    alt={project.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                  /> */}
                  <Image
                    src={project.img}
                    alt={project.title}
                    width={500}
                    height={500}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                  />
                </div>

                <div className="p-5">
                  <h3 className="text-lg font-semibold">{project.title}</h3>
                  <p className="mt-2 text-sm text-gray-400">{project.desc}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
