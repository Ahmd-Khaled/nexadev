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
      name: "Adnan Ibrahim",
      title: t("Project Manager"),
      role: t("Agile Delivery, Planning & Team Coordination"),
      icon: Users,
      img: "/images/team/manager.jpg",
    },
    {
      name: "Sadek Zedan",
      title: t("UI/UX Designer"),
      role: t("User Experience & Interface Design Specialist"),
      icon: Smartphone,
      img: "/images/team/sadek.png",
    },
    {
      name: "Ahmed Khaled",
      title: t("Frontend Developer"),
      role: t("UI/UX Implementation & React Specialist"),
      icon: Code2,
      img: "/images/team/ahmedkh.png",
    },
    {
      name: "Mohamed Ali",
      title: t("Backend Engineer"),
      role: t("APIs, Databases & System Architecture"),
      icon: Database,
      img: "/images/team/avatar.jpeg",
    },
    {
      name: "Ahmed AbdAllah",
      title: t("Full Stack Developer"),
      role: t("End-to-End Web Application Development"),
      icon: Globe,
      img: "/images/team/fullstack.webp",
    },
    {
      name: "Mariam Adel",
      title: t("Mobile Developer"),
      role: t("iOS & Android App Development"),
      icon: Smartphone,
      img: "/images/team/av2.jpg",
    },
    {
      name: "Esraa Hesham",
      title: t("QA Engineer"),
      role: t("Testing, Bug Tracking & Quality Assurance"),
      icon: Shield,
      img: "/images/team/icon-woman.webp",
    },
    {
      name: "Khaled Mostafa",
      title: t("DevOps Engineer"),
      role: t("CI/CD, Cloud Infrastructure & Deployment"),
      icon: Globe,
      img: "/images/team/dev.jpg",
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
        <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-amber-600/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-amber-600/10 blur-3xl" />
      </div>

      <div className="container relative z-10 mx-auto px-6">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={`text-center ${isArabic ? "text-right" : ""}`}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-2 text-sm text-amber-300">
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
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="group rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md transition hover:bg-white/10"
            >
              {/* <div className="relative mb-4 h-52 overflow-hidden rounded-xl">
                <Image
                  src={member.img || "/images/tema/default.png"}
                  alt={member.name}
                  fill
                  className="object-contain bg-gray-50 transition duration-500  group-hover:scale-110"
                />
              </div> */}
              <div className="relative mb-4 h-52 overflow-hidden rounded-xl bg-gray-100">
                <Image
                  src={member.img || "/images/team/default.png"}
                  alt={member.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  className="
                    object-contain
                    object-center
                    transition-transform
                    duration-500
                    ease-out
                    will-change-transform
                    transform-gpu
                    group-hover:scale-105
                  "
                />
              </div>

              <div className="flex items-center gap-2">
                <member.icon className="text-amber-400" size={18} />
                <span className="text-xs font-medium uppercase tracking-wider text-amber-400">
                  {member.title}
                </span>
              </div>

              <h3 className="mt-3 text-lg font-bold text-white">
                {member.name}
              </h3>

              <p className="mt-2 text-sm text-gray-400">{member.role}</p>
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
              <stat.icon className="mx-auto mb-3 text-amber-400" size={28} />
              <div className="text-3xl font-bold">{stat.value}</div>
              <div className="mt-1 text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
