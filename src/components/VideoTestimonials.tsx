"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";

const videos = [
  { name: "James", location: "London", label: "3 Accounts Automated" },
  { name: "Sarah", location: "Birmingham", label: "$100K Funded" },
  { name: "Marcus", location: "Manchester", label: "$250K Across 2 Firms" },
  { name: "Ryan", location: "Bristol", label: "$400K Funded" },
];

const colors = [
  "from-red-950/60 to-red-900/30",
  "from-slate-800/50 to-slate-700/30",
  "from-red-950/40 to-slate-800/30",
  "from-neutral-800/50 to-neutral-700/30",
];

export default function VideoTestimonials() {
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
            See What Our Clients Have To Say
          </span>
          <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
            Video Testimonials
          </h2>
          <p className="max-w-lg text-muted">
            Hear directly from our clients about their experience with Eos Capital Tech.
          </p>
        </motion.div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {videos.map((v, i) => (
            <motion.div
              key={v.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div
                className={`group relative mb-3 flex h-48 cursor-pointer items-center justify-center rounded-xl bg-gradient-to-br ${colors[i % colors.length]} border border-card-border overflow-hidden transition-all hover:border-accent/30`}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/15 backdrop-blur-sm transition-transform group-hover:scale-110">
                  <Play size={20} className="ml-0.5 fill-white text-white" />
                </div>
              </div>
              <p className="text-sm font-semibold">{v.name}</p>
              <p className="text-xs text-muted">{v.location}</p>
              <p className="mt-1 text-xs font-medium text-accent">{v.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
