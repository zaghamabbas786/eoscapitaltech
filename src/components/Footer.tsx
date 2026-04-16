import Link from "next/link";
import Image from "next/image";

const footerLinks = {
  Product: [
    { label: "Titan AI", href: "#products" },
    { label: "Titan Hedge", href: "#products" },
    { label: "Leaderboard", href: "#products" },
    { label: "Pricing", href: "#pricing" },
  ],
  Company: [
    { label: "About Us", href: "#about" },
    { label: "White Paper", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Contact", href: "#contact" },
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
    <footer id="contact" className="border-t border-card-border/50 bg-card-bg/30 py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Link href="#" className="mb-4 flex items-center gap-2.5">
              <Image src="/logo.png" alt="EOS Capital Tech" width={36} height={36} className="rounded-lg" />
              <span className="text-lg font-semibold tracking-tight">
                EOS Capital Tech
              </span>
            </Link>
            <p className="mb-6 max-w-sm text-sm leading-relaxed text-muted">
              The AI trading edge engineered for passing prop firm challenges and
              scaling funded accounts. Six years of R&D, one powerful system.
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
            © 2025 EOS Capital Tech Ltd. All rights reserved.
          </p>
          <p className="text-xs text-muted">
            UK Registered Company · VAT Registered
          </p>
        </div>
      </div>
    </footer>
  );
}
