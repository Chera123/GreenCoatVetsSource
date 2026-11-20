
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const diagnosticImages = {
  hero: "/veterinary-diagnostics-hero.jpeg",
  lab: "/veterinary-diagnostics-hero.jpeg",
  ultrasound: "/pet-ultrasound.jpg",
  xray: "/veterinary-xray.jpg",
  consultation: "/veterinary-diagnostics-hero.jpeg",
};

const pageTitle = "Veterinary Diagnostics in Mohali | GreenCoatVets";
const pageDescription =
  "Veterinary diagnostics in Mohali at GreenCoatVets: lab tests, pet ultrasound and veterinary X-ray to support accurate diagnosis and treatment.";
const pageUrl =
  "https://www.greencoatvets.com/veterinary-diagnostics-mohali/";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: pageUrl },
  openGraph: {
    type: "website",
    url: pageUrl,
    title: pageTitle,
    description: pageDescription,
    siteName: "GreenCoatVets",
    locale: "en_IN",
  },
  twitter: {
    card: "summary",
    title: pageTitle,
    description: pageDescription,
  },
};

const diagnostics = [
  {
    number: "01",
    icon: "biotech",
    title: "Blood and laboratory tests",
    description:
      "Laboratory tests help assess your pet’s general health and look for signs of infection, inflammation or problems with organs. They may be used for sick pets, before surgery and to monitor ongoing conditions.",
    points: [
      "Assess general health",
      "Help investigate symptoms",
      "Monitor ongoing conditions",
    ],
    image: diagnosticImages.lab,
    imageAlt: "Veterinary laboratory diagnostics at GreenCoatVets",
    tag: "Laboratory testing",
  },
  {
    number: "02",
    icon: "monitor_heart",
    title: "Pet ultrasound",
    description:
      "Ultrasound allows the veterinarian to look at internal organs and soft tissues without surgery. It is commonly used to investigate abdominal problems and other concerns that cannot be assessed from the outside alone.",
    points: [
      "Examine internal organs",
      "Assess soft tissues",
      "Support further investigation",
    ],
    image: diagnosticImages.ultrasound,
    imageAlt: "Pet ultrasound diagnostic examination",
    tag: "Imaging and scanning",
  },
  {
    number: "03",
    icon: "radiology",
    title: "Veterinary X-ray",
    description:
      "X-ray imaging helps examine bones, joints, the chest and other areas. It can help veterinarians assess injuries, suspected fractures and many illnesses as part of a wider clinical examination.",
    points: [
      "Assess bones and joints",
      "Investigate some chest concerns",
      "Help assess injuries",
    ],
    image: diagnosticImages.xray,
    imageAlt: "Veterinary X-ray diagnostic imaging",
    tag: "Digital imaging",
  },
];

const signs = [
  "Vomiting, weakness, coughing or loss of appetite",
  "An injury, limping or suspected fracture",
  "Checks before surgery or anaesthesia",
  "Monitoring an ongoing health condition",
  "Routine health checks, particularly for older pets",
];

