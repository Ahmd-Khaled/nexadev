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
      {
        title: t("E-Commerce Mobile App"),
        desc: t("Full shopping experience with payments and tracking"),
        img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
      },
      {
        title: t("Chat Messenger App"),
        desc: t("Real-time messaging with voice and video support"),
        img: "https://images.unsplash.com/photo-1520975922203-b6dc40b86e44",
      },
      {
        title: t("Travel Booking App"),
        desc: t("Book flights, hotels, and experiences easily"),
        img: "https://images.unsplash.com/photo-1503220317375-aaad61436b1b",
      },
    ],

    crm: [
      {
        title: t("Sales CRM System"),
        desc: t("Manage leads, clients, and sales pipeline"),
        img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
      },
      {
        title: t("Customer Support CRM"),
        desc: t("Ticketing system with automated responses"),
        img: "https://images.unsplash.com/photo-1556741533-f6acd647d2fb",
      },
      {
        title: t("Real Estate CRM"),
        desc: t("Manage property listings and client interactions"),
        img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa",
      },
      {
        title: t("HR Management CRM"),
        desc: t("Employee tracking, hiring, and performance tools"),
        img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
      },
      {
        title: t("Marketing Automation CRM"),
        desc: t("Email campaigns and lead nurturing workflows"),
        img: "https://images.unsplash.com/photo-1556155092-490a1ba16284",
      },
    ],

    dashboards: [
      {
        title: t("Admin Dashboard"),
        desc: t("Analytics and real-time data monitoring"),
        img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
      },
      {
        title: t("Finance Dashboard"),
        desc: t("Revenue, expenses, and profit tracking system"),
        img: "https://images.unsplash.com/photo-1554224155-6726b3ff858f",
      },
      {
        title: t("Sales Analytics Dashboard"),
        desc: t("Track KPIs and performance metrics"),
        img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
      },
      {
        title: t("IoT Monitoring Dashboard"),
        desc: t("Real-time device and sensor data visualization"),
        img: "https://images.unsplash.com/photo-1581090700227-1e37b190418e",
      },
      {
        title: t("E-Commerce Analytics Dashboard"),
        desc: t("Orders, customers, and conversion insights"),
        img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d",
      },
    ],

    websites: [
      {
        title: t("Company Website"),
        desc: t("Corporate modern website with CMS"),
        img: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d",
      },
      {
        title: t("Agency Website"),
        desc: t("Creative agency portfolio and services site"),
        img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      },
      {
        title: t("Startup Website"),
        desc: t("Modern startup landing and product showcase"),
        img: "https://images.unsplash.com/photo-1557821552-17105176677c",
      },
      {
        title: t("SaaS Website"),
        desc: t("Software product website with pricing pages"),
        img: "https://images.unsplash.com/photo-1526498460520-4c246339dccb",
      },
      {
        title: t("Educational Website"),
        desc: t("Online learning platform and courses"),
        img: "https://images.unsplash.com/photo-1501504905252-473c47e087f8",
      },
    ],

    landing: [
      {
        title: t("Product Landing Page"),
        desc: t("High conversion landing page design"),
        img: "https://images.unsplash.com/photo-1558655146-9f40138edfeb",
      },
      {
        title: t("App Launch Page"),
        desc: t("App promotion with CTA optimization"),
        img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
      },
      {
        title: t("SaaS Landing Page"),
        desc: t("Conversion-focused SaaS marketing page"),
        img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
      },
      {
        title: t("Event Landing Page"),
        desc: t("Conference and event registration page"),
        img: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678",
      },
      {
        title: t("Portfolio Landing Page"),
        desc: t("Personal branding landing page"),
        img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
      },
    ],

    portfolio: [
      {
        title: t("Creative Portfolio"),
        desc: t("Developer portfolio with animations"),
        img: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d",
      },
      {
        title: t("UI/UX Designer Portfolio"),
        desc: t("Showcase of modern UI/UX projects"),
        img: "https://images.unsplash.com/photo-1559028012-481c04fa702d",
      },
      {
        title: t("Developer Portfolio"),
        desc: t("Full-stack developer showcase site"),
        img: "https://images.unsplash.com/photo-1531497865144-0464ef8fb9a9",
      },
      {
        title: t("Freelancer Portfolio"),
        desc: t("Personal branding for freelancers"),
        img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c",
      },
      {
        title: t("Agency Portfolio"),
        desc: t("Creative agency case studies and work"),
        img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
      },
    ],
  };

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
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActive(tab.key)}
              className={`cursor-pointer flex items-center gap-2 rounded-full border px-5 py-2 text-sm transition ${
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
