"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  MessageSquare,
  Sparkles,
  Rocket,
  Layers3,
  Cpu,
  HeadphonesIcon,
} from "lucide-react";

export default function ContactUs() {
  const t = useTranslations("HomePage");

  const contactCards = [
    {
      icon: Mail,
      title: t("Email Us"),
      value: "hello@nexadev.com",
    },
    {
      icon: Phone,
      title: t("Call Us"),
      value: "+20 100 000 0000",
    },
    {
      icon: MapPin,
      title: t("Visit Us"),
      value: "Cairo, Egypt",
    },
  ];

  const advantages = [
    {
      icon: Rocket,
      title: t("Fast Delivery"),
      description: t("Fast Delivery Description"),
    },
    {
      icon: Layers3,
      title: t("Scalable Solutions"),
      description: t("Scalable Solutions Description"),
    },
    {
      icon: Cpu,
      title: t("Modern Technologies"),
      description: t("Modern Technologies Description"),
    },
    {
      icon: HeadphonesIcon,
      title: t("Dedicated Support"),
      description: t("Dedicated Support Description"),
    },
  ];

  return (
    <section
      id="contact"
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
            duration: 14,
            repeat: Infinity,
          }}
          className="absolute -left-32 top-0 h-[500px] w-[500px] rounded-full bg-cyan-600/10 blur-3xl"
        />

        <motion.div
          animate={{
            x: [0, -120, 0],
            y: [0, -60, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
          }}
          className="absolute -right-32 bottom-0 h-[500px] w-[500px] rounded-full bg-cyan-600/10 blur-3xl"
        />
      </div>

      <div className="container relative z-10 mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300">
            <Sparkles size={16} />
            {t("Get In Touch")}
          </div>

          <h2 className="mt-6 text-4xl font-bold md:text-6xl">
            {t("Lets Create Something Extraordinary")}
          </h2>

          <p className="mt-6 text-lg text-gray-400">
            {t("Contact Description")}
          </p>
        </motion.div>

        {/* Contact Cards */}
        <div className="mt-16 grid gap-6 md:grid-cols-3 w-full md:w-[70%] mx-auto">
          {contactCards.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              whileHover={{
                y: -8,
                scale: 1.02,
              }}
              className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
            >
              <item.icon className="mb-4 text-cyan-400" size={30} />

              <h3 className="text-lg font-semibold">{item.title}</h3>

              <p className="mt-2 text-gray-400">{item.value}</p>
            </motion.div>
          ))}
        </div>

        {/* Main Content */}
        <div className="mt-20 grid gap-10 lg:grid-cols-2">
          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
          >
            <div className="flex items-center gap-3">
              <MessageSquare className="text-cyan-400" size={30} />

              <h3 className="text-2xl font-bold">{t("Why Work With Us")}</h3>
            </div>

            <p className="mt-6 leading-8 text-gray-400">
              {t("Why Work Description")}
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {advantages.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{
                    y: -5,
                    scale: 1.02,
                  }}
                  className="group rounded-2xl border border-white/10 bg-white/5 p-5 transition-all hover:border-cyan-500/30 hover:bg-white/10"
                >
                  <div className="flex items-start gap-4">
                    <div className="rounded-xl bg-cyan-500/10 p-3 text-cyan-400 transition group-hover:bg-cyan-500/20">
                      <item.icon size={22} />
                    </div>

                    <div>
                      <h4 className="font-semibold">{item.title}</h4>

                      <p className="mt-2 text-sm leading-6 text-gray-400">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
          >
            <h3 className="mb-8 text-2xl font-bold">{t("Send Message")}</h3>

            <div className="space-y-5">
              <input
                type="text"
                placeholder={t("Your Name")}
                className="w-full rounded-2xl border border-white/10 bg-black/30 px-5 py-4 outline-none transition focus:border-cyan-500"
              />

              <input
                type="email"
                placeholder={t("Your Email")}
                className="w-full rounded-2xl border border-white/10 bg-black/30 px-5 py-4 outline-none transition focus:border-cyan-500"
              />

              <input
                type="text"
                placeholder={t("Project Type")}
                className="w-full rounded-2xl border border-white/10 bg-black/30 px-5 py-4 outline-none transition focus:border-cyan-500"
              />

              <textarea
                rows={5}
                placeholder={t("Tell Us About Your Project")}
                className="w-full resize-none rounded-2xl border border-white/10 bg-black/30 px-5 py-4 outline-none transition focus:border-cyan-500"
              />

              <motion.button
                whileHover={{
                  scale: 1.03,
                }}
                whileTap={{
                  scale: 0.98,
                }}
                className="flex w-full items-center justify-center gap-2 rounded-2xl bg-cyan-600 py-4 font-medium transition hover:bg-cyan-700"
              >
                <Send size={18} />
                {t("Send Message")}
              </motion.button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
