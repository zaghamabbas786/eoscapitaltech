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
              Trading involves risk of loss and is not suitable for everyone.
              Past performance is not indicative of future results. Eos Capital
              Tech provides trading automation software and development services.
              We do not provide financial advice. Funded account payouts are
              subject to prop firm terms and conditions. Results shown reflect
              individual client experiences and are not guaranteed.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
