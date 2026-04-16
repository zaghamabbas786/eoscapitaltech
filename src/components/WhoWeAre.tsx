"use client";

import { motion } from "framer-motion";
import { Clock, Building2, GitBranch, BarChart3 } from "lucide-react";

const stats = [
  { icon: Clock, value: "16+", label: "Years Experience", desc: "Deep trading and automation expertise." },
  { icon: Building2, value: "3+", label: "Years in Business", desc: "Focused exclusively on building automated systems." },
  { icon: GitBranch, value: "11+", label: "Strategies", desc: "Independently structured across multiple market conditions." },
  { icon: BarChart3, value: "4+", label: "Markets", desc: "Gold, Forex, Indices & Bitcoin." },
];

export default function WhoWeAre() {
  return (
    <section className="relative py-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-accent/3 blur-[120px]" />
      </div>
      <div className="relative mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 max-w-3xl"
        >
          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/5 px-4 py-1.5 text-xs font-medium tracking-wider text-accent uppercase">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            Who We Are
          </span>

          <h2 className="mb-6 text-4xl font-bold leading-tight tracking-tight md:text-5xl">
            We Build
            <br />
            <span className="gradient-text">Structured Trading</span>
            <br />
            Systems.
          </h2>

          <p className="max-w-2xl text-lg leading-relaxed text-muted">
            Not tips. Not signals. Fully automated, rules-based strategies
            designed to grow capital systematically — across multiple markets,
            around the clock.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-8">
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
              <p className="mb-1 text-4xl font-bold tracking-tight">{stat.value}</p>
              <p className="mb-1 text-sm font-semibold">{stat.label}</p>
              <p className="text-xs leading-relaxed text-muted">{stat.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
