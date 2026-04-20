"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "500+", label: "Funded Traders" },
  { value: "6+", label: "Proprietary Strategies", highlighted: true },
  { value: "7+", label: "Prop Firms Supported" },
];

export default function Stats() {
  return (
    <section className="py-14 sm:py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-3"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.value}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.5 }}
              className={`rounded-2xl p-6 text-center sm:p-8 ${
                stat.highlighted
                  ? "bg-gradient-to-br from-accent/20 to-accent/5 border border-accent/30"
                  : "glass-card"
              }`}
            >
              <p className="mb-2 text-4xl font-bold tracking-tight md:text-5xl">
                {stat.value}
              </p>
              <p className="text-sm leading-snug text-muted">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
