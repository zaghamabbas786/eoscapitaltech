"use client";

import { motion } from "framer-motion";

const markets = [
  { name: "Gold", since: "Since Sept 2023" },
  { name: "Forex", since: "Since May 2020" },
  { name: "Indices", since: "Since Sept 2023" },
  { name: "Crypto", since: "Since Oct 2023" },
];

export default function Markets() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-10 text-center text-xs font-medium tracking-[0.25em] text-muted uppercase"
        >
          Markets We Operate In
        </motion.p>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {markets.map((market, i) => (
            <motion.div
              key={market.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.02 }}
              className="glass-card group rounded-xl p-5 text-center transition-all duration-300"
            >
              <p className="text-lg font-semibold">{market.name}</p>
              <p className="text-xs text-muted">{market.since}</p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-8 text-center text-sm text-muted"
        >
          Systems designed for disciplined capital growth — not speculation.
        </motion.p>
      </div>
    </section>
  );
}
