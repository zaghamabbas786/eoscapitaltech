import type { Metadata } from "next";
import LegalPageShell, { LegalSection } from "@/components/LegalPageShell";

export const metadata: Metadata = {
  title: "Terms & Conditions — Eos Capital Tech",
  description:
    "Terms and conditions for using Eos Capital Tech Ltd websites and services.",
};

export default function TermsPage() {
  return (
    <LegalPageShell title="Terms & Conditions">
      <LegalSection heading="1. Agreement">
        <p>
          These Terms & Conditions (&quot;Terms&quot;) govern your access to and use
          of the website operated by <strong>Eos Capital Tech Ltd</strong>{" "}
          (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) at{" "}
          <strong>eoscapitaltech.com</strong> (the &quot;Site&quot;) and, where
          applicable, the provision of software development, trading automation,
          deployment, and related services (&quot;Services&quot;) as agreed in
          writing between you and us.
        </p>
        <p>
          By accessing the Site or engaging our Services, you agree to these
          Terms. If you do not agree, do not use the Site or our Services.
        </p>
      </LegalSection>

      <LegalSection heading="2. Not financial advice">
        <p>
          Nothing on the Site or in our communications constitutes financial,
          investment, legal, or tax advice. Trading and use of automated systems
          involve substantial risk. You are solely responsible for your trading
          decisions and for compliance with laws and regulations that apply to
          you.
        </p>
      </LegalSection>

      <LegalSection heading="3. Services and reliance">
        <p>
          Descriptions of our Services on the Site are for general information.
          A binding agreement arises only when we confirm a project, order, or
          contract in writing (including by email) with agreed scope, fees, and
          deliverables. We do not guarantee any particular trading outcome,
          profit, or prop firm funding result.
        </p>
      </LegalSection>

      <LegalSection heading="4. Acceptable use">
        <p>You agree not to:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            Use the Site or Services in any way that violates applicable law or
            infringes third-party rights;
          </li>
          <li>
            Attempt to gain unauthorised access to our systems, other
            users&apos; accounts, or connected infrastructure;
          </li>
          <li>
            Introduce malware, conduct denial-of-service attacks, or interfere
            with the integrity of the Site;
          </li>
          <li>
            Scrape, harvest, or automate access to the Site in a manner that
            impairs our operations, except as permitted by robots.txt or express
            written consent.
          </li>
        </ul>
      </LegalSection>

      <LegalSection heading="5. Intellectual property">
        <p>
          Unless otherwise agreed in writing, we retain ownership of our
          pre-existing tools, frameworks, and know-how. Deliverables and licence
          terms for custom work are set out in your project agreement. You may not
          copy, modify, or distribute our proprietary materials except as
          expressly permitted.
        </p>
      </LegalSection>

      <LegalSection heading="6. Third-party services and prop firms">
        <p>
          Our Services may interact with third-party platforms, brokers, or
          proprietary trading firms. Those third parties have their own terms,
          rules, and risk controls. We are not responsible for their actions,
          payouts, or rule changes. Your relationship with any prop firm or
          broker is strictly between you and that third party.
        </p>
      </LegalSection>

      <LegalSection heading="7. Disclaimer of warranties">
        <p>
          The Site and any information on it are provided &quot;as is&quot; and
          &quot;as available&quot; to the fullest extent permitted by law. We
          disclaim all warranties, express or implied, including merchantability,
          fitness for a particular purpose, and non-infringement, except where
          such disclaimers cannot legally apply.
        </p>
      </LegalSection>

      <LegalSection heading="8. Limitation of liability">
        <p>
          To the fullest extent permitted by applicable law, we shall not be
          liable for any indirect, incidental, special, consequential, or punitive
          damages, or for loss of profits, data, or goodwill, arising from your
          use of the Site or Services. Our aggregate liability arising out of or
          relating to the Site (excluding paid Services governed by a separate
          contract) shall not exceed the greater of (a) the amount you paid us
          in the twelve months preceding the claim or (b) one hundred pounds
          sterling (£100), except where liability cannot be limited by law.
        </p>
        <p>
          Nothing in these Terms excludes or limits our liability for death or
          personal injury caused by negligence, fraud, or any other liability
          which cannot be excluded under applicable law.
        </p>
      </LegalSection>

      <LegalSection heading="9. Indemnity">
        <p>
          You agree to indemnify and hold harmless Eos Capital Tech Ltd and its
          directors, employees, and contractors from claims, damages, losses, and
          expenses (including reasonable legal fees) arising from your misuse of
          the Site or Services, your violation of these Terms, or your violation
          of third-party rights, except to the extent caused by our wilful
          misconduct.
        </p>
      </LegalSection>

      <LegalSection heading="10. Suspension and termination">
        <p>
          We may suspend or terminate access to the Site or Services where we
          reasonably believe there is a breach of these Terms, a legal or security
          risk, or non-payment under a services agreement. Provisions that by
          their nature should survive will survive termination.
        </p>
      </LegalSection>

      <LegalSection heading="11. Governing law">
        <p>
          These Terms are governed by the laws of{" "}
          <strong>England and Wales</strong>, subject to mandatory consumer
          protections in your jurisdiction where
          they cannot be waived. The courts of England and Wales shall have
          exclusive jurisdiction for commercial disputes, except that consumers
          may have additional rights to bring proceedings in their home country
          where required by law.
        </p>
        <p>
          You should have these Terms reviewed by qualified counsel; governing
          law and jurisdiction may be adjusted to match your company
          registration and client base.
        </p>
      </LegalSection>

      <LegalSection heading="12. Changes">
        <p>
          We may update these Terms from time to time. We will post the revised
          version on the Site and update the &quot;Last updated&quot; date.
          Material changes may require additional notice where required by law.
        </p>
      </LegalSection>

      <LegalSection heading="13. Contact">
        <p>
          For questions about these Terms, contact us through the details
          provided on the Site. Replace this with your legal or operations
          contact after review.
        </p>
      </LegalSection>
    </LegalPageShell>
  );
}
