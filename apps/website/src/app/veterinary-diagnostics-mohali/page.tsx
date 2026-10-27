import type { Metadata } from "next";
import Link from "next/link";

const diagnosticImages = {
  hero: "/veterinary-diagnostics-hero.jpg",
  lab: "/veterinary-diagnostics-hero.jpg",
  ultrasound: "/pet-ultrasound.jpg",
  xray: "/veterinary-xray.jpg",
  consultation: "/veterinary-diagnostics-hero.jpg",
};

const pageTitle = "Veterinary Diagnostics in Mohali | GreenCoatVets";
const pageDescription =
  "Veterinary diagnostics in Mohali at GreenCoatVets: lab tests, pet ultrasound and veterinary X-ray to support accurate diagnosis and treatment.";
const pageUrl = "https://www.greencoatvets.com/veterinary-diagnostics-mohali/";

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
  twitter: { card: "summary", title: pageTitle, description: pageDescription },
};

const diagnostics = [
  {
    number: "01",
    icon: "biotech",
    title: "Blood and laboratory tests",
    description:
      "Laboratory tests help assess your pet’s general health and look for signs of infection, inflammation or problems with organs. They may be used for sick pets, before surgery and to monitor ongoing conditions.",
    points: ["Assess general health", "Help investigate symptoms", "Monitor ongoing conditions"],
  },
  {
    number: "02",
    icon: "monitor_heart",
    title: "Pet ultrasound",
    description:
      "Ultrasound allows the veterinarian to look at internal organs and soft tissues without surgery. It is commonly used to investigate abdominal problems and other concerns that cannot be assessed from the outside alone.",
    points: ["Examine internal organs", "Assess soft tissues", "Support further investigation"],
  },
  {
    number: "03",
    icon: "radiology",
    title: "Veterinary X-ray",
    description:
      "X-ray imaging helps examine bones, joints, the chest and other areas. It can help veterinarians assess injuries, suspected fractures and many illnesses as part of a wider clinical examination.",
    points: ["Assess bones and joints", "Investigate some chest concerns", "Help assess injuries"],
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
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <div>
      {eyebrow && (
        <p className="mb-2 text-xs font-bold uppercase tracking-[0.16em] text-emerald-700">
          {eyebrow}
        </p>
      )}
      <h2 className="font-headline text-2xl font-bold leading-tight tracking-tight text-slate-950 sm:text-3xl">
        {title}
      </h2>
      {description && <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">{description}</p>}
    </div>
  );
}

function BookButton({ children = "Book an Appointment" }: { children?: React.ReactNode }) {
  return (
    <Link
      href="/book/"
      className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-emerald-500 to-teal-700 px-5 py-3 text-sm font-bold text-white shadow-md transition hover:from-emerald-600 hover:to-teal-800 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:ring-offset-2"
    >
      {children}
      <span aria-hidden="true" className="material-symbols-outlined text-lg">arrow_forward</span>
    </Link>
  );
}

export default function VeterinaryDiagnosticsMohaliPage() {
  return (
    <main className="overflow-hidden bg-white text-slate-800">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema).replace(/</g, "\\u003c") }}
      />

      <nav aria-label="Breadcrumb" className="border-b border-slate-100">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-2 px-4 py-3 sm:px-6 lg:px-8">
          <Link href="/" className="text-sm text-slate-600 hover:text-teal-700">Home</Link>
          <span aria-hidden="true" className="material-symbols-outlined text-base text-slate-400">chevron_right</span>
          <Link href="/#services" className="text-sm text-slate-600 hover:text-teal-700">Services</Link>
          <span aria-hidden="true" className="material-symbols-outlined text-base text-slate-400">chevron_right</span>
          <span aria-current="page" className="text-sm font-semibold text-teal-800">Veterinary Diagnostics</span>
        </div>
      </nav>

      <section className="relative bg-gradient-to-br from-teal-50 via-white to-emerald-100">
        <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 py-10 sm:px-6 sm:py-14 lg:grid-cols-[1.15fr_0.85fr] lg:px-8 lg:py-16">
          <div className="min-w-0">
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white/90 px-3 py-2 text-xs font-bold text-emerald-800 shadow-sm">
              <span aria-hidden="true" className="material-symbols-outlined text-base">biotech</span>
              Veterinary Diagnostics · Mohali
            </span>
            <h1 className="mt-5 font-headline text-3xl font-extrabold leading-tight tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
              Veterinary Diagnostics in Mohali
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-700 sm:text-lg sm:leading-8">
              Accurate diagnosis is the starting point for good treatment. GreenCoatVets provides diagnostic services in Mohali to help our veterinarians understand what is affecting your pet and decide on the right care. Testing is usually recommended by the veterinarian after an examination.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <BookButton />
              <Link href="/contact/" className="inline-flex min-h-11 items-center justify-center rounded-lg border border-slate-300 bg-white px-5 py-3 text-sm font-bold text-slate-800 transition hover:border-emerald-500 hover:text-emerald-800">Contact Our Team</Link>
            </div>
            <div className="mt-6 grid max-w-xl grid-cols-1 gap-3 sm:grid-cols-3">
              {["Blood & lab tests", "Pet ultrasound", "Veterinary X-ray"].map((item) => (
                <div key={item} className="flex items-center gap-2 rounded-lg border border-emerald-100 bg-white/80 px-3 py-3 text-sm font-semibold text-slate-700">
                  <span aria-hidden="true" className="material-symbols-outlined text-xl text-emerald-700">check_circle</span>{item}
                </div>
              ))}
            </div>
          </div>
          <div className="relative min-h-[300px] overflow-hidden rounded-3xl border border-emerald-100 bg-teal-50 shadow-xl sm:min-h-[390px]">
            <img src={diagnosticImages.hero} alt="Veterinary team caring for a pet during a clinical examination" className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-900/15 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6 text-white sm:p-8">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/15 px-3 py-1.5 text-xs font-bold backdrop-blur-sm"><span className="material-symbols-outlined text-base">biotech</span>Testing and imaging</span>
              <h2 className="mt-4 max-w-sm text-2xl font-extrabold leading-tight sm:text-3xl">Clearer answers for better care</h2>
              <p className="mt-2 max-w-md text-sm leading-6 text-white/90">Diagnostic tests help your veterinarian understand the problem and plan the next step.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 sm:py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <SectionHeading eyebrow="Testing and imaging" title="Diagnostic Services Available" description="The right test depends on your pet’s symptoms, examination and medical history. Your veterinarian will explain which investigations may be helpful and why." />
          </div>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {diagnostics.map((item) => (
              <article key={item.number} className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:border-emerald-200 hover:shadow-lg">
                <div className="relative h-44 overflow-hidden bg-emerald-50 sm:h-48">
                  <img src={[diagnosticImages.lab, diagnosticImages.ultrasound, diagnosticImages.xray][Number(item.number) - 1]} alt={`${item.title} for pets at GreenCoatVets in Mohali`} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" loading="lazy" />
                  <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-xs font-extrabold tracking-widest text-emerald-800 shadow">{item.number}</span>
                </div>
                <div className="p-5 sm:p-6">
                <div className="flex items-center justify-between">
                  <span className="flex size-14 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-100 to-teal-50 text-emerald-800">
                    <span aria-hidden="true" className="material-symbols-outlined text-3xl">{item.icon}</span>
                  </span>
                  <span className="text-sm font-extrabold tracking-widest text-emerald-700/60">{item.number}</span>
                </div>
                <h3 className="mt-5 font-headline text-xl font-bold text-slate-950">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{item.description}</p>
                <ul className="mt-5 space-y-2 border-t border-slate-100 pt-4">
                  {item.points.map((point) => <li key={point} className="flex items-start gap-2 text-sm text-slate-700"><span aria-hidden="true" className="material-symbols-outlined mt-0.5 text-base text-emerald-700">check_circle</span><span>{point}</span></li>)}
                </ul>
                </div>
              </article>
            ))}
          </div>
          <p className="mt-5 rounded-xl border border-emerald-100 bg-emerald-50/70 p-4 text-sm leading-6 text-slate-700">In-house pathology, ultrasound and X-ray help our team make informed decisions without unnecessary delay. The tests recommended will depend on your pet’s individual needs.</p>
        </div>
      </section>

      <section className="bg-gradient-to-r from-teal-50 to-emerald-50 py-10 sm:py-14">
        <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div>
            <SectionHeading eyebrow="When testing may help" title="When Might Your Pet Need Tests?" description="Your veterinarian may recommend diagnostic testing when symptoms or an examination suggest that more information is needed." />
            <Link href="/pet-health-checkup-mohali/" className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-teal-800 underline decoration-emerald-400 underline-offset-4 hover:text-emerald-800">Learn about pet health checkups <span aria-hidden="true" className="material-symbols-outlined text-lg">arrow_forward</span></Link>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {signs.map((sign, index) => (
              <div key={sign} className={`flex items-start gap-3 rounded-xl border border-emerald-100 bg-white p-4 shadow-sm ${index === signs.length - 1 ? "sm:col-span-2" : ""}`}>
                <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-sm font-extrabold text-emerald-800">{index + 1}</span>
                <p className="text-sm leading-6 text-slate-700">{sign}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 sm:py-14">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 md:grid-cols-2 lg:px-8">
          <article className="rounded-2xl border border-slate-200 p-6 sm:p-8">
            <span className="flex size-12 items-center justify-center rounded-xl bg-teal-50 text-teal-800"><span aria-hidden="true" className="material-symbols-outlined text-2xl">assignment</span></span>
            <h2 className="mt-4 font-headline text-2xl font-bold text-slate-950">What to Expect</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">Your veterinarian will explain which tests are recommended and why. Some tests need your pet to fast beforehand, and you will be told if that applies. Results are explained in plain language and used to plan treatment, whether that is medicine, surgery or monitoring.</p>
          </article>
          <article className="rounded-2xl border border-emerald-100 bg-gradient-to-br from-emerald-50 to-white p-6 sm:p-8">
            <span className="flex size-12 items-center justify-center rounded-xl bg-white text-emerald-800 shadow-sm"><span aria-hidden="true" className="material-symbols-outlined text-2xl">fact_check</span></span>
            <h2 className="mt-4 font-headline text-2xl font-bold text-slate-950">How Test Results Guide Treatment</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">Test results are only useful when they are explained clearly. Your veterinarian will go through what was found, what it means for your pet and the next step. A test result does not always lead to surgery. Many results lead to medicine, a change in diet or monitoring, and some confirm that nothing serious is wrong.</p>
          </article>
        </div>
      </section>


      <section className="py-10 sm:py-14">
        <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div className="relative min-h-[280px] overflow-hidden rounded-2xl shadow-lg sm:min-h-[340px]">
            <img src={diagnosticImages.consultation} alt="Veterinary professional discussing diagnostic care for a pet" className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
          </div>
          <div>
            <SectionHeading eyebrow="Clear guidance at every step" title="Understand Your Pet’s Results" description="Your veterinarian will explain which tests are recommended, what the results show and how they help guide your pet’s care." />
            <div className="mt-5 space-y-3">
              {["You will be told why a test is recommended.", "Your team will explain any preparation, including fasting if needed.", "Results help guide medicine, surgery, dietary changes or monitoring.", "Not every test result means surgery is needed."].map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-xl border border-emerald-100 bg-emerald-50/60 p-3.5"><span aria-hidden="true" className="material-symbols-outlined mt-0.5 text-xl text-emerald-700">check_circle</span><p className="text-sm leading-6 text-slate-700">{item}</p></div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-100 bg-white py-10 sm:py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Connected veterinary care" title="Diagnostics Across Our Services" description="Diagnostic testing can support consultations, urgent assessment and treatment planning across several veterinary services." />
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { title: "Specialized OPD", href: "/specialized-opd-mohali/", icon: "medical_services" },
              { title: "Emergency Care", href: "/emergency-care-mohali/", icon: "emergency" },
              { title: "Orthopedic Surgery", href: "/orthopedic-surgery-mohali/", icon: "orthopedics" },
              { title: "Veterinary Skin Treatment", href: "/veterinary-skin-treatment-mohali/", icon: "dermatology" },
            ].map((service) => (
              <Link key={service.href} href={service.href} className="group flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 p-4 transition hover:border-emerald-200 hover:bg-emerald-50">
                <span aria-hidden="true" className="material-symbols-outlined text-2xl text-teal-700">{service.icon}</span>
                <span className="flex-1 text-sm font-bold text-slate-800">{service.title}</span>
                <span aria-hidden="true" className="material-symbols-outlined text-lg text-emerald-700 transition group-hover:translate-x-1">arrow_forward</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl bg-gradient-to-r from-teal-900 via-teal-800 to-emerald-800 p-6 text-white shadow-xl sm:p-10 lg:p-12">
          <div className="grid items-center gap-6 md:grid-cols-[1fr_auto]">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-emerald-200">Veterinary diagnostics in Mohali</p>
              <h2 className="mt-3 font-headline text-2xl font-extrabold leading-tight sm:text-3xl">Book a Diagnostic Consultation</h2>
              <p className="mt-3 max-w-3xl text-sm leading-7 text-teal-50 sm:text-base">Talk to our team about your pet’s symptoms and whether diagnostic tests may be helpful. Your veterinarian will explain the recommended tests and next steps.</p>
            </div>
            <div className="flex flex-wrap gap-3 md:flex-col">
              <BookButton>Book an Appointment</BookButton>
              <Link href="/contact/" className="inline-flex min-h-11 items-center justify-center rounded-lg border border-white/40 px-5 py-3 text-sm font-bold text-white transition hover:bg-white/10">Contact Our Team</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-10 sm:py-14">
        <div className="mx-auto grid max-w-7xl items-start gap-6 px-4 sm:px-6 lg:grid-cols-[0.75fr_1.25fr] lg:gap-10 lg:px-8">
          <div>
            <SectionHeading eyebrow="Frequently asked questions" title="Veterinary Diagnostics FAQs" description="Answers to common questions about pet blood tests, ultrasound and X-ray services in Mohali." />
          </div>
          <div className="space-y-3">
            {faqs.map((faq) => (
              <details key={faq.question} className="group rounded-xl border border-slate-200 bg-white px-4 py-4 transition open:border-emerald-200 open:shadow-sm sm:px-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-bold leading-6 text-slate-900 marker:hidden sm:text-base">
                  <span>{faq.question}</span>
                  <span aria-hidden="true" className="material-symbols-outlined shrink-0 text-xl text-teal-700 transition-transform group-open:rotate-180">expand_more</span>
                </summary>
                <p className="mt-3 border-t border-slate-100 pt-3 text-sm leading-7 text-slate-600">{faq.answer}</p>
              </details>
            ))}
            <div className="pt-3"><BookButton /></div>
          </div>
        </div>
      </section>
    </main>
  );
}
