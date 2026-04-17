"use client";

import { motion } from "framer-motion";

export default function PropTrading() {
  return (
    <section id="solutions" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-16 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="mb-6 inline-block text-xs font-semibold tracking-[0.25em] text-accent uppercase">
              What We Do
            </span>
            <h2 className="text-3xl font-bold leading-snug tracking-tight md:text-4xl lg:text-[2.75rem]">
              <span className="gradient-text">Automated Trading Systems</span>{" "}
              Built by Professionals
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex flex-col justify-center"
          >
            <p className="mb-8 text-lg leading-relaxed text-muted">
              We turn trading strategies into production-grade Expert Advisors —
              coded, backtested, and deployed on your funded accounts. You get
              the returns of automated trading without touching a chart.
            </p>

            <span className="mb-4 text-xs font-semibold tracking-[0.25em] text-accent uppercase">
              The Problem
            </span>
            <h3 className="mb-4 text-2xl font-bold tracking-tight">
              Manual Trading Doesn&apos;t Scale.
            </h3>
            <p className="text-lg leading-relaxed text-muted">
              Most traders lose their funded accounts the same way — emotional
              errors, missed trades, or breaking prop firm rules under pressure.
              Automation removes the human mistakes that blow up accounts.{" "}
              <strong className="text-foreground">
                That&apos;s where Eos Capital Tech comes in.
              </strong>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
