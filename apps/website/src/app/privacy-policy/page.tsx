
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Read the GreenCoatVets Privacy Policy to understand how we collect, use, protect and manage personal information when you visit our website or contact our veterinary hospital.",
  alternates: {
    canonical: "/privacy-policy",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const sections = [
  {
    id: "information-we-collect",
    title: "1. Information We Collect",
    content: (
      <>
        <p>
          Depending on how you interact with GreenCoatVets, we may collect
          the following types of information:
        </p>
        <ul className="mt-3 list-disc space-y-2 pl-6">
          <li>
            <strong>Contact information:</strong> Your name, phone number,
            email address and other details you provide when contacting us
            or making an enquiry.
          </li>
          <li>
            <strong>Pet and veterinary information:</strong> Information
            about your pet, such as its name, species, breed, age,
            medical history and treatment-related details, where provided
            for veterinary services.
          </li>
          <li>
            <strong>Appointment and service information:</strong> Details
            submitted when requesting appointments, asking questions or
            using services available through our website.
          </li>
          <li>
            <strong>Technical information:</strong> Information such as
            your IP address, browser type, device information, pages
            visited and interactions with our website.
          </li>
          <li>
            <strong>Communications:</strong> Information contained in
            messages, feedback or other correspondence you send to us.
          </li>
        </ul>
        <p className="mt-3">
          Please avoid submitting sensitive personal information unless
          it is necessary for your enquiry or the services you request.
        </p>
      </>
    ),
  },
  {
    id: "how-we-use-information",
    title: "2. How We Use Your Information",
    content: (
      <>
        <p>We may use the information we collect to:</p>
        <ul className="mt-3 list-disc space-y-2 pl-6">
          <li>Respond to enquiries and requests for information.</li>
          <li>Arrange appointments and coordinate veterinary services.</li>
          <li>Maintain relevant pet health and treatment records.</li>
          <li>Provide customer support and improve our services.</li>
          <li>Operate, maintain and improve our website.</li>
          <li>Understand website traffic and visitor behaviour.</li>
          <li>Protect our website, prevent misuse and maintain security.</li>
          <li>
            Send service-related communications and, where permitted,
            marketing communications.
          </li>
          <li>
            Comply with applicable legal obligations and protect our
            legitimate interests.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "cookies-analytics",
    title: "3. Cookies and Website Analytics",
    content: (
      <>
        <p>
          Our website may use cookies and similar technologies to support
          website functionality, understand visitor activity and improve
          the user experience.
        </p>
        <p className="mt-3">
          We use or may use analytics and website measurement tools,
          including Google-related services and Ahrefs Analytics, to
          understand website usage, traffic sources and performance.
          These providers may process technical information in accordance
          with their own privacy policies and applicable settings.
        </p>
        <p className="mt-3">
          You can manage cookies through your browser settings. Blocking
          certain cookies may affect some website functionality. Where
          required by applicable law, we will seek consent before using
          non-essential cookies or similar technologies.
        </p>
      </>
    ),
  },
  {
    id: "sharing-information",
    title: "4. How We Share Information",
    content: (
      <>
        <p>
          We do not sell personal information as part of our ordinary
          business operations. We may share relevant information in
          limited circumstances, including:
        </p>
        <ul className="mt-3 list-disc space-y-2 pl-6">
          <li>
            <strong>Service providers:</strong> Hosting, website
            maintenance, analytics, communication and other providers
            that help us operate our services.
          </li>
          <li>
            <strong>Veterinary care:</strong> Relevant information with
            personnel or service providers involved in delivering
            requested veterinary care.
          </li>
          <li>
            <strong>Legal requirements:</strong> Where disclosure is
            required by law, a lawful request or a competent authority.
          </li>
          <li>
            <strong>Security and protection:</strong> Where reasonably
            necessary to investigate fraud, protect rights or address
            security concerns.
          </li>
        </ul>
        <p className="mt-3">
          We expect service providers handling personal information on
          our behalf to use appropriate safeguards and process it for
          authorised purposes.
        </p>
      </>
    ),
  },
  {
    id: "data-security",
    title: "5. Data Security",
    content: (
      <>
        <p>
          We take reasonable steps to protect information against
          unauthorised access, alteration, disclosure or loss. These
          measures may include access controls, secure systems and
          appropriate technical and organisational safeguards.
        </p>
        <p className="mt-3">
          However, no website or method of electronic transmission can
          be guaranteed to be completely secure. Please contact us if
          you believe information you have shared with us has been
          compromised.
        </p>
      </>
    ),
  },
  {
    id: "data-retention",
    title: "6. Data Retention",
    content: (
      <>
        <p>
          We retain personal information only for as long as reasonably
          necessary for the purposes described in this policy, including
          providing services, maintaining relevant records, resolving
          disputes and meeting legal or regulatory requirements.
        </p>
        <p className="mt-3">
          Retention periods may vary depending on the type of information
          and the reason it was collected.
        </p>
      </>
    ),
  },
  {
    id: "your-rights",
    title: "7. Your Privacy Rights",
    content: (
      <>
        <p>
          Depending on applicable law, you may have the right to request
          access to your personal information, correction of inaccurate
          information, deletion of information, or information about how
          your data is processed. You may also be able to object to
          certain processing or withdraw consent where processing is
          based on consent.
        </p>
        <p className="mt-3">
          To make a privacy-related request, please contact GreenCoatVets
          using the contact options on our website. We may need to verify
          your identity before responding. Certain information may need
          to be retained where required or permitted by law.
        </p>
      </>
    ),
  },
  {
    id: "third-party-links",
    title: "8. Third-Party Websites and Services",
    content: (
      <>
        <p>
          Our website may contain links to third-party websites,
          platforms or services. Those third parties may collect and
          process information under their own privacy policies.
        </p>
        <p className="mt-3">
          GreenCoatVets is not responsible for the privacy practices or
          content of websites that we do not operate. We encourage you
          to review their privacy policies before sharing information.
        </p>
      </>
    ),
  },
  {
    id: "children",
    title: "9. Children&apos;s Privacy",
    content: (
      <p>
        Our website is intended for people seeking veterinary information
        and services. We do not knowingly seek to collect children&apos;s
        personal information unnecessarily. If you believe a child has
        provided personal information to us, please contact us so that
        we can review the matter and take appropriate action.
      </p>
    ),
  },
  {
    id: "policy-changes",
    title: "10. Changes to This Privacy Policy",
    content: (
      <p>
        We may update this Privacy Policy from time to time to reflect
        changes in our website, services, data practices or applicable
        legal requirements. The updated version will be published on
        this page, with its revised effective date.
      </p>
    ),
  },
  {
    id: "contact",
    title: "11. Contact Us",
    content: (
      <>
        <p>
          If you have questions about this Privacy Policy or how your
          information is handled, please contact GreenCoatVets through
          our website or visit our clinic.
        </p>
        <div className="mt-4 rounded-xl border border-gray-200 bg-gray-50 p-5">
          <p className="font-semibold text-gray-900">GreenCoatVets</p>
          <p className="mt-2 text-gray-600">
            SCO-20, Near Bestech Mall,
            <br />
            Industrial Area Phase 9,
            <br />
            Mohali, Punjab 160062, India
          </p>
          <Link
            href="/contact"
            className="mt-4 inline-flex items-center gap-2 font-semibold text-emerald-700 underline underline-offset-4 hover:text-emerald-900"
          >
            Contact our team
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </>
    ),
  },
];

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="border-b border-gray-100 bg-gray-50">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
          <nav
            aria-label="Breadcrumb"
            className="mb-5 text-sm text-gray-500"
          >
            <Link href="/" className="hover:text-emerald-700">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span className="text-gray-800">Privacy Policy</span>
          </nav>

          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-emerald-700">
            Your privacy matters
          </p>

          <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Privacy Policy
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-7 text-gray-600 sm:text-lg">
            At GreenCoatVets, we respect your privacy and are committed
            to handling your personal information responsibly. This
            policy explains what information we may collect, how we
            use it and the choices available to you.
          </p>

          <p className="mt-5 text-sm text-gray-500">
            Effective date: 21 October 2026
          </p>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-12 sm:px-8 lg:grid-cols-[250px_minmax(0,1fr)] lg:gap-16 lg:py-16">
        <aside className="h-fit rounded-xl border border-gray-200 p-5 lg:sticky lg:top-8">
          <h2 className="mb-4 text-sm font-bold uppercase tracking-wider text-gray-900">
            On this page
          </h2>
          <nav aria-label="Privacy policy sections">
            <ul className="space-y-3 text-sm text-gray-600">
              {sections.map((section) => (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    className="transition-colors hover:text-emerald-700"
                  >
                    {section.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        <div className="min-w-0">
          <div className="mb-10 rounded-xl border border-emerald-100 bg-emerald-50/60 p-5 text-sm leading-6 text-gray-700">
            This policy applies to information collected through the
            GreenCoatVets website and related interactions covered by
            this policy. Additional terms or notices may apply to
            specific services.
          </div>

          <div className="space-y-10">
            {sections.map((section) => (
              <section
                key={section.id}
                id={section.id}
                className="scroll-mt-8 border-b border-gray-100 pb-9 last:border-b-0"
              >
                <h2 className="text-xl font-bold tracking-tight text-gray-900 sm:text-2xl">
                  {section.title}
                </h2>

                <div className="mt-4 text-[15px] leading-7 text-gray-600 [&_a]:break-words [&_li]:pl-1">
                  {section.content}
                </div>
              </section>
            ))}
          </div>

          <div className="mt-8 rounded-xl bg-gray-50 p-5 text-sm leading-6 text-gray-600">
            Please read this policy carefully. If you have questions
            about your privacy or personal information, contact our team
            through the website.
          </div>
        </div>
      </div>
    </main>
  );
}
