"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Crown,
  Sparkles,
  Check,
  CircleDollarSign,
  Lightbulb,
} from "lucide-react";

type Tab = "lifetime" | "flex";

const lifetimePricing = [
  { label: "Core strategy", price: "£1,250", note: "one-off" },
  { label: "Add-on strategy #2", price: "£895", note: "one-off" },
  { label: "Add-on strategy #3", price: "£695", note: "one-off" },
  { label: "Add-on strategy #4+", price: "£495", note: "one-off each" },
];

const included = [
  "3 account licenses per strategy",
  "3 months dedicated infrastructure included",
  "Ongoing infrastructure from £39/mo",
  "Full Trading Hub access",
  "One-off payment — own it forever",
];

const suites = [
  { name: "Starter Suite", dots: 2 },
  { name: "Core Suite", dots: 3 },
  { name: "Prime Suite", dots: 4 },
  { name: "Full Spectrum Suite", dots: 7 },
];

export default function Pricing() {
  const [tab, setTab] = useState<Tab>("lifetime");

  return (
    <section id="pricing" className="relative py-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 bottom-0 h-[500px] w-[600px] -translate-x-1/2 rounded-full bg-accent/3 blur-[120px]" />
      </div>
      <div className="relative mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-6 text-center"
        >
          <h2 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
            Pricing
          </h2>
          <p className="text-muted">
            Two access models. One transparent structure.
          </p>
        </motion.div>

        <div className="mb-12 flex justify-center">
          <div className="inline-flex rounded-full border border-card-border bg-card-bg p-1">
            <button
              onClick={() => setTab("lifetime")}
              className={`flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-all ${
                tab === "lifetime"
                  ? "bg-accent text-white shadow-lg shadow-accent/25"
                  : "text-muted hover:text-foreground"
              }`}
            >
              <Crown size={14} />
              Lifetime Access
            </button>
            <button
              onClick={() => setTab("flex")}
              className={`flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-all ${
                tab === "flex"
                  ? "bg-accent text-white shadow-lg shadow-accent/25"
                  : "text-muted hover:text-foreground"
              }`}
            >
              <Sparkles size={14} />
              Flex Access
            </button>
          </div>
        </div>

        <AnimatePresence mode="wait">
          {tab === "lifetime" ? (
            <motion.div
              key="lifetime"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="grid gap-6 md:grid-cols-3"
            >
              <div className="glass-card rounded-2xl p-6">
                <span className="mb-4 inline-flex items-center gap-1.5 rounded-full border border-accent/20 bg-accent/5 px-3 py-1 text-xs font-medium text-accent">
                  <Crown size={12} />
                  Lifetime Access
                </span>
                <h3 className="mb-6 text-2xl font-bold">
                  Own it once. Keep it forever.
                </h3>

                <div className="space-y-4">
                  {lifetimePricing.map((item) => (
                    <div
                      key={item.label}
                      className="flex items-center justify-between border-b border-card-border/50 pb-3"
                    >
                      <span className="text-sm">{item.label}</span>
                      <div className="text-right">
                        <span className="font-semibold">{item.price}</span>
                        <span className="ml-1 text-xs text-muted">
                          {item.note}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                <p className="mt-6 text-xs italic text-muted">
                  Pricing steps down as you build your portfolio — more
                  strategies, lower cost per strategy.
                </p>
              </div>

              <div className="glass-card rounded-2xl p-6">
                <h3 className="mb-4 text-lg font-semibold">
                  What&apos;s Included
                </h3>
                <p className="mb-4 text-sm text-muted">
                  Every strategy comes with:
                </p>
                <ul className="space-y-3">
                  {included.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <Check
                        size={16}
                        className="mt-0.5 shrink-0 text-accent-green"
                      />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 rounded-xl border border-accent/20 bg-accent/5 p-4">
                  <div className="flex gap-2">
                    <Lightbulb size={16} className="mt-0.5 shrink-0 text-yellow-400" />
                    <p className="text-xs leading-relaxed text-muted">
                      Add Prop Flex (£149/mo) to include monthly license
                      replacements for prop firm traders.
                    </p>
                  </div>
                </div>
              </div>

              <div className="glass-card rounded-2xl p-6">
                <h3 className="mb-2 text-lg font-semibold">
                  Pre-Built Suites
                </h3>
                <p className="mb-6 text-sm text-muted">
                  Professionally curated strategy combinations — balanced across
                  markets and ready to go.
                </p>

                <div className="space-y-4">
                  {suites.map((suite) => (
                    <div
                      key={suite.name}
                      className="flex items-center justify-between border-b border-card-border/50 pb-3"
                    >
                      <span className="text-sm">{suite.name}</span>
                      <div className="flex gap-1">
                        {[...Array(suite.dots)].map((_, j) => (
                          <span
                            key={j}
                            className="h-2 w-2 rounded-full bg-accent"
                          />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                <p className="mt-6 text-xs text-muted">
                  Each suite includes bundled savings versus individual purchase.
                </p>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="flex"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="mx-auto max-w-2xl"
            >
              <div className="glass-card rounded-2xl p-8 text-center">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-accent/20 bg-accent/10">
                  <CircleDollarSign size={28} className="text-accent" />
                </div>
                <h3 className="mb-3 text-2xl font-bold">Flex Access</h3>
                <p className="mb-6 text-muted">
                  Monthly subscription model — perfect for those who want
                  flexibility without long-term commitment.
                </p>
                <div className="mb-6 text-4xl font-bold">
                  From <span className="gradient-text">£149</span>/mo
                </div>
                <ul className="mb-8 space-y-3 text-left">
                  {[
                    "Access to all strategies",
                    "Monthly license included",
                    "Full Trading Hub access",
                    "Cancel anytime",
                    "Infrastructure included",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <Check
                        size={16}
                        className="shrink-0 text-accent-green"
                      />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-full bg-accent px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-accent/25 transition-all hover:shadow-xl hover:shadow-accent/30"
                >
                  Get Started
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
