"use client";

import { motion } from "framer-motion";
import { BookOpen, MessageCircle } from "lucide-react";

export default function Products() {
  return (
    <section id="products" className="relative py-16 sm:py-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-0 top-1/3 h-[min(400px,90vw)] w-[min(400px,90vw)] rounded-full bg-accent/3 blur-[120px]" />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
      

        <div className="mt-6 grid gap-5 sm:gap-6 md:grid-cols-2">
          {/* Full Client Onboarding */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="glass-card overflow-hidden rounded-2xl p-5 sm:p-6"
          >
            <div className="mb-4 overflow-hidden rounded-xl border border-card-border bg-background/60 p-3 sm:p-4">
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
            className="glass-card overflow-hidden rounded-2xl p-5 sm:p-6"
          >
            <div className="mb-4 overflow-hidden rounded-xl border border-card-border bg-background/60 p-3 sm:p-4">
              <div className="mb-3 flex items-center gap-2 text-sm font-medium">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-accent/20 text-xs text-accent">
                  <MessageCircle size={14} />
                </span>
                Client Support
              </div>
              <div className="space-y-2">
                <div className="flex gap-2">
                  <div className="h-6 w-6 shrink-0 rounded-full bg-accent/30" />
                  <div className="min-w-0 rounded-lg bg-card-bg px-3 py-2 text-xs leading-relaxed text-muted">
                    Your EA has been deployed successfully. First trade logged at 09:22.
                  </div>
                </div>
                <div className="flex justify-end gap-2">
                  <div className="min-w-0 max-w-[85%] rounded-lg bg-accent/10 px-3 py-2 text-xs leading-relaxed text-muted">
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
