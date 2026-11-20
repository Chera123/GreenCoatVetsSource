import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const images = {
  hero: "/veterinary-diagnostics-hero.jpeg",
  lab: "/veterinary-diagnostics-hero.jpeg",
  ultrasound: "/pet-ultrasound.jpg",
  xray: "/veterinary-xray.jpg",
};

const pageTitle = "Veterinary Diagnostics in Mohali | GreenCoatVets";
const pageDescription =
  "Veterinary diagnostics in Mohali at GreenCoatVets: laboratory tests, pet ultrasound and veterinary X-ray to support diagnosis and treatment.";
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
    images: [{ url: images.hero, alt: "Veterinary diagnostics at GreenCoatVets" }],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: [images.hero],
  },
};

const diagnosticServices = [
  {
    number: "01",
    icon: "biotech",
    label: "Laboratory testing",
    title: "Blood & Laboratory Tests",
    description:
      "Laboratory tests help assess your pet’s general health and look for signs of infection, inflammation or problems with organs. They may be used for sick pets, before surgery and to monitor ongoing conditions.",
    points: ["Assess general health", "Help investigate symptoms", "Monitor ongoing conditions"],
    image: images.lab,
    alt: "Veterinary diagnostics at GreenCoatVets",
  },
  {
    number: "02",
    icon: "monitor_heart",
    label: "Internal imaging",
    title: "Pet Ultrasound",
    description:
      "Ultrasound allows the veterinarian to look at internal organs and soft tissues without surgery. It is commonly used to investigate abdominal problems and other concerns that cannot be assessed from the outside alone.",
    points: ["Examine internal organs", "Assess soft tissues", "Support further investigation"],
    image: images.ultrasound,
    alt: "Pet ultrasound diagnostic examination",
  },
  {
    number: "03",
    icon: "radiology",
    label: "Diagnostic imaging",
    title: "Veterinary X-ray",
    description:
      "X-ray imaging helps examine bones, joints, the chest and other areas. It can help veterinarians assess injuries, suspected fractures and many illnesses as part of a wider clinical examination.",
    points: ["Assess bones and joints", "Investigate some chest concerns", "Help assess injuries"],
    image: images.xray,
    alt: "Veterinary X-ray diagnostic imaging",
  },
];

