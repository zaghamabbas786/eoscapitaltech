"use client";

import { motion } from "framer-motion";
import { Wallet, Brain, Bot, BarChart3, ShieldCheck, Users } from "lucide-react";

const benefits = [
  {
    icon: Wallet,
    title: "Trade Prop Firm Capital",
    desc: "Access funded accounts without risking your own money. Our systems trade the firm's capital, you keep the profits.",
  },
  {
    icon: Brain,
    title: "Removes Human Error",
    desc: "Our systems trade by rules. No panic selling. No revenge trades. No missed entries. Just systematic execution.",
  },
  {
    icon: Bot,
    title: "Fully Automated",
    desc: "Your systems run 24/7 on a low-latency VPS. You don't need to watch charts, set alerts, or place trades manually.",
  },
  {
    icon: BarChart3,
    title: "Proven Strategies",
    desc: "Multiple in-house systems refined across hundreds of live accounts. Each built, tested, and battle-proven before deployment.",
  },
  {
    icon: ShieldCheck,
    title: "Built-In Risk Protection",
    desc: "Drawdown monitoring, daily loss limits, and session filters engineered into every system. Built for prop firm compliance.",
  },
  {
    icon: Users,
    title: "Dedicated Support",
    desc: "UK-based operations team handling setup, monitoring, and ongoing optimisation. You're never alone.",
  },
];

export default function Benefits() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <span className="mb-4 block text-xs font-semibold tracking-[0.25em] text-accent uppercase">
            Benefits
          </span>
          <h2 className="mb-4 max-w-md text-3xl font-bold tracking-tight md:text-4xl">
            Why Clients Choose Eos Capital Tech
          </h2>
          <p className="max-w-lg text-muted">
            A rules-based system engineered to control risk, prevent errors, and
            support long-term consistency.
          </p>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="glass-card group rounded-2xl p-6 transition-all duration-300"
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl border border-card-border bg-card-bg transition-colors group-hover:border-accent/30 group-hover:bg-accent/10">
                <b.icon size={20} className="text-accent" />
              </div>
              <h3 className="mb-2 text-sm font-semibold">{b.title}</h3>
              <p className="text-sm leading-relaxed text-muted">{b.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
