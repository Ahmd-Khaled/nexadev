"use client";

import { motion } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";
import { Quote, Sparkles } from "lucide-react";
import Image from "next/image";

export default function CTOWords() {
  const locale = useLocale();
  const t = useTranslations("HomePage");

  const isArabic = locale === "ar";

  return (
    <section
      id="cto-words"
      className="relative overflow-hidden bg-gradient-to-b from-black to-gray-950 py-24 text-white"
    >
      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute left-1/4 top-0 h-96 w-96 rounded-full bg-purple-600/10 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-blue-600/10 blur-3xl" />
      </div>

      <div className="container relative z-10 mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className={`mx-auto max-w-4xl text-center ${
            isArabic ? "text-right" : "text-left"
          }`}
        >
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-2 text-sm text-purple-300">
            <Sparkles size={16} />
            {t("CTO Words")}
          </div>

          {/* Quote Card */}
          <div className="relative rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-xl">
            <Quote
              className="absolute left-6 top-6 text-purple-400/40"
              size={40}
            />

            <p className="text-xl leading-relaxed text-gray-200 md:text-2xl">
              {t("CTO Quote")}
            </p>

            <div className="mt-8 flex items-center justify-center gap-4">
              {/* <div className="h-12 w-12 rounded-full bg-gradient-to-r from-purple-500 to-blue-500" /> */}

              <div className="h-16 w-16 rounded-full bg-gradient-to-r from-purple-500 to-blue-500">
                <Image
                  src="/images/cto1.png"
                  alt="CTO"
                  width={64}
                  height={64}
                  className="rounded-full object-cover"
                />
              </div>

              <div className="text-left">
                <h4 className="font-semibold">{t("CTO Name")}</h4>
                <p className="text-sm text-gray-400">{t("CTO Title")}</p>
              </div>
            </div>
          </div>

          {/* Small highlight points */}
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-5 text-center backdrop-blur-md"
            >
              {t("Innovation First")}
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-5 text-center backdrop-blur-md"
            >
              {t("Scalable Architecture")}
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-5 text-center backdrop-blur-md"
            >
              {t("User-Centered Design")}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
