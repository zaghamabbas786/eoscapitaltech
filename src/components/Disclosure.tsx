"use client";

import { motion } from "framer-motion";
import { ShieldAlert } from "lucide-react";

export default function Disclosure() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-4xl px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="rounded-2xl border border-card-border/50 bg-card-bg/30 p-6"
        >
          <div className="flex gap-3">
            <ShieldAlert size={20} className="mt-0.5 shrink-0 text-muted" />
            <p className="text-xs leading-relaxed text-muted">
              <strong className="text-foreground/70">Disclosure:</strong> Results
              vary and are not guaranteed. Trading involves risks and losses may
              occur. Based on internal audit from 10,000 prop firm challenge
              attempts, users were funded 27% of the time. The cost to obtain a
              $100,000 funded account was $1,823. The average value of a funded
              account was $4,810. Some testimonials may include small appreciation
              tokens. All reflect genuine experiences.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
