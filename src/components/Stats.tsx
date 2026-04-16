"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "1500+", label: "Funded Traders" },
  { value: "$350M+", label: "Overall Funding", highlighted: true },
  { value: "3.7x", label: "More Likely To Pass a Prop Firm\nChallenge vs. Industry Average" },
];

export default function Stats() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 gap-6 md:grid-cols-3"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.value}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.5 }}
              className={`rounded-2xl p-8 text-center ${
                stat.highlighted
                  ? "bg-gradient-to-br from-accent/20 to-accent/5 border border-accent/30"
                  : "glass-card"
              }`}
            >
              <p className="mb-2 text-4xl font-bold tracking-tight md:text-5xl">
                {stat.value}
              </p>
              <p className="text-sm leading-snug text-muted whitespace-pre-line">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
