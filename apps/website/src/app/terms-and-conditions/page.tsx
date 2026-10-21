
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description:
    "Read the GreenCoatVets Terms and Conditions for using our website, making enquiries and accessing veterinary information and services.",
  alternates: {
    canonical: "/terms-and-conditions",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const sections = [
  {
    id: "acceptance",
    title: "1. Acceptance of These Terms",
    content: (
      <>
        <p>
          Welcome to GreenCoatVets. These Terms and Conditions govern
          your access to and use of our website and the information
          and services made available through it.
        </p>
        <p className="mt-3">
          By accessing or using this website, you agree to these
          Terms and Conditions. If you do not agree with them, please
          discontinue use of the website.
        </p>
      </>
    ),
  },
  {
    id: "about-our-website",
    title: "2. About Our Website",
    content: (
      <>
        <p>
          This website provides information about GreenCoatVets,
          our veterinary services, pet healthcare, clinic facilities
          and ways to contact our team.
        </p>
        <p className="mt-3">
          We aim to keep website information accurate and up to date.
          However, service descriptions, availability, opening hours
          and other details may change without notice. Please contact
          our team to confirm information before relying on it.
        </p>
      </>
    ),
  },
  {
    id: "veterinary-information",
    title: "3. Veterinary Information and Advice",
    content: (
      <>
        <p>
          Information published on this website is provided for
          general educational and informational purposes. It is not
          a substitute for a professional veterinary examination,
          diagnosis or treatment plan tailored to your pet.
        </p>
        <p className="mt-3">
          Every animal is different, and symptoms or treatment
          requirements can vary. Do not delay seeking veterinary
          attention or disregard professional advice because of
          information you have read on this website.
        </p>
        <p className="mt-3">
          If your pet appears seriously unwell, is experiencing
          breathing difficulties, severe bleeding, collapse or another
          potentially life-threatening condition, contact a veterinary
          professional or an appropriate emergency veterinary service
          promptly. Do not assume that an online enquiry is monitored
          continuously or that submitting a form constitutes an
          emergency appointment.
        </p>
      </>
    ),
  },
  {
    id: "appointments-services",
    title: "4. Appointments and Veterinary Services",
    content: (
      <>
        <p>
          Appointment requests and enquiries submitted through our
          website are subject to confirmation by GreenCoatVets.
          Submitting a request does not, by itself, guarantee an
          appointment, a particular time slot or the availability
          of a specific service.
        </p>
        <p className="mt-3">
          Veterinary services depend on clinical assessment, the
          needs of the animal, the availability of appropriate
          personnel and facilities, and other relevant circumstances.
        </p>
        <p className="mt-3">
          Please provide accurate information when requesting an
          appointment and inform our team of relevant changes to
          your contact details or your pet&apos;s condition.
        </p>
      </>
    ),
  },
  {
    id: "fees-and-payments",
    title: "5. Fees and Payments",
    content: (
      <>
        <p>
          Fees for consultations, procedures, medication, diagnostics
          and other veterinary services may vary according to the
          service provided and your pet&apos;s individual requirements.
        </p>
        <p className="mt-3">
          Where applicable, fees, estimates, payment arrangements
          and any relevant cancellation terms will be communicated
          through the appropriate service or booking process.
        </p>
        <p className="mt-3">
          Unless expressly confirmed by GreenCoatVets, prices or
          estimates discussed in an enquiry should not be treated
          as a final quotation or guarantee of the total cost.
        </p>
      </>
    ),
  },
  {
    id: "user-responsibilities",
    title: "6. Your Responsibilities",
    content: (
      <>
        <p>When using our website, you agree to:</p>
        <ul className="mt-3 list-disc space-y-2 pl-6">
          <li>Provide accurate and non-misleading information.</li>
          <li>Use the website only for lawful purposes.</li>
          <li>
            Avoid attempting to disrupt, damage or gain unauthorised
            access to the website or its systems.
          </li>
          <li>
            Not upload or transmit malicious code, spam or unlawful
            material through website forms or other features.
          </li>
          <li>
            Respect the rights and privacy of other people when
            communicating with our team.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "intellectual-property",
    title: "7. Intellectual Property",
    content: (
      <>
        <p>
          Unless otherwise stated, website content, including text,
          branding, logos, graphics, photographs, design elements
          and other materials, is owned by GreenCoatVets or used
          with permission from the relevant rights holders.
        </p>
        <p className="mt-3">
          You may access and use the website for personal,
          non-commercial informational purposes. You must not
          reproduce, republish, distribute, modify or commercially
          exploit website content without the necessary permission,
          except where permitted by applicable law.
        </p>
      </>
    ),
  },
  {
    id: "third-party-links",
    title: "8. Third-Party Links and Services",
    content: (
      <>
        <p>
          Our website may contain links to third-party websites,
          tools or services for your convenience. These services
          may operate under separate terms and privacy policies.
        </p>
        <p className="mt-3">
          GreenCoatVets does not control all third-party websites
          and is not responsible for their content, availability
          or practices. Accessing a third-party website is at
          your own discretion.
        </p>
      </>
    ),
  },
  {
    id: "website-availability",
    title: "9. Website Availability and Security",
    content: (
      <>
        <p>
          We may update, suspend, restrict or discontinue parts
          of the website to maintain, improve or protect our
          services. We do not guarantee uninterrupted or
          error-free availability.
        </p>
        <p className="mt-3">
          Although reasonable measures may be taken to protect
          the website, no online system can be guaranteed to be
          completely secure. You should use appropriate security
          measures when accessing online services.
        </p>
      </>
    ),
  },
  {
    id: "liability",
    title: "10. Limitation of Liability",
    content: (
      <>
        <p>
          To the extent permitted by applicable law, GreenCoatVets
          does not guarantee that all website information will
          always be complete, accurate, current or suitable for
          every purpose.
        </p>
        <p className="mt-3">
          Nothing in these Terms and Conditions excludes or limits
          any liability, right or remedy that cannot lawfully be
          excluded or limited. Any applicable limitations are
          subject to mandatory legal protections.
        </p>
        <p className="mt-3">
          These terms relate to website use and do not replace
          any separate terms, consent forms or agreements that
          may apply to veterinary treatment or other services.
        </p>
      </>
    ),
  },
  {
    id: "privacy",
    title: "11. Privacy",
    content: (
      <>
        <p>
          Our handling of personal information is described in
          our Privacy Policy. By using the website, you should
          also review that policy to understand how information
          may be collected and used.
        </p>
        <Link
          href="/privacy-policy"
          className="mt-3 inline-flex font-semibold text-emerald-700 underline underline-offset-4 hover:text-emerald-900"
        >
          Read our Privacy Policy →
        </Link>
      </>
    ),
  },
  {
    id: "changes",
    title: "12. Changes to These Terms",
    content: (
      <p>
        We may revise these Terms and Conditions when our website,
        services or legal requirements change. Updated terms will
        be published on this page with a revised effective date.
        Your continued use of the website after changes are
        published will be subject to applicable law and the
        updated terms.
      </p>
    ),
  },
  {
    id: "governing-law",
    title: "13. Governing Law",
    content: (
      <p>
        These Terms and Conditions are subject to applicable laws
        of India. Any disputes will be handled by the competent
        courts or authorities with jurisdiction, subject to
        applicable legal requirements.
      </p>
    ),
  },
  {
    id: "contact",
    title: "14. Contact Us",
    content: (
      <>
        <p>
          If you have questions about these Terms and Conditions,
          please contact GreenCoatVets through our website.
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

export default function TermsAndConditionsPage() {
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
            <span className="text-gray-800">
              Terms and Conditions
            </span>
          </nav>

          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-emerald-700">
            Clear terms, trusted care
          </p>

          <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Terms and Conditions
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-7 text-gray-600 sm:text-lg">
            Please read these terms before using the GreenCoatVets
            website. They explain the basic conditions for accessing
            our website, requesting information and learning about
            our veterinary services.
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
          <nav aria-label="Terms and conditions sections">
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
            These terms cover general website use. Additional
            conditions may apply to particular appointments,
            veterinary treatments, purchases or other services.
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
            If you have questions about these terms, please contact
            our team before relying on website information for a
            particular service or appointment.
          </div>
        </div>
      </div>
    </main>
  );
}
