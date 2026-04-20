"use client";

import { motion } from "framer-motion";
import {
  Phone,
  Trophy,
  Cpu,
  Wallet,
  TrendingUp,
} from "lucide-react";

const steps = [
  {
    num: "01",
    icon: Phone,
    title: "Apply & Consult",
    desc: "Book a strategy call. We review your goals, recommend the right prop firm and system, and map the setup to your requirements.",
  },
  {
    num: "02",
    icon: Trophy,
    title: "We Pass Your Challenge",
    desc: "Our professional trading team passes your prop firm challenge within the firm's rules. You don't place a single trade.",
    mockup: {
      checks: [
        { label: "Daily Drawdown", status: "Within Limit" },
        { label: "Profit Target", status: "On Track" },
        { label: "Consistency Rule", status: "Passed" },
      ],
    },
  },
  {
    num: "03",
    icon: Cpu,
    title: "Automation Deployed",
    desc: "Once funded, we install our proprietary systems on your account, configure settings to your firm's ruleset, and deploy to a low-latency VPS.",
  },
  {
    num: "04",
    icon: Wallet,
    title: "You Collect Payouts",
    desc: "Your funded account trades automatically. You keep up to 80% of the profits. Zero screen time required.",
  },
  {
    num: "05",
    icon: TrendingUp,
    title: "Scale Your Portfolio",
    desc: "Use profits to fund additional accounts and compound. Most clients scale to 2–4 funded accounts within their first 6 months.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-16 sm:py-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 top-0 h-[min(400px,95vw)] w-[min(400px,95vw)] rounded-full bg-accent/3 blur-[120px]" />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center sm:mb-16"
        >
          <span className="mb-4 block text-xs font-semibold tracking-[0.25em] text-accent uppercase">
            How It Works
          </span>
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            From Strategy to Live Automation
          </h2>
          <p className="mx-auto max-w-lg px-1 text-sm text-muted sm:text-base">
            Five steps from your application to a fully automated funded account.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {steps.slice(0, 2).map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="glass-card rounded-2xl p-5 sm:p-6"
            >
              <span className="mb-4 inline-flex h-9 w-9 items-center justify-center rounded-lg border border-card-border font-mono text-sm font-bold text-muted">
                {step.num}
              </span>
              <h3 className="mb-2 text-base font-semibold">{step.title}</h3>
              <p className="mb-5 text-sm leading-relaxed text-muted">
                {step.desc}
              </p>
              {step.mockup && (
                <div className="rounded-xl border border-card-border bg-background/60 p-4">
                  <div className="mb-3 flex items-center gap-2 text-xs font-medium">
                    <span className="flex h-5 w-5 items-center justify-center rounded bg-accent/20 text-accent">
                      <step.icon size={12} />
                    </span>
                    Challenge Progress
                  </div>
                  {step.mockup.checks.map((check) => (
                    <div
                      key={check.label}
                      className="flex flex-col gap-1 border-b border-card-border/50 py-2.5 last:border-b-0 sm:flex-row sm:items-center sm:justify-between sm:gap-2"
                    >
                      <div className="flex min-w-0 items-center gap-2 text-xs">
                        <span className="shrink-0 text-accent-green">✓</span>
                        <span className="break-words">{check.label}</span>
                      </div>
                      <span className="shrink-0 text-xs font-medium text-accent-green sm:text-right">
                        {check.status}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          ))}

          <div className="flex flex-col gap-6 sm:gap-8 md:col-span-2 lg:col-span-1">
            {steps.slice(2).map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i + 2) * 0.1 }}
                className="glass-card rounded-2xl p-5 sm:p-6"
              >
                <div className="flex items-start gap-4">
                  <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-card-border font-mono text-sm font-bold text-muted">
                    {step.num}
                  </span>
                  <div>
                    <h3 className="mb-1 text-base font-semibold">{step.title}</h3>
                    <p className="text-sm leading-relaxed text-muted">{step.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
