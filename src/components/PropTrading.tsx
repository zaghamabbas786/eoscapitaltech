"use client";

import { motion } from "framer-motion";

export default function PropTrading() {
  return (
    <section id="about" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-16 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="mb-6 inline-block text-xs font-semibold tracking-[0.25em] text-accent uppercase">
              What is Prop Trading
            </span>
            <h2 className="text-3xl font-bold leading-snug tracking-tight md:text-4xl lg:text-[2.75rem]">
              Prop Trading allows you to trade with{" "}
              <span className="gradient-text">funded capital</span> from
              established firms, not your personal funds, and{" "}
              <strong>earn a percentage</strong> of the profits generated.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex flex-col justify-center"
          >
            <span className="mb-4 text-xs font-semibold tracking-[0.25em] text-accent uppercase">
              The Reality Check
            </span>
            <p className="mb-4 text-lg leading-relaxed text-muted">
              Every trader must pass a strict evaluation to prove you can trade.
            </p>
            <p className="text-lg leading-relaxed text-muted">
              With an industry{" "}
              <strong className="text-foreground">
                pass rate of just 7%, the other 93% fail
              </strong>{" "}
              due to emotional errors, lack of strategy, or poor risk
              management.{" "}
              <strong className="text-foreground">
                That&apos;s where EOS Capital Tech comes in.
              </strong>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
