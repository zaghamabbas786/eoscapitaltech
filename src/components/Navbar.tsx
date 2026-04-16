"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "About us", href: "#about" },
  { label: "Product", href: "#products" },
  { label: "White Paper", href: "#how-it-works" },
  { label: "Blog", href: "#" },
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
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="#" className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent/20">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <rect x="3" y="3" width="7" height="18" rx="1" stroke="#3B82F6" strokeWidth="2" />
              <rect x="14" y="8" width="7" height="13" rx="1" stroke="#3B82F6" strokeWidth="2" />
              <rect x="14" y="3" width="7" height="3" rx="1" fill="#3B82F6" />
            </svg>
          </div>
          <span className="text-lg font-semibold tracking-tight">
            EOS Capital Tech
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
            href="#pricing"
            className="rounded-full bg-accent px-5 py-2 text-sm font-medium text-white transition-all hover:bg-accent/90 hover:shadow-lg hover:shadow-accent/25"
          >
            See Demo
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
                  href="#pricing"
                  onClick={() => setMobileOpen(false)}
                  className="flex-1 rounded-full bg-accent py-2.5 text-center text-sm font-medium text-white"
                >
                  See Demo
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
