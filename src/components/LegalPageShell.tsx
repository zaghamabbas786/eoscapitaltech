import type { ReactNode } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

type Props = {
  title: string;
  lastUpdated?: string;
  children: ReactNode;
};

export default function LegalPageShell({
  title,
  lastUpdated = "23 April 2026",
  children,
}: Props) {
  return (
    <>
      <Navbar />
      <main className="pt-24 pb-16 sm:pt-28">
        <article className="mx-auto max-w-3xl px-4 sm:px-6">
          <Link
            href="/"
            className="mb-8 inline-block text-sm text-muted transition-colors hover:text-foreground"
          >
            ← Back to home
          </Link>
          <h1 className="mb-2 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            {title}
          </h1>
          <p className="mb-10 text-sm text-muted">Last updated: {lastUpdated}</p>
          <div className="space-y-8 text-sm leading-relaxed">{children}</div>
        </article>
      </main>
      <Footer />
    </>
  );
}

export function LegalSection({
  heading,
  children,
}: {
  heading: string;
  children: ReactNode;
}) {
  return (
    <section className="space-y-3">
      <h2 className="text-base font-semibold text-foreground">{heading}</h2>
      <div className="space-y-3 text-muted [&_strong]:font-medium [&_strong]:text-foreground">
        {children}
      </div>
    </section>
  );
}
