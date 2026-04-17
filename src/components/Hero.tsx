"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const trustBadges = [
  { name: "Business Insider", url: "https://markets.businessinsider.com/news/stocks/eos-capital-technologies-unveils-innovative-solutions-to-empower-retail-traders-in-financial-markets-1033870673" },
  { name: "Morningstar", url: "https://www.morningstar.com/news/globe-newswire/9259925/eos-capital-technologies-unveils-innovative-solutions-to-empower-retail-traders-in-financial-markets" },
  { name: "Benzinga", url: "https://www.benzinga.com/pressreleases/24/10/g41451361/eos-capital-technologies-unveils-innovative-solutions-to-empower-retail-traders-in-financial-marke" },
  { name: "Yahoo Finance", url: "https://finance.yahoo.com/news/eos-capital-technologies-unveils-innovative-125600869.html" },
];

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
          className="mx-auto mb-10"
        >
          <Image
            src="/logo.png"
            alt="Eos Capital Tech"
            width={96}
            height={96}
            className="mx-auto rounded-2xl"
          />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mb-6 text-4xl font-bold leading-[1.15] tracking-tight md:text-6xl lg:text-7xl"
        >
          Prop Firm Automation,{" "}
          <span className="gradient-text">Engineered For You.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mx-auto mb-10 max-w-2xl text-lg text-muted"
        >
          We build, code, and deploy professional trading systems in MQL4 &
          MQL5 — designed to trade your funded accounts on autopilot with
          institutional-grade risk management.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <motion.a
            href="#book"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 rounded-full bg-accent px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-accent/25 transition-all hover:bg-accent-light hover:shadow-xl hover:shadow-accent/30"
          >
            Book a Strategy Call
          </motion.a>
          <motion.a
            href="#solutions"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 rounded-full border border-card-border px-8 py-3.5 text-sm font-semibold transition-colors hover:border-accent/50 hover:bg-card-bg"
          >
            Explore Solutions
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="mt-14"
        >
          <p className="mb-5 text-xs tracking-widest text-muted/50 uppercase">
            As Featured In
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8">
            {trustBadges.map((badge) => (
              <a
                key={badge.name}
                href={badge.url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-sm tracking-wider text-muted/40 transition-all hover:text-muted/70"
              >
                {badge.name}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
