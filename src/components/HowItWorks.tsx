"use client";

import { motion } from "framer-motion";
import {
  ShoppingCart,
  Cpu,
  Wallet,
  TrendingUp,
  Repeat,
} from "lucide-react";

const steps = [
  {
    num: "01",
    icon: ShoppingCart,
    title: "Purchase Prop Firm Challenge",
    desc: "Choose your account size and start your evaluation with any prop firm.",
    mockup: {
      header: "Prop Firm Challenge",
      items: ["$50,000", "$100,000", "$150,000"],
    },
  },
  {
    num: "02",
    icon: Cpu,
    title: "Pass Challenges Using Titan X",
    desc: "Use structured settings of our system designed to help you pass challenges.",
    mockup: {
      header: "Enter The Challenge",
      checks: [
        { label: "Daily Drawdown", status: "Within Limit", color: "accent-green" },
        { label: "Max Risk Per Trade", status: "Controlled", color: "accent-green" },
        { label: "Trade Frequency", status: "Evaluating", color: "muted" },
      ],
    },
  },
  {
    num: "03",
    icon: Wallet,
    title: "Get Funded & Start Trading",
    desc: "Once you pass, your funded account goes live with our automated system.",
  },
  {
    num: "04",
    icon: TrendingUp,
    title: "Grow & Scale Capital",
    desc: "Compound your gains and scale into larger accounts with proven strategies.",
  },
  {
    num: "05",
    icon: Repeat,
    title: "Repeat the Cycle",
    desc: "Use profits to fund new challenges and continuously scale your portfolio.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 top-0 h-[400px] w-[400px] rounded-full bg-accent/3 blur-[120px]" />
      </div>
      <div className="relative mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
            The Prop Farming Roadmap
          </h2>
          <p className="mx-auto max-w-lg text-muted">
            The path to your first funded account
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {steps.slice(0, 2).map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="glass-card rounded-2xl p-6"
            >
              <span className="mb-4 inline-flex h-9 w-9 items-center justify-center rounded-lg border border-card-border font-mono text-sm font-bold text-muted">
                {step.num}
              </span>
              <h3 className="mb-2 text-base font-semibold">{step.title}</h3>
              <p className="mb-5 text-sm leading-relaxed text-muted">
                {step.desc}
              </p>

              {step.mockup && "items" in step.mockup && step.mockup.items && (
                <div className="rounded-xl border border-card-border bg-background/60 p-4">
                  <div className="mb-3 flex items-center gap-2 text-xs font-medium">
                    <span className="flex h-5 w-5 items-center justify-center rounded bg-accent/20 text-accent">
                      <step.icon size={12} />
                    </span>
                    {step.mockup.header}
                  </div>
                  <div className="mb-2 flex items-center justify-between text-xs text-muted">
                    <span>Choose account size</span>
                    <span>1/3 ○</span>
                  </div>
                  {step.mockup.items!.map((item, j) => (
                    <div
                      key={item}
                      className={`flex items-center justify-between border-b border-card-border/50 py-2 text-sm ${j === 0 ? "text-foreground" : "text-muted"}`}
                    >
                      <span>{item}</span>
                      <span className={`h-3 w-3 rounded-full border ${j === 0 ? "border-accent bg-accent" : "border-card-border"}`} />
                    </div>
                  ))}
                </div>
              )}

              {step.mockup && "checks" in step.mockup && step.mockup.checks && (
                <div className="rounded-xl border border-card-border bg-background/60 p-4">
                  <div className="mb-3 flex items-center gap-2 text-xs font-medium">
                    <span className="flex h-5 w-5 items-center justify-center rounded bg-accent/20 text-accent">
                      <step.icon size={12} />
                    </span>
                    {step.mockup.header}
                  </div>
                  {step.mockup.checks.map((check) => (
                    <div
                      key={check.label}
                      className="flex items-center justify-between border-b border-card-border/50 py-2.5"
                    >
                      <div className="flex items-center gap-2 text-xs">
                        <span className={`text-${check.color}`}>✓</span>
                        {check.label}
                      </div>
                      <span className={`text-xs font-medium text-${check.color}`}>
                        {check.status}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          ))}

          <div className="flex flex-col gap-8 md:col-span-2 lg:col-span-1">
            {steps.slice(2).map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i + 2) * 0.1 }}
                className="glass-card rounded-2xl p-6"
              >
                <div className="flex items-start gap-4">
                  <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-card-border font-mono text-sm font-bold text-muted">
                    {step.num}
                  </span>
                  <div>
                    <h3 className="mb-1 text-base font-semibold">
                      {step.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-muted">
                      {step.desc}
                    </p>
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
