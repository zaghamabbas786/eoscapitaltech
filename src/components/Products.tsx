"use client";

import { motion } from "framer-motion";
import { Activity, Trophy, BookOpen, MessageCircle } from "lucide-react";

export default function Products() {
  return (
    <section id="products" className="relative py-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-0 top-1/3 h-[400px] w-[400px] rounded-full bg-accent/3 blur-[120px]" />
      </div>
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid gap-6 lg:grid-cols-2">
          {/* Live Execution Engine */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0, duration: 0.5 }}
            className="glass-card group flex flex-col rounded-2xl p-5 transition-all duration-300"
          >
            <div className="mb-4 rounded-xl border border-card-border bg-background/60 p-4">
              <div className="mb-3 flex items-center gap-2">
                <Activity size={14} className="text-accent" />
                <span className="text-xs font-medium">Live Execution Engine</span>
              </div>
              <div className="mb-3 flex gap-4">
                <div className="text-xs">
                  <span className="text-muted">Market Feed : </span>
                  <span className="font-medium text-accent-green">Live</span>
                </div>
                <div className="text-xs">
                  <span className="text-muted">Automation : </span>
                  <span className="font-medium text-accent-green">On</span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between rounded-lg border border-card-border/50 bg-card-bg/50 px-3 py-2">
                  <span className="text-xs text-muted">Entry Signal Detected</span>
                  <span className="rounded bg-accent-green/20 px-2 py-0.5 text-[10px] font-semibold text-accent-green">BUY</span>
                </div>
                <div className="flex items-center justify-between rounded-lg border border-card-border/50 bg-card-bg/50 px-3 py-2">
                  <span className="text-xs text-muted">Execution Time: 14:32</span>
                  <span className="text-xs text-muted">Size: 0.25</span>
                </div>
              </div>
            </div>
            <h3 className="mb-2 text-lg font-semibold">Live Execution Engine</h3>
            <p className="text-sm leading-relaxed text-muted">
              Our proprietary execution engine. Multi-timeframe systematic
              trading with built-in prop firm compliance. Deployed on hundreds
              of live funded accounts across Gold, Forex, Indices, and Crypto.
            </p>
          </motion.div>

          {/* Strategy Performance */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="glass-card group flex flex-col rounded-2xl p-5 transition-all duration-300"
          >
            <div className="mb-4 rounded-xl border border-card-border bg-background/60 p-4">
              <div className="mb-3 flex items-center gap-2">
                <Trophy size={14} className="text-accent" />
                <span className="text-xs font-medium">Strategy Performance</span>
              </div>
              <div className="space-y-0">
                <div className="grid grid-cols-4 border-b border-card-border pb-2 text-[10px] font-medium text-muted">
                  <span>#</span>
                  <span>Strategy</span>
                  <span>Market</span>
                  <span>Return</span>
                </div>
                {[
                  { rank: "01", name: "Strategy A", market: "XAUUSD", ret: "—" },
                  { rank: "02", name: "Strategy B", market: "Multi-pair FX", ret: "—" },
                  { rank: "03", name: "Strategy C", market: "Gold", ret: "—" },
                  { rank: "04", name: "Strategy D", market: "FX Volatility", ret: "—" },
                ].map((row) => (
                  <div key={row.rank} className="grid grid-cols-4 border-b border-card-border/50 py-2 text-xs">
                    <span className="text-accent">{row.rank}</span>
                    <span>{row.name}</span>
                    <span className="text-muted">{row.market}</span>
                    <span className="text-muted">{row.ret}</span>
                  </div>
                ))}
              </div>
            </div>
            <h3 className="mb-2 text-lg font-semibold">Strategy Performance</h3>
            <p className="text-sm leading-relaxed text-muted">
              Multiple proprietary systems across Gold, Forex, and volatility
              markets. Each independently developed, backtested, and refined
              across hundreds of live accounts.
            </p>
          </motion.div>
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {/* Full Client Onboarding */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="glass-card rounded-2xl p-6"
          >
            <div className="mb-4 rounded-xl border border-card-border bg-background/60 p-4">
              <div className="mb-3 flex items-center gap-2 text-sm font-medium">
                <span className="flex h-6 w-6 items-center justify-center rounded bg-accent/20 text-xs text-accent">
                  <BookOpen size={14} />
                </span>
                Module 1
              </div>
              <div className="space-y-2">
                {[
                  "MT4/MT5 setup",
                  "Connecting your funded account",
                  "EA installation walkthrough",
                  "Configuration & go-live",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-xs text-muted">
                    <span className="h-1 w-1 rounded-full bg-accent" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <h3 className="mb-2 text-lg font-semibold">Full Client Onboarding</h3>
            <p className="text-sm leading-relaxed text-muted">
              Every client gets structured training, VPS setup, EA installation,
              and ongoing support. You don&apos;t need technical skills — we
              handle every step so your systems run from day one.
            </p>
          </motion.div>

          {/* Dedicated Client Support */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="glass-card rounded-2xl p-6"
          >
            <div className="mb-4 rounded-xl border border-card-border bg-background/60 p-4">
              <div className="mb-3 flex items-center gap-2 text-sm font-medium">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-accent/20 text-xs text-accent">
                  <MessageCircle size={14} />
                </span>
                Client Support
              </div>
              <div className="space-y-2">
                <div className="flex gap-2">
                  <div className="h-6 w-6 shrink-0 rounded-full bg-accent/30" />
                  <div className="rounded-lg bg-card-bg px-3 py-2 text-xs text-muted">
                    Your EA has been deployed successfully. First trade logged at 09:22.
                  </div>
                </div>
                <div className="flex justify-end gap-2">
                  <div className="rounded-lg bg-accent/10 px-3 py-2 text-xs text-muted">
                    Risk settings configured to your FTMO ruleset — drawdown protection active.
                  </div>
                  <div className="h-6 w-6 shrink-0 rounded-full bg-accent-green/30" />
                </div>
              </div>
            </div>
            <h3 className="mb-2 text-lg font-semibold">Dedicated Client Support</h3>
            <p className="text-sm leading-relaxed text-muted">
              Direct access to our operations team for setup, monitoring, and
              ongoing assistance. Real humans, UK-based, with trading
              infrastructure expertise.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
