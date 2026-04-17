"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "James R.",
    role: "Engineer, London",
    tag: "3 ACCOUNTS AUTOMATED",
    quote: "Had a breakout strategy I'd been trading manually for years. They coded it into an EA and it's been running hands-off on my funded accounts ever since.",
  },
  {
    name: "Sarah M.",
    role: "Nurse, Birmingham",
    tag: "$100K FUNDED",
    quote: "Zero trading experience. They set me up with their proprietary systems, installed everything on a VPS, and I got my first funded payout within 6 weeks.",
  },
  {
    name: "Daniel K.",
    role: "Day Trader, Dubai",
    tag: "MQL4 → MQL5 MIGRATION",
    quote: "Needed my MT4 EAs converted to MT5 with proper risk management. They rebuilt the whole architecture — runs cleaner than the original.",
  },
  {
    name: "Marcus T.",
    role: "Entrepreneur, Manchester",
    tag: "$250K ACROSS 2 FIRMS",
    quote: "The risk controls sold me. Drawdown protection, daily loss limits, session filters — all baked into the system. My accounts have never been safer.",
  },
  {
    name: "Ryan J.",
    role: "Business Owner, Bristol",
    tag: "$400K FUNDED",
    quote: "Running their systems across 4 FTMO accounts. Steady returns, no violations, completely automated. Best investment I've made.",
  },
  {
    name: "Ahmed H.",
    role: "Trader, Birmingham",
    tag: "CUSTOM EA BUILT",
    quote: "Had an idea for a multi-timeframe gold strategy but couldn't code it. They built it in under two weeks. Now it runs 24/7 on autopilot.",
  },
];

export default function Testimonials() {
  return (
    <section id="results" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <span className="mb-4 block text-xs font-semibold tracking-[0.25em] text-accent uppercase">
            Real Clients, Real Results
          </span>
          <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
            What Our Clients Say
          </h2>
          <p className="max-w-lg text-muted">
            These aren&apos;t promises or projections. Real traders who automated
            their funded accounts with our systems.
          </p>
        </motion.div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="glass-card flex flex-col rounded-2xl p-6"
            >
              <Quote size={20} className="mb-3 text-accent/40" />
              <p className="mb-5 flex-1 text-sm italic leading-relaxed text-muted">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center justify-between border-t border-card-border/50 pt-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-accent/15 text-xs font-bold text-accent">
                    {t.name.split(" ").map((n) => n[0]).join("")}
                  </div>
                  <div>
                    <p className="text-sm font-semibold">{t.name}</p>
                    <p className="text-xs text-muted">{t.role}</p>
                  </div>
                </div>
                <span className="rounded-full bg-accent/10 px-2.5 py-1 text-[10px] font-semibold tracking-wide text-accent">
                  {t.tag}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
