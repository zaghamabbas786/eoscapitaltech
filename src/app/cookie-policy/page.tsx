import type { Metadata } from "next";
import LegalPageShell, { LegalSection } from "@/components/LegalPageShell";

export const metadata: Metadata = {
  title: "Cookie Policy — Eos Capital Tech",
  description:
    "How Eos Capital Tech Ltd uses cookies and similar technologies on this website.",
};

export default function CookiePolicyPage() {
  return (
    <LegalPageShell title="Cookie Policy">
      <LegalSection heading="1. What are cookies?">
        <p>
          Cookies are small text files stored on your device when you visit a
          website. They are widely used to make sites work efficiently, remember
          preferences, and understand how visitors use a site. Similar
          technologies include local storage and pixels.
        </p>
      </LegalSection>

      <LegalSection heading="2. Who sets cookies">
        <p>
          This policy applies to cookies used on <strong>eoscapitaltech.com</strong>{" "}
          by <strong>Eos Capital Tech Ltd</strong> (&quot;we&quot; or
          &quot;us&quot;). Some cookies may be set by third-party services we use
          (for example analytics or embedded content), as described below.
        </p>
      </LegalSection>

      <LegalSection heading="3. Types of cookies we use">
        <p>
          <strong>Strictly necessary cookies.</strong> These are required for the
          Site to function—for example to load pages securely, balance traffic,
          or remember cookie consent choices where implemented. They cannot
          usually be switched off without impairing the Site.
        </p>
        <p>
          <strong>Functional cookies.</strong> These remember choices you make
          (such as region or language, if available) to provide enhanced
          features.
        </p>
        <p>
          <strong>Analytics and performance cookies.</strong> These help us
          understand how visitors use the Site (for example pages viewed and
          approximate location), so we can improve performance and content. We
          may use first-party or third-party analytics tools.
        </p>
        <p>
          <strong>Marketing cookies (if used).</strong> These may track visitors
          across websites to deliver relevant advertising or measure campaign
          effectiveness. We only use these where permitted and, where required,
          after you have given consent.
        </p>
      </LegalSection>

      <LegalSection heading="4. Specific cookies">
        <p>
          The exact names, durations, and providers of cookies may change as we
          update the Site or our tools. You can view cookies currently stored for
          this Site through your browser&apos;s developer tools or privacy
          settings. Replace this section with a table of specific cookies after
          your analytics and marketing stack is finalised.
        </p>
      </LegalSection>

      <LegalSection heading="5. How to control cookies">
        <p>
          Most browsers let you refuse or delete cookies through their settings.
          Blocking all cookies may affect Site functionality. For more
          information, see your browser&apos;s help documentation.
        </p>
        <p>
          Where we use non-essential cookies subject to consent, we will provide
          a consent mechanism (such as a banner) in line with applicable law.
        </p>
      </LegalSection>

      <LegalSection heading="6. Do Not Track">
        <p>
          There is no consistent industry standard for &quot;Do Not Track&quot;
          signals. We currently do not respond to DNT signals in a uniform way.
        </p>
      </LegalSection>

      <LegalSection heading="7. Updates">
        <p>
          We may update this Cookie Policy when we change our practices or the
          technologies we use. The &quot;Last updated&quot; date will be revised
          accordingly.
        </p>
      </LegalSection>

      <LegalSection heading="8. Contact">
        <p>
          If you have questions about our use of cookies, contact us using the
          details on the Site. Add your preferred contact email after legal
          review.
        </p>
      </LegalSection>
    </LegalPageShell>
  );
}
