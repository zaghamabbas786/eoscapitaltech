"use client";

import { motion } from "framer-motion";
import { Clock, Building2, GitBranch, BarChart3 } from "lucide-react";

const stats = [
  { icon: Clock, value: "30+", label: "Years Experience (Combined)", desc: "Deep trading and automation expertise." },
  { icon: Building2, value: "3+", label: "Years in Business", desc: "Focused exclusively on building automated systems." },
  { icon: GitBranch, value: "6+", label: "Strategies", desc: "Independently structured across multiple market conditions." },
  { icon: BarChart3, value: "4+", label: "Markets", desc: "Gold, Forex, Indices & Crypto." },
];

export default function WhoWeAre() {
  return (
    <section className="relative py-16 sm:py-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 top-1/2 h-[min(500px,100vw)] w-[min(500px,100vw)] -translate-y-1/2 rounded-full bg-accent/3 blur-[120px]" />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 max-w-3xl sm:mb-16"
        >
          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/5 px-4 py-1.5 text-xs font-medium tracking-wider text-accent-light uppercase">
            <span className="h-1.5 w-1.5 rounded-full bg-accent-light" />
            Who We Are
          </span>

          <h2 className="mb-5 text-3xl font-bold leading-tight tracking-tight sm:mb-6 sm:text-4xl md:text-5xl">
            We Build
            <br />
            <span className="gradient-text">Structured Trading</span>
            <br />
            Systems.
          </h2>

          <p className="max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
            Not tips. Not signals. Fully coded, rules-based Expert Advisors
            engineered to trade your funded accounts systematically — across
            multiple markets, around the clock.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-6 md:gap-8 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="text-center"
            >
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl border border-accent/20 bg-accent/10">
                <stat.icon size={24} className="text-accent" />
              </div>
              <p className="mb-1 text-3xl font-bold tracking-tight sm:text-4xl">{stat.value}</p>
              <p className="mb-1 text-sm font-semibold">{stat.label}</p>
              <p className="text-xs leading-relaxed text-muted sm:text-[13px]">{stat.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
