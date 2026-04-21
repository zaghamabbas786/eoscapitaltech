"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Pedro V",
    role: "Spain",
    tag: "INDUSTRY'S BEST",
    quote:
      "I'm being trading with EOS since March this year. I have tried multiple other services and none of them beat EOS. For me they are the best in the industry now and I can't recommend them highly enough.",
  },
  {
    name: "Steven B",
    role: "U.S",
    tag: "PROP ACCOUNT SECURED",
    quote:
      "Thanks to their support, I was able to secure my initial funded trading account through a reputable proprietary firm. The entire process has been seamless, and I'm grateful for choosing EOS as my partner on this journey.",
  },
  {
    name: "Murat",
    role: "UK",
    tag: "$4K FIRST PAYOUT",
    quote:
      "Chuffed to say the least as I've been struggling for the last 6 months on my own buying and failing challenges. My account was passed as promised! I received my first 4k payout using the system in my first month. Highly recommend service",
  },
  {
    name: "Emilia R",
    role: "UK",
    tag: "STABLE & PRACTICAL",
    quote:
      "What impressed me most was that they had a practical mentality. They did not promise things that are unrealistic and instead concentrated on developing tools that are stable and efficient. The team is well knowledgeable in technical side of automated trading.",
  },
  {
    name: "Onos O",
    role: "U.S",
    tag: "DELIVERED AS PROMISED",
    quote:
      "EOS capital delivered as promised. Account passed, payout secured. A big thank you to Han for all the support and guidance. Their risk management is topnotch prioritizing account safety over quick gains.\nThank you so much Han.",
  },
  {
    name: "Bruno T",
    role: "UK",
    tag: "TRUST & CLARITY",
    quote:
      "Proper communication was upheld during the whole engagement. Responses to questions were quick and regular updates were made on the progress. The openness in the clarification of the capabilities and restrictions gave the feeling of trust and professionalism.",
  },
];

export default function Testimonials() {
  return (
    <section id="results" className="relative py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 sm:mb-12"
        >
          <span className="mb-4 block text-xs font-semibold tracking-[0.25em] text-accent uppercase">
            Real Clients, Real Results
          </span>
          <h2 className="mb-4 text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">
            What Our Clients Say
          </h2>
          <p className="max-w-lg text-sm text-muted sm:text-base">
            These aren&apos;t promises or projections. Real traders who automated
            their funded accounts with our systems.
          </p>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="glass-card flex flex-col rounded-2xl p-5 sm:p-6"
            >
              <Quote size={20} className="mb-3 shrink-0 text-accent/40" />
              <p className="mb-5 flex-1 whitespace-pre-line text-sm italic leading-relaxed text-muted">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex flex-col gap-3 border-t border-card-border/50 pt-4 sm:flex-row sm:items-center sm:justify-between sm:gap-2">
                <div className="flex min-w-0 items-center gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent/15 text-xs font-bold text-accent">
                    {t.name.split(" ").map((n) => n[0]).join("")}
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-semibold">{t.name}</p>
                    <p className="text-xs text-muted">{t.role}</p>
                  </div>
                </div>
                <span className="w-fit shrink-0 rounded-full bg-accent/10 px-2.5 py-1 text-[10px] font-semibold tracking-wide text-accent">
                  {t.tag}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
