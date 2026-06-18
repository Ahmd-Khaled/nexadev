"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Check, Sparkles, Crown, Rocket, Building2 } from "lucide-react";

export default function PricingPlans() {
  const t = useTranslations("HomePage");

  const plans = [
    {
      icon: Rocket,
      name: t("Basic"),
      price: "$499",
      description: t("Basic Plan Description"),
      featured: false,
      features: [
        t("Responsive Design"),
        t("Up To 5 Pages"),
        t("Basic SEO"),
        t("Email Support"),
      ],
    },
    {
      icon: Crown,
      name: t("Standard"),
      price: "$1499",
      description: t("Standard Plan Description"),
      featured: true,
      features: [
        t("Everything In Basic"),
        t("CMS Integration"),
        t("Advanced SEO"),
        t("Analytics Dashboard"),
        t("Priority Support"),
      ],
    },
    {
      icon: Sparkles,
      name: t("Premium"),
      price: "$2999",
      description: t("Premium Plan Description"),
      featured: false,
      features: [
        t("Everything In Standard"),
        t("Custom Integrations"),
        t("CRM System"),
        t("Automation Workflows"),
        t("Dedicated Manager"),
      ],
    },
  ];

  const comparison = [
    {
      feature: t("Responsive Design"),
      basic: true,
      standard: true,
      premium: true,
    },
    {
      feature: t("CMS Integration"),
      basic: false,
      standard: true,
      premium: true,
    },
    {
      feature: t("CRM System"),
      basic: false,
      standard: false,
      premium: true,
    },
    {
      feature: t("Priority Support"),
      basic: false,
      standard: true,
      premium: true,
    },
    {
      feature: t("Dedicated Manager"),
      basic: false,
      standard: false,
      premium: true,
    },
  ];

  return (
    <section
      id="plans"
      className="relative overflow-hidden bg-black py-24 text-white"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-amber-600/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-amber-600/10 blur-3xl" />
      </div>

      <div className="container relative z-10 mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-amber-400/20 bg-amber-500/10 px-4 py-2 text-sm text-amber-300">
            <Sparkles size={16} />
            {t("Pricing Plans")}
          </span>

          <h2 className="mt-6 text-4xl font-bold md:text-5xl">
            {t("Choose The Right Plan")}
          </h2>

          <p className="mt-4 text-gray-400">{t("Pricing Description")}</p>
        </motion.div>

        {/* Plans */}
        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className={`relative rounded-3xl border p-8 backdrop-blur-xl ${
                plan.featured
                  ? "border-amber-500 bg-amber-500/10"
                  : "border-white/10 bg-white/5"
              }`}
            >
              {plan.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-amber-600 px-4 py-1 text-xs font-semibold">
                  {t("Most Popular")}
                </div>
              )}

              <plan.icon className="mb-6 text-amber-400" size={36} />

              <h3 className="text-2xl font-bold">{plan.name}</h3>

              <div className="mt-4 text-4xl font-bold">{plan.price}</div>

              <p className="mt-3 text-gray-400">{plan.description}</p>

              <ul className="mt-8 space-y-4">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <Check size={18} className="text-amber-400" />
                    {feature}
                  </li>
                ))}
              </ul>

              <button className="mt-8 w-full rounded-xl bg-amber-500 py-3 font-medium transition hover:bg-yellow-600 cursor-pointer">
                {t("Get Started")}
              </button>
            </motion.div>
          ))}
        </div>

        {/* Comparison Table */}
        {/* <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-24 overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl"
        >
          <div className="overflow-x-auto">
            <table className="w-full min-w-[700px]">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="p-5 text-left">{t("Features")}</th>
                  <th className="p-5 text-center">{t("Basic")}</th>
                  <th className="p-5 text-center">{t("Standard")}</th>
                  <th className="p-5 text-center">{t("Premium")}</th>
                </tr>
              </thead>

              <tbody>
                {comparison.map((item) => (
                  <tr key={item.feature} className="border-b border-white/5">
                    <td className="p-5">{item.feature}</td>

                    <td className="p-5 text-center">
                      {item.basic ? "✓" : "—"}
                    </td>

                    <td className="p-5 text-center">
                      {item.standard ? "✓" : "—"}
                    </td>

                    <td className="p-5 text-center">
                      {item.premium ? "✓" : "—"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div> */}

        {/* Enterprise */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 rounded-3xl border border-white/10 bg-gradient-to-r from-amber-500/10 to-amber-500/10 p-10 text-center backdrop-blur-xl"
        >
          <Building2 size={48} className="mx-auto text-amber-400" />

          <h3 className="mt-6 text-3xl font-bold">
            {t("Custom Enterprise Plan")}
          </h3>

          <p className="mx-auto mt-4 max-w-2xl text-gray-400">
            {t("Enterprise Description")}
          </p>

          <button className="mt-8 rounded-xl bg-amber-500 px-8 py-3 font-medium transition hover:bg-yellow-600 cursor-pointer">
            {t("Contact Sales")}
          </button>
        </motion.div>
      </div>
    </section>
  );
}