const signs = [
  {
    icon: "sick",
    title: "Changes in behaviour",
    description: "Vomiting, weakness, coughing or loss of appetite may need further investigation.",
  },
  {
    icon: "healing",
    title: "Injuries and mobility",
    description: "Limping, suspected fractures or injuries may require diagnostic imaging.",
  },
  {
    icon: "medical_services",
    title: "Before surgery",
    description: "Some diagnostic checks help assess your pet before surgery or anaesthesia.",
  },
  {
    icon: "monitor_heart",
    title: "Ongoing conditions",
    description: "Testing can help monitor a known health condition and assess changes.",
  },
  {
    icon: "elderly",
    title: "Routine health checks",
    description: "Additional investigations may be useful during health checks, particularly for older pets.",
  },
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

const relatedServices = [
  {
    title: "Specialized OPD",
    description: "Veterinary consultations and clinical assessment.",
    href: "/specialized-opd-mohali/",
    icon: "medical_services",
  },
  {
    title: "Emergency Care",
    description: "Veterinary attention for urgent health concerns.",
    href: "/emergency-care-mohali/",
    icon: "emergency",
  },
  {
    title: "Orthopedic Surgery",
    description: "Care for bone, joint and mobility conditions.",
    href: "/orthopedic-surgery-mohali/",
    icon: "orthopedics",
  },
  {
    title: "Veterinary Skin Treatment",
    description: "Assessment and treatment of skin conditions.",
    href: "/veterinary-skin-treatment-mohali/",
    icon: "dermatology",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

function SectionHeading({
  eyebrow,
  title,
  description,
  centered = false,
  light = false,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  centered?: boolean;
  light?: boolean;
}) {
  return (
    <div className={`${centered ? "mx-auto text-center" : ""} max-w-3xl`}>
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
        <p className={`mt-4 text-base leading-8 ${light ? "text-slate-300" : "text-slate-600"}`}>
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
      <span className="material-symbols-outlined text-lg" aria-hidden="true">
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
      <nav aria-label="Breadcrumb" className="border-b border-slate-100 bg-white">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-2 px-4 py-3 sm:px-6 lg:px-8">
          <Link href="/" className="text-sm text-slate-500 hover:text-teal-700">
            Home
          </Link>
          <span className="material-symbols-outlined text-base text-slate-400">chevron_right</span>
          <Link href="/#services" className="text-sm text-slate-500 hover:text-teal-700">
            Services
          </Link>
          <span className="material-symbols-outlined text-base text-slate-400">chevron_right</span>
          <span aria-current="page" className="text-sm font-semibold text-teal-800">
            Veterinary Diagnostics
          </span>
        </div>
      </nav>

      {/* Hero section - retained */}
      <section className="relative bg-gradient-to-br from-teal-50 via-white to-emerald-100">
        <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 py-10 sm:px-6 sm:py-14 lg:grid-cols-[1.15fr_0.85fr] lg:px-8 lg:py-16">
          <div className="min-w-0">
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white/90 px-3 py-2 text-xs font-bold text-emerald-800 shadow-sm">
              <span className="material-symbols-outlined text-base">biotech</span>
              Veterinary Diagnostics · Mohali
            </span>
            <h1 className="mt-5 font-headline text-3xl font-extrabold leading-tight tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
              Veterinary Diagnostics in Mohali
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-700 sm:text-lg sm:leading-8">
              Accurate diagnosis is the starting point for good treatment.
              GreenCoatVets provides diagnostic services in Mohali to help our
              veterinarians understand what is affecting your pet and decide
              on the right care. Testing is usually recommended by the
              veterinarian after an examination.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <BookButton />
              <Link
                href="/contact/"
                className="inline-flex min-h-11 items-center justify-center rounded-lg border border-slate-300 bg-white px-5 py-3 text-sm font-bold text-slate-800 transition hover:border-emerald-500 hover:text-emerald-800"
              >
                Contact Our Team
              </Link>
            </div>
            <div className="mt-6 grid max-w-xl grid-cols-1 gap-3 sm:grid-cols-3">
              {["Blood & lab tests", "Pet ultrasound", "Veterinary X-ray"].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 rounded-lg border border-emerald-100 bg-white/80 px-3 py-3 text-sm font-semibold text-slate-700"
                >
                  <span className="material-symbols-outlined text-xl text-emerald-700">
                    check_circle
                  </span>
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="relative min-h-[300px] overflow-hidden rounded-3xl border border-emerald-100 bg-teal-50 shadow-xl sm:min-h-[390px]">
            <Image
              src={images.hero}
              alt="Veterinary team caring for a pet during a clinical examination"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-900/15 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6 text-white sm:p-8">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/15 px-3 py-1.5 text-xs font-bold backdrop-blur-sm">
                <span className="material-symbols-outlined text-base">biotech</span>
                Testing and imaging
              </span>
              <h2 className="mt-4 max-w-sm text-2xl font-extrabold leading-tight sm:text-3xl">
                Clearer answers for better care
              </h2>
              <p className="mt-2 max-w-md text-sm leading-6 text-white/90">
                Diagnostic tests help your veterinarian understand the problem
                and plan the next step.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="relative overflow-hidden bg-white py-20 sm:py-28">
        <div aria-hidden="true" className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-teal-50 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-end gap-8 lg:grid-cols-[1fr_0.8fr]">
            <SectionHeading
              eyebrow="A closer look at your pet's health"
              title="Understanding What Your Pet Cannot Tell You"
              description="Pets cannot explain what is hurting or making them uncomfortable. Diagnostic investigations give veterinarians additional information to understand their condition and recommend appropriate care."
            />
            <p className="border-l-4 border-teal-600 pl-5 text-sm leading-8 text-slate-600 lg:pb-1">
              From laboratory investigations to imaging, each test has a
              purpose. Your veterinarian will help determine which
              investigation is appropriate for your pet.
            </p>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {diagnosticServices.map((item, index) => (
              <article
                key={item.number}
                className={`group relative overflow-hidden rounded-[28px] ${
                  index === 1 ? "bg-teal-800 text-white" : "border border-slate-200 bg-slate-50 text-slate-900"
                }`}
              >
                <div className="flex items-center justify-between p-7 pb-3">
                  <span className={`flex h-14 w-14 items-center justify-center rounded-2xl ${
                    index === 1 ? "bg-white/10 text-teal-100" : "bg-teal-100 text-teal-800"
                  }`}>
                    <span className="material-symbols-outlined text-3xl">{item.icon}</span>
                  </span>
                  <span className={`font-headline text-5xl font-extrabold ${
                    index === 1 ? "text-white/15" : "text-teal-800/10"
                  }`}>
                    {item.number}
                  </span>
                </div>
                <div className="px-7 pb-8 pt-4">
                  <p className={`text-xs font-bold uppercase tracking-[0.16em] ${
                    index === 1 ? "text-teal-200" : "text-teal-700"
                  }`}>
                    {item.label}
                  </p>
                  <h3 className="mt-3 font-headline text-2xl font-extrabold">{item.title}</h3>
                  <p className={`mt-4 text-sm leading-8 ${
                    index === 1 ? "text-teal-50/90" : "text-slate-600"
                  }`}>
                    {item.description}
                  </p>
                  <div className={`mt-7 h-px ${index === 1 ? "bg-white/15" : "bg-slate-200"}`} />
                  <ul className="mt-5 space-y-3">
                    {item.points.map((point) => (
                      <li key={point} className={`flex items-start gap-2 text-sm ${
                        index === 1 ? "text-white" : "text-slate-700"
                      }`}>
                        <span className={`material-symbols-outlined text-lg ${
                          index === 1 ? "text-teal-200" : "text-teal-700"
                        }`}>
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
        </div>
      </section>

      {/* When tests may help */}
      <section className="bg-[#eaf8f4] py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20 lg:px-8">
          <div>
            <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-teal-800 shadow-sm">
              <span className="material-symbols-outlined text-3xl">health_and_safety</span>
            </span>
            <div className="mt-7">
              <SectionHeading
                eyebrow="Recognising the signs"
                title="When Might Your Pet Need Diagnostic Tests?"
                description="Some health concerns need more than an external examination. Your veterinarian may recommend testing when additional information is needed to understand your pet's condition."
              />
            </div>
            <Link
              href="/pet-health-checkup-mohali/"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-bold text-teal-800 shadow-sm transition hover:bg-teal-800 hover:text-white"
            >
              Explore Pet Health Checkups
              <span className="material-symbols-outlined text-lg">arrow_forward</span>
            </Link>
          </div>
          <div className="relative grid gap-3 sm:grid-cols-2">
            {signs.map((sign, index) => (
              <article
                key={sign.title}
                className={`rounded-2xl border border-white bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg ${
                  index === signs.length - 1 ? "sm:col-span-2" : ""
                }`}
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-50 text-teal-800">
                  <span className="material-symbols-outlined text-2xl">{sign.icon}</span>
                </span>
                <h3 className="mt-5 font-headline text-lg font-extrabold text-slate-900">{sign.title}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">{sign.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Diagnostic journey */}
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            centered
            eyebrow="A simple and considered approach"
            title="Your Pet's Diagnostic Journey"
            description="Every investigation begins with understanding your pet. Here is how the diagnostic process can help guide the next step in their care."
          />
          <div className="relative mt-16">
            <div aria-hidden="true" className="absolute left-[10%] right-[10%] top-10 hidden h-px border-t-2 border-dashed border-teal-200 lg:block" />
            <div className="grid gap-10 md:grid-cols-3">
              {[
                {
                  number: "01",
                  icon: "stethoscope",
                  title: "Clinical assessment",
                  description: "Your veterinarian examines your pet and reviews their symptoms and medical history.",
                },
                {
                  number: "02",
                  icon: "biotech",
                  title: "Recommended testing",
                  description: "If further information is needed, appropriate laboratory tests or imaging may be recommended.",
                },
                {
                  number: "03",
                  icon: "assignment_turned_in",
                  title: "Results and next steps",
                  description: "Your veterinarian explains the findings and discusses treatment or monitoring options.",
                },
              ].map((step) => (
                <article key={step.number} className="relative text-center">
                  <div className="relative z-10 mx-auto flex h-20 w-20 items-center justify-center rounded-3xl border-4 border-white bg-teal-800 text-white shadow-xl shadow-teal-900/15">
                    <span className="material-symbols-outlined text-3xl">{step.icon}</span>
                  </div>
                  <p className="mt-6 text-xs font-extrabold tracking-[0.2em] text-teal-700">STEP {step.number}</p>
                  <h3 className="mt-3 font-headline text-xl font-extrabold text-slate-950">{step.title}</h3>
                  <p className="mx-auto mt-3 max-w-sm text-sm leading-8 text-slate-600">{step.description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Results and treatment */}
      <section className="overflow-hidden bg-slate-950 py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2 lg:gap-20 lg:px-8">
          <div className="relative">
            <div className="absolute -inset-4 rounded-[32px] bg-teal-500/20 blur-2xl" />
            <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-slate-800 p-2">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[22px]">
                <Image
                  src={images.hero}
                  alt="Veterinary professional caring for a pet"
                  fill
                  sizes="(max-width: 1024px) 100vw, 550px"
                  className="object-cover"
                />
              </div>
            </div>
            <div className="absolute -bottom-5 -right-3 rounded-2xl border border-teal-100 bg-white p-5 shadow-xl sm:-right-7">
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal-50 text-teal-800">
                  <span className="material-symbols-outlined text-2xl">fact_check</span>
                </span>
                <div>
                  <p className="text-sm font-extrabold text-slate-900">Informed decisions</p>
                  <p className="mt-1 text-xs text-slate-500">Understanding the findings</p>
                </div>
              </div>
            </div>
          </div>
          <div className="pt-5 lg:pt-0">
            <SectionHeading
              light
              eyebrow="Beyond the test"
              title="Understanding Results Is Just as Important"
              description="A diagnostic test is one part of your pet's care. Understanding the findings helps your veterinarian discuss what should happen next."
            />
            <div className="mt-8 space-y-5">
              {[
                {
                  icon: "lightbulb",
                  title: "Understand the findings",
                  text: "Your veterinarian will explain what the results show and what they may mean for your pet.",
                },
                {
                  icon: "medication",
                  title: "Discuss treatment options",
                  text: "Depending on the findings, options may include medicine, surgery or other care.",
                },
                {
                  icon: "monitoring",
                  title: "Plan ongoing monitoring",
                  text: "Some conditions may need follow-up examinations or repeat testing.",
                },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/10 text-teal-300">
                    <span className="material-symbols-outlined text-2xl">{item.icon}</span>
                  </span>
                  <div>
                    <h3 className="font-headline font-bold text-white">{item.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-slate-300">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Preparation */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl items-start gap-10 px-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20 lg:px-8">
          <SectionHeading
            eyebrow="Before your visit"
            title="Preparing Your Pet for Diagnostic Testing"
            description="The preparation required depends on the investigation your veterinarian recommends."
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              {
                icon: "description",
                title: "Bring previous records",
                text: "Previous test results, prescriptions and medical records can help your veterinarian understand your pet's history.",
                background: "bg-[#edf9f5]",
              },
              {
                icon: "restaurant",
                title: "Ask about fasting",
                text: "Some investigations require fasting, while others do not. Follow the preparation instructions provided by your veterinarian.",
                background: "bg-slate-50",
              },
              {
                icon: "history",
                title: "Share recent changes",
                text: "Tell your veterinarian about your pet's symptoms, behaviour and any recent changes in appetite or activity.",
                background: "bg-slate-50",
              },
              {
                icon: "support_agent",
                title: "Ask your questions",
                text: "Our team can explain the recommended test and any preparation you should know about before your visit.",
                background: "bg-[#edf9f5]",
              },
            ].map((item) => (
              <div key={item.title} className={`rounded-2xl p-7 ${item.background}`}>
                <span className="material-symbols-outlined text-3xl text-teal-800">{item.icon}</span>
                <h3 className="mt-4 font-headline text-lg font-extrabold text-slate-900">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related services */}
      <section className="bg-[#edf8f5] py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <SectionHeading
              eyebrow="Complete veterinary care"
              title="Explore More Veterinary Services"
              description="Diagnostic testing can support consultations, urgent assessment and treatment planning across several veterinary services."
            />
            <Link href="/#services" className="inline-flex shrink-0 items-center gap-2 text-sm font-bold text-teal-800 hover:gap-3">
              View all services
              <span className="material-symbols-outlined">arrow_forward</span>
            </Link>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {relatedServices.map((service, index) => (
              <Link
                key={service.href}
                href={service.href}
                className="group relative overflow-hidden rounded-2xl border border-white bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <span className="absolute right-4 top-4 font-headline text-4xl font-extrabold text-teal-50">
                  0{index + 1}
                </span>
                <span className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-teal-50 text-teal-800 transition group-hover:bg-teal-800 group-hover:text-white">
                  <span className="material-symbols-outlined text-3xl">{service.icon}</span>
                </span>
                <h3 className="relative mt-6 font-headline text-lg font-extrabold text-slate-900">{service.title}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">{service.description}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-teal-800">
                  Explore service
                  <span className="material-symbols-outlined text-lg transition group-hover:translate-x-1">arrow_forward</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section className="bg-white px-6 py-20 sm:py-24 lg:px-8">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[32px] bg-gradient-to-br from-teal-900 via-teal-800 to-emerald-800 px-7 py-12 sm:px-12 sm:py-16">
          <div aria-hidden="true" className="absolute -right-24 -top-32 h-96 w-96 rounded-full border-[55px] border-white/5" />
          <div aria-hidden="true" className="absolute -bottom-40 right-1/3 h-80 w-80 rounded-full bg-emerald-400/10 blur-3xl" />
          <div className="relative grid items-center gap-10 lg:grid-cols-[1fr_auto]">
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-wider text-teal-100">
                <span className="material-symbols-outlined text-base">pets</span>
                GreenCoatVets · Mohali
              </span>
              <h2 className="mt-6 font-headline text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl">
                Your Pet Deserves Answers. Let&apos;s Find the Right Next Step.
              </h2>
              <p className="mt-5 max-w-2xl text-sm leading-8 text-teal-50 sm:text-base">
                Talk to our team about your pet&apos;s symptoms and whether
                diagnostic tests may be helpful. Your veterinarian will
                explain the recommended tests and next steps.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
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
      <section className="bg-[#f4f9f7] py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl items-start gap-12 px-6 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20 lg:px-8">
          <div>
            <SectionHeading
              eyebrow="Questions answered"
              title="Veterinary Diagnostics FAQs"
              description="Find answers to common questions about pet blood tests, ultrasound and X-ray services in Mohali."
            />
            <div className="mt-8 rounded-2xl bg-teal-800 p-7 text-white">
              <span className="material-symbols-outlined text-3xl text-teal-200">contact_support</span>
              <h3 className="mt-4 font-headline text-xl font-extrabold">Need more information?</h3>
              <p className="mt-3 text-sm leading-7 text-teal-50">
                Contact our team if you have questions about diagnostic
                testing or your pet&apos;s health.
              </p>
              <Link
                href="/contact/"
                className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-white underline decoration-teal-300 underline-offset-4"
              >
                Contact GreenCoatVets
                <span className="material-symbols-outlined text-lg">arrow_forward</span>
              </Link>
            </div>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <details
                key={faq.question}
                className="group overflow-hidden rounded-2xl border border-slate-200 bg-white transition open:border-teal-200 open:shadow-md"
              >
                <summary className="flex cursor-pointer list-none items-center gap-4 px-5 py-5 marker:hidden sm:px-6">
                  <span className="font-headline text-sm font-extrabold text-teal-700">
                    0{index + 1}
                  </span>
                  <span className="flex-1 font-headline text-sm font-bold leading-7 text-slate-900 sm:text-base">
                    {faq.question}
                  </span>
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-teal-50 text-teal-800 transition group-open:rotate-180">
                    <span className="material-symbols-outlined">expand_more</span>
                  </span>
                </summary>
                <div className="px-5 pb-5 sm:px-6">
                  <div className="ml-8 border-t border-slate-100 pt-4">
                    <p className="text-sm leading-8 text-slate-600">{faq.answer}</p>
                  </div>
                </div>
              </details>
            ))}
            <div className="pt-5">
              <BookButton>Book an Appointment</BookButton>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
