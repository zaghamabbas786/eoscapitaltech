"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[700px] w-[900px] -translate-x-1/2 rounded-full bg-accent/5 blur-[140px]" />
      </div>

      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-10 flex h-24 w-24 items-center justify-center rounded-2xl border border-accent/20 bg-accent/10 shadow-lg shadow-accent/10"
        >
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
            <rect x="3" y="3" width="7" height="18" rx="1" stroke="#3B82F6" strokeWidth="1.5" />
            <rect x="14" y="8" width="7" height="13" rx="1" stroke="#3B82F6" strokeWidth="1.5" />
            <rect x="14" y="3" width="7" height="3" rx="1" fill="#3B82F6" />
          </svg>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mb-6 text-4xl font-bold leading-[1.15] tracking-tight md:text-6xl lg:text-7xl"
        >
          The AI Trading Edge You&apos;ve Been{" "}
          <span className="gradient-text">Searching For</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mx-auto mb-10 max-w-2xl text-lg text-muted"
        >
          Six years and <strong className="text-foreground">$2M in R&D</strong>{" "}
          engineered into the definitive algorithmic software for passing
          challenges and scaling prop firm funding.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <motion.a
            href="#about"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 rounded-full border border-card-border px-8 py-3.5 text-sm font-semibold transition-colors hover:border-accent/50 hover:bg-card-bg"
          >
            Join Community
          </motion.a>
          <motion.a
            href="#products"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 rounded-full bg-accent px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-accent/25 transition-shadow hover:shadow-xl hover:shadow-accent/30"
          >
            See Demo
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="mt-14 flex items-center justify-center gap-8"
        >
          <div className="font-mono text-xl font-bold tracking-tight text-muted/60">
            Inc. 5000
          </div>
          <div className="h-6 w-px bg-card-border" />
          <div className="font-mono text-sm tracking-wider text-muted/60">
            barchart
          </div>
          <div className="h-6 w-px bg-card-border" />
          <div className="font-mono text-sm tracking-wider text-muted/60">
            FINSMES
          </div>
        </motion.div>
      </div>
    </section>
  );
}
