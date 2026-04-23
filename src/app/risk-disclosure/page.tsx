import type { Metadata } from "next";
import LegalPageShell, { LegalSection } from "@/components/LegalPageShell";

export const metadata: Metadata = {
  title: "Risk Disclosure — Eos Capital Tech",
  description:
    "Important risks associated with trading, automation, and proprietary firm programmes.",
};

export default function RiskDisclosurePage() {
  return (
    <LegalPageShell title="Risk Disclosure">
      <LegalSection heading="Purpose">
        <p>
          This Risk Disclosure is provided by <strong>Eos Capital Tech Ltd</strong>{" "}
          for informational purposes. It highlights significant risks associated
          with trading financial markets, using automated trading systems, and
          participating in proprietary (&quot;prop&quot;) firm evaluation and
          funded programmes. It does not describe every possible risk.
        </p>
      </LegalSection>

      <LegalSection heading="1. General trading risk">
        <p>
          Trading foreign exchange, CFDs, futures, and other leveraged products
          carries a high level of risk and may not be suitable for all investors.
          You can lose some or all of your capital. Past performance, whether
          actual or simulated, is not indicative of future results.
        </p>
      </LegalSection>

      <LegalSection heading="2. Leverage and volatility">
        <p>
          Leverage magnifies both gains and losses. Market prices can move
          rapidly due to news, liquidity, gaps, and volatility. Stop-loss orders
          and other risk controls may not execute at desired prices, especially
          around market opens, closes, or low-liquidity periods.
        </p>
      </LegalSection>

      <LegalSection heading="3. Automated and algorithmic trading">
        <p>
          Expert advisors (EAs), scripts, and other automated systems execute
          according to their programming. Bugs, misconfiguration, connectivity
          loss, server downtime, broker feed issues, or unexpected market
          conditions can cause unintended orders, missed trades, or losses. No
          automation eliminates risk or guarantees profitability.
        </p>
      </LegalSection>

      <LegalSection heading="4. Technology and connectivity">
        <p>
          Trading infrastructure—including VPS hosting, internet connections,
          broker platforms, and third-party APIs—can fail or degrade. You are
          responsible for monitoring your accounts and systems where appropriate
          and for having contingency plans.
        </p>
      </LegalSection>

      <LegalSection heading="5. Prop firm and evaluation programmes">
        <p>
          Proprietary trading firms set their own rules, drawdown limits,
          consistency requirements, and payout policies. Rules can change.
          Evaluation fees may be non-refundable. Passing an evaluation does not
          guarantee long-term funding or payouts. Disputes with a prop firm are
          between you and that firm under their terms.
        </p>
      </LegalSection>

      <LegalSection heading="6. No guarantee of results">
        <p>
          Case studies, testimonials, or examples on our website or in marketing
          materials reflect specific experiences and time periods. They are not
          promises or guarantees of similar outcomes for any other client.
        </p>
      </LegalSection>

      <LegalSection heading="7. Regulatory and tax considerations">
        <p>
          Laws and regulations differ by country. You are responsible for
          determining whether trading, use of our Services, or participation in
          prop programmes is lawful for you and for your tax reporting
          obligations. We do not provide regulatory or tax advice.
        </p>
      </LegalSection>

      <LegalSection heading="8. Software and custom development">
        <p>
          Custom software is built to agreed specifications. You remain
          responsible for testing, risk settings, and deployment choices in live
          environments. We are not liable for trading losses resulting from
          market conditions or decisions made after delivery, except as
          expressly stated in your written agreement.
        </p>
      </LegalSection>

      <LegalSection heading="9. Acknowledgement">
        <p>
          By using our Services or trading with systems we help deliver, you
          acknowledge that you understand these risks and that you trade at your
          own risk. Seek independent professional advice if you are unsure whether
          trading is appropriate for you.
        </p>
      </LegalSection>
    </LegalPageShell>
  );
}
