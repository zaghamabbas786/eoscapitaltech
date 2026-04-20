import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Eos Capital Tech — Prop Firm Automation, Engineered For You",
  description:
    "We build, code, and deploy professional trading systems in MQL4 & MQL5 — designed to trade your funded accounts on autopilot with institutional-grade risk management.",
  openGraph: {
    title: "Eos Capital Tech",
    description:
      "Automated trading infrastructure for prop firm traders. Professional trading systems in MQL4 & MQL5.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body className="min-h-screen overflow-x-clip bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
