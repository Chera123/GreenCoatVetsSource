import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const pageTitle = "Veterinary OPD & Consultation in Mohali | GreenCoatVets";
const pageDescription =
  "Book a veterinary consultation in Mohali at GreenCoatVets. Specialized OPD care for pets with symptoms or ongoing health concerns. Open 24 hours.";
const pageUrl = "https://www.greencoatvets.com/specialized-opd-mohali/";

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
    images: [
      {
        url: "/specialized-opd-veterinary.jpg",
        alt: "Veterinarian consulting with a pet owner at GreenCoatVets in Mohali",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/specialized-opd-veterinary.jpg"],
  },
};

const concerns = [
  {
    icon: "thermostat",
    title: "Fever, weakness or loss of appetite",
    description: "Get veterinary advice when your pet seems unusually tired, feverish or is eating less than normal.",
  },
  {
    icon: "gastroenterology",
    title: "Vomiting or digestive problems",
    description: "Discuss vomiting, diarrhoea or other changes in your pet’s digestion with a veterinarian.",
  },
  {
    icon: "dermatology",
    title: "Skin, coat or ear concerns",
    description: "Arrange an assessment for itching, hair loss, irritation or ear discomfort.",
  },
  {
    icon: "air",
    title: "Coughing or breathing changes",
    description: "A veterinarian can assess coughing and changes in breathing. Severe breathing difficulty needs urgent care.",
  },
  {
    icon: "directions_walk",
    title: "Pain, limping or mobility changes",
    description: "Seek advice if your pet appears uncomfortable, is limping or finds movement difficult.",
  },
  {
    icon: "monitor_weight",
    title: "Weight or behaviour changes",
    description: "Changes in weight, activity or behaviour can be useful clues to your pet’s health.",
  },
  {
    icon: "clinical_notes",
    title: "Ongoing health conditions",
    description: "Follow-up consultations can help review long-term conditions and assess how your pet is doing.",
  },
  {
    icon: "medical_information",
    title: "Other health concerns",
    description: "If something about your pet’s health worries you, our team can help you decide on the next step.",
  },
];

const consultationSteps = [
  {
    number: "01",
    title: "Talk through your pet’s history",
    description:
      "Your veterinarian will ask when the problem started, what you have noticed, what your pet eats and whether there has been any previous illness or treatment.",
  },
  {
    number: "02",
    title: "A careful physical examination",
    description:
      "Your pet will be examined according to their symptoms and needs. The veterinarian will explain the findings in clear, straightforward language.",
  },
  {
    number: "03",
    title: "Tests when they are needed",
    description:
      "If further investigation is appropriate, the veterinarian may recommend tests through our veterinary diagnostics service.",
  },
  {
    number: "04",
    title: "A clear plan for next steps",
    description:
      "We will discuss the recommended treatment, what to monitor at home and whether a follow-up visit is needed.",
  },
];

const faqs = [
  {
    question: "What is a veterinary OPD?",
    answer:
      "OPD stands for outpatient department. Your pet is examined and receives veterinary advice or treatment without needing to stay in the hospital for an inpatient admission.",
  },
  {
    question: "When should I book a veterinary consultation?",
    answer:
      "Book a consultation if your pet has symptoms such as loss of appetite, vomiting, coughing, limping or skin problems, or if you have another health concern. For severe breathing difficulty, collapse or other serious symptoms, seek emergency veterinary care immediately.",
  },
  {
    question: "How is an OPD consultation different from a health checkup?",
    answer:
      "An OPD consultation is for a pet with symptoms or a specific health concern. A pet health checkup is a routine wellness visit for a pet that appears healthy and focuses on preventive care.",
  },
  {
    question: "What should I bring to the consultation?",
    answer:
      "Bring previous medical records, test reports or prescriptions if available. It is also helpful to note when the symptoms started, your pet’s diet and any medicines or supplements they take.",
  },
  {
    question: "Is the OPD open 24 hours?",
    answer:
      "GreenCoatVets is open 24 hours. Contact our team to discuss your pet’s needs and arrange your visit.",
  },
  {
    question: "Will I be told when my pet needs to come back?",
    answer:
      "Yes. Your veterinarian will explain whether a recheck is recommended, when to return and what changes to watch for at home.",
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
    <div className="mx-auto mb-10 max-w-3xl text-center">
      {eyebrow ? (
        <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.18em] text-teal-800 sm:text-sm">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-headline text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
          {description}
        </p>
      ) : null}
    </div>
  );
}

