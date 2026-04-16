"use client";

import { motion } from "framer-motion";
import { Activity, ShieldCheck, Trophy } from "lucide-react";

const products = [
  {
    icon: Activity,
    title: "Titan AI",
    desc: "Data-driven AI built to pass, manage, and scale funded accounts.",
    mockup: {
      header: "Titan AI",
      items: [
        { label: "Market Feed", value: "Live" },
        { label: "Automation", value: "On" },
      ],
      signals: [
        { text: "Entry Signal Detected", action: "BUY", color: "accent-green" },
        { text: "96.30 → 890.340", action: "", color: "muted" },
      ],
    },
  },
  {
    icon: ShieldCheck,
    title: "Titan Hedge",
    desc: "Titan Hedge helps you reduce risk by recovering failed prop challenge fees.",
    mockup: null,
    showShield: true,
  },
  {
    icon: Trophy,
    title: "Prop Farming Leaderboard",
    desc: "500,000+ trading strategies optimized daily for ever evolving markets.",
    mockup: {
      header: "Prop Farming Leaderboard",
      table: [
        { rank: "#01", name: "GU_Clan2", passRate: "61.78%", trades: "18.92" },
        { rank: "#02", name: "XAU_GR", passRate: "59.64%", trades: "22.81" },
        { rank: "#03", name: "XAU_Steel", passRate: "40.64%", trades: "19.38" },
      ],
    },
  },
];

function ProductMockup({ product }: { product: (typeof products)[0] }) {
  if (product.showShield) {
    return (
      <div className="flex h-full items-center justify-center rounded-xl border border-card-border bg-background/60 p-8">
        <div className="flex h-28 w-28 items-center justify-center rounded-2xl bg-accent/10 border border-accent/20">
          <ShieldCheck size={56} className="text-accent" />
        </div>
      </div>
    );
  }

  if (product.mockup?.table) {
    return (
      <div className="rounded-xl border border-card-border bg-background/60 p-4">
        <div className="mb-3 flex items-center gap-2">
          <Trophy size={14} className="text-accent" />
          <span className="text-xs font-medium">{product.mockup.header}</span>
        </div>
        <div className="space-y-0">
          <div className="grid grid-cols-4 border-b border-card-border pb-2 text-[10px] font-medium text-muted">
            <span>Rank</span>
            <span>Strategy Name</span>
            <span>Pass Rate</span>
            <span>Avg. Trades</span>
          </div>
          {product.mockup.table.map((row) => (
            <div
              key={row.rank}
              className="grid grid-cols-4 border-b border-card-border/50 py-2 text-xs"
            >
              <span className="text-accent">{row.rank}</span>
              <span>{row.name}</span>
              <span>{row.passRate}</span>
              <span>{row.trades}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-xl border border-card-border bg-background/60 p-4">
      <div className="mb-3 flex items-center gap-2">
        <Activity size={14} className="text-accent" />
        <span className="text-xs font-medium">{product.mockup!.header}</span>
      </div>
      <div className="mb-3 flex gap-4">
        {product.mockup!.items.map((item) => (
          <div key={item.label} className="text-xs">
            <span className="text-muted">{item.label} : </span>
            <span className="font-medium text-accent-green">{item.value}</span>
          </div>
        ))}
      </div>
      <div className="space-y-2">
        {product.mockup!.signals.map((sig, i) => (
          <div
            key={i}
            className="flex items-center justify-between rounded-lg border border-card-border/50 bg-card-bg/50 px-3 py-2"
          >
            <span className="text-xs text-muted">{sig.text}</span>
            {sig.action && (
              <span className="rounded bg-accent-green/20 px-2 py-0.5 text-[10px] font-semibold text-accent-green">
                {sig.action}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Products() {
  return (
    <section id="products" className="relative py-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-0 top-1/3 h-[400px] w-[400px] rounded-full bg-accent/3 blur-[120px]" />
      </div>
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product, i) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="glass-card group flex flex-col rounded-2xl p-5 transition-all duration-300"
            >
              <div className="mb-4 flex-1">
                <ProductMockup product={product} />
              </div>
              <h3 className="mb-2 text-lg font-semibold">{product.title}</h3>
              <p className="text-sm leading-relaxed text-muted">
                {product.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="glass-card rounded-2xl p-6"
          >
            <div className="mb-4 rounded-xl border border-card-border bg-background/60 p-4">
              <div className="mb-3 flex items-center gap-2 text-sm font-medium">
                <span className="flex h-6 w-6 items-center justify-center rounded bg-accent/20 text-xs text-accent">▶</span>
                Module 1
              </div>
              <div className="space-y-2">
                {[
                  "Getting Started",
                  "Understanding Prop Firm Rules",
                  "Titan AI Setup & Basics",
                  "Risk Management",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 text-xs text-muted"
                  >
                    <span className="h-1 w-1 rounded-full bg-accent" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <h3 className="mb-2 text-lg font-semibold">
              Prop Farming Blueprint
            </h3>
            <p className="text-sm leading-relaxed text-muted">
              Our training helps you understand the fundamentals of AI trading
              and our proprietary prop farming trading philosophy.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="glass-card rounded-2xl p-6"
          >
            <div className="mb-4 rounded-xl border border-card-border bg-background/60 p-4">
              <div className="mb-3 flex items-center gap-2 text-sm font-medium">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-accent/20 text-xs text-accent">💬</span>
                Direct Messages
              </div>
              <div className="space-y-2">
                <div className="flex gap-2">
                  <div className="h-6 w-6 rounded-full bg-accent/30" />
                  <div className="rounded-lg bg-card-bg px-3 py-2 text-xs text-muted">
                    Trade followed rules. Execution was clean. We scale tomorrow.
                  </div>
                </div>
                <div className="flex justify-end gap-2">
                  <div className="rounded-lg bg-accent/10 px-3 py-2 text-xs text-muted">
                    I&apos;m ready for the daily breakdown. Ultra SL stays tight?
                  </div>
                  <div className="h-6 w-6 rounded-full bg-accent-green/30" />
                </div>
              </div>
            </div>
            <h3 className="mb-2 text-lg font-semibold">1-on-1 Coaching</h3>
            <p className="text-sm leading-relaxed text-muted">
              Master the markets 1-on-1 with elite algorithmic traders. Learn
              the exact strategies used by our 7-figure funded coaches.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
