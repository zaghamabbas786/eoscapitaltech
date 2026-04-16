"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";

const testimonials = [
  { name: "Alex", role: "Marketer, Florida", funded: "$1,500,000" },
  { name: "Claire", role: "Accountant, Australia", funded: "$1,000,000" },
  { name: "Cara", role: "Mother, California", funded: "$300,000" },
  { name: "Andy", role: "Consultant, UK", funded: "$1,300,000" },
  { name: "Ed", role: "Sales, Kansas", funded: "$800,000" },
];

const colors = [
  "from-blue-900/50 to-blue-800/30",
  "from-teal-900/50 to-teal-800/30",
  "from-purple-900/50 to-purple-800/30",
  "from-slate-800/50 to-slate-700/30",
  "from-indigo-900/50 to-indigo-800/30",
];

export default function Testimonials() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <span className="mb-4 block text-xs font-semibold tracking-[0.25em] text-accent uppercase">
            Social Proof
          </span>
          <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
            Proof From The Community
          </h2>
          <p className="max-w-lg text-muted">
            These aren&apos;t promises or projections. Just real traders sharing
            their experience using the EOS Capital Tech system.
          </p>
        </motion.div>

        <div className="flex gap-5 overflow-x-auto pb-4 scrollbar-hide">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="min-w-[220px] shrink-0 md:min-w-[240px]"
            >
              <div
                className={`group relative mb-3 flex h-56 items-center justify-center rounded-xl bg-gradient-to-br ${colors[i % colors.length]} border border-card-border overflow-hidden cursor-pointer transition-all hover:border-accent/30`}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm transition-transform group-hover:scale-110">
                  <Play size={20} className="fill-white text-white ml-0.5" />
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold">{t.name}</p>
                  <p className="text-xs text-muted">{t.role}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-semibold">{t.funded}</p>
                  <p className="text-xs text-accent-green">Funded</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
