"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { ArrowRight, Rocket, CalendarDays } from "lucide-react";

export default function CTASection() {
  const t = useTranslations("HomePage");

  return (
    <section
      id="cta"
      className="relative overflow-hidden bg-black pt-16 pb-32 text-white"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            x: [0, 80, 0],
            y: [0, -40, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
          }}
          className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-amber-600/10 blur-3xl"
        />

        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, 40, 0],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
          }}
          className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-amber-600/10 blur-3xl"
        />
      </div>

      <div className="container relative z-10 mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-5xl rounded-[40px] border border-white/10 bg-white/5 p-10 md:p-16 backdrop-blur-xl text-center"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/20 bg-amber-500/10 px-4 py-2 text-sm text-amber-300">
            <Rocket size={16} />
            {t("Ready To Start")}
          </div>

          {/* Title */}
          <h2 className="mt-8 text-4xl font-bold leading-tight md:text-6xl">
            {t("Lets Build Your Project")}
          </h2>

          {/* Description */}
          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-400 md:text-xl">
            {t("CTA Description")}
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="#contact-form"
              className="group flex items-center gap-2 rounded-2xl bg-amber-600 px-8 py-4 font-medium transition-all duration-300 hover:bg-amber-700 hover:scale-105"
            >
              {t("Contact Us")}
              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>

            <Link
              href="#booking"
              className="group flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-8 py-4 font-medium backdrop-blur-md transition-all duration-300 hover:bg-white/10 hover:scale-105"
            >
              <CalendarDays size={18} />
              {t("Book A Meeting")}
            </Link>
          </div>

          {/* Bottom Stats */}
          <div className="mt-16 grid gap-8 border-t border-white/10 pt-10 sm:grid-cols-3">
            <div>
              <h3 className="text-3xl font-bold text-amber-400">120+</h3>
              <p className="mt-2 text-gray-400">{t("Projects Delivered")}</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-amber-400">50+</h3>
              <p className="mt-2 text-gray-400">{t("Happy Clients")}</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-amber-400">24/7</h3>
              <p className="mt-2 text-gray-400">{t("Technical Support")}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
