"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";
import {
  Code2,
  Database,
  Globe,
  Smartphone,
  Shield,
  Users,
} from "lucide-react";

export default function OurTeam() {
  const locale = useLocale();
  const t = useTranslations("HomePage");

  const isArabic = locale === "ar";

  const team = [
    {
      name: t("Frontend Developer"),
      role: t("UI/UX & React Specialist"),
      icon: Code2,
      img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    },
    {
      name: t("Backend Engineer"),
      role: t("APIs & Database Architect"),
      icon: Database,
      img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
    },
    {
      name: t("Mobile Developer"),
      role: t("iOS & Android Expert"),
      icon: Smartphone,
      img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1",
    },
    {
      name: t("DevOps Engineer"),
      role: t("Cloud & Deployment Specialist"),
      icon: Globe,
      img: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0",
    },
  ];

  const stats = [
    {
      icon: Users,
      label: t("Team Members"),
      value: "12+",
    },
    {
      icon: Shield,
      label: t("Projects Delivered"),
      value: "100+",
    },
    {
      icon: Globe,
      label: t("Clients Worldwide"),
      value: "40+",
    },
  ];

  return (
    <section
      id="team"
      className="relative overflow-hidden bg-black py-24 text-white"
    >
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
          className={`text-center ${isArabic ? "text-right" : ""}`}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-2 text-sm text-purple-300">
            <Users size={16} />
            {t("Our Team")}
          </span>

          <h2 className="mt-6 text-4xl font-bold md:text-5xl">
            {t("Team Title")}
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-300">
            {t("Team Description")}
          </p>
        </motion.div>

        {/* TEAM GRID */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="group rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md transition hover:bg-white/10"
            >
              <div className="relative mb-4 h-52 overflow-hidden rounded-xl">
                <Image
                  src={member.img}
                  alt={member.name}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-110"
                />
              </div>

              <div className="flex items-center gap-2">
                <member.icon className="text-purple-400" size={18} />
                <h3 className="font-semibold">{member.name}</h3>
              </div>

              <p className="mt-1 text-sm text-gray-400">{member.role}</p>
            </motion.div>
          ))}
        </div>

        {/* STATS */}
        <div className="mt-20 grid gap-6 sm:grid-cols-3">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-md"
            >
              <stat.icon className="mx-auto mb-3 text-purple-400" size={28} />
              <div className="text-3xl font-bold">{stat.value}</div>
              <div className="mt-1 text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
