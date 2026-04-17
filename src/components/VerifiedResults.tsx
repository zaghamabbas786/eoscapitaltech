"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const results = [
  { initials: "JR", name: "James R.", label: "Funded", amount: "$100,000" },
  { initials: "SM", name: "Sarah M.", label: "Funded", amount: "$100,000" },
  { initials: "MT", name: "Marcus T.", label: "Funded", amount: "$250,000" },
  { initials: "RJ", name: "Ryan J.", label: "Funded", amount: "$400,000" },
  { initials: "AH", name: "Ahmed H.", label: "Custom EA Deployed", amount: null },
  { initials: "DK", name: "Daniel K.", label: "MQL5 Migration Complete", amount: null },
];

export default function VerifiedResults() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-wrap justify-center gap-4">
          {results.map((r, i) => (
            <motion.div
              key={r.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              className="glass-card flex items-center gap-3 rounded-xl px-5 py-3"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent/15 text-xs font-bold text-accent">
                {r.initials}
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle size={12} className="text-accent-green" />
                  <span className="text-sm font-semibold">{r.name}</span>
                </div>
                <p className="text-xs text-muted">
                  {r.label}
                  {r.amount && <span className="ml-1 font-semibold text-foreground">{r.amount}</span>}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
