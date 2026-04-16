"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const fundedAccounts = [
  { name: "Alex M.", label: "Funded", amount: "$500,000", side: "left", top: "5%" },
  { name: "Jason L.", label: "Evaluation Cleared", amount: "$500,000", side: "right", top: "10%" },
  { name: "Jason E.", label: "Funded Account", amount: "$60,000", side: "left", top: "35%" },
  { name: "Michael D.", label: "Verified Trader", amount: "$150,000", side: "left", top: "65%" },
  { name: "Ryan W.", label: "Automated Trading Active", amount: "$80,000", side: "right", top: "55%" },
  { name: "Omar K.", label: "Verification Passed", amount: "$100,000", side: "right", top: "80%" },
];

export default function Guarantee() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 text-center"
        >
          <p className="text-lg text-muted">
            Follow our system. If you don&apos;t secure a funded account, you
            can receive a{" "}
            <strong className="text-foreground">100% refund.</strong>
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative flex min-h-[500px] items-center justify-center"
        >
          {fundedAccounts.map((account, i) => (
            <motion.div
              key={account.name}
              initial={{ opacity: 0, x: account.side === "left" ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className={`absolute hidden md:block ${account.side === "left" ? "left-0" : "right-0"}`}
              style={{ top: account.top }}
            >
              <div className="glass-card rounded-xl px-4 py-3 max-w-[200px]">
                <div className="flex items-center gap-2 mb-1">
                  <div className="h-6 w-6 rounded-full bg-accent/20 flex items-center justify-center">
                    <CheckCircle size={12} className="text-accent" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold">{account.name}</p>
                    <p className="text-[10px] text-muted">{account.label}</p>
                  </div>
                </div>
                <p className="text-lg font-bold">$ {account.amount.replace("$", "").replace(",", ",")}</p>
              </div>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8, type: "spring" }}
            className="relative z-10"
          >
            <div className="flex h-56 w-56 items-center justify-center">
              <div className="relative">
                <div className="absolute inset-0 rounded-[40%] bg-gradient-to-b from-white/10 to-white/5 blur-md" />
                <div className="relative flex h-48 w-48 flex-col items-center justify-center rounded-[40%] border border-white/20 bg-gradient-to-b from-slate-400/30 to-slate-600/20 backdrop-blur-sm">
                  <CheckCircle size={28} className="mb-2 text-white/80" />
                  <p className="text-center text-sm font-bold uppercase tracking-wider text-white/90">
                    EOS Capital
                  </p>
                  <p className="text-center text-xs font-bold uppercase tracking-widest text-white/70">
                    Guarantee
                  </p>
                  <div className="mt-1 h-px w-16 bg-gradient-to-r from-transparent via-white/40 to-transparent" />
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
