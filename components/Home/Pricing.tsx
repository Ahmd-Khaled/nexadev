"use client";

import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "$49",
    description: "Perfect for startups and small businesses",
    features: [
      "Responsive Website",
      "SEO Optimization",
      "Basic Support",
      "Hosting Setup",
    ],
  },
  {
    name: "Professional",
    price: "$149",
    popular: true,
    description: "Most popular choice for growing businesses",
    features: [
      "Everything in Starter",
      "Custom Dashboard",
      "API Integration",
      "Priority Support",
      "Advanced Analytics",
    ],
  },
  {
    name: "Enterprise",
    price: "$399",
    description: "For large organizations and custom solutions",
    features: [
      "Everything in Professional",
      "Dedicated Team",
      "Custom Integrations",
      "24/7 Support",
      "Unlimited Revisions",
    ],
  },
];

export default function Pricing() {
  return (
    <section className="relative overflow-hidden py-24">
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-amber-500/20 blur-3xl" />
        <div className="absolute right-0 bottom-20 h-72 w-72 rounded-full bg-amber-400/10 blur-3xl" />
      </div>

      <div className="container mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-2 text-sm font-medium text-amber-400">
            <Sparkles size={16} />
            Flexible Pricing
          </span>

          <h2 className="mb-6 text-4xl font-bold md:text-6xl">
            Choose Your
            <span className="block bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
              Perfect Plan
            </span>
          </h2>

          <p className="text-lg text-zinc-400">
            Transparent pricing with no hidden fees. Scale your business with
            confidence.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid gap-8 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              whileHover={{
                y: -12,
              }}
              className={`group relative rounded-3xl border backdrop-blur-xl transition-all duration-500 ${
                plan.popular
                  ? "scale-105 border-amber-500/50 bg-amber-500/10 shadow-[0_0_60px_rgba(6,182,212,0.25)]"
                  : "border-white/10 bg-white/5 hover:border-amber-500/30"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="rounded-full bg-gradient-to-r from-amber-500 to-amber-400 px-5 py-2 text-sm font-semibold text-white shadow-lg">
                    Most Popular
                  </div>
                </div>
              )}

              <div className="p-8">
                <h3 className="mb-2 text-2xl font-bold">{plan.name}</h3>

                <p className="mb-8 text-zinc-400">{plan.description}</p>

                <div className="mb-8">
                  <span className="bg-gradient-to-r from-amber-300 to-amber-500 bg-clip-text text-6xl font-bold text-transparent">
                    {plan.price}
                  </span>
                  <span className="ml-2 text-zinc-400">/project</span>
                </div>

                <div className="mb-8 h-px bg-gradient-to-r from-transparent via-amber-500/30 to-transparent" />

                <ul className="space-y-4">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-amber-500/15">
                        <Check size={14} className="text-amber-400" />
                      </div>

                      <span className="text-zinc-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`mt-10 w-full rounded-xl py-4 font-semibold transition-all duration-300 ${
                    plan.popular
                      ? "bg-amber-500 text-white shadow-lg shadow-amber-500/30 hover:bg-amber-400"
                      : "border border-amber-500/30 bg-amber-500/10 text-amber-400 hover:bg-amber-500 hover:text-white"
                  }`}
                >
                  Get Started
                </button>
              </div>

              {/* Hover Glow */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-amber-500/0 via-amber-500/5 to-amber-500/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
