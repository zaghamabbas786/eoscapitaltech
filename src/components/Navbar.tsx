"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "Solutions", href: "#solutions" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Results", href: "#results" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-card-border/50 bg-background/80 backdrop-blur-xl"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
        <Link href="#" className="flex items-center gap-2.5">
          <Image src="/logo.png" alt="Eos Capital Tech" width={36} height={36} className="rounded-lg" />
          <span className="text-lg font-semibold tracking-tight">
            Eos Capital Tech
          </span>
        </Link>

        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm text-muted transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href="https://portal.eoscapitaltech.com/login"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-card-border px-5 py-2 text-sm font-medium text-muted transition-colors hover:border-accent/50 hover:text-foreground"
          >
            Login
          </Link>
          <Link
            href="#book"
            className="rounded-full bg-accent px-5 py-2 text-sm font-medium text-white transition-all hover:bg-accent-light hover:shadow-lg hover:shadow-accent/25"
          >
            Book a Call
          </Link>
        </div>

        <button
          className="lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-card-border/50 bg-background/95 backdrop-blur-xl lg:hidden"
          >
            <div className="flex flex-col gap-1 px-6 py-4">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-lg px-3 py-2.5 text-sm text-muted transition-colors hover:bg-card-bg hover:text-foreground"
                >
                  {link.label}
                </Link>
              ))}
              <div className="mt-3 flex gap-2">
                <Link
                  href="https://portal.eoscapitaltech.com/login"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileOpen(false)}
                  className="flex-1 rounded-full border border-card-border py-2.5 text-center text-sm font-medium text-muted"
                >
                  Login
                </Link>
                <Link
                  href="#book"
                  onClick={() => setMobileOpen(false)}
                  className="flex-1 rounded-full bg-accent py-2.5 text-center text-sm font-medium text-white"
                >
                  Book a Call
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
