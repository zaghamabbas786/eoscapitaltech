"use client";

import { motion } from "framer-motion";

export default function PropTrading() {
  return (
    <section id="solutions" className="relative py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-10 sm:gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="mb-6 inline-block text-xs font-semibold tracking-[0.25em] text-accent uppercase">
              What We Do
            </span>
            <h2 className="text-2xl font-bold leading-snug tracking-tight sm:text-3xl md:text-4xl lg:text-[2.75rem]">
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
            <p className="mb-6 text-base leading-relaxed text-muted sm:mb-8 sm:text-lg">
              We turn trading strategies into production-grade Expert Advisors —
              coded, backtested, and deployed on your funded accounts. You get
              the returns of automated trading without touching a chart.
            </p>

            <span className="mb-4 text-xs font-semibold tracking-[0.25em] text-accent uppercase">
              The Problem
            </span>
            <h3 className="mb-3 text-xl font-bold tracking-tight sm:mb-4 sm:text-2xl">
              Manual Trading Doesn&apos;t Scale.
            </h3>
            <p className="text-base leading-relaxed text-muted sm:text-lg">
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
