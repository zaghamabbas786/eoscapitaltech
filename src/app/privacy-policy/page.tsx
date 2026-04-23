import type { Metadata } from "next";
import Link from "next/link";
import LegalPageShell, { LegalSection } from "@/components/LegalPageShell";

export const metadata: Metadata = {
  title: "Privacy Policy — Eos Capital Tech",
  description:
    "How Eos Capital Tech Ltd collects, uses, and protects your personal data.",
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPageShell title="Privacy Policy">
      <LegalSection heading="1. Who we are">
        <p>
          This privacy policy describes how <strong>Eos Capital Tech Ltd</strong>{" "}
          (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) processes personal
          information when you use our website at{" "}
          <strong>eoscapitaltech.com</strong> (the &quot;Site&quot;) and when you
          interact with our services related to trading automation and software
          development (&quot;Services&quot;).
        </p>
        <p>
          For data protection purposes, we are the controller of personal
          information described in this policy unless we state otherwise.
        </p>
      </LegalSection>

      <LegalSection heading="2. Information we collect">
        <p>We may collect and process the following categories of information:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <strong>Contact and identity data</strong> — such as your name, email
            address, phone number, and company name when you book a call, submit
            a form, or correspond with us.
          </li>
          <li>
            <strong>Technical and usage data</strong> — such as IP address,
            browser type, device identifiers, general location (e.g. country or
            region derived from IP), pages viewed, and referring URLs.
          </li>
          <li>
            <strong>Communication content</strong> — messages you send to us by
            email or through other channels.
          </li>
          <li>
            <strong>Service-related data</strong> — information necessary to
            deliver our Services where you become a client, as described in your
            agreement or statement of work.
          </li>
        </ul>
      </LegalSection>

      <LegalSection heading="3. How we use your information">
        <p>We use personal information to:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>Provide, operate, and improve the Site and our Services;</li>
          <li>Respond to enquiries and manage prospective client relationships;</li>
          <li>
            Send administrative messages, updates about our Services, and (where
            permitted) marketing communications;
          </li>
          <li>
            Analyse usage of the Site to improve performance, security, and user
            experience;
          </li>
          <li>
            Comply with legal obligations, enforce our terms, and protect our
            rights and those of our users.
          </li>
        </ul>
        <p>
          Where required by applicable law, we rely on appropriate legal bases
          such as contract, legitimate interests (balanced against your rights),
          consent, or legal obligation.
        </p>
      </LegalSection>

      <LegalSection heading="4. Cookies and similar technologies">
        <p>
          We use cookies and similar technologies as described in our{" "}
          <Link
            href="/cookie-policy"
            className="text-accent-light underline-offset-2 hover:underline"
          >
            Cookie Policy
          </Link>
          . You can manage preferences through your browser settings where
          applicable.
        </p>
      </LegalSection>

      <LegalSection heading="5. Sharing of information">
        <p>
          We may share personal information with service providers who assist us
          (for example hosting, analytics, email delivery, and customer
          relationship tools), subject to appropriate safeguards. We may also
          disclose information if required by law, to protect rights and safety,
          or in connection with a business transfer (such as a merger or asset
          sale), where permitted.
        </p>
        <p>
          We do not sell your personal information in the conventional sense of
          selling data to third parties for their own marketing.
        </p>
      </LegalSection>

      <LegalSection heading="6. International transfers">
        <p>
          If we transfer personal information outside the UK or EEA, we will take
          steps required by applicable law to ensure appropriate protection (for
          example standard contractual clauses or adequacy decisions).
        </p>
      </LegalSection>

      <LegalSection heading="7. Retention">
        <p>
          We retain personal information only for as long as necessary for the
          purposes described in this policy, including to satisfy legal,
          accounting, or reporting requirements, unless a longer period is
          required or permitted by law.
        </p>
      </LegalSection>

      <LegalSection heading="8. Security">
        <p>
          We implement appropriate technical and organisational measures designed
          to protect personal information. No method of transmission over the
          internet is completely secure; we cannot guarantee absolute security.
        </p>
      </LegalSection>

      <LegalSection heading="9. Your rights">
        <p>
          Depending on your location, you may have rights to access, correct,
          delete, or restrict processing of your personal information, to object
          to certain processing, to data portability, and to withdraw consent
          where processing is based on consent. You may also have the right to
          lodge a complaint with a supervisory authority.
        </p>
        <p>
          To exercise these rights, contact us using the details below. We may
          need to verify your identity before responding.
        </p>
      </LegalSection>

      <LegalSection heading="10. Third-party links">
        <p>
          The Site may contain links to third-party websites. We are not
          responsible for the privacy practices of those sites. Please review
          their policies before providing information.
        </p>
      </LegalSection>

      <LegalSection heading="11. Changes">
        <p>
          We may update this policy from time to time. The &quot;Last
          updated&quot; date at the top will be revised when changes are posted.
          Continued use of the Site after changes constitutes acceptance of the
          updated policy where permitted by law.
        </p>
      </LegalSection>

      <LegalSection heading="12. Contact">
        <p>
          For privacy-related questions or requests, please contact us at the
          details provided on the Site or through your usual Eos Capital Tech
          contact. You should replace this paragraph with your official privacy
          contact email and postal address after legal review.
        </p>
      </LegalSection>
    </LegalPageShell>
  );
}