function BookButton({ children = "Book an Appointment" }: { children?: React.ReactNode }) {
  return (
    <Link
      href="/book/"
      className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-teal-700 px-5 py-3 text-sm font-bold text-white shadow-md shadow-teal-900/10 transition hover:-translate-y-0.5 hover:bg-teal-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-700 focus-visible:ring-offset-2 sm:w-auto"
    >
      {children}
      <span className="material-symbols-outlined text-lg" aria-hidden="true">
        arrow_forward
      </span>
    </Link>
  );
}

export default function SpecializedOpdMohaliPage() {
  return (
    <main className="overflow-hidden bg-white text-slate-800">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema).replace(/</g, "\\u003c"),
        }}
      />

      <nav aria-label="Breadcrumb" className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-2 px-4 py-3 sm:px-6 lg:px-8">
          <Link href="/" className="text-sm text-slate-600 transition hover:text-teal-800">
            Home
          </Link>
          <span className="material-symbols-outlined text-base text-slate-400" aria-hidden="true">
            chevron_right
          </span>
          <Link href="/services/" className="text-sm text-slate-600 transition hover:text-teal-800">
            Services
          </Link>
          <span className="material-symbols-outlined text-base text-slate-400" aria-hidden="true">
            chevron_right
          </span>
          <span aria-current="page" className="text-sm font-semibold text-teal-900">
            Specialized OPD
          </span>
        </div>
      </nav>

      <section className="relative isolate overflow-hidden bg-gradient-to-br from-teal-50 via-white to-amber-50">
        <div className="pointer-events-none absolute -right-24 -top-20 -z-10 h-80 w-80 rounded-full bg-teal-200/40 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 left-1/4 -z-10 h-72 w-72 rounded-full bg-amber-200/30 blur-3xl" />
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-10 sm:px-6 sm:py-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14 lg:px-8 lg:py-20">
          <div className="min-w-0">
            <span className="inline-flex items-center gap-2 rounded-full border border-teal-200 bg-white/90 px-4 py-2 text-xs font-bold uppercase tracking-wider text-teal-900 shadow-sm sm:text-sm">
              <span className="material-symbols-outlined text-lg" aria-hidden="true">
                medical_services
              </span>
              Specialized Veterinary OPD · Mohali
            </span>
            <h1 className="mt-5 font-headline text-3xl font-extrabold leading-tight tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
              Specialized Veterinary OPD in Mohali for Pets
            </h1>
            <p className="mt-4 text-lg font-bold leading-7 text-teal-900 sm:text-xl">
              Veterinary consultation for dogs and cats, open 24 hours
            </p>
            <p className="mt-4 text-base leading-7 text-slate-700 sm:text-lg sm:leading-8">
              The Specialized OPD at GreenCoatVets offers outpatient veterinary consultations for pets in Mohali. If your pet has symptoms, an ongoing condition or a health concern, our veterinary team will examine your pet, listen to your concerns and recommend appropriate care. GreenCoatVets is open 24 hours.
            </p>
            <p className="mt-3 text-sm leading-6 text-slate-600 sm:text-base">
              For routine wellness visits for pets that seem healthy, see our{" "}
              <Link
                href="/pet-health-checkup-mohali/"
                className="font-bold text-teal-800 underline decoration-teal-300 underline-offset-4 hover:text-teal-950"
              >
                pet health checkup and preventive care
              </Link>{" "}
              page.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <BookButton>Book a Veterinary Consultation</BookButton>
              <Link
                href="/contact/"
                className="inline-flex min-h-12 w-full items-center justify-center rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-bold text-slate-800 transition hover:border-teal-500 hover:text-teal-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-700 focus-visible:ring-offset-2 sm:w-auto"
              >
                Contact Our Team
              </Link>
            </div>
            <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm font-medium text-slate-700">
              {["Open 24 hours", "Individual assessment", "Clear next steps"].map((item) => (
                <span key={item} className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-lg text-teal-700" aria-hidden="true">
                    check_circle
                  </span>
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-2xl">
            <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-teal-200/70 to-amber-200/60 blur-xl" aria-hidden="true" />
            <div className="relative overflow-hidden rounded-3xl border border-white bg-white p-2 shadow-2xl shadow-slate-900/10 sm:p-3">
              <Image
                src="/specialized-opd-veterinary.jpg"
                alt="Veterinarian consulting with a pet owner at GreenCoatVets in Mohali"
                width={1536}
                height={1024}
                priority
                sizes="(max-width: 1023px) 100vw, 52vw"
                className="aspect-[4/3] w-full rounded-2xl object-cover"
              />
              <div className="flex items-center gap-3 px-3 py-4 sm:px-5">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-amber-100 text-amber-800">
                  <span className="material-symbols-outlined text-2xl" aria-hidden="true">
                    favorite
                  </span>
                </span>
                <div>
                  <p className="font-headline font-bold text-slate-950">Care that starts with listening</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    Consultation and guidance based on your pet’s needs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-20">
        <div className="mx-auto grid max-w-7xl items-start gap-8 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14 lg:px-8">
          <div>
            <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.18em] text-teal-800 sm:text-sm">
              When to visit
            </p>
            <h2 className="font-headline text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
              When to Book a Veterinary Consultation
            </h2>
            <p className="mt-4 leading-7 text-slate-600 sm:text-lg sm:leading-8">
              If you notice a change in your pet’s health or behaviour, a veterinary consultation can help you understand what may be happening and what to do next.
            </p>
            <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-5">
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined mt-0.5 text-2xl text-amber-800" aria-hidden="true">
                  emergency
                </span>
                <div>
                  <h3 className="font-bold text-slate-950">Serious symptoms need urgent attention</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-700">
                    For severe breathing difficulty, collapse or other serious symptoms, contact our{" "}
                    <Link href="/emergency-care-mohali/" className="font-bold text-teal-900 underline underline-offset-4">
                      emergency care team
                    </Link>{" "}
                    immediately.
                  </p>
                </div>
              </div>
              <div className="mt-5 border-t border-amber-200 pt-4">
                <h4 className="text-sm font-bold text-slate-950">
                  Veterinary consultation in Mohali, 24 hours a day
                </h4>
                <p className="mt-2 text-sm leading-6 text-slate-700">
                  For non-emergency concerns such as changes in appetite, vomiting, skin irritation, limping or unusual behaviour, book a{" "}
                  <Link
                    href="/book/"
                    className="font-semibold text-teal-900 underline decoration-teal-400 underline-offset-4 hover:text-teal-950"
                  >
                    veterinary consultation
                  </Link>{" "}
                  at GreenCoatVets. Our team can assess your pet and advise whether further tests or treatment may be needed.
                </p>
                <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2 text-sm font-semibold">
                  <Link href="/veterinary-diagnostics-mohali/" className="text-teal-900 underline decoration-teal-300 underline-offset-4 hover:text-teal-950">
                    Veterinary diagnostics
                  </Link>
                  <Link href="/pet-health-checkup-mohali/" className="text-teal-900 underline decoration-teal-300 underline-offset-4 hover:text-teal-950">
                    Preventive health checkups
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {concerns.map((item, index) => (
              <article
                key={item.title}
                className={`rounded-2xl border p-5 transition duration-200 hover:-translate-y-0.5 hover:shadow-md sm:p-6 ${
                  index % 2 === 0
                    ? "border-teal-100 bg-teal-50/60 hover:border-teal-200"
                    : "border-amber-100 bg-amber-50/60 hover:border-amber-200"
                }`}
              >
                <span
                  className={`flex h-11 w-11 items-center justify-center rounded-xl ${
                    index % 2 === 0 ? "bg-white text-teal-800" : "bg-white text-amber-800"
                  }`}
                >
                  <span className="material-symbols-outlined text-2xl" aria-hidden="true">
                    {item.icon}
                  </span>
                </span>
                <h3 className="mt-4 font-headline text-lg font-bold leading-snug text-slate-950">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Your visit, step by step"
            title="What to Expect During a Consultation"
            description="We take time to understand your pet’s concern, explain the examination findings and discuss sensible next steps with you."
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {consultationSteps.map((step, index) => (
              <article key={step.number} className="relative rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
                <div className={`flex h-12 w-12 items-center justify-center rounded-xl text-sm font-extrabold ${
                  index % 2 === 0 ? "bg-teal-100 text-teal-900" : "bg-amber-100 text-amber-900"
                }`}>
                  {step.number}
                </div>
                <h3 className="mt-5 font-headline text-lg font-bold leading-snug text-slate-950">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{step.description}</p>
              </article>
            ))}
          </div>
          <div className="mt-8 text-center">
            <BookButton>Book Your Consultation</BookButton>
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:gap-14 lg:px-8">
          <div className="rounded-3xl bg-slate-950 p-6 text-white sm:p-9 lg:p-10">
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-teal-400/15 text-teal-300">
              <span className="material-symbols-outlined text-2xl" aria-hidden="true">
                pets
              </span>
            </span>
            <h2 className="mt-5 font-headline text-2xl font-extrabold sm:text-3xl">
              Care That Fits Your Pet
            </h2>
            <p className="mt-4 leading-7 text-slate-300">
              Every pet is different, so recommendations depend on your pet’s age, history and lifestyle. Senior pets and pets with long-term conditions can also be seen here for ongoing guidance.
            </p>
            <Link
              href="/pet-health-checkup-mohali/"
              className="mt-6 inline-flex min-h-11 items-center gap-2 rounded-lg bg-amber-400 px-4 py-3 text-sm font-bold text-slate-950 transition hover:bg-amber-300"
            >
              Explore Preventive Checkups
              <span className="material-symbols-outlined text-lg" aria-hidden="true">arrow_forward</span>
            </Link>
          </div>

          <div>
            <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.18em] text-teal-800 sm:text-sm">
              Ongoing support
            </p>
            <h2 className="font-headline text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
              Follow-Up and Ongoing Care
            </h2>
            <p className="mt-5 leading-7 text-slate-600 sm:text-lg sm:leading-8">
              Some conditions need more than one visit. Your veterinarian will explain whether your pet should be rechecked, what to watch for at home and when to contact us sooner. Pets with long-term conditions can return for regular reviews so that treatment can be adjusted as needed.
            </p>
            <div className="mt-6 flex items-start gap-3 rounded-2xl border border-teal-100 bg-teal-50 p-4">
              <span className="material-symbols-outlined text-2xl text-teal-800" aria-hidden="true">
                event_available
              </span>
              <p className="text-sm leading-6 text-slate-700">
                Before you leave, ask your veterinarian about the recommended follow-up timing and any signs that should prompt an earlier visit.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-amber-100 bg-gradient-to-r from-amber-50 via-white to-teal-50 py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Connected veterinary services"
            title="Support From the Rest of the Hospital"
            description="If your pet needs more than a consultation, your veterinarian can guide you to the right service within GreenCoatVets. Having these services in one place can help coordinate the next steps in your pet’s care."
          />
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              {
                title: "Veterinary Diagnostics",
                description: "Further tests may help clarify a health concern when your veterinarian recommends them.",
                href: "/veterinary-diagnostics-mohali/",
                icon: "biotech",
              },
              {
                title: "Dental Care",
                description: "Dental assessment and treatment for oral health concerns.",
                href: "/dental-care-mohali/",
                icon: "dentistry",
              },
              {
                title: "Surgical Services",
                description: "Further assessment when a surgical procedure may be appropriate.",
                href: "/services/",
                icon: "medical_services",
              },
            ].map((service, index) => (
              <article key={service.title} className="rounded-2xl border border-white bg-white p-5 shadow-sm sm:p-6">
                <span className={`flex h-12 w-12 items-center justify-center rounded-xl ${
                  index === 1 ? "bg-amber-100 text-amber-900" : "bg-teal-100 text-teal-900"
                }`}>
                  <span className="material-symbols-outlined text-2xl" aria-hidden="true">{service.icon}</span>
                </span>
                <h3 className="mt-4 font-headline text-lg font-bold text-slate-950">{service.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{service.description}</p>
                <Link href={service.href} className="mt-4 inline-flex min-h-10 items-center gap-2 text-sm font-bold text-teal-800 hover:text-teal-950">
                  Learn more
                  <span className="material-symbols-outlined text-base" aria-hidden="true">arrow_forward</span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14 lg:px-8">
          <div>
            <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.18em] text-teal-800 sm:text-sm">
              Before you arrive
            </p>
            <h2 className="font-headline text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
              How to Prepare for Your Visit
            </h2>
            <p className="mt-4 leading-7 text-slate-600">
              A little preparation can help your veterinary team understand what has changed and make the most of your appointment.
            </p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8">
            <ul className="space-y-4">
              {[
                "Bring previous medical records, reports or prescriptions.",
                "Note when the symptoms started and how they have changed.",
                "List your pet’s diet and any medicines or supplements.",
                "Write down your questions so nothing is missed.",
              ].map((item, index) => (
                <li key={item} className="flex items-start gap-3">
                  <span className={`mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full ${
                    index % 2 === 0 ? "bg-teal-100 text-teal-900" : "bg-amber-100 text-amber-900"
                  }`}>
                    <span className="material-symbols-outlined text-base" aria-hidden="true">check</span>
                  </span>
                  <span className="leading-7 text-slate-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="px-4 pb-14 sm:px-6 sm:pb-20 lg:px-8">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-3xl bg-gradient-to-r from-teal-900 via-teal-800 to-slate-900 p-6 text-white shadow-xl sm:p-10 lg:p-12">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div className="max-w-2xl">
              <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-amber-300 sm:text-sm">
                GreenCoatVets · Mohali · Open 24 hours
              </p>
              <h2 className="mt-3 font-headline text-3xl font-extrabold tracking-tight sm:text-4xl">
                Book a Veterinary Consultation in Mohali
              </h2>
              <p className="mt-4 leading-7 text-teal-50 sm:text-lg sm:leading-8">
                If you are worried about your pet’s health, our team is here to help. Bring any previous records you have and we will discuss the appropriate next steps for your pet.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:min-w-52 lg:flex-col">
              <BookButton>Book an Appointment</BookButton>
              <Link
                href="/contact/"
                className="inline-flex min-h-12 items-center justify-center rounded-xl border border-white/40 bg-white/5 px-5 py-3 text-sm font-bold text-white transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-teal-900"
              >
                Contact Our Team
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-14 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Frequently asked questions"
            title="Specialized Veterinary OPD FAQs"
            description="Helpful answers about consultations, preparation and follow-up care at GreenCoatVets."
          />
          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <details
                key={faq.question}
                className="group rounded-2xl border border-slate-200 bg-white p-4 transition open:border-teal-200 open:shadow-sm sm:p-5"
              >
                <summary className="flex cursor-pointer list-none items-start justify-between gap-4 text-left font-headline text-sm font-bold leading-6 text-slate-950 marker:hidden sm:text-base">
                  <span>
                    <span className="mr-2 text-teal-800">Q{index + 1}.</span>
                    {faq.question}
                  </span>
                  <span className="material-symbols-outlined shrink-0 text-teal-800 transition-transform group-open:rotate-180" aria-hidden="true">
                    expand_more
                  </span>
                </summary>
                <p className="mt-3 pr-2 text-sm leading-7 text-slate-600 sm:pr-7">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
