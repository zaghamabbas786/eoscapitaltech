import Link from "next/link";
import Image from "next/image";

const footerLinks = {
  Product: [
    { label: "Custom EA Development", href: "#solutions" },
    { label: "Proprietary Systems", href: "#products" },
    { label: "MQL4 → MQL5 Conversion", href: "#solutions" },
    { label: "VPS & Deployment", href: "#how-it-works" },
  ],
  Company: [
    { label: "About Us", href: "#solutions" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Results", href: "#results" },
    { label: "Contact", href: "#book" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Risk Disclosure", href: "#" },
    { label: "Cookie Policy", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer id="book" className="border-t border-card-border/50 bg-card-bg/30 py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Link href="#" className="mb-4 flex items-center gap-2.5">
              <Image src="/logo.png" alt="Eos Capital Tech" width={36} height={36} className="rounded-lg" />
              <span className="text-lg font-semibold tracking-tight">
                Eos Capital Tech
              </span>
            </Link>
            <p className="mb-6 max-w-sm text-sm leading-relaxed text-muted">
              Automated trading infrastructure for prop firm traders. We build,
              code, and deploy professional trading systems in MQL4 & MQL5.
            </p>
            <div className="flex gap-3">
              {["YouTube", "Twitter", "Discord"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-card-border bg-card-bg text-xs text-muted transition-colors hover:border-accent/30 hover:text-foreground"
                >
                  {social[0]}
                </a>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="mb-4 text-sm font-semibold">{category}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-card-border/50 pt-8 md:flex-row">
          <p className="text-xs text-muted">
            © 2026 Eos Capital Tech Ltd. All rights reserved.
          </p>
          <p className="text-xs text-muted">
            UK Registered Company · VAT Registered
          </p>
        </div>
      </div>
    </footer>
  );
}
