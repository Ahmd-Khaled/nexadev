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
  ShoppingCart,
} from "lucide-react";
import Image from "next/image";
import WebsitePreview from "../Shared/WebsitePreview";
import Link from "next/link";
import { projectsList } from "@/utils/projects";
import ProjectCard from "../Shared/ProjectCard";

export type Category =
  | "apps"
  | "crm"
  | "dashboards"
  | "websites"
  | "landing"
  | "portfolio"
  | "ecommerce";

export default function OurProjects() {
  const t = useTranslations("HomePage");
  const locale = useLocale();
  const isAr = locale === "ar";

  const [active, setActive] = useState<Category>("apps");

  const tabs = [
    { key: "apps", label: t("Apps"), icon: Smartphone },
    { key: "crm", label: t("CRM"), icon: Boxes },
    { key: "portfolio", label: t("Portfolio"), icon: Layers },
    { key: "websites", label: t("Websites"), icon: Globe },
    { key: "ecommerce", label: t("Ecommerce"), icon: ShoppingCart },
    { key: "landing", label: t("Landing Pages"), icon: Monitor },
    { key: "dashboards", label: t("Dashboards"), icon: LayoutDashboard },
  ] as const;

  return (
    <section id="projects" className="relative bg-black py-24 text-white">
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
        <div className="mt-12 flex flex-wrap justify-center gap-2">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActive(tab.key)}
              className={`cursor-pointer flex items-center gap-2 rounded-full border px-4 py-2 text-sm transition ${
                active === tab.key
                  ? "border-cyan-500 bg-cyan-500/20 text-white"
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
            {projectsList[active].map((project, index) => (
              <ProjectCard
                key={project.title}
                project={project}
                activeCategory={active}
                isAr={isAr}
                index={index}
              />
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
