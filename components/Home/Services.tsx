"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import {
  Globe,
  Smartphone,
  LayoutDashboard,
  Database,
  ShieldCheck,
  Cpu,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";

export default function Services() {
  const t = useTranslations("HomePage");

  const services = [
    {
      icon: Globe,
      title: t("Web Development"),
      description: t("Web Development Description"),
    },
    {
      icon: Smartphone,
      title: t("Mobile Apps"),
      description: t("Mobile Apps Description"),
    },
    {
      icon: LayoutDashboard,
      title: t("Dashboards"),
      description: t("Dashboards Description"),
    },
    {
      icon: Database,
      title: t("CRM Systems"),
      description: t("CRM Systems Description"),
    },
    {
      icon: ShieldCheck,
      title: t("Cyber Security"),
      description: t("Cyber Security Description"),
    },
    {
      icon: Cpu,
      title: t("AI Solutions"),
      description: t("AI Solutions Description"),
    },
  ];

  return (
    <section
      id="services"
      className="relative overflow-hidden bg-black py-32 text-white"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            x: [0, 120, 0],
            y: [0, 80, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
          }}
          className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-purple-600/10 blur-3xl"
        />

        <motion.div
          animate={{
            x: [0, -120, 0],
            y: [0, -80, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
          }}
          className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-blue-600/10 blur-3xl"
        />
      </div>

      <div className="container relative z-10 mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-4xl text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm text-cyan-300">
            <Sparkles size={16} />
            {t("Our Services")}
          </div>

          <h2 className="mt-6 text-4xl font-bold md:text-6xl">
            {t("Building Digital Products That Drive Growth")}
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-400">
            {t("Services Description")}
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="mt-20 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.1,
              }}
              whileHover={{
                y: -10,
              }}
              className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/5 to-transparent" />
              </div>

              <div className="relative z-10">
                {/* Icon */}
                <div className="mb-6 inline-flex rounded-2xl bg-blue-500/10 p-4 text-cyan-400 transition-all duration-300 group-hover:scale-110 group-hover:bg-blue-500/20">
                  <service.icon size={32} />
                </div>

                <h3 className="text-2xl font-bold">{service.title}</h3>

                <p className="mt-4 leading-7 text-gray-400">
                  {service.description}
                </p>

                <motion.div
                  whileHover={{ x: 5 }}
                  className="mt-8 flex items-center gap-2 text-cyan-400"
                >
                  <span>{t("Learn More")}</span>
                  <ArrowUpRight size={18} />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          className="mt-20 rounded-[40px] border border-white/10 bg-gradient-to-r from-blue-500/10 to-purple-500/10 p-10 text-center backdrop-blur-xl"
        >
          <h3 className="text-3xl font-bold">{t("Need A Custom Solution")}</h3>

          <p className="mx-auto mt-4 max-w-2xl text-gray-400">
            {t("Custom Solution Description")}
          </p>

          <button className="mt-8 rounded-2xl bg-cyan-600 px-8 py-4 font-medium transition hover:bg-cyan-700">
            {t("Lets Talk")}
          </button>
        </motion.div>
      </div>
    </section>
  );
}
