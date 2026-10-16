
import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";

const pageTitle =
  "Veterinary Diagnostic Services in Mohali | GreenCoatVets";

const pageDescription =
  "Looking for veterinary diagnostics in Mohali? GreenCoatVets provides pet diagnostic services, pet ultrasound and veterinary X-ray to support accurate diagnosis and treatment.";

const pageUrl =
  "https://www.greencoatvets.com/veterinary-diagnostics-mohali/";

const bookingUrl = "https://www.greencoatvets.com/book";

const images = {
  hero: "/veterinary-diagnostics-hero.jpg",
  ultrasound: "/pet-ultrasound.jpg",
  xray: "/veterinary-xray.jpg",
  banner: "/dental-care-banner.jpg",    
};

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    type: "website",
    url: pageUrl,
    title: pageTitle,
    description:
      "Professional veterinary diagnostics, pet ultrasound and veterinary X-ray services for pets in Mohali.",
    siteName: "GreenCoatVets",
    locale: "en_IN",
    images: [
      {
        url: images.hero,
        alt: "Veterinary diagnostic services and pet ultrasound at GreenCoatVets in Mohali",
      },
    ],
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
    icon: "bloodtype",
    title: "Blood and Laboratory Tests",
    description:
      "Blood and laboratory tests can help veterinarians investigate symptoms and understand your pet's health.",
  },
  {
    icon: "monitor_heart",
    title: "Pet Ultrasound",
    description:
      "Pet ultrasound can help examine internal organs and soft tissues when further investigation is needed.",
  },
  {
    icon: "radiology",
    title: "Veterinary X-ray",
    description:
      "Veterinary X-ray can help assess bones, joints, the chest, abdomen, and certain injuries.",
  },
  {
    icon: "biotech",
    title: "Other Diagnostic Examinations",
    description:
      "Additional diagnostic examinations may be recommended according to your pet's symptoms and individual needs.",
  },
];

const benefits = [
  { icon: "groups", title: "Experienced veterinary team" },
  { icon: "monitor_heart", title: "Modern diagnostic support" },
  { icon: "pets", title: "Care for a wide range of pets" },
  {
    icon: "fact_check",
    title: "Appropriate testing based on clinical needs",
  },
  { icon: "support_agent", title: "Clear guidance for pet parents" },
];

const faqs = [
  {
    question: "When does my pet need diagnostic testing?",
    answer:
      "Testing may be recommended for unexplained symptoms, injuries, illness, or ongoing health conditions.",
  },
  {
    question: "When is a pet ultrasound required?",
    answer:
      "A pet ultrasound may be recommended to examine internal organs and soft tissues more closely.",
  },
  {
    question: "When is a veterinary X-ray needed?",
    answer:
      "A veterinary X-ray can help assess fractures, bones, joints, chest conditions, and other health concerns.",
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
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <div>
      {eyebrow && (
        <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.16em] text-teal-700 sm:text-xs">
          {eyebrow}
        </p>
      )}

      <h2 className="font-headline text-xl font-bold leading-tight tracking-tight text-slate-950 sm:text-2xl">
        {title}
      </h2>

      {description && (
        <p className="mt-2 text-sm leading-6 text-slate-600">
          {description}
        </p>
      )}
    </div>
  );
}

