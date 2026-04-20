"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const trustBadges = [
  {
    name: "Business Insider",
    logo: "/press/business-insider.png",
    url: "https://markets.businessinsider.com/news/stocks/eos-capital-technologies-unveils-innovative-solutions-to-empower-retail-traders-in-financial-markets-1033870673",
  },
  {
    name: "Morningstar",
    logo: "/press/morningstar.png",
    url: "https://www.morningstar.com/news/globe-newswire/9259925/eos-capital-technologies-unveils-innovative-solutions-to-empower-retail-traders-in-financial-markets",
  },
  {
    name: "Benzinga",
    logo: "/press/benzinga.png",
    url: "https://www.benzinga.com/pressreleases/24/10/g41451361/eos-capital-technologies-unveils-innovative-solutions-to-empower-retail-traders-in-financial-marke",
  },
  {
    name: "Yahoo Finance",
    logo: "/press/yahoo-finance.png",
    url: "https://finance.yahoo.com/news/eos-capital-technologies-unveils-innovative-125600869.html",
  },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-16 sm:pt-32 sm:pb-20 md:pt-40 md:pb-28">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[min(700px,120vw)] w-[min(900px,130vw)] max-w-none -translate-x-1/2 rounded-full bg-accent/5 blur-[100px] sm:blur-[140px]" />
      </div>

      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="relative mx-auto mb-8 h-20 w-20 sm:mb-10 sm:h-24 sm:w-24"
        >
          <Image
            src="/logo.png"
            alt="Eos Capital Tech"
            fill
            loading="eager"
            priority
            sizes="(max-width: 640px) 80px, 96px"
            className="rounded-2xl object-cover"
          />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mb-5 text-3xl font-bold leading-[1.12] tracking-tight sm:mb-6 sm:text-4xl md:text-6xl lg:text-7xl"
        >
          Prop Firm Automation,{" "}
          <span className="gradient-text">Engineered For You.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mx-auto mb-8 max-w-2xl text-base leading-relaxed text-muted sm:mb-10 sm:text-lg"
        >
          We build, code, and deploy professional trading systems in MQL4 &
          MQL5 — designed to trade your funded accounts on autopilot with
          institutional-grade risk management.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="mx-auto flex w-full max-w-md flex-col gap-3 sm:max-w-none sm:flex-row sm:flex-wrap sm:justify-center sm:gap-4"
        >
          <motion.a
            href="#book"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-accent/25 transition-all hover:bg-accent-light hover:shadow-xl hover:shadow-accent/30 sm:w-auto sm:px-8"
          >
            Book a Strategy Call
          </motion.a>
          <motion.a
            href="#solutions"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-card-border px-6 py-3.5 text-sm font-semibold transition-colors hover:border-accent/50 hover:bg-card-bg sm:w-auto sm:px-8"
          >
            Explore Solutions
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="mt-10 sm:mt-14"
        >
          <p className="mb-4 text-xs tracking-widest text-muted/50 uppercase sm:mb-5">
            As Featured In
          </p>
          <div className="mx-auto grid max-w-md grid-cols-2 gap-x-3 gap-y-5 sm:max-w-2xl sm:gap-x-6 sm:gap-y-6 md:max-w-none md:flex md:flex-nowrap md:justify-center md:gap-x-7 md:gap-y-0 lg:gap-x-10">
            {trustBadges.map((badge) => (
              <a
                key={badge.name}
                href={badge.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex min-w-0 items-center justify-center gap-2 opacity-60 transition-opacity hover:opacity-95 sm:gap-2.5 md:shrink-0 md:gap-3"
              >
                <span className="relative block h-7 w-[76px] shrink-0 sm:h-8 sm:w-[96px] md:h-9 md:w-[120px] lg:w-[130px]">
                  <Image
                    src={badge.logo}
                    alt=""
                    fill
                    sizes="(max-width: 768px) 96px, 130px"
                    className="object-contain object-center"
                  />
                </span>
                <span className="min-w-0 font-mono text-[10px] leading-tight tracking-wider text-muted/70 sm:text-xs md:whitespace-nowrap md:text-sm">
                  {badge.name}
                </span>
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
