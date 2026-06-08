"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Link from "next/link";

import { FaGithub, FaLinkedinIn, FaTwitter, FaFacebookF } from "react-icons/fa";

import {
  Code2,
  ArrowUpRight,
  Sparkles,
  Globe,
  Rocket,
  ShieldCheck,
  Phone,
  PhoneCall,
} from "lucide-react";
import MobileCall from "./MobileCall";

export default function Footer() {
  const t = useTranslations("HomePage");

  const links = [
    { name: t("About Us"), href: "#about" },
    { name: t("Services"), href: "#services" },
    { name: t("Our Team"), href: "#team" },
    { name: t("Our Projects"), href: "#projects" },
    { name: t("plans"), href: "#plans" },
    { name: t("Contact Us"), href: "#contact" },
  ];

  const services = [
    t("Web Development"),
    t("Mobile Apps"),
    t("CRM Systems"),
    t("Dashboards"),
  ];

  return (
    <footer className="relative overflow-hidden bg-black text-white">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
          }}
          className="absolute -left-40 top-20 h-[500px] w-[500px] rounded-full bg-cyan-600/10 blur-3xl"
        />

        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
          }}
          className="absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full bg-cyan-600/10 blur-3xl"
        />
      </div>

      {/* Top Gradient Line */}
      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />

      <div className="container relative z-10 mx-auto px-6">
        {/* Hero Footer */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="py-20 text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300">
            <Sparkles size={16} />
            {t("Building Digital Excellence")}
          </div>

          <h2 className="mx-auto mt-6 max-w-4xl text-4xl font-bold md:text-6xl">
            {t("Creating Future Ready Digital Products")}
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-400">
            {t("Footer Hero Description")}
          </p>
        </motion.div>

        {/* Stats */}
        {/* <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              icon: Rocket,
              value: "100+",
              label: t("Projects Delivered"),
            },
            {
              icon: Globe,
              value: "50+",
              label: t("Global Clients"),
            },
            {
              icon: ShieldCheck,
              value: "99%",
              label: t("Client Satisfaction"),
            },
          ].map((item) => (
            <motion.div
              key={item.label}
              whileHover={{ y: -5 }}
              className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
            >
              <item.icon className="mb-4 text-blue-400" size={28} />

              <h3 className="text-3xl font-bold">{item.value}</h3>

              <p className="mt-2 text-gray-400">{item.label}</p>
            </motion.div>
          ))}
        </div> */}

        {/* Main Footer */}
        <div className="mt-0 grid gap-12 border-t border-white/10 py-16 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3">
              <motion.div
                animate={{ rotate: [0, 10, 0, -10, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                }}
              >
                <Code2 className="h-8 w-8 text-cyan-400" />
              </motion.div>

              <span className="text-2xl font-bold">
                Nexa<span className="text-cyan-400">Dev</span>
              </span>
            </Link>

            <p className="mt-5 leading-7 text-gray-400">
              {t("Footer Short About")}
            </p>

            <div className="mt-8 flex gap-3">
              {[FaGithub, FaLinkedinIn, FaTwitter, FaFacebookF].map(
                (Icon, i) => (
                  <motion.a
                    key={i}
                    whileHover={{
                      scale: 1.15,
                      y: -4,
                    }}
                    href="#"
                    className="rounded-2xl border border-white/10 bg-white/5 p-3 text-gray-400 transition hover:border-cyan-500 hover:text-white"
                  >
                    <Icon size={18} />
                  </motion.a>
                ),
              )}
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="mb-5 font-semibold">{t("Quick Links")}</h3>

            <ul className="space-y-3">
              {links.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="group flex items-center gap-2 text-gray-400 transition hover:text-cyan-400"
                  >
                    <ArrowUpRight
                      size={14}
                      className="opacity-0 transition group-hover:opacity-100 group-hover:text-cyan-400"
                    />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-5 font-semibold">{t("Services")}</h3>

            <ul className="space-y-3 text-gray-400">
              {services.map((service) => (
                <li
                  key={service}
                  className="transition hover:text-cyan-400 cursor-pointer"
                >
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Card */}
          {/* Contact Card */}
          <div>
            <div className="group relative overflow-hidden rounded-3xl border border-blue-500/20 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 p-6 backdrop-blur-xl transition-all duration-300 hover:scale-[1.02] hover:border-cyan-400/40">
              {/* Animated glow background */}
              <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-cyan-500/20 blur-3xl animate-pulse" />
              <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-blue-500/20 blur-3xl animate-pulse" />

              <h3 className="font-semibold text-white">
                {t("Available For New Projects")}
              </h3>

              <p className="mt-4 text-gray-400">support@nexadev.com</p>

              {/* Phone row with animation */}
              <div className="mt-3 flex items-center gap-3 text-white">
                <MobileCall />
                <a
                  href="tel:+201000000000"
                  className="font-medium text-gray-200 transition-colors hover:text-cyan-400"
                >
                  +20 100 000 0000
                </a>
              </div>

              {/* Availability status */}
              <div className="mt-6 inline-flex items-center gap-2 text-cyan-400">
                <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
                {t("Available Now")}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 py-8 text-sm text-gray-500 md:flex-row">
          <p>
            © {new Date().getFullYear()} NexaDev.
            {t("All Rights Reserved")}
          </p>

          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-white">
              {t("Privacy Policy")}
            </Link>

            <Link href="/terms" className="hover:text-white">
              {t("Terms")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