const faqs = [
  {
    question: "What diagnostic tests are available for pets?",
    answer:
      "GreenCoatVets provides blood and laboratory tests, ultrasound and X-ray. Your veterinarian will recommend the tests that are appropriate for your pet.",
  },
  {
    question: "Do I need a consultation before testing?",
    answer:
      "Usually, the veterinarian examines your pet first and recommends tests based on their symptoms, examination and medical history.",
  },
  {
    question: "Is an ultrasound painful for pets?",
    answer:
      "Ultrasound is a non-surgical imaging test. Your veterinarian will explain how your pet will be prepared and kept comfortable during the examination.",
  },
  {
    question: "Will my pet need to fast before a test?",
    answer:
      "Some tests require fasting, while others do not. Your veterinarian will tell you in advance if your pet needs to fast or follow any other preparation instructions.",
  },
  {
    question: "How soon will I know the results?",
    answer:
      "The timing depends on the test being performed. Your veterinarian will explain when results are expected and discuss what they mean for your pet.",
  },
  {
    question: "Does a test result mean my pet needs surgery?",
    answer:
      "Not necessarily. Many conditions can be treated with medicine, dietary changes or monitoring. Your veterinarian will explain the findings and the options available.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

function SectionHeading({
  eyebrow,
  title,
  description,
  light = false,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  light?: boolean;
}) {
  return (
    <div className="max-w-3xl">
      {eyebrow && (
        <p
          className={`mb-3 text-xs font-extrabold uppercase tracking-[0.2em] ${
            light ? "text-teal-300" : "text-teal-700"
          }`}
        >
          {eyebrow}
        </p>
      )}

      <h2
        className={`font-headline text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl ${
          light ? "text-white" : "text-slate-950"
        }`}
      >
        {title}
      </h2>

      {description && (
        <p
          className={`mt-4 text-base leading-8 ${
            light ? "text-slate-300" : "text-slate-600"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}

function BookButton({
  children = "Book an Appointment",
}: {
  children?: React.ReactNode;
}) {
  return (
    <Link
      href="/book/"
      className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-teal-700 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-teal-900/15 transition hover:-translate-y-0.5 hover:bg-teal-800 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:ring-offset-2"
    >
      {children}
      <span
        aria-hidden="true"
        className="material-symbols-outlined text-lg"
      >
        arrow_forward
      </span>
    </Link>
  );
}

export default function VeterinaryDiagnosticsMohaliPage() {
  return (
    <main className="overflow-hidden bg-white text-slate-800">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema).replace(/</g, "\\u003c"),
        }}
      />

      {/* Breadcrumb */}
      <nav
        aria-label="Breadcrumb"
        className="border-b border-slate-100 bg-white"
      >
        <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-2 px-4 py-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="text-sm text-slate-500 transition hover:text-teal-700"
          >
            Home
          </Link>

          <span className="material-symbols-outlined text-base text-slate-400">
            chevron_right
          </span>

          <Link
            href="/#services"
            className="text-sm text-slate-500 transition hover:text-teal-700"
          >
            Services
          </Link>

          <span className="material-symbols-outlined text-base text-slate-400">
            chevron_right
          </span>

          <span
            aria-current="page"
            className="text-sm font-semibold text-teal-800"
          >
            Veterinary Diagnostics
          </span>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-gradient-to-br from-[#e9fbf6] via-white to-[#e8f7f5]">
        <div
          aria-hidden="true"
          className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-teal-200/30 blur-3xl"
        />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-14 sm:py-20 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-24">
          <div className="relative z-10">
            <span className="inline-flex items-center gap-2 rounded-full border border-teal-200 bg-white px-4 py-2 text-xs font-bold uppercase tracking-wider text-teal-800 shadow-sm">
              <span className="material-symbols-outlined text-lg">
                biotech
              </span>
              Veterinary Diagnostics · Mohali
            </span>

            <h1 className="mt-7 font-headline text-4xl font-extrabold leading-[1.12] tracking-tight text-slate-950 sm:text-5xl lg:text-[58px]">
              Better Answers.
              <span className="mt-2 block text-teal-700">
                Better Care for Your Pet.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-slate-600">
              Accurate diagnosis is the starting point for good treatment.
              GreenCoatVets provides diagnostic services in Mohali to help our
              veterinarians understand what is affecting your pet and decide
              on the right care. Testing is usually recommended by the
              veterinarian after an examination.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <BookButton />
              <Link
                href="/contact/"
                className="inline-flex min-h-12 items-center justify-center rounded-xl border border-slate-300 bg-white px-6 py-3 text-sm font-bold text-slate-800 transition hover:border-teal-500 hover:text-teal-800"
              >
                Contact Our Team
              </Link>
            </div>

            <div className="mt-10 grid max-w-xl grid-cols-1 gap-3 sm:grid-cols-3">
              {[
                { icon: "biotech", label: "Blood & lab tests" },
                { icon: "monitor_heart", label: "Pet ultrasound" },
                { icon: "radiology", label: "Veterinary X-ray" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-2 rounded-xl border border-teal-100 bg-white/80 p-3"
                >
                  <span className="material-symbols-outlined text-xl text-teal-700">
                    {item.icon}
                  </span>
                  <span className="text-xs font-bold text-slate-700">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Hero image */}
          <div className="relative mx-auto w-full max-w-2xl">
            <div className="absolute -inset-4 rounded-[36px] bg-teal-200/50 blur-2xl" />

            <div className="relative overflow-hidden rounded-[28px] border-[8px] border-white bg-teal-50 shadow-2xl shadow-teal-950/10">
              <div className="relative aspect-[4/3]">
                <Image
                  src={diagnosticImages.hero}
                  alt="Veterinary team caring for a pet during a clinical examination"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 600px"
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

                <div className="absolute inset-x-0 bottom-0 p-6 text-white sm:p-8">
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/15 px-3 py-2 text-xs font-bold backdrop-blur-md">
                    <span className="material-symbols-outlined text-base">
                      health_and_safety
                    </span>
                    Testing and imaging
                  </span>

                  <h2 className="mt-4 max-w-sm font-headline text-2xl font-extrabold leading-tight sm:text-3xl">
                    Clearer answers for better care
                  </h2>

                  <p className="mt-2 max-w-md text-sm leading-6 text-white/90">
                    Diagnostic tests help your veterinarian understand the
                    problem and plan the next step.
                  </p>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-5 -left-3 flex items-center gap-3 rounded-2xl border border-teal-100 bg-white px-5 py-4 shadow-xl sm:-left-7">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal-50 text-teal-700">
                <span className="material-symbols-outlined text-2xl">
                  pets
                </span>
              </span>
              <div>
                <p className="text-sm font-extrabold text-slate-900">
                  Care starts with understanding
                </p>
                <p className="mt-1 text-xs text-slate-500">
                  A considered approach to diagnosis
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Diagnostic services */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <SectionHeading
              eyebrow="Testing and imaging"
              title="Diagnostic Services Available"
              description="The right test depends on your pet’s symptoms, examination and medical history. Your veterinarian will explain which investigations may be helpful and why."
            />

            <Link
              href="/book/"
              className="inline-flex shrink-0 items-center gap-2 text-sm font-bold text-teal-800 transition hover:gap-3"
            >
              Book a consultation
              <span className="material-symbols-outlined">
                arrow_forward
              </span>
            </Link>
          </div>

          <div className="mt-12 grid gap-7 md:grid-cols-3">
            {diagnostics.map((item) => (
              <article
                key={item.number}
                className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:border-teal-200 hover:shadow-xl"
              >
                <div className="relative aspect-[5/3] overflow-hidden bg-teal-50">
                  <Image
                    src={item.image}
                    alt={item.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/45 to-transparent" />

                  <span className="absolute left-5 top-5 rounded-full bg-white px-4 py-2 text-xs font-extrabold text-teal-800 shadow">
                    {item.tag}
                  </span>

                  <span className="absolute bottom-4 right-5 font-headline text-4xl font-extrabold text-white/80">
                    {item.number}
                  </span>
                </div>

                <div className="p-6 sm:p-7">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-teal-100 to-emerald-50 text-teal-800">
                    <span className="material-symbols-outlined text-3xl">
                      {item.icon}
                    </span>
                  </div>

                  <h3 className="mt-6 font-headline text-xl font-extrabold text-slate-950">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {item.description}
                  </p>

                  <ul className="mt-6 space-y-3 border-t border-slate-100 pt-5">
                    {item.points.map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-2 text-sm text-slate-700"
                      >
                        <span className="material-symbols-outlined mt-0.5 text-lg text-teal-700">
                          check_circle
                        </span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-8 flex items-start gap-3 rounded-2xl border border-teal-100 bg-teal-50/70 p-5">
            <span className="material-symbols-outlined text-2xl text-teal-700">
              info
            </span>
            <p className="text-sm leading-7 text-slate-700">
              In-house pathology, ultrasound and X-ray help our team make
              informed decisions without unnecessary delay. The tests
              recommended will depend on your pet’s individual needs.
            </p>
          </div>
        </div>
      </section>

      {/* When testing may help */}
      <section className="bg-[#f0faf7] py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16 lg:px-8">
          <div>
            <SectionHeading
              eyebrow="When testing may help"
              title="When Might Your Pet Need Tests?"
              description="Your veterinarian may recommend diagnostic testing when symptoms or an examination suggest that more information is needed."
            />

            <Link
              href="/pet-health-checkup-mohali/"
              className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-teal-800 underline decoration-teal-300 underline-offset-4 transition hover:text-emerald-800"
            >
              Learn about pet health checkups
              <span className="material-symbols-outlined text-lg">
                arrow_forward
              </span>
            </Link>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {signs.map((sign, index) => (
              <div
                key={sign}
                className={`flex items-start gap-4 rounded-2xl border border-teal-100 bg-white p-5 shadow-sm transition hover:shadow-md ${
                  index === signs.length - 1 ? "sm:col-span-2" : ""
                }`}
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-teal-100 font-headline font-extrabold text-teal-800">
                  0{index + 1}
                </span>
                <p className="text-sm leading-7 text-slate-700">{sign}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What to expect */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            eyebrow="Your pet's diagnostic journey"
            title="What Happens During the Process?"
            description="We believe pet owners should understand why a test is recommended and how the findings can help guide their pet's care."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <article className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-7 sm:p-9">
              <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-teal-50" />

              <div className="relative">
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-teal-50 text-teal-800">
                  <span className="material-symbols-outlined text-3xl">
                    assignment
                  </span>
                </span>

                <h2 className="mt-6 font-headline text-2xl font-extrabold text-slate-950">
                  What to Expect
                </h2>

                <p className="mt-4 text-sm leading-8 text-slate-600">
                  Your veterinarian will explain which tests are recommended
                  and why. Some tests need your pet to fast beforehand, and you
                  will be told if that applies. Results are explained in plain
                  language and used to plan treatment, whether that is
                  medicine, surgery or monitoring.
                </p>
              </div>
            </article>

            <article className="relative overflow-hidden rounded-3xl border border-teal-100 bg-gradient-to-br from-teal-50 to-white p-7 sm:p-9">
              <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-white/80" />

              <div className="relative">
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-teal-800 shadow-sm">
                  <span className="material-symbols-outlined text-3xl">
                    fact_check
                  </span>
                </span>

                <h2 className="mt-6 font-headline text-2xl font-extrabold text-slate-950">
                  How Test Results Guide Treatment
                </h2>

                <p className="mt-4 text-sm leading-8 text-slate-600">
                  Test results are only useful when they are explained clearly.
                  Your veterinarian will go through what was found, what it
                  means for your pet and the next step. A test result does not
                  always lead to surgery. Many results lead to medicine, a
                  change in diet or monitoring, and some confirm that nothing
                  serious is wrong.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Understand your results */}
      <section className="bg-slate-950 py-20 text-white sm:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-slate-800">
            <div className="relative aspect-[4/3]">
              <Image
                src={diagnosticImages.consultation}
                alt="Veterinary professional discussing diagnostic care for a pet"
                fill
                sizes="(max-width: 1024px) 100vw, 550px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 to-transparent" />
            </div>
          </div>

          <div>
            <SectionHeading
              light
              eyebrow="Clear guidance at every step"
              title="Understand Your Pet’s Results"
              description="Your veterinarian will explain which tests are recommended, what the results show and how they help guide your pet’s care."
            />

            <div className="mt-8 space-y-4">
              {[
                "You will be told why a test is recommended.",
                "Your team will explain any preparation, including fasting if needed.",
                "Results help guide medicine, surgery, dietary changes or monitoring.",
                "Not every test result means surgery is needed.",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-4"
                >
                  <span className="material-symbols-outlined mt-0.5 text-xl text-teal-300">
                    check_circle
                  </span>
                  <p className="text-sm leading-7 text-slate-200">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Related services */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            eyebrow="Connected veterinary care"
            title="Diagnostics Across Our Services"
            description="Diagnostic testing can support consultations, urgent assessment and treatment planning across several veterinary services."
          />

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Specialized OPD",
                href: "/specialized-opd-mohali/",
                icon: "medical_services",
              },
              {
                title: "Emergency Care",
                href: "/emergency-care-mohali/",
                icon: "emergency",
              },
              {
                title: "Orthopedic Surgery",
                href: "/orthopedic-surgery-mohali/",
                icon: "orthopedics",
              },
              {
                title: "Veterinary Skin Treatment",
                href: "/veterinary-skin-treatment-mohali/",
                icon: "dermatology",
              },
            ].map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="group flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 transition duration-300 hover:-translate-y-1 hover:border-teal-200 hover:bg-teal-50/50 hover:shadow-lg"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-teal-50 text-teal-800">
                  <span className="material-symbols-outlined text-2xl">
                    {service.icon}
                  </span>
                </span>

                <span className="flex-1 text-sm font-bold text-slate-800">
                  {service.title}
                </span>

                <span className="material-symbols-outlined text-lg text-teal-700 transition group-hover:translate-x-1">
                  arrow_forward
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section className="px-6 pb-20 lg:px-8">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[32px] bg-gradient-to-br from-teal-900 via-teal-800 to-emerald-800 px-6 py-12 shadow-xl sm:px-12 sm:py-16">
          <div
            aria-hidden="true"
            className="absolute -right-20 -top-28 h-80 w-80 rounded-full border-[40px] border-white/5"
          />

          <div className="relative grid items-center gap-8 md:grid-cols-[1fr_auto]">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-teal-200">
                Veterinary diagnostics in Mohali
              </p>

              <h2 className="mt-4 font-headline text-3xl font-extrabold leading-tight text-white sm:text-4xl">
                Book a Diagnostic Consultation
              </h2>

              <p className="mt-5 max-w-3xl text-sm leading-8 text-teal-50 sm:text-base">
                Talk to our team about your pet’s symptoms and whether
                diagnostic tests may be helpful. Your veterinarian will
                explain the recommended tests and next steps.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 md:flex-col">
              <BookButton>Book an Appointment</BookButton>

              <Link
                href="/contact/"
                className="inline-flex min-h-12 items-center justify-center rounded-xl border border-white/40 px-6 py-3 text-sm font-bold text-white transition hover:bg-white/10"
              >
                Contact Our Team
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-[#f5faf9] py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl items-start gap-12 px-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16 lg:px-8">
          <div className="lg:sticky lg:top-24">
            <SectionHeading
              eyebrow="Frequently asked questions"
              title="Veterinary Diagnostics FAQs"
              description="Answers to common questions about pet blood tests, ultrasound and X-ray services in Mohali."
            />

            <div className="mt-8 rounded-2xl border border-teal-100 bg-white p-6">
              <span className="material-symbols-outlined text-3xl text-teal-700">
                support_agent
              </span>

              <h3 className="mt-4 font-headline text-lg font-bold text-slate-900">
                Still have questions?
              </h3>

              <p className="mt-2 text-sm leading-7 text-slate-600">
                Speak with our team about your pet's diagnostic needs.
              </p>

              <Link
                href="/contact/"
                className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-teal-800 hover:text-teal-950"
              >
                Contact us
                <span className="material-symbols-outlined text-lg">
                  arrow_forward
                </span>
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-2xl border border-slate-200 bg-white p-5 transition open:border-teal-200 open:shadow-md sm:p-6"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-headline text-sm font-bold leading-7 text-slate-900 marker:hidden sm:text-base">
                  <span>{faq.question}</span>

                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-teal-50 text-teal-800 transition group-open:rotate-180">
                    <span className="material-symbols-outlined">
                      expand_more
                    </span>
                  </span>
                </summary>

                <p className="mt-4 border-t border-slate-100 pt-4 text-sm leading-8 text-slate-600">
                  {faq.answer}
                </p>
              </details>
            ))}

            <div className="pt-4">
              <BookButton>Book an Appointment</BookButton>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
