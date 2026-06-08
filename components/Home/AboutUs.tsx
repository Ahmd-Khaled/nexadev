"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";
import { Award, Users, Rocket, ShieldCheck, CheckCircle2 } from "lucide-react";

export default function AboutUs() {
  const locale = useLocale();
  const t = useTranslations("HomePage");

  const isArabic = locale === "ar";

  const features = [
    {
      icon: Rocket,
      title: t("Fast Delivery"),
    },
    {
      icon: ShieldCheck,
      title: t("High Quality"),
    },
    {
      icon: Users,
      title: t("Dedicated Team"),
    },
    {
      icon: Award,
      title: t("Proven Experience"),
    },
  ];

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-black py-24 text-white"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-purple-600/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-blue-600/10 blur-3xl" />
      </div>

      <div className="container relative z-10 mx-auto px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: isArabic ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative h-[500px] overflow-hidden rounded-3xl border border-white/10">
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c"
                alt={t("About Us")}
                fill
                className="object-cover"
              />
            </div>

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -right-5 -top-5 rounded-2xl border border-white/10 bg-black/80 p-5 backdrop-blur-md"
            >
              <Rocket className="text-cyan-400" size={32} />
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="absolute -bottom-5 -left-5 rounded-2xl border border-white/10 bg-black/80 p-5 backdrop-blur-md"
            >
              <Award className="text-yellow-400" size={32} />
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: isArabic ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-start"
          >
            <span className="inline-flex rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300">
              {t("About Us")}
            </span>

            <h2 className="mt-6 text-4xl font-bold md:text-5xl leading-18">
              {t("About Title")}
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-gray-300">
              {t("About Description")}
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="shrink-0 text-cyan-400" size={20} />
                <span>{t("Custom Web Applications")}</span>
              </div>

              <div className="flex items-center gap-3">
                <CheckCircle2 className="shrink-0 text-cyan-400" size={20} />
                <span>{t("Mobile App Development")}</span>
              </div>

              <div className="flex items-center gap-3">
                <CheckCircle2 className="shrink-0 text-cyan-400" size={20} />
                <span>{t("CRM & ERP Solutions")}</span>
              </div>

              <div className="flex items-center gap-3">
                <CheckCircle2 className="shrink-0 text-cyan-400" size={20} />
                <span>{t("UI/UX Design")}</span>
              </div>
            </div>

            {/* Feature Cards */}
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.15,
                  }}
                  className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md transition hover:bg-white/10"
                >
                  <feature.icon className="mb-3 text-cyan-400" size={28} />

                  <h3 className="font-semibold">{feature.title}</h3>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