function Photo({
  src,
  alt,
  className = "",
  priority = false,
}: {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
}) {
  return (
    <div
      className={`relative min-w-0 overflow-hidden rounded-xl border border-teal-100 bg-teal-50 ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 600px"
        className="object-cover"
      />
    </div>
  );
}

function AppointmentButton({
  children = "Book a Diagnostic Consultation",
}: {
  children?: ReactNode;
}) {
  return (
    <Link
      href={bookingUrl}
      className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-emerald-500 to-teal-700 px-4 py-3 text-sm font-bold text-white shadow-md transition hover:from-emerald-600 hover:to-teal-800 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:ring-offset-2"
    >
      <span className="material-symbols-outlined text-lg">
        calendar_month
      </span>
      {children}
      <span className="material-symbols-outlined text-lg">
        arrow_forward
      </span>
    </Link>
  );
}

function Feature({
  icon,
  title,
}: {
  icon: string;
  title: string;
}) {
  return (
    <div className="flex min-w-0 flex-col items-center justify-center rounded-xl border border-teal-100 bg-white px-2 py-3 text-center">
      <span className="material-symbols-outlined text-2xl text-teal-700">
        {icon}
      </span>
      <p className="mt-2 text-xs font-semibold leading-4 text-slate-800">
        {title}
      </p>
    </div>
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
      <nav aria-label="Breadcrumb" className="border-b border-slate-100">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-1.5 px-4 py-3 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="text-sm text-slate-600 hover:text-teal-700"
          >
            Home
          </Link>

          <span className="material-symbols-outlined text-base text-slate-400">
            chevron_right
          </span>

          <Link
            href="/#services"
            className="text-sm text-slate-600 hover:text-teal-700"
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
      <section className="bg-gradient-to-br from-teal-50 via-white to-emerald-50">
        <div className="mx-auto grid max-w-7xl items-center gap-7 px-4 py-7 sm:px-6 sm:py-10 lg:grid-cols-2 lg:gap-10 lg:px-8 lg:py-12">
          <div className="min-w-0">
            <span className="inline-flex items-center gap-2 rounded-full border border-teal-100 bg-white px-3 py-2 text-xs font-semibold text-teal-800 shadow-sm">
              <span className="material-symbols-outlined text-base">
                monitor_heart
              </span>
              Veterinary Diagnostics · Mohali
            </span>

            <h1 className="mt-4 font-headline text-3xl font-extrabold leading-tight tracking-tight text-slate-950 sm:text-4xl lg:text-[2.65rem]">
              Veterinary Diagnostics in Mohali for Pets
            </h1>

            <h2 className="mt-3 text-base font-bold text-teal-800 sm:text-lg">
              Accurate Diagnostics for Better Pet Care
            </h2>

            <p className="mt-3 text-sm leading-6 text-slate-700 sm:text-base sm:leading-7">
              At GreenCoatVets, we provide professional{" "}
              <strong>veterinary diagnostic services in Mohali</strong> to
              help identify health problems and guide the right treatment
              for your pet.
            </p>

            <div className="mt-5 flex flex-wrap gap-3">
              <AppointmentButton />

              <Link
                href="/contact"
                className="inline-flex min-h-11 items-center justify-center rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm font-semibold text-slate-800 transition hover:border-teal-500 hover:text-teal-800"
              >
                Contact Our Team
              </Link>
            </div>

            <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2">
              {[
                "Diagnostic testing",
                "Imaging support",
                "Informed care",
              ].map((item) => (
                <span
                  key={item}
                  className="flex items-center gap-1.5 text-xs font-medium text-slate-700"
                >
                  <span className="material-symbols-outlined text-base text-teal-700">
                    check_circle
                  </span>
                  {item}
                </span>
              ))}
            </div>
          </div>

          <Photo
            src={images.hero}
            alt="Veterinary diagnostic services and pet ultrasound at GreenCoatVets in Mohali"
            priority
            className="aspect-[4/3] shadow-lg"
          />
        </div>
      </section>

      {/* Diagnostic services */}
      <section className="py-7 sm:py-9">
        <div className="mx-auto grid max-w-7xl items-center gap-6 px-4 sm:px-6 md:grid-cols-2 lg:gap-8 lg:px-8">
          <Photo
            src={images.ultrasound}
            alt="Veterinarian performing an ultrasound examination on a pet"
            className="aspect-[4/3]"
          />

          <div className="min-w-0">
            <SectionHeading
              eyebrow="Professional testing and imaging"
              title="Veterinary Diagnostic Services in Mohali"
              description="Our veterinary diagnostic services help our team understand your pet's condition through appropriate testing and imaging, including:"
            />

            <div className="mt-4 grid grid-cols-2 gap-2.5">
              <Feature icon="bloodtype" title="Blood and laboratory tests" />
              <Feature icon="monitor_heart" title="Pet ultrasound" />
              <Feature icon="radiology" title="Veterinary X-ray" />
              <Feature icon="biotech" title="Other diagnostic examinations" />
            </div>
          </div>
        </div>
      </section>

      {/* Pet diagnostic services */}
      <section className="bg-gradient-to-r from-teal-50 to-emerald-50 py-7 sm:py-9">
        <div className="mx-auto grid max-w-7xl items-center gap-6 px-4 sm:px-6 md:grid-cols-[1.05fr_0.95fr] lg:gap-8 lg:px-8">
          <div>
            <SectionHeading
              eyebrow="Testing based on your pet's needs"
              title="Pet Diagnostic Services"
              description="Our pet diagnostic services in Mohali are available for a wide range of pets and may be recommended for illness, injuries, unexplained symptoms, or ongoing health conditions."
            />

            <p className="mt-4 text-sm leading-6 text-slate-700">
              Our veterinarians select diagnostic tests based on your
              pet&apos;s symptoms and individual needs.
            </p>

            <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {[
                "Illness and unexplained symptoms",
                "Injury assessment",
                "Ongoing health conditions",
                "Further clinical investigation",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2.5">
                  <span className="material-symbols-outlined mt-0.5 shrink-0 text-lg text-teal-700">
                    check_circle
                  </span>
                  <span className="text-sm leading-5 text-slate-800">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <Photo
            src={images.xray}
            alt="Veterinary X-ray equipment used to investigate pet health concerns"
            className="aspect-[4/3]"
          />
        </div>
      </section>

      {/* Ultrasound and X-ray */}
      <section className="py-7 sm:py-9">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Diagnostic imaging"
            title="Pet Ultrasound & Veterinary X-ray in Mohali"
            description="Our veterinarians recommend the appropriate diagnostic test based on your pet's condition."
          />

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <article className="rounded-xl border border-slate-200 bg-white p-5 transition hover:border-teal-200 hover:shadow-md sm:p-6">
              <span className="flex size-12 items-center justify-center rounded-xl bg-teal-50 text-teal-700">
                <span className="material-symbols-outlined text-3xl">
                  monitor_heart
                </span>
              </span>

              <h3 className="mt-4 font-headline text-lg font-bold text-slate-900">
                Pet Ultrasound
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                A <strong>pet ultrasound</strong> can help examine internal
                organs and soft tissues when further investigation is needed.
              </p>
            </article>

            <article className="rounded-xl border border-slate-200 bg-white p-5 transition hover:border-teal-200 hover:shadow-md sm:p-6">
              <span className="flex size-12 items-center justify-center rounded-xl bg-teal-50 text-teal-700">
                <span className="material-symbols-outlined text-3xl">
                  radiology
                </span>
              </span>

              <h3 className="mt-4 font-headline text-lg font-bold text-slate-900">
                Veterinary X-ray in Mohali
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                A <strong>veterinary X-ray</strong> can help assess bones,
                joints, the chest, abdomen, and certain injuries.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="border-y border-slate-100 bg-white py-7 sm:py-9">
        <div className="mx-auto grid max-w-7xl items-center gap-6 px-4 sm:px-6 md:grid-cols-[0.8fr_1.2fr] lg:gap-8 lg:px-8">
          <div>
            <SectionHeading
              eyebrow="Trusted pet healthcare"
              title="Why Choose GreenCoatVets?"
              description="We focus on appropriate testing, professional veterinary assessment, and clear guidance for pet parents."
            />
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-3">
            {benefits.map((item) => (
              <div
                key={item.title}
                className="flex min-h-[68px] items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 px-3 py-3 transition hover:border-teal-200 hover:bg-teal-50 sm:px-4"
              >
                <span className="material-symbols-outlined shrink-0 text-2xl text-teal-700">
                  {item.icon}
                </span>

                <p className="text-sm font-semibold leading-5 text-slate-800">
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Appointment banner */}
      <section className="py-6 sm:py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid overflow-hidden rounded-2xl bg-gradient-to-r from-teal-900 to-emerald-800 text-white shadow-lg md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
            <div className="relative min-h-[180px] md:min-h-full">
              <Image
                src={images.banner}
                alt="Dog and cat representing veterinary diagnostic care"
                fill
                sizes="(max-width: 767px) 100vw, 280px"
                className="object-cover"
              />
            </div>

            <div className="flex flex-col justify-center gap-5 p-5 sm:p-7 lg:flex-row lg:items-center lg:p-8">
              <div className="min-w-0 flex-1">
                <p className="text-xs font-bold uppercase tracking-[0.15em] text-teal-200">
                  Veterinary diagnostics in Mohali
                </p>

                <h2 className="mt-2 font-headline text-xl font-bold leading-tight sm:text-2xl">
                  Book a Diagnostic Consultation Today
                </h2>

                <p className="mt-3 text-sm leading-6 text-teal-50">
                  If your pet needs further investigation, GreenCoatVets
                  provides reliable <strong>veterinary diagnostics in Mohali</strong>{" "}
                  to help your veterinarian understand the problem and plan
                  appropriate care.
                </p>

                <p className="mt-3 text-sm font-semibold text-white">
                  Better diagnosis. Better-informed care.
                </p>
              </div>

              <div className="shrink-0">
                <AppointmentButton>Book Appointment</AppointmentButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-slate-50 py-7 sm:py-9">
        <div className="mx-auto grid max-w-7xl items-start gap-5 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:gap-10 lg:px-8">
          <div>
            <SectionHeading
              eyebrow="Frequently asked questions"
              title="Veterinary Diagnostics FAQs"
              description="Learn more about pet diagnostic services, ultrasound, and veterinary X-rays in Mohali."
            />
          </div>

          <div className="space-y-3">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-xl border border-slate-200 bg-white px-4 py-4 transition open:border-teal-200 open:shadow-sm sm:px-5"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-semibold leading-5 text-slate-900 marker:hidden sm:text-base">
                  <span>{faq.question}</span>

                  <span className="material-symbols-outlined shrink-0 text-xl text-teal-700 transition-transform group-open:rotate-180">
                    expand_more
                  </span>
                </summary>

                <p className="mt-3 border-t border-slate-100 pt-3 text-sm leading-6 text-slate-700">
                  {faq.answer}
                </p>
              </details>
            ))}

            <div className="pt-2">
              <AppointmentButton />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
